// State aplikasi
let serviceData = [];
let filteredData = [];
let activeTechFilter = "ALL";
let activeStatusFilter = "ALL";
let activeCategoryFilter = "ALL";
let currentSearchQuery = "";
let currentSort = "newest";
let viewMode = "card"; // Default ke Mode Kartu Tracer atau Excel
let currentPage = 1;
let pageSize = 50;
let isPythonBackendAvailable = false;

// State Autentikasi & Mode Admin
let isAuthenticated = false;
let isAdminMode = false;
// State untuk Inline Edit ketika kartu teknisi di-klik 2x (double-click)
let inlineEditState = { unitId: null, logIdx: null };

const STORAGE_KEY = "TOKO_KOMPUTER_SERVICE_DATA_V1";
// Koneksi backend Rumahweb. Tidak ada password/token rahasia di source GitHub.
const API_BASE_URL = "https://cakrawala.asia/aktivitas-api/";
let apiToken = null; // Token hanya disimpan di memori halaman
let apiRole = null; // operator = baca/tulis, viewer = baca saja
let apiRevision = null;
let apiSyncBlocked = false;
let apiLocalChanges = false;
let apiSaving = false;
let apiPolling = false;
let apiSaveSequence = 0;
let apiSaveQueue = Promise.resolve();
let apiConnectInProgress = false;
const PRE_SYNC_BACKUP_KEY = "TOKO_KOMPUTER_SERVICE_BACKUP_BEFORE_SYNC_";
// Rumahweb menjadi sumber data setelah migrasi awal selesai (275 unit).
// Hanya perubahan yang belum terkirim yang tidak boleh ditimpa oleh data server.
const API_PENDING_KEY = "AKTIVITAS_API_UNSENT_LOCAL_V1";
const API_BASELINE_KEY = "AKTIVITAS_API_BASELINE_V1";
const API_POLL_INTERVAL_MS = 3000;
let apiWarningShown = false;
// Autentikasi Rumahweb memakai form login website yang sama: tanpa prompt kedua.

function hasUnsentLocalChanges() {
  try { return localStorage.getItem(API_PENDING_KEY) === "1"; } catch (_) { return true; }
}
function setUnsentLocalChanges(value) {
  try {
    if (value) localStorage.setItem(API_PENDING_KEY, "1");
    else localStorage.removeItem(API_PENDING_KEY);
  } catch (_) { /* Jangan anggap data tersimpan server ketika storage browser penuh. */ }
}
function rememberServerState(data) {
  try {
    localStorage.setItem(API_BASELINE_KEY, JSON.stringify({
      revision: data.revision,
      records: data.records,
      techList: data.techList
    }));
  } catch (_) { /* Cadangan lokal lain tetap ada. */ }
}
function readServerBaseline() {
  try {
    const saved = JSON.parse(localStorage.getItem(API_BASELINE_KEY) || "null");
    return saved && typeof saved.revision === "string" ? saved : null;
  } catch (_) { return null; }
}
function warnSyncOnce(message) {
  updateSyncIndicator("⚠️ " + message);
  if (!apiWarningShown) {
    apiWarningShown = true;
    alert(message + "\nPerubahan lokal tetap disimpan di browser. Jangan bersihkan data browser.");
  }
}

// Sesi API sementara per-tab agar setelah refresh tidak perlu terus mengisi password.
// Ini menyimpan token sementara, BUKAN password API atau FLASK_SECRET_KEY.
const API_SESSION_KEY = "AKTIVITAS_RUMAHWEB_API_SESSION_V1";
const API_SESSION_MAX_MS = 5 * 60 * 60 * 1000;

function restoreApiSession() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(API_SESSION_KEY) || "null");
    if (saved && typeof saved.token === "string" && Date.now() < saved.expiresAt) {
      apiToken = saved.token;
      apiRole = saved.role === "viewer" ? "viewer" : "operator"; // Sesi lama hanya operator
      return;
    }
  } catch (e) {}
  sessionStorage.removeItem(API_SESSION_KEY);
}

function clearApiSession() {
  apiRole = null;
  apiToken = null;
  apiRevision = null;
  try { sessionStorage.removeItem(API_SESSION_KEY); } catch (e) {}
}

// Login normal website sudah menghasilkan token backend. Tak ada kotak password kedua.
function autoConnectAfterLogin() {
  if (!isAuthenticated || !apiToken || apiConnectInProgress ||
      (isPythonBackendAvailable && !apiSyncBlocked)) return;
  setTimeout(() => { void connectAktivitasApi(); }, 0);
}

const AUTH_SESSION_KEY = "TOKO_KOMPUTER_AUTH_SESSION_V1";
const PASS_STORAGE_KEY = "TOKO_KOMPUTER_PASSWORDS_V1";
const TECH_STORAGE_KEY = "TOKO_KOMPUTER_TECH_LIST_V2";

// Pilihan Tema Warna Soft Pastel (Berbeda satu sama lain & nyaman di mata / tidak mencolok)
const TECH_COLOR_PRESETS = [
  { key: "merah", colorName: "Merah", emoji: "🔴", bg: "#ffe4e6", border: "#f87171", text: "#9f1239", badge: "#e11d48" },
  { key: "biru_muda", colorName: "Biru Muda", emoji: "🔵", bg: "#e0f2fe", border: "#38bdf8", text: "#075985", badge: "#0284c7" },
  { key: "pink", colorName: "Pink", emoji: "🌸", bg: "#fce7f3", border: "#f472b6", text: "#9d174d", badge: "#db2777" },
  { key: "biru_tua", colorName: "Biru Tua", emoji: "🔷", bg: "#dbeafe", border: "#60a5fa", text: "#1e3a8a", badge: "#2563eb" },
  { key: "cream", colorName: "Cream", emoji: "🍦", bg: "#ffedd5", border: "#fb923c", text: "#9a3412", badge: "#ea580c" },
  { key: "kuning", colorName: "Kuning", emoji: "🟡", bg: "#fef9c3", border: "#eab308", text: "#854d0e", badge: "#ca8a04" },
  { key: "hijau", colorName: "Hijau", emoji: "🟢", bg: "#d1fae5", border: "#34d399", text: "#065f46", badge: "#059669" },
  { key: "ungu", colorName: "Ungu", emoji: "🟣", bg: "#f3e8ff", border: "#a855f7", text: "#6b21a8", badge: "#9333ea" },
  { key: "tosca", colorName: "Tosca", emoji: "🩵", bg: "#ccfbf1", border: "#2dd4bf", text: "#115e59", badge: "#0d9488" },
  { key: "lime", colorName: "Hijau Lime", emoji: "🍏", bg: "#ecfccb", border: "#84cc16", text: "#3f6212", badge: "#65a30d" },
  { key: "indigo", colorName: "Indigo", emoji: "🫐", bg: "#e0e7ff", border: "#818cf8", text: "#3730a3", badge: "#4f46e5" },
  { key: "coklat", colorName: "Coklat Soft", emoji: "🤎", bg: "#fef3c7", border: "#d97706", text: "#78350f", badge: "#b45309" },
  { key: "cyan", colorName: "Biru Cyan", emoji: "💎", bg: "#cffafe", border: "#22d3ee", text: "#155e75", badge: "#0891b2" },
  { key: "abu", colorName: "Abu-abu Soft", emoji: "⚪", bg: "#f1f5f9", border: "#94a3b8", text: "#334155", badge: "#475569" }
];

const DEFAULT_TECH_LIST = [
  { name: "Arif", role: "Tetap", colorKey: "merah", colorName: "Merah", active: true },
  { name: "Ardin", role: "Tetap", colorKey: "biru_muda", colorName: "Biru Muda", active: true },
  { name: "Tia", role: "Tetap", colorKey: "pink", colorName: "Pink", active: true },
  { name: "Fazrun", role: "Tetap", colorKey: "biru_tua", colorName: "Biru Tua", active: true },
  { name: "Vivi", role: "Tetap", colorKey: "cream", colorName: "Cream", active: true },
  { name: "Vattar", role: "Tetap", colorKey: "kuning", colorName: "Kuning", active: true },
  { name: "Ihwal", role: "Tetap", colorKey: "hijau", colorName: "Hijau", active: true },
  { name: "Hibrian", role: "Tetap", colorKey: "ungu", colorName: "Ungu", active: true },
  { name: "Zam Zam", role: "Tetap", colorKey: "tosca", colorName: "Tosca", active: true }
];

let TECH_LIST = [];

function buildTechEntry(raw, idx) {
  const preset =
    TECH_COLOR_PRESETS.find(p => p.key === raw.colorKey) ||
    TECH_COLOR_PRESETS.find(p => p.colorName.toLowerCase() === (raw.colorName || "").toLowerCase()) ||
    TECH_COLOR_PRESETS[idx % TECH_COLOR_PRESETS.length];
  const role = raw.role || "Tetap";
  const colorName = preset.colorName;
  const roleTag = role === "Magang" ? "Magang • " : role === "Baru" ? "Baru • " : "";
  return {
    name: raw.name,
    role: role,
    colorKey: preset.key,
    colorName: colorName,
    emoji: preset.emoji,
    bg: preset.bg,
    border: preset.border,
    text: preset.text,
    badgeColor: preset.badge,
    active: raw.active !== false,
    label: `${raw.name} (${roleTag}${colorName})`,
    css: `tech-dyn-${idx}`,
    badge: `badge-dyn-${idx}`
  };
}

function loadTechList() {
  let rawList = null;
  try {
    const saved = localStorage.getItem(TECH_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) rawList = parsed;
    }
  } catch (e) {}

  if (!rawList && typeof INITIAL_TECH_LIST !== "undefined" && Array.isArray(INITIAL_TECH_LIST) && INITIAL_TECH_LIST.length > 0) {
    rawList = INITIAL_TECH_LIST;
  }
  if (!rawList) {
    rawList = DEFAULT_TECH_LIST;
  }

  TECH_LIST = rawList.map((item, idx) => buildTechEntry(item, idx));
  injectDynamicTechStyles();
  populateTechDropdowns();
}

function saveTechList() {
  const toSave = TECH_LIST.map(t => ({
    name: t.name,
    role: t.role,
    colorKey: t.colorKey,
    colorName: t.colorName,
    bg: t.bg,
    border: t.border,
    text: t.text,
    badgeColor: t.badgeColor,
    active: t.active !== false
  }));
  localStorage.setItem(TECH_STORAGE_KEY, JSON.stringify(toSave));
  TECH_LIST = toSave.map((item, idx) => buildTechEntry(item, idx));
  injectDynamicTechStyles();
  populateTechDropdowns();
  persistData();
}

function injectDynamicTechStyles() {
  let styleEl = document.getElementById("dynamicTechStyles");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "dynamicTechStyles";
    document.head.appendChild(styleEl);
  }
  const rules = TECH_LIST.map(
    t => `
    .${t.css} {
      background-color: ${t.bg} !important;
      border-color: ${t.border} !important;
      color: ${t.text} !important;
    }
    .${t.badge} {
      background-color: ${t.badgeColor} !important;
      color: #ffffff !important;
    }
  `
  ).join("\n");
  styleEl.textContent = rules;
}

function populateTechDropdowns() {
  const activeTechs = TECH_LIST.filter(t => t.active !== false);
  const firstTechSelect = document.getElementById("formFirstTech");
  if (firstTechSelect) {
    const prev = firstTechSelect.value;
    firstTechSelect.innerHTML = activeTechs
      .map(t => `<option value="${escapeHtml(t.name)}">${escapeHtml(t.emoji)} ${escapeHtml(t.label)}</option>`)
      .join("");
    if (prev && activeTechs.some(t => t.name === prev)) {
      firstTechSelect.value = prev;
    }
  }

  const logTechSelect = document.getElementById("logTechSelect");
  if (logTechSelect) {
    const prev = logTechSelect.value;
    logTechSelect.innerHTML =
      activeTechs
        .map(t => `<option value="${escapeHtml(t.name)}">${escapeHtml(t.emoji)} ${escapeHtml(t.label)}</option>`)
        .join("") + `<option value="CUSTOM">-- Ketik Nama / Gabungan Teknisi --</option>`;
    if (prev && (prev === "CUSTOM" || activeTechs.some(t => t.name === prev))) {
      logTechSelect.value = prev;
    }
  }
}

// Password admin/viewer tidak disimpan di GitHub maupun browser. Server memvalidasi login.
function getTechClass(techName) {
  if (!techName) return { cell: "tech-other", badge: "badge-other" };
  const low = techName.toLowerCase();
  for (const t of TECH_LIST) {
    const tLow = t.name.toLowerCase();
    if (low.includes(tLow)) {
      return { cell: t.css, badge: t.badge };
    }
  }
  // Fallback singkatan lama di Excel
  if (low.includes("ard")) {
    const ard = TECH_LIST.find(t => t.name.toLowerCase() === "ardin");
    if (ard) return { cell: ard.css, badge: ard.badge };
  }
  if (low.includes("vat")) {
    const vat = TECH_LIST.find(t => t.name.toLowerCase() === "vattar");
    if (vat) return { cell: vat.css, badge: vat.badge };
  }
  return { cell: "tech-other", badge: "badge-other" };
}

function getStatusBadgeClass(status) {
  if (!status) return "status-pengerjaan";
  const s = status.toLowerCase();
  if (s.includes("cancel")) return "status-cancel";
  if (s.includes("sudah diambil")) return "status-diambil";
  if (s.includes("selesai") || s.includes("siap")) return "status-selesai";
  return "status-pengerjaan";
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function highlightText(text, query) {
  const safe = escapeHtml(text);
  if (!query || !query.trim()) return safe;
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return safe;
  const pattern = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  return safe.replace(regex, '<mark class="hl">$1</mark>');
}

// ==========================================
// SISTEM LOGIN & PROTEKSI HALAMAN ADMIN
// ==========================================
// =========================================================
// API RUMAHWEB: autentikasi operator, penyimpanan ber-revisi
// =========================================================
function techListForApi() {
  return TECH_LIST.map(t => ({
    name: t.name,
    role: t.role,
    colorKey: t.colorKey,
    colorName: t.colorName,
    bg: t.bg,
    border: t.border,
    text: t.text,
    badgeColor: t.badgeColor,
    active: t.active !== false
  }));
}

async function apiRequest(action, options = {}) {
  const response = await fetch(API_BASE_URL + "?action=" + encodeURIComponent(action), {
    ...options,
    cache: "no-store"
  });
  let result;
  try {
    result = await response.json();
  } catch (e) {
    throw new Error("Respons API bukan JSON; periksa alamat backend dan konfigurasi hosting.");
  }
  if (!response.ok || !result || result.status === "error") {
    const error = new Error((result && result.message) || "Permintaan API gagal (HTTP " + response.status + ")");
    error.httpStatus = response.status;
    throw error;
  }
  return result;
}

async function loginApi(password, expectedRole = null) {
  if (!password) throw new Error("Password login diperlukan");
  const result = await apiRequest("login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password })
  });
  if (result.status !== "success" || typeof result.token !== "string" || !result.token) {
    throw new Error("Login API gagal: token tidak tersedia");
  }
  const grantedRole = result.role === "viewer" ? "viewer" : "operator";
  if (expectedRole && grantedRole !== expectedRole) {
    throw new Error("Password Admin tidak cocok");
  }
  apiToken = result.token;
  apiRole = grantedRole;
  try {
    sessionStorage.setItem(API_SESSION_KEY, JSON.stringify({
      token: apiToken,
      role: apiRole,
      expiresAt: Date.now() + Math.min((Number(result.expires_in) || 21600) * 1000, API_SESSION_MAX_MS)
    }));
  } catch (e) { /* Memori halaman tetap dapat dipakai jika penyimpanan sesi diblokir. */ }
  return true;
}

async function loadApiData(commitRevision = true) {
  if (!apiToken) throw new Error("Login API diperlukan");
  const result = await apiRequest("data", {
    method: "GET",
    headers: { "Authorization": `Bearer ${apiToken}` }
  });
  if (!Array.isArray(result.records) || !/^[a-f0-9]{64}$/i.test(result.revision || "")) {
    throw new Error("Format data atau revisi dari API tidak sesuai");
  }
  if (result.techList != null && !Array.isArray(result.techList)) {
    throw new Error("Format daftar teknisi dari server tidak sesuai");
  }
  if (commitRevision) apiRevision = result.revision;
  return result;
}

async function saveApiData(records, techList) {
  if (apiRole !== "operator") throw new Error("Akun ini hanya dapat melihat data");
  if (!apiToken || !apiRevision) throw new Error("Login dan revisi server diperlukan");
  const result = await apiRequest("save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    },
    body: JSON.stringify({ records, techList, revision: apiRevision })
  });
  if (result.status !== "success" || !/^[a-f0-9]{64}$/i.test(result.revision || "")) {
    throw new Error("Simpan API tidak mengembalikan revisi yang valid");
  }
  apiRevision = result.revision;
  return result;
}

// Status sinkronisasi dan tombol manual sengaja tidak ditampilkan.
// Koneksi otomatis dari laptop maupun ponsel ketika pengguna login.
function ensureApiSyncButton() {
  const btn = document.getElementById("btnConnectAktivitasApi");
  if (btn) btn.remove();
  const label = document.getElementById("syncText");
  if (!label) return;
  const parent = label.parentElement;
  // Bilah status pada HTML berisi label sinkronisasi saja. Jangan sembunyikan
  // baris besar yang mungkin memuat tombol tambah/edit/hapus jika HTML berubah.
  if (parent && parent.querySelectorAll("button, a, input, select, textarea").length === 0
      && parent.children.length <= 3) {
    parent.style.display = "none";
  } else {
    label.style.display = "none";
  }
}

function updateApiSyncButton() {
  // Tanpa tombol manual pada halaman: sinkronisasi tetap berlangsung.
}

function backupBrowserBeforeSwitch() {
  // Cadangan lokal agar data laptop tidak hilang ketika pengguna memilih SERVER.
  try {
    const backup = {
      createdAt: new Date().toISOString(),
      records: JSON.parse(JSON.stringify(serviceData)),
      techList: techListForApi()
    };
    localStorage.setItem(PRE_SYNC_BACKUP_KEY + Date.now(), JSON.stringify(backup));
    return true;
  } catch (error) {
    alert("Tidak dapat membuat cadangan data laptop di browser. BATAL mengganti data. Ekspor data terlebih dahulu.");
    return false;
  }
}

function applyServerSnapshot(data) {
  // Dipanggil hanya setelah sumber server dipilih/dianggap aman.
  serviceData = JSON.parse(JSON.stringify(data.records));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serviceData));
  if (Array.isArray(data.techList) && data.techList.length > 0) {
    localStorage.setItem(TECH_STORAGE_KEY, JSON.stringify(data.techList));
  } else {
    localStorage.removeItem(TECH_STORAGE_KEY);
  }
  loadTechList();
  apiLocalChanges = false;
  setUnsentLocalChanges(false);
  rememberServerState(data);
  isPythonBackendAvailable = true;
  inlineEditState = { unitId: null, logIdx: null };
  currentPage = 1;
  renderTechLegend();
  applyFilters();
  updateSyncIndicator();
}

function apiDataMatchesCurrent(data) {
  const sameRecords = JSON.stringify(serviceData) === JSON.stringify(data.records);
  const serverTechs = Array.isArray(data.techList) ? data.techList : [];
  const normalizedRemoteTechs = serverTechs.map((raw, idx) => {
    const t = buildTechEntry(raw, idx);
    return {
      name: t.name, role: t.role, colorKey: t.colorKey, colorName: t.colorName,
      bg: t.bg, border: t.border, text: t.text, badgeColor: t.badgeColor,
      active: t.active !== false
    };
  });
  const sameTechs = !serverTechs.length || JSON.stringify(techListForApi()) === JSON.stringify(normalizedRemoteTechs);
  return sameRecords && sameTechs;
}

// Setelah data pertama kali diunggah, server adalah sumber data utama.
// Tidak ada pilihan SERVER/LOKAL untuk perubahan rutin.
async function connectAktivitasApi() {
  if (apiConnectInProgress || !isAuthenticated) return;
  apiConnectInProgress = true;
  try {
    await apiSaveQueue;
    if (!apiToken) {
      // Jangan pernah meminta password tambahan; kembalikan ke halaman login biasa.
      requireWebsiteLogin("Sesi Rumahweb belum tersedia. Silakan login kembali.");
      return;
    }
    if (isAdminMode && apiRole !== "operator") {
      clearApiSession();
      throw new Error("Mode Admin membutuhkan password API operator, bukan password baca saja");
    }
    const initialSeq = apiSaveSequence;
    const remote = await loadApiData();
    if (initialSeq !== apiSaveSequence) {
      // Ada perubahan selagi GET berjalan: jangan langsung mengganti data.
      apiSyncBlocked = true;
      warnSyncOnce("Ada perubahan saat koneksi dibuat. Jangan lanjut mengedit; muat ulang setelah membackup data.");
      return;
    }
    if (hasUnsentLocalChanges() || apiLocalChanges) {
      // Jika ada edit offline, jangan mengganti browser dengan salinan dari server.
      // Viewer tidak boleh mengunggah perubahan lokal dari browser lain.
      if (apiRole !== "operator") {
        apiSyncBlocked = true;
        warnSyncOnce("Perangkat ini punya perubahan lokal belum terkirim. Login sebagai admin pada perangkat tersebut untuk menyelesaikannya, jangan timpa datanya.");
        return;
      }
      const baseline = readServerBaseline();
      if (apiDataMatchesCurrent(remote)) {
        apiLocalChanges = false;
        setUnsentLocalChanges(false);
        rememberServerState(remote);
      } else if (baseline && baseline.revision === remote.revision) {
        // Tak ada perubahan di server sejak edit lokal: aman kirim otomatis.
        const records = JSON.parse(JSON.stringify(serviceData));
        const techList = JSON.parse(JSON.stringify(techListForApi()));
        await saveApiData(records, techList);
        rememberServerState({ records, techList, revision: apiRevision });
        apiLocalChanges = false;
        setUnsentLocalChanges(false);
      } else {
        apiSyncBlocked = true;
        warnSyncOnce("Data di perangkat ini dan Rumahweb sama-sama berubah. Sinkronisasi dihentikan agar tidak ada data yang tertimpa. Buat backup sebelum menyelesaikan konflik.");
        return;
      }
    } else if (!apiDataMatchesCurrent(remote)) {
      // Data berbeda karena perubahan perangkat lain -> tarik otomatis dari server.
      if (!backupBrowserBeforeSwitch()) return;
      applyServerSnapshot(remote);
    } else {
      rememberServerState(remote);
    }
    isPythonBackendAvailable = true;
    apiSyncBlocked = false;
    apiWarningShown = false;
    updateSyncIndicator();
  } catch (error) {
    isPythonBackendAvailable = false;
    if (error.httpStatus === 401) {
      clearApiSession();
      requireWebsiteLogin("Sesi telah berakhir. Login kembali lewat halaman website.");
    } else {
      // Gangguan internet sementara: jangan hapus token agar koneksi dapat dicoba lagi.
      warnSyncOnce("Rumahweb belum dapat dihubungi: " + error.message);
    }
  } finally {
    apiConnectInProgress = false;
  }
}

// Pembaruan lintas perangkat diperiksa sekitar setiap 3 detik selama halaman aktif.
async function pollAktivitasApi() {
  if (!isAuthenticated || apiPolling || apiConnectInProgress || apiSaving || apiSyncBlocked) return;
  if (!apiToken || !isPythonBackendAvailable) {
    // Coba sambung ulang setelah gangguan jaringan; autentikasi tetap dari form login website.
    if (apiToken) void connectAktivitasApi();
    else requireWebsiteLogin("Sesi Rumahweb berakhir. Silakan login kembali.");
    return;
  }
  if (apiLocalChanges || hasUnsentLocalChanges()) {
    if (apiRole === "operator") void flushPendingApiData();
    return;
  }
  apiPolling = true;
  try {
    const seq = apiSaveSequence;
    const remote = await loadApiData(false);
    // Jangan timpa perubahan lokal yang terjadi saat request berjalan.
    if (seq !== apiSaveSequence || apiSaving || apiLocalChanges || hasUnsentLocalChanges()) return;
    apiRevision = remote.revision;
    if (!apiDataMatchesCurrent(remote)) {
      if (!backupBrowserBeforeSwitch()) return;
      applyServerSnapshot(remote);
    } else {
      rememberServerState(remote);
    }
    apiWarningShown = false;
  } catch (error) {
    isPythonBackendAvailable = false;
    if (error.httpStatus === 401) {
      clearApiSession();
      requireWebsiteLogin("Sesi Rumahweb berakhir. Silakan login website kembali.");
    } else {
      warnSyncOnce("Koneksi Rumahweb terputus: " + error.message);
    }
  } finally {
    apiPolling = false;
  }
}
setInterval(pollAktivitasApi, API_POLL_INTERVAL_MS);
window.addEventListener("focus", () => {
  if (!apiToken && isAuthenticated) autoConnectAfterLogin();
  else void pollAktivitasApi();
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    if (!apiToken && isAuthenticated) autoConnectAfterLogin();
    else void pollAktivitasApi();
  }
});

function requireWebsiteLogin(message) {
  clearApiSession();
  isPythonBackendAvailable = false;
  isAuthenticated = false;
  isAdminMode = false;
  try { sessionStorage.removeItem(AUTH_SESSION_KEY); } catch (_) {}
  updateAuthUI();
  const box = document.getElementById("loginErrorBox");
  if (box && message) {
    box.textContent = message;
    box.style.display = "block";
  }
}

function checkSessionAuth() {
  // Sesi lama yang hanya ditandai login di browser TIDAK cukup untuk akses Rumahweb.
  let adminPreferred = false;
  try {
    const saved = JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY) || "null");
    adminPreferred = saved && saved.authenticated && saved.admin === true;
  } catch (_) {}
  isAuthenticated = Boolean(apiToken && apiRole);
  isAdminMode = isAuthenticated && apiRole === "operator" && adminPreferred;
  if (!isAuthenticated) {
    try { sessionStorage.removeItem(AUTH_SESSION_KEY); } catch (_) {}
  }
  updateAuthUI();
}

function saveSessionAuth() {
  sessionStorage.setItem(
    AUTH_SESSION_KEY,
    JSON.stringify({ authenticated: isAuthenticated, admin: isAdminMode })
  );
}

// Login bawaan website ditangani server Rumahweb. Tanpa dialog tambahan.
async function handleInitialLogin(e) {
  e.preventDefault();
  const inputEl = document.getElementById("initialPasswordInput");
  const password = inputEl.value.trim();
  const errBox = document.getElementById("loginErrorBox");
  const submitButton = e.target.querySelector('[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  errBox.style.display = "none";
  try {
    await loginApi(password);
    isAuthenticated = true;
    isAdminMode = apiRole === "operator";
    apiWarningShown = false;
    saveSessionAuth();
    updateAuthUI();
    renderData();
    autoConnectAfterLogin();
  } catch (error) {
    // Hindari kembali ke autentikasi lokal yang mudah dibypass.
    errBox.textContent = "Login gagal: " + error.message;
    errBox.style.display = "block";
  } finally {
    inputEl.value = "";
    if (submitButton) submitButton.disabled = false;
  }
}

function logoutSystem() {
  clearApiSession();
  isPythonBackendAvailable = false;
  apiSyncBlocked = false;
  isAuthenticated = false;
  isAdminMode = false;
  inlineEditState = { unitId: null, logIdx: null };
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  updateAuthUI();
}

function openAdminUnlockModal() {
  document.getElementById("adminUnlockError").style.display = "none";
  document.getElementById("adminUnlockInput").value = "";
  document.getElementById("adminUnlockModal").classList.add("open");
  setTimeout(() => document.getElementById("adminUnlockInput").focus(), 80);
}

async function handleAdminUnlock(e) {
  e.preventDefault();
  const el = document.getElementById("adminUnlockInput");
  const password = el.value.trim();
  const errBox = document.getElementById("adminUnlockError");
  const btn = e.target.querySelector('[type="submit"]');
  if (btn) btn.disabled = true;
  try {
    // Hanya password operator server yang dapat meningkatkan izin admin.
    await loginApi(password, "operator");
    isAdminMode = true;
    saveSessionAuth();
    closeModal("adminUnlockModal");
    updateAuthUI();
    renderTechLegend();
    renderFilterSummary();
    renderData();
    // Gunakan ulang server-data yang sudah dimuat; tetap polling otomatis.
    if (!isPythonBackendAvailable) autoConnectAfterLogin();
  } catch (error) {
    errBox.textContent = "Login Admin gagal: " + error.message;
    errBox.style.display = "block";
  } finally {
    el.value = "";
    if (btn) btn.disabled = false;
  }
}

function exitAdminMode() {
  isAdminMode = false;
  inlineEditState = { unitId: null, logIdx: null };
  saveSessionAuth();
  updateAuthUI();
  renderTechLegend();
  renderFilterSummary();
  renderData();
}

// Password pada menu Admin tersimpan sebagai HASH di Rumahweb, bukan localStorage.
function openPasswordModal() {
  if (!isAdminMode || apiRole !== "operator") return openAdminUnlockModal();
  const adminEl = document.getElementById("settingAdminPass");
  const viewerEl = document.getElementById("settingViewerPass");
  if (adminEl) {
    adminEl.value = "";
    adminEl.placeholder = "Password Admin baru (minimal 12 karakter)";
  }
  if (viewerEl) {
    viewerEl.value = "";
    viewerEl.placeholder = "Password Lihat Saja baru (minimal 12 karakter)";
  }
  document.getElementById("passwordModal").classList.add("open");
}

async function saveNewPasswords(e) {
  e.preventDefault();
  if (!isAdminMode || apiRole !== "operator" || !apiToken) {
    alert("Hanya Admin yang dapat mengganti password saat terhubung ke Rumahweb.");
    return;
  }
  const adminPass = document.getElementById("settingAdminPass").value.trim();
  const viewerPass = document.getElementById("settingViewerPass").value.trim();
  if (adminPass.length < 12 || viewerPass.length < 12 || adminPass === viewerPass) {
    alert("Masukkan dua password baru yang berbeda, masing-masing minimal 12 karakter.");
    return;
  }
  if (!confirm("Ganti password Admin dan Lihat Saja untuk semua perangkat? Semua pengguna perlu login ulang.")) return;
  const button = e.target.querySelector('[type="submit"]');
  if (button) button.disabled = true;
  try {
    await apiRequest("change_passwords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiToken}`
      },
      body: JSON.stringify({ adminPass, viewerPass })
    });
    closeModal("passwordModal");
    alert("Password berhasil diganti di Rumahweb. Silakan login ulang dengan password baru.");
    logoutSystem();
  } catch (error) {
    alert("Gagal mengganti password: " + error.message);
  } finally {
    if (button) button.disabled = false;
  }
}

function updateAuthUI() {
  const loginScreen = document.getElementById("loginScreen");
  const mainWrapper = document.getElementById("mainAppWrapper");
  const adminButtons = document.getElementById("adminHeaderButtons");
  const btnUnlockAdmin = document.getElementById("btnUnlockAdmin");
  const roleBadge = document.getElementById("roleBadge");

  if (!isAuthenticated) {
    loginScreen.style.display = "flex";
    mainWrapper.style.display = "none";
    setTimeout(() => {
      const inp = document.getElementById("initialPasswordInput");
      if (inp) inp.focus();
    }, 50);
    return;
  }

  loginScreen.style.display = "none";
  mainWrapper.style.display = "block";

  if (isAdminMode) {
    adminButtons.style.display = "flex";
    btnUnlockAdmin.style.display = "none";
    roleBadge.textContent = "🔓 MODE ADMIN AKTIF";
    roleBadge.style.background = "#16a34a";
    roleBadge.style.borderColor = "#22c55e";
  } else {
    adminButtons.style.display = "none";
    btnUnlockAdmin.style.display = "inline-flex";
    roleBadge.textContent = "👁️ MODE LIHAT SAJA";
    roleBadge.style.background = "#334155";
    roleBadge.style.borderColor = "#64748b";
  }
}

// ==========================================
// INISIALISASI DATA - browser tetap utuh sampai koneksi diizinkan pengguna
// ==========================================
async function initApp() {
  restoreApiSession();
  checkSessionAuth();
  apiLocalChanges = hasUnsentLocalChanges();
  loadTechList();
  // Tidak otomatis mengunduh/mengunggah data. Browser laptop utama adalah sumber awal.
  // Data baru dibandingan dengan Rumahweb setelah pengguna klik Hubungkan.
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) serviceData = parsed;
    } else if (typeof INITIAL_SERVICE_DATA !== "undefined" && Array.isArray(INITIAL_SERVICE_DATA)) {
      serviceData = JSON.parse(JSON.stringify(INITIAL_SERVICE_DATA));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serviceData));
    }
  } catch (error) {
    alert("Data lokal tidak berhasil dibaca. Jangan impor/simpan sebelum cadangan dipastikan aman.");
  }
  document.getElementById("btnViewExcel").classList.toggle("active", viewMode === "excel");
  document.getElementById("btnViewCard").classList.toggle("active", viewMode === "card");
  ensureApiSyncButton();
  updateSyncIndicator();
  renderTechLegend();
  applyFilters();
  autoConnectAfterLogin();
}

function updateSyncIndicator(msg) {
  const el = document.getElementById("syncText");
  if (!el) return;
  if (msg) {
    el.textContent = msg;
  } else if (apiSyncBlocked) {
    el.textContent = "⚠️ Sinkronisasi tertahan; data hanya tersimpan di browser (" + serviceData.length + " unit)";
  } else if (apiSaving || apiLocalChanges) {
    el.textContent = "⏳ Perubahan tersimpan di browser; menunggu Rumahweb (" + serviceData.length + " unit)";
  } else if (isPythonBackendAvailable && apiToken) {
    el.textContent = "✅ Tersinkron ke Rumahweb (" + serviceData.length + " unit)";
  } else {
    el.textContent = "💾 Hanya tersimpan di browser; belum tersinkron ke Rumahweb (" + serviceData.length + " unit)";
  }
  updateApiSyncButton();
}

// Tambah/edit/hapus: kirim ke server tanpa tombol manual.
// Jika offline, simpan perubahan lokal dengan penanda "belum terkirim" untuk dicoba lagi.
async function flushPendingApiData() {
  if (apiRole !== "operator") return apiSaveQueue;
  if (apiSaving || apiConnectInProgress || apiSyncBlocked || !apiToken || !apiRevision || !isPythonBackendAvailable) return apiSaveQueue;
  if (!hasUnsentLocalChanges() && !apiLocalChanges) return apiSaveQueue;
  const sequence = apiSaveSequence;
  const snapshotRecords = JSON.parse(JSON.stringify(serviceData));
  const snapshotTechs = JSON.parse(JSON.stringify(techListForApi()));
  apiSaving = true;
  apiSaveQueue = apiSaveQueue.then(async () => {
    try {
      await saveApiData(snapshotRecords, snapshotTechs);
      rememberServerState({ records: snapshotRecords, techList: snapshotTechs, revision: apiRevision });
      if (sequence === apiSaveSequence) {
        apiLocalChanges = false;
        setUnsentLocalChanges(false);
      }
      apiWarningShown = false;
      updateSyncIndicator();
    } catch (error) {
      apiLocalChanges = true;
      setUnsentLocalChanges(true);
      if (error.httpStatus === 409) {
        // Konflik dua admin mengedit bersamaan: jangan menimpa data server otomatis.
        apiSyncBlocked = true;
        warnSyncOnce("Konflik perubahan bersamaan dari dua perangkat. Data lokal belum dikirim; buat backup sebelum memutuskan versi mana yang dipakai.");
      } else if (error.httpStatus === 401) {
        isPythonBackendAvailable = false;
        clearApiSession();
        requireWebsiteLogin("Sesi Rumahweb berakhir. Login kembali untuk mengirim perubahan yang tertunda.");
      } else {
        // Tidak memblokir permanen untuk masalah koneksi; polling berikutnya akan mencoba lagi.
        warnSyncOnce("Gagal mengirim data ke Rumahweb: " + error.message);
      }
    } finally {
      apiSaving = false;
    }
  });
  return apiSaveQueue;
}

async function persistData() {
  // Tandai belum terkirim SEBELUM menulis isi data ke localStorage.
  apiLocalChanges = true;
  ++apiSaveSequence;
  setUnsentLocalChanges(true);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serviceData));
    localStorage.setItem(TECH_STORAGE_KEY, JSON.stringify(techListForApi()));
  } catch (error) {
    warnSyncOnce("Penyimpanan lokal gagal. Segera ekspor data dan jangan tutup halaman!");
    return;
  }
  updateSyncIndicator();
  if (!apiToken || !isPythonBackendAvailable) {
    // Akan dicoba pada saat reconnect; jangan mengaku sudah tersimpan server.
    if (isAuthenticated && isAdminMode && apiToken) void connectAktivitasApi();
    return;
  }
  return flushPendingApiData();
}

// Hitung jumlah unit per teknisi
function getTechUnitCounts() {
  const counts = { ALL: serviceData.length };
  TECH_LIST.forEach(t => (counts[t.name] = 0));

  serviceData.forEach(item => {
    const involved = new Set();
    (item.riwayat || []).forEach(r => {
      TECH_LIST.forEach(t => {
        if ((r.teknisi || "").toLowerCase().includes(t.name.toLowerCase())) {
          involved.add(t.name);
        }
      });
    });
    involved.forEach(name => {
      counts[name] = (counts[name] || 0) + 1;
    });
  });
  return counts;
}

// Render Bar Warna Teknisi
function renderTechLegend() {
  const container = document.getElementById("techLegendContainer");
  if (!container) return;

  const counts = getTechUnitCounts();

  let html = `
    <div class="tech-pill ${activeTechFilter === "ALL" ? "active" : ""}"
         style="background:#0f172a; color:#fff;"
         onclick="setTechFilter('ALL')">
      Semua Teknisi <span class="count" style="background:rgba(255,255,255,0.2)">${counts.ALL}</span>
    </div>
  `;

  TECH_LIST.forEach((t, idx) => {
    if (t.active === false && activeTechFilter !== t.name) return;
    const isActive = activeTechFilter === t.name ? "active" : "";
    const safeNameAttr = escapeHtml(t.name).replace(/'/g, "\\'");
    html += `
      <div class="tech-pill ${t.css} ${isActive}"
           onclick="setTechFilter('${safeNameAttr}')"
           ondblclick="event.stopPropagation(); openTechManagerAndEdit(${idx})"
           title="Klik 1x untuk filter • Klik 2x atau klik ✏️ untuk edit ${escapeHtml(t.name)}">
        <span>${escapeHtml(t.label)}</span>
        <span class="count">${counts[t.name] || 0}</span>
        <span class="pill-edit-btn" onclick="event.stopPropagation(); openTechManagerAndEdit(${idx})" title="Edit nama/warna ${escapeHtml(t.name)}">✏️</span>
      </div>
    `;
  });

  // Tombol langsung di bar Filter Teknisi untuk tambah/edit teknisi & anak magang
  html += `
    <button type="button" class="tech-pill tech-manage-pill"
         onclick="openTechManagerModal()"
         title="Tambah anak magang, karyawan baru, atau edit nama & warna teknisi">
      <span>➕ Tambah / Edit Teknisi</span>
    </button>
  `;

  container.innerHTML = html;
}

// Render Kartu Statistik
function renderStats() {
  const container = document.getElementById("statsContainer");
  if (!container) return;

  let total = serviceData.length;
  let pengerjaan = 0;
  let selesai = 0;
  let diambil = 0;
  let cancel = 0;

  serviceData.forEach(item => {
    const s = (item.status || "").toLowerCase();
    if (s.includes("cancel")) cancel++;
    else if (s.includes("sudah diambil")) diambil++;
    else if (s.includes("selesai") || s.includes("siap")) selesai++;
    else pengerjaan++;
  });

  const cards = [
    { key: "ALL", title: "Total Semua Unit", val: total, icon: "📋", color: "#2563eb" },
    { key: "Dalam Pengerjaan", title: "Dalam Pengerjaan", val: pengerjaan, icon: "🛠️", color: "#d97706" },
    { key: "Selesai (Siap Diambil)", title: "Selesai / Siap Ambil", val: selesai, icon: "✅", color: "#0284c7" },
    { key: "Sudah Diambil", title: "Sudah Diambil", val: diambil, icon: "📦", color: "#16a34a" },
    { key: "Cancel", title: "Cancel / Batal", val: cancel, icon: "❌", color: "#dc2626" }
  ];

  container.innerHTML = cards
    .map(
      c => `
      <div class="stat-card ${activeStatusFilter === c.key ? "active" : ""}" onclick="setStatusCardFilter('${c.key}')">
        <div class="stat-info">
          <h3 style="color:${c.color}">${c.val}</h3>
          <p>${c.title}</p>
        </div>
        <div class="stat-icon">${c.icon}</div>
      </div>
    `
    )
    .join("");
}

function setTechFilter(tech) {
  activeTechFilter = activeTechFilter === tech ? "ALL" : tech;
  currentPage = 1;
  renderTechLegend();
  applyFilters();
}

function setStatusCardFilter(statusKey) {
  activeStatusFilter = statusKey;
  document.getElementById("statusFilter").value = statusKey;
  currentPage = 1;
  applyFilters();
}

function handleSearchChange() {
  currentSearchQuery = document.getElementById("searchInput").value || "";
  currentPage = 1;
  applyFilters();
}

function setViewMode(mode) {
  viewMode = mode;
  inlineEditState = { unitId: null, logIdx: null };
  document.getElementById("btnViewExcel").classList.toggle("active", mode === "excel");
  document.getElementById("btnViewCard").classList.toggle("active", mode === "card");
  renderData();
}

function resetAllFilters() {
  activeTechFilter = "ALL";
  activeStatusFilter = "ALL";
  activeCategoryFilter = "ALL";
  currentSearchQuery = "";
  currentSort = "newest";
  document.getElementById("searchInput").value = "";
  document.getElementById("categoryFilter").value = "ALL";
  document.getElementById("statusFilter").value = "ALL";
  document.getElementById("sortFilter").value = "newest";
  currentPage = 1;
  renderTechLegend();
  applyFilters();
}

// Terapkan semua filter & pencarian tracer
function applyFilters() {
  activeCategoryFilter = document.getElementById("categoryFilter").value;
  activeStatusFilter = document.getElementById("statusFilter").value;
  currentSort = document.getElementById("sortFilter").value;

  const query = currentSearchQuery.trim().toLowerCase();
  const terms = query ? query.split(/\s+/).filter(Boolean) : [];

  filteredData = serviceData.filter(item => {
    if (activeTechFilter !== "ALL") {
      const hasTech = (item.riwayat || []).some(r =>
        (r.teknisi || "").toLowerCase().includes(activeTechFilter.toLowerCase())
      );
      if (!hasTech) return false;
    }

    if (activeCategoryFilter !== "ALL" && item.kategori !== activeCategoryFilter) {
      return false;
    }

    if (activeStatusFilter !== "ALL") {
      const s = (item.status || "").toLowerCase();
      if (activeStatusFilter === "Cancel") {
        if (!s.includes("cancel")) return false;
      } else if (item.status !== activeStatusFilter) {
        return false;
      }
    }

    if (terms.length > 0) {
      const haystack = [
        item.id,
        item.nama_pelanggan,
        item.warna_unit,
        item.pelanggan_lengkap,
        item.seri_perangkat,
        item.kategori,
        item.keluhan,
        item.status,
        item.tgl_masuk,
        item.tgl_update,
        ...(item.riwayat || []).map(r => `${r.teknisi} ${r.tanggal} ${r.catatan}`)
      ]
        .join(" ")
        .toLowerCase();

      for (const term of terms) {
        if (!haystack.includes(term)) return false;
      }
    }

    return true;
  });

  filteredData.sort((a, b) => {
    if (currentSort === "newest") return b.no - a.no;
    if (currentSort === "oldest") return a.no - b.no;
    if (currentSort === "cust_asc") return (a.nama_pelanggan || "").localeCompare(b.nama_pelanggan || "");
    if (currentSort === "device_asc") return (a.seri_perangkat || "").localeCompare(b.seri_perangkat || "");
    if (currentSort === "most_logs") return (b.riwayat || []).length - (a.riwayat || []).length;
    return 0;
  });

  renderStats();
  renderFilterSummary();
  renderData();
}

function renderFilterSummary() {
  const el = document.getElementById("filterSummaryText");
  if (!el) return;
  let parts = [`Menampilkan <b>${filteredData.length}</b> dari <b>${serviceData.length}</b> unit servis`];
  if (activeTechFilter !== "ALL") parts.push(`Teknisi: <b>${activeTechFilter}</b>`);
  if (activeCategoryFilter !== "ALL") parts.push(`Kategori: <b>${activeCategoryFilter}</b>`);
  if (activeStatusFilter !== "ALL") parts.push(`Status: <b>${activeStatusFilter}</b>`);
  if (currentSearchQuery.trim()) parts.push(`Pencarian: <b>"${escapeHtml(currentSearchQuery.trim())}"</b>`);

  const hintHtml = isAdminMode
    ? `<div style="font-size:0.78rem; color:#15803d; font-weight:600;">💡 Mode Admin: <b>Klik 2x (Double-Click)</b> pada kartu progres teknisi untuk langsung mengedit isinya!</div>`
    : `<div style="font-size:0.76rem; color:#64748b;">🔒 Klik <b>Login Admin (Edit Data)</b> di kanan atas untuk mengedit kartu, menambah progres, atau export/import CSV.</div>`;

  el.innerHTML = `
    <div>${parts.join(" • ")}</div>
    ${hintHtml}
  `;
}

function changePage(delta) {
  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  currentPage = Math.min(totalPages, Math.max(1, currentPage + delta));
  inlineEditState = { unitId: null, logIdx: null };
  renderData();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changePageSize() {
  pageSize = parseInt(document.getElementById("pageSizeSelect").value, 10) || 50;
  currentPage = 1;
  inlineEditState = { unitId: null, logIdx: null };
  renderData();
}

// ==========================================
// FITUR KLIK 2X (DOUBLE-CLICK) INLINE EDIT KARTU TEKNISI
// ==========================================
function handleCardStepDblClick(unitId, logIdx) {
  if (!isAdminMode) {
    openAdminUnlockModal();
    return;
  }
  inlineEditState = { unitId, logIdx };
  renderData();
  setTimeout(() => {
    const ta = document.getElementById(`inlineNote_${unitId}_${logIdx}`);
    if (ta) {
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
    }
  }, 30);
}

function cancelInlineEdit() {
  inlineEditState = { unitId: null, logIdx: null };
  renderData();
}

function saveInlineEdit(unitId, logIdx) {
  if (!isAdminMode) return;
  const item = serviceData.find(x => x.id === unitId);
  if (!item || !item.riwayat || !item.riwayat[logIdx]) return;

  const techEl = document.getElementById(`inlineTech_${unitId}_${logIdx}`);
  const dateEl = document.getElementById(`inlineDate_${unitId}_${logIdx}`);
  const noteEl = document.getElementById(`inlineNote_${unitId}_${logIdx}`);

  const newTech = techEl ? techEl.value.trim() : item.riwayat[logIdx].teknisi;
  const newDate = dateEl ? dateEl.value : item.riwayat[logIdx].tanggal;
  const newNote = noteEl ? noteEl.value.trim() : item.riwayat[logIdx].catatan;

  item.riwayat[logIdx].teknisi = newTech || "Teknisi";
  item.riwayat[logIdx].teknisi_utama = (newTech || "Teknisi").split("&")[0].trim();
  item.riwayat[logIdx].tanggal = newDate;
  item.riwayat[logIdx].catatan = newNote || "(Tanpa catatan)";

  // Jika yang diedit adalah log terakhir, perbarui tanggal update & deteksi status otomatis
  if (logIdx === item.riwayat.length - 1) {
    if (newDate) item.tgl_update = newDate;
    item.status = detectStatusFromNote(newNote, item.status);
  }

  // Rekalkulasi teknisi terlibat
  const terlibat = [];
  item.riwayat.forEach(r => {
    (r.teknisi || "").split("&").forEach(part => {
      const clean = part.trim();
      if (clean && !terlibat.includes(clean)) terlibat.push(clean);
    });
  });
  item.teknisi_terlibat = terlibat;

  inlineEditState = { unitId: null, logIdx: null };
  persistData();
  renderTechLegend();
  applyFilters();
}

function handleInlineKeyDown(e, unitId, logIdx) {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    saveInlineEdit(unitId, logIdx);
  } else if (e.key === "Escape") {
    e.preventDefault();
    cancelInlineEdit();
  }
}

function deleteInlineStep(unitId, logIdx) {
  if (!isAdminMode) return;
  const item = serviceData.find(x => x.id === unitId);
  if (!item || !item.riwayat || !item.riwayat[logIdx]) return;
  const log = item.riwayat[logIdx];
  if (!confirm(`Hapus catatan #${logIdx + 1} oleh ${log.teknisi} ("${log.catatan}")?`)) return;

  item.riwayat.splice(logIdx, 1);
  item.riwayat.forEach((r, i) => (r.step = i + 1));

  const terlibat = [];
  item.riwayat.forEach(r => {
    (r.teknisi || "").split("&").forEach(part => {
      const clean = part.trim();
      if (clean && !terlibat.includes(clean)) terlibat.push(clean);
    });
  });
  item.teknisi_terlibat = terlibat;

  inlineEditState = { unitId: null, logIdx: null };
  persistData();
  renderTechLegend();
  applyFilters();
}

// Render Data Utama (Mode Tabel Excel atau Mode Kartu)
function renderData() {
  const container = document.getElementById("dataContainer");
  if (!container) return;

  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  if (currentPage > totalPages) currentPage = totalPages;

  const startIdx = (currentPage - 1) * pageSize;
  const pageItems = filteredData.slice(startIdx, startIdx + pageSize);

  document.getElementById("pageInfoText").textContent =
    totalItems === 0
      ? "Tidak ada data yang cocok"
      : `Halaman ${currentPage} dari ${totalPages} (Menampilkan ${startIdx + 1} - ${Math.min(startIdx + pageSize, totalItems)} dari ${totalItems} unit)`;
  document.getElementById("btnPrevPage").disabled = currentPage <= 1;
  document.getElementById("btnNextPage").disabled = currentPage >= totalPages;

  if (pageItems.length === 0) {
    container.innerHTML = `
      <div style="background:#fff; padding:3rem 1.5rem; text-align:center; border-radius:12px; border:1px solid #cbd5e1;">
        <div style="font-size:2.5rem; margin-bottom:0.5rem;">🔍</div>
        <h3 style="font-size:1.1rem; margin-bottom:0.35rem;">Data servis tidak ditemukan</h3>
        <p style="color:#64748b; font-size:0.88rem; margin-bottom:1rem;">Coba gunakan kata kunci lain atau tekan tombol Reset Filter.</p>
        <button class="btn btn-primary btn-sm" onclick="resetAllFilters()">Reset Semua Filter</button>
      </div>
    `;
    return;
  }

  if (viewMode === "excel") {
    renderExcelMode(container, pageItems);
  } else {
    renderCardMode(container, pageItems);
  }
}

// MODE 1: Format Tabel Excel (3-Row Block persis seperti Excel Toko + Warna Teknisi)
function renderExcelMode(container, items) {
  let html = `<div class="excel-wrapper"><div class="excel-scroll">`;

  items.forEach(item => {
    const logs = item.riwayat || [];
    const statusClass = getStatusBadgeClass(item.status);
    const hasFb = Boolean(item.link_fb && item.link_fb.trim());

    html += `
      <div class="excel-block">
        <table class="excel-table">
          <thead>
            <tr class="excel-row-header1">
              <th class="excel-col-cust">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span>Nama User</span>
                  <span class="srv-id">${escapeHtml(item.id)}</span>
                </div>
              </th>
              <th class="excel-col-seri">Seri ${escapeHtml(item.kategori.split('/')[0].trim())}</th>
              <th class="excel-col-keluhan">Keluhan Orangnya</th>
              <th class="excel-col-fb">Link Foto FB / Status</th>
              ${logs
                .map((log, idx) => {
                  const tc = getTechClass(log.teknisi);
                  return `
                    <th class="excel-col-step ${tc.cell}" style="border-bottom:2px solid;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span>👤 ${highlightText(log.teknisi, currentSearchQuery)}</span>
                        ${
                          isAdminMode
                            ? `<button class="btn btn-light btn-sm" style="padding:1px 5px; font-size:0.68rem;" onclick="openEditLogModal('${item.id}', ${idx})" title="Edit catatan ini">✏️</button>`
                            : ""
                        }
                      </div>
                    </th>
                  `;
                })
                .join("")}
              ${isAdminMode ? `<th class="excel-col-action">Aksi Admin</th>` : ""}
            </tr>
            <tr class="excel-row-header2">
              <td>(warna: <b>${highlightText(item.warna_unit, currentSearchQuery)}</b>)</td>
              <td>${escapeHtml(item.kategori)}</td>
              <td>Masuk: ${escapeHtml(item.tgl_masuk || "-")}</td>
              <td>Update: ${escapeHtml(item.tgl_update || "-")}</td>
              ${logs
                .map(log => {
                  const tc = getTechClass(log.teknisi);
                  return `<td class="${tc.cell}" style="opacity:0.9;">📅 ${escapeHtml(log.tanggal || "-")}</td>`;
                })
                .join("")}
              ${isAdminMode ? `<td>Total: ${logs.length} log</td>` : ""}
            </tr>
          </thead>
          <tbody>
            <tr class="excel-row-data">
              <td>
                <div class="cust-name-strong">${highlightText(item.nama_pelanggan, currentSearchQuery)}</div>
                ${item.warna_unit && item.warna_unit !== "-" ? `<span class="unit-color-tag">🎨 ${highlightText(item.warna_unit, currentSearchQuery)}</span>` : ""}
              </td>
              <td>
                <div style="font-weight:700; color:#1e40af;">${highlightText(item.seri_perangkat, currentSearchQuery)}</div>
              </td>
              <td>
                <div>${highlightText(item.keluhan, currentSearchQuery)}</div>
              </td>
              <td>
                <div style="margin-bottom:0.35rem;">
                  <span class="status-badge ${statusClass}">${escapeHtml(item.status)}</span>
                </div>
                ${
                  hasFb
                    ? `<a href="${escapeHtml(item.link_fb)}" target="_blank" rel="noopener" class="btn btn-light btn-sm" style="font-size:0.72rem; width:100%; justify-content:center;">📷 Buka Foto FB</a>`
                    : `<span style="font-size:0.72rem; color:#94a3b8;">Tanpa Link FB</span>`
                }
              </td>
              ${logs
                .map((log, idx) => {
                  const tc = getTechClass(log.teknisi);
                  return `
                    <td class="${tc.cell}"
                        style="cursor:${isAdminMode ? "pointer" : "default"};"
                        ondblclick="handleCardStepDblClick('${item.id}', ${idx})"
                        title="${isAdminMode ? "Klik 2x untuk mengedit catatan ini" : ""}">
                      ${highlightText(log.catatan, currentSearchQuery)}
                    </td>
                  `;
                })
                .join("")}
              ${
                isAdminMode
                  ? `
                  <td>
                    <div style="display:flex; flex-direction:column; gap:0.35rem;">
                      <button class="btn btn-primary btn-sm" onclick="openAddLogModal('${item.id}')">+ Progres</button>
                      <button class="btn btn-light btn-sm" onclick="openEditUnitModal('${item.id}')">✏️ Edit Unit</button>
                      <button class="btn btn-light btn-sm" style="color:#dc2626;" onclick="deleteUnit('${item.id}')">🗑️ Hapus</button>
                    </div>
                  </td>
                `
                  : ""
              }
            </tr>
          </tbody>
        </table>
      </div>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

// MODE 2: Mode Kartu Tracer (Dengan fitur Klik 2x Inline Edit pada Kartu Karyawan)
function renderCardMode(container, items) {
  let html = `<div class="cards-grid">`;

  items.forEach(item => {
    const logs = item.riwayat || [];
    const statusClass = getStatusBadgeClass(item.status);
    const hasFb = Boolean(item.link_fb && item.link_fb.trim());

    html += `
      <div class="service-card">
        <div class="card-top">
          <div class="card-identity">
            <span class="srv-id">${escapeHtml(item.id)}</span>
            <span class="card-cust-name"
                  style="${isAdminMode ? "cursor:pointer;" : ""}"
                  ondblclick="${isAdminMode ? `openEditUnitModal('${item.id}')` : ""}"
                  title="${isAdminMode ? "Klik 2x untuk edit data pelanggan" : ""}">
              👤 ${highlightText(item.nama_pelanggan, currentSearchQuery)}
            </span>
            ${
              item.warna_unit && item.warna_unit !== "-"
                ? `<span class="unit-color-tag">🎨 Warna: ${highlightText(item.warna_unit, currentSearchQuery)}</span>`
                : ""
            }
            <span class="card-device"
                  style="${isAdminMode ? "cursor:pointer;" : ""}"
                  ondblclick="${isAdminMode ? `openEditUnitModal('${item.id}')` : ""}"
                  title="${isAdminMode ? "Klik 2x untuk edit seri perangkat" : ""}">
              💻 ${highlightText(item.seri_perangkat, currentSearchQuery)}
            </span>
            <span class="status-badge ${statusClass}"
                  style="${isAdminMode ? "cursor:pointer;" : ""}"
                  ondblclick="${isAdminMode ? `openEditUnitModal('${item.id}')` : ""}">
              ${escapeHtml(item.status)}
            </span>
          </div>
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
            ${
              hasFb
                ? `<a href="${escapeHtml(item.link_fb)}" target="_blank" rel="noopener" class="btn btn-light btn-sm">📷 Foto FB</a>`
                : ""
            }
            ${
              isAdminMode
                ? `
                <button class="btn btn-primary btn-sm" onclick="openAddLogModal('${item.id}')">+ Tambah Progres Teknisi</button>
                <button class="btn btn-light btn-sm" onclick="openEditUnitModal('${item.id}')">✏️ Edit</button>
                <button class="btn btn-light btn-sm" style="color:#dc2626;" onclick="deleteUnit('${item.id}')">🗑️</button>
              `
                : ""
            }
          </div>
        </div>

        <div class="card-meta">
          <span>📅 <b>Tgl Masuk:</b> ${escapeHtml(item.tgl_masuk || "-")}</span>
          <span>🔄 <b>Update Terakhir:</b> ${escapeHtml(item.tgl_update || "-")}</span>
          <span>🏷️ <b>Kategori:</b> ${escapeHtml(item.kategori)}</span>
          <span>👨‍🔧 <b>Teknisi Terlibat:</b> ${(item.teknisi_terlibat || []).join(", ") || "-"}</span>
        </div>

        <div class="keluhan-box"
             style="${isAdminMode ? "cursor:pointer;" : ""}"
             ondblclick="${isAdminMode ? `openEditUnitModal('${item.id}')` : ""}"
             title="${isAdminMode ? "Klik 2x untuk edit keluhan awal" : ""}">
          <b>⚠️ Keluhan Awal:</b> ${highlightText(item.keluhan, currentSearchQuery)}
        </div>

        <div class="timeline-steps">
          ${
            logs.length === 0
              ? `<div style="font-size:0.82rem; color:#64748b; padding:0.5rem 0;">Belum ada catatan pengerjaan teknisi.${isAdminMode ? " Klik <b>+ Tambah Progres Teknisi</b> untuk mulai mencatat." : ""}</div>`
              : logs
                  .map((log, idx) => {
                    const tc = getTechClass(log.teknisi);
                    const isEditingThis =
                      isAdminMode &&
                      inlineEditState.unitId === item.id &&
                      inlineEditState.logIdx === idx;

                    if (isEditingThis) {
                      // Tampilan Inline Editor saat kartu di-klik 2x
                      const techOptions = TECH_LIST.map(
                        t =>
                          `<option value="${escapeHtml(t.name)}" ${
                            (log.teknisi || "").toLowerCase() === t.name.toLowerCase() ? "selected" : ""
                          }>${escapeHtml(t.name)}</option>`
                      ).join("");
                      const isCustomTech = !TECH_LIST.some(
                        t => t.name.toLowerCase() === (log.teknisi || "").toLowerCase()
                      );

                      return `
                        <div class="step-item editing ${tc.cell}" onclick="event.stopPropagation()">
                          <div class="step-header">
                            <span>✏️ Edit Progres #${idx + 1}</span>
                            <button type="button" class="step-edit-btn" onclick="cancelInlineEdit()">✕</button>
                          </div>
                          <div class="inline-editor-wrap">
                            <div class="inline-editor-row">
                              <select id="inlineTech_${item.id}_${idx}">
                                ${techOptions}
                                ${
                                  isCustomTech
                                    ? `<option value="${escapeHtml(log.teknisi)}" selected>${escapeHtml(log.teknisi)}</option>`
                                    : ""
                                }
                              </select>
                              <input type="date" id="inlineDate_${item.id}_${idx}" value="${escapeHtml(log.tanggal || "")}" />
                            </div>
                            <textarea
                              id="inlineNote_${item.id}_${idx}"
                              class="inline-editor-textarea"
                              onkeydown="handleInlineKeyDown(event, '${item.id}', ${idx})"
                            >${escapeHtml(log.catatan || "")}</textarea>
                            <div class="inline-editor-actions">
                              <button type="button" class="btn btn-light btn-sm" style="color:#dc2626; padding:0.2rem 0.45rem; font-size:0.72rem;" onclick="deleteInlineStep('${item.id}', ${idx})" title="Hapus kartu progres ini">🗑️ Hapus</button>
                              <div style="display:flex; gap:0.3rem;">
                                <button type="button" class="btn btn-light btn-sm" style="padding:0.2rem 0.5rem; font-size:0.72rem;" onclick="cancelInlineEdit()">Batal</button>
                                <button type="button" class="btn btn-primary btn-sm" style="padding:0.2rem 0.6rem; font-size:0.72rem;" onclick="saveInlineEdit('${item.id}', ${idx})">💾 Simpan</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      `;
                    }

                    return `
                      <div class="step-item ${tc.cell}"
                           style="cursor:${isAdminMode ? "pointer" : "default"};"
                           ondblclick="handleCardStepDblClick('${item.id}', ${idx})"
                           title="${isAdminMode ? "Klik 2x (Double-Click) untuk mengedit kartu ini" : "Login Admin untuk mengedit kartu ini"}">
                        <div class="step-header">
                          <span>#${idx + 1} • ${highlightText(log.teknisi, currentSearchQuery)}</span>
                          <div style="display:flex; align-items:center; gap:0.35rem;">
                            <span>${escapeHtml(log.tanggal || "")}</span>
                            ${
                              isAdminMode
                                ? `<button type="button" class="step-edit-btn" onclick="event.stopPropagation(); handleCardStepDblClick('${item.id}', ${idx})" title="Edit kartu ini">✏️</button>`
                                : ""
                            }
                          </div>
                        </div>
                        <div class="step-body">
                          <div>${highlightText(log.catatan, currentSearchQuery)}</div>
                          ${isAdminMode ? `<div class="dblclick-hint">Klik 2x untuk edit</div>` : ""}
                        </div>
                      </div>
                    `;
                  })
                  .join("")
          }
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Modal Helpers
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("open");
}

function openGithubModal() {
  document.getElementById("githubModal").classList.add("open");
}

function getTodayISO() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

// Tambah / Edit Unit (Khusus Admin)
function openNewUnitModal() {
  if (!isAdminMode) return openAdminUnlockModal();
  populateTechDropdowns();
  const activeTechs = TECH_LIST.filter(t => t.active !== false);
  document.getElementById("unitModalTitle").textContent = "+ Tambah Unit Servis Baru";
  document.getElementById("formUnitId").value = "";
  document.getElementById("formNamaPelanggan").value = "";
  document.getElementById("formWarnaUnit").value = "";
  document.getElementById("formSeriPerangkat").value = "";
  document.getElementById("formKategori").value = "Laptop / Notebook";
  document.getElementById("formTglMasuk").value = getTodayISO();
  document.getElementById("formStatus").value = "Dalam Pengerjaan";
  document.getElementById("formKeluhan").value = "";
  document.getElementById("formLinkFb").value = "";
  document.getElementById("firstLogSection").style.display = "block";
  if (activeTechs.length > 0) {
    document.getElementById("formFirstTech").value = activeTechs[0].name;
  }
  document.getElementById("formFirstDate").value = getTodayISO();
  document.getElementById("formFirstNote").value = "";
  document.getElementById("unitModal").classList.add("open");
}

function openEditUnitModal(unitId) {
  if (!isAdminMode) return openAdminUnlockModal();
  const item = serviceData.find(x => x.id === unitId);
  if (!item) return;

  document.getElementById("unitModalTitle").textContent = `✏️ Edit Data Unit (${item.id})`;
  document.getElementById("formUnitId").value = item.id;
  document.getElementById("formNamaPelanggan").value = item.nama_pelanggan || "";
  document.getElementById("formWarnaUnit").value = item.warna_unit || "";
  document.getElementById("formSeriPerangkat").value = item.seri_perangkat || "";
  document.getElementById("formKategori").value = item.kategori || "Laptop / Notebook";
  document.getElementById("formTglMasuk").value = item.tgl_masuk || getTodayISO();
  document.getElementById("formStatus").value = item.status || "Dalam Pengerjaan";
  document.getElementById("formKeluhan").value = item.keluhan || "";
  document.getElementById("formLinkFb").value = item.link_fb || "";
  document.getElementById("firstLogSection").style.display = "none";
  document.getElementById("unitModal").classList.add("open");
}

function saveUnitForm(e) {
  e.preventDefault();
  if (!isAdminMode) return;
  const unitId = document.getElementById("formUnitId").value;
  const nama = document.getElementById("formNamaPelanggan").value.trim();
  const warna = document.getElementById("formWarnaUnit").value.trim();
  const seri = document.getElementById("formSeriPerangkat").value.trim();
  const kategori = document.getElementById("formKategori").value;
  const tglMasuk = document.getElementById("formTglMasuk").value;
  const status = document.getElementById("formStatus").value;
  const keluhan = document.getElementById("formKeluhan").value.trim();
  const linkFb = document.getElementById("formLinkFb").value.trim();

  if (unitId) {
    const item = serviceData.find(x => x.id === unitId);
    if (item) {
      item.nama_pelanggan = nama;
      item.warna_unit = warna;
      item.pelanggan_lengkap = warna && warna !== "-" ? `${nama} (${warna})` : nama;
      item.seri_perangkat = seri;
      item.kategori = kategori;
      item.tgl_masuk = tglMasuk;
      item.status = status;
      item.keluhan = keluhan;
      item.link_fb = linkFb;
    }
  } else {
    const nextNo = serviceData.reduce((max, x) => Math.max(max, x.no || 0), 0) + 1;
    const newId = `SRV-${String(nextNo).padStart(3, "0")}`;
    const firstTech = document.getElementById("formFirstTech").value;
    const firstDate = document.getElementById("formFirstDate").value || tglMasuk;
    const firstNote = document.getElementById("formFirstNote").value.trim();

    const riwayat = [];
    const teknisiTerlibat = [];
    if (firstNote) {
      riwayat.push({
        step: 1,
        teknisi: firstTech,
        teknisi_utama: firstTech,
        tanggal: firstDate,
        catatan: firstNote
      });
      teknisiTerlibat.push(firstTech);
    }

    serviceData.push({
      id: newId,
      no: nextNo,
      nama_pelanggan: nama,
      warna_unit: warna,
      pelanggan_lengkap: warna && warna !== "-" ? `${nama} (${warna})` : nama,
      seri_perangkat: seri,
      kategori: kategori,
      keluhan: keluhan,
      tgl_masuk: tglMasuk,
      tgl_update: firstDate || tglMasuk,
      link_fb: linkFb,
      status: status,
      teknisi_terlibat: teknisiTerlibat,
      riwayat: riwayat
    });
  }

  closeModal("unitModal");
  persistData();
  renderTechLegend();
  applyFilters();
}

function deleteUnit(unitId) {
  if (!isAdminMode) return openAdminUnlockModal();
  const item = serviceData.find(x => x.id === unitId);
  if (!item) return;
  if (!confirm(`Hapus data servis "${item.nama_pelanggan} - ${item.seri_perangkat}" (${item.id})?`)) {
    return;
  }
  serviceData = serviceData.filter(x => x.id !== unitId);
  persistData();
  renderTechLegend();
  applyFilters();
}

// Tambah / Edit Log Progres Teknisi via Modal (Khusus Admin)
function handleTechSelectChange() {
  const val = document.getElementById("logTechSelect").value;
  document.getElementById("customTechGroup").style.display = val === "CUSTOM" ? "block" : "none";
}

function openAddLogModal(unitId) {
  if (!isAdminMode) return openAdminUnlockModal();
  const item = serviceData.find(x => x.id === unitId);
  if (!item) return;

  populateTechDropdowns();
  const activeTechs = TECH_LIST.filter(t => t.active !== false);

  document.getElementById("logModalTitle").textContent = `+ Tambah Progres Harian Teknisi (${item.id})`;
  document.getElementById("logUnitId").value = item.id;
  document.getElementById("logEditIndex").value = "-1";
  document.getElementById("btnDeleteLogStep").style.display = "none";
  document.getElementById("logUnitSummary").innerHTML = `
    <b>Pelanggan:</b> ${escapeHtml(item.nama_pelanggan)} (${escapeHtml(item.warna_unit)}) &nbsp;|&nbsp;
    <b>Perangkat:</b> ${escapeHtml(item.seri_perangkat)}<br/>
    <b>Keluhan:</b> ${escapeHtml(item.keluhan)}
  `;
  if (activeTechs.length > 0) {
    document.getElementById("logTechSelect").value = activeTechs[0].name;
  }
  document.getElementById("customTechGroup").style.display = "none";
  document.getElementById("logCustomTechInput").value = "";
  document.getElementById("logDateInput").value = getTodayISO();
  document.getElementById("logNoteInput").value = "";
  document.getElementById("logStatusSelect").value = "AUTO";
  document.getElementById("logModal").classList.add("open");
}

function openEditLogModal(unitId, logIdx) {
  if (!isAdminMode) return openAdminUnlockModal();
  const item = serviceData.find(x => x.id === unitId);
  if (!item || !item.riwayat || !item.riwayat[logIdx]) return;
  const log = item.riwayat[logIdx];

  populateTechDropdowns();

  document.getElementById("logModalTitle").textContent = `✏️ Edit Catatan Teknisi #${logIdx + 1} (${item.id})`;
  document.getElementById("logUnitId").value = item.id;
  document.getElementById("logEditIndex").value = String(logIdx);
  document.getElementById("btnDeleteLogStep").style.display = "inline-flex";
  document.getElementById("logUnitSummary").innerHTML = `
    <b>Pelanggan:</b> ${escapeHtml(item.nama_pelanggan)} (${escapeHtml(item.warna_unit)}) &nbsp;|&nbsp;
    <b>Perangkat:</b> ${escapeHtml(item.seri_perangkat)}
  `;

  const knownTech = TECH_LIST.find(
    t => t.active !== false && t.name.toLowerCase() === (log.teknisi || "").toLowerCase()
  );
  if (knownTech) {
    document.getElementById("logTechSelect").value = knownTech.name;
    document.getElementById("customTechGroup").style.display = "none";
  } else {
    document.getElementById("logTechSelect").value = "CUSTOM";
    document.getElementById("customTechGroup").style.display = "block";
    document.getElementById("logCustomTechInput").value = log.teknisi || "";
  }

  document.getElementById("logDateInput").value = log.tanggal || getTodayISO();
  document.getElementById("logNoteInput").value = log.catatan || "";
  document.getElementById("logStatusSelect").value = item.status || "Dalam Pengerjaan";
  document.getElementById("logModal").classList.add("open");
}

function deleteCurrentLogStep() {
  if (!isAdminMode) return;
  const unitId = document.getElementById("logUnitId").value;
  const editIdx = parseInt(document.getElementById("logEditIndex").value, 10);
  closeModal("logModal");
  deleteInlineStep(unitId, editIdx);
}

function detectStatusFromNote(note, currentStatus) {
  const low = note.toLowerCase();
  if (low.includes("cancel")) {
    if (low.includes("ambil")) return "Cancel (Sudah Diambil)";
    return "Cancel";
  }
  if (
    low.includes("sudah ambil") ||
    low.includes("sudah di ambil") ||
    low.includes("sdh ambil") ||
    low.includes("sdh di ambil") ||
    low.includes("sudah diambil")
  ) {
    return "Sudah Diambil";
  }
  if (
    low.includes("selesai") ||
    low.includes("siap diambil") ||
    low.includes("tinggal ambil") ||
    low.includes("sudah di kabari") ||
    low.includes("sisa di ambil") ||
    low.includes("sisah di ambil")
  ) {
    return "Selesai (Siap Diambil)";
  }
  return currentStatus || "Dalam Pengerjaan";
}

function saveLogForm(e) {
  e.preventDefault();
  if (!isAdminMode) return;
  const unitId = document.getElementById("logUnitId").value;
  const editIdx = parseInt(document.getElementById("logEditIndex").value, 10);
  const item = serviceData.find(x => x.id === unitId);
  if (!item) return;

  let tech = document.getElementById("logTechSelect").value;
  if (tech === "CUSTOM") {
    tech = document.getElementById("logCustomTechInput").value.trim() || "Teknisi";
  }
  const tanggal = document.getElementById("logDateInput").value;
  const catatan = document.getElementById("logNoteInput").value.trim();
  const statusChoice = document.getElementById("logStatusSelect").value;

  if (!item.riwayat) item.riwayat = [];

  if (editIdx >= 0 && editIdx < item.riwayat.length) {
    item.riwayat[editIdx].teknisi = tech;
    item.riwayat[editIdx].teknisi_utama = tech.split("&")[0].trim();
    item.riwayat[editIdx].tanggal = tanggal;
    item.riwayat[editIdx].catatan = catatan;
  } else {
    item.riwayat.push({
      step: item.riwayat.length + 1,
      teknisi: tech,
      teknisi_utama: tech.split("&")[0].trim(),
      tanggal: tanggal,
      catatan: catatan
    });
  }

  item.tgl_update = tanggal;
  if (statusChoice === "AUTO") {
    item.status = detectStatusFromNote(catatan, item.status);
  } else {
    item.status = statusChoice;
  }

  const terlibat = [];
  item.riwayat.forEach(r => {
    (r.teknisi || "").split("&").forEach(part => {
      const clean = part.trim();
      if (clean && !terlibat.includes(clean)) terlibat.push(clean);
    });
  });
  item.teknisi_terlibat = terlibat;

  closeModal("logModal");
  persistData();
  renderTechLegend();
  applyFilters();
}

// ==========================================
// MANAJEMEN TEKNISI & ANAK MAGANG / KARYAWAN BARU
// ==========================================
function populateColorPresetDropdown() {
  const sel = document.getElementById("techFormColorPreset");
  if (!sel) return;
  sel.innerHTML = TECH_COLOR_PRESETS.map(
    p => `<option value="${p.key}">${p.emoji} ${p.colorName}</option>`
  ).join("");
}

function openTechManagerModal() {
  populateColorPresetDropdown();
  resetTechManagerForm();
  renderTechManagerList();
  document.getElementById("techManagerModal").classList.add("open");
}

function openTechManagerAndEdit(idx) {
  populateColorPresetDropdown();
  renderTechManagerList();
  document.getElementById("techManagerModal").classList.add("open");
  editTechItem(idx);
}

function resetTechManagerForm() {
  document.getElementById("techEditIndex").value = "-1";
  document.getElementById("techFormTitle").innerHTML = "➕ Tambah Teknisi / Anak Magang Baru";
  document.getElementById("btnCancelTechEdit").style.display = "none";
  document.getElementById("techRenameLogsWrap").style.display = "none";
  document.getElementById("btnSubmitTechForm").innerHTML = "💾 Tambah ke Daftar Teknisi";
  document.getElementById("techFormName").value = "";
  document.getElementById("techFormRole").value = "Magang";

  // Pilih preset warna yang belum banyak dipakai secara otomatis
  const usedKeys = new Set(TECH_LIST.map(t => t.colorKey));
  const unusedPreset = TECH_COLOR_PRESETS.find(p => !usedKeys.has(p.key)) || TECH_COLOR_PRESETS[9];
  const colorSel = document.getElementById("techFormColorPreset");
  if (colorSel && unusedPreset) {
    colorSel.value = unusedPreset.key;
  }
  updateTechPreviewPill();
}

function updateTechPreviewPill() {
  const wrap = document.getElementById("techPreviewWrap");
  if (!wrap) return;
  const nameVal = (document.getElementById("techFormName").value || "").trim() || "Nama Teknisi";
  const roleVal = document.getElementById("techFormRole").value || "Tetap";
  const colorKey = document.getElementById("techFormColorPreset").value || "indigo";
  const preset = TECH_COLOR_PRESETS.find(p => p.key === colorKey) || TECH_COLOR_PRESETS[0];
  const roleTag = roleVal === "Magang" ? "Magang • " : roleVal === "Baru" ? "Baru • " : "";
  const label = `${nameVal} (${roleTag}${preset.colorName})`;

  wrap.innerHTML = `
    <div class="tech-pill" style="background:${preset.bg}; border-color:${preset.border}; color:${preset.text}; cursor:default;">
      <span>${escapeHtml(label)}</span>
      <span class="count">0</span>
    </div>
  `;
}

function renderTechManagerList() {
  const container = document.getElementById("techManagerListContainer");
  const totalEl = document.getElementById("techTotalCount");
  if (!container) return;

  const counts = getTechUnitCounts();
  if (totalEl) totalEl.textContent = String(TECH_LIST.length);

  if (TECH_LIST.length === 0) {
    container.innerHTML = `<div style="padding:1rem; text-align:center; color:#64748b;">Belum ada teknisi terdaftar.</div>`;
    return;
  }

  container.innerHTML = TECH_LIST.map((t, idx) => {
    const unitCount = counts[t.name] || 0;
    const roleBadge =
      t.role === "Magang"
        ? `<span class="tech-role-badge role-magang">🎓 Anak Magang</span>`
        : t.role === "Baru"
        ? `<span class="tech-role-badge role-baru">🆕 Karyawan Baru</span>`
        : `<span class="tech-role-badge role-tetap">👨‍🔧 Teknisi Tetap</span>`;

    const isHidden = t.active === false;

    return `
      <div class="tech-manager-item ${isHidden ? "is-hidden" : ""}">
        <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
          <div class="tech-pill ${t.css}" style="cursor:default;">
            <span>${escapeHtml(t.label)}</span>
            <span class="count">${unitCount}</span>
          </div>
          ${roleBadge}
          ${isHidden ? `<span style="font-size:0.72rem; color:#dc2626; font-weight:700;">(Disembunyikan dari Filter/Input)</span>` : ""}
        </div>
        <div style="display:flex; align-items:center; gap:0.35rem;">
          <button type="button" class="btn btn-light btn-sm" onclick="editTechItem(${idx})" title="Edit nama, status magang, atau warna">
            ✏️ Edit
          </button>
          <button type="button" class="btn btn-light btn-sm" onclick="toggleTechActive(${idx})" title="${isHidden ? "Tampilkan kembali di filter & pilihan teknisi" : "Sembunyikan dari filter & pilihan (misal sudah selesai magang)"}">
            ${isHidden ? "👁️ Tampilkan" : "🙈 Nonaktifkan"}
          </button>
          <button type="button" class="btn btn-light btn-sm" style="color:#dc2626;" onclick="deleteTechItem(${idx})" title="Hapus dari daftar teknisi">
            🗑️
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function editTechItem(idx) {
  const t = TECH_LIST[idx];
  if (!t) return;
  document.getElementById("techEditIndex").value = String(idx);
  document.getElementById("techFormTitle").innerHTML = `✏️ Edit Teknisi: <span style="color:#2563eb;">${escapeHtml(t.name)}</span>`;
  document.getElementById("btnCancelTechEdit").style.display = "inline-flex";
  document.getElementById("techRenameLogsWrap").style.display = "block";
  document.getElementById("techFormRenameLogs").checked = true;
  document.getElementById("btnSubmitTechForm").innerHTML = "💾 Simpan Perubahan";

  document.getElementById("techFormName").value = t.name;
  document.getElementById("techFormRole").value = t.role || "Tetap";
  document.getElementById("techFormColorPreset").value = t.colorKey || "merah";
  updateTechPreviewPill();
  document.getElementById("techFormName").focus();
}

function saveTechManagerForm(e) {
  e.preventDefault();

  const editIdx = parseInt(document.getElementById("techEditIndex").value, 10);
  const name = document.getElementById("techFormName").value.trim();
  const role = document.getElementById("techFormRole").value || "Tetap";
  const colorKey = document.getElementById("techFormColorPreset").value || "indigo";
  const preset = TECH_COLOR_PRESETS.find(p => p.key === colorKey) || TECH_COLOR_PRESETS[0];

  if (!name) return;

  // Cek duplikasi nama
  const duplicateIdx = TECH_LIST.findIndex(
    (t, i) => i !== editIdx && t.name.toLowerCase() === name.toLowerCase()
  );
  if (duplicateIdx !== -1) {
    alert(`Teknisi dengan nama "${name}" sudah ada di dalam daftar!`);
    return;
  }

  if (editIdx >= 0 && editIdx < TECH_LIST.length) {
    const oldName = TECH_LIST[editIdx].name;
    const shouldRenameLogs = document.getElementById("techFormRenameLogs").checked;

    TECH_LIST[editIdx] = buildTechEntry(
      {
        name,
        role,
        colorKey: preset.key,
        colorName: preset.colorName,
        bg: preset.bg,
        border: preset.border,
        text: preset.text,
        badgeColor: preset.badge,
        active: TECH_LIST[editIdx].active !== false
      },
      editIdx
    );

    // Jika nama berubah & opsi rename dicentang, perbarui di riwayat servis
    if (shouldRenameLogs && oldName.toLowerCase() !== name.toLowerCase()) {
      const regex = new RegExp(`\\b${oldName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      serviceData.forEach(item => {
        (item.riwayat || []).forEach(r => {
          if (r.teknisi && regex.test(r.teknisi)) {
            r.teknisi = r.teknisi.replace(regex, name);
            r.teknisi_utama = r.teknisi.split("&")[0].trim();
          }
        });
        if (Array.isArray(item.teknisi_terlibat)) {
          item.teknisi_terlibat = item.teknisi_terlibat.map(tName =>
            tName.toLowerCase() === oldName.toLowerCase() ? name : tName
          );
        }
      });
      if (activeTechFilter === oldName) {
        activeTechFilter = name;
      }
    }
  } else {
    TECH_LIST.push(
      buildTechEntry(
        {
          name,
          role,
          colorKey: preset.key,
          colorName: preset.colorName,
          bg: preset.bg,
          border: preset.border,
          text: preset.text,
          badgeColor: preset.badge,
          active: true
        },
        TECH_LIST.length
      )
    );
  }

  saveTechList();
  resetTechManagerForm();
  renderTechManagerList();
  renderTechLegend();
  applyFilters();
}

function toggleTechActive(idx) {
  if (!TECH_LIST[idx]) return;
  TECH_LIST[idx].active = TECH_LIST[idx].active === false ? true : false;
  if (!TECH_LIST[idx].active && activeTechFilter === TECH_LIST[idx].name) {
    activeTechFilter = "ALL";
  }
  saveTechList();
  renderTechManagerList();
  renderTechLegend();
  applyFilters();
}

function deleteTechItem(idx) {
  if (!TECH_LIST[idx]) return;
  const t = TECH_LIST[idx];
  const counts = getTechUnitCounts();
  const unitCount = counts[t.name] || 0;
  const msg =
    unitCount > 0
      ? `Hapus "${t.name}" dari daftar filter teknisi?\n\nCatatan: ${unitCount} riwayat servis lama atas nama ${t.name} TIDAK akan terhapus, namun jika teknisi/anak magang sudah selesai masa kerjanya, Anda juga bisa menggunakan tombol "🙈 Nonaktifkan". Lanjutkan hapus?`
      : `Hapus "${t.name}" dari daftar teknisi?`;

  if (!confirm(msg)) return;

  if (activeTechFilter === t.name) {
    activeTechFilter = "ALL";
  }
  TECH_LIST.splice(idx, 1);
  saveTechList();
  resetTechManagerForm();
  renderTechManagerList();
  renderTechLegend();
  applyFilters();
}

function resetDefaultTechList() {
  if (!confirm("Kembalikan daftar teknisi ke pengaturan awal (9 teknisi default)?")) return;
  localStorage.removeItem(TECH_STORAGE_KEY);
  TECH_LIST = DEFAULT_TECH_LIST.map((item, idx) => buildTechEntry(item, idx));
  saveTechList();
  resetTechManagerForm();
  renderTechManagerList();
  renderTechLegend();
  applyFilters();
}

// Export ke Format Excel CSV (Khusus Admin)
function csvEscape(val) {
  const s = String(val ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function exportExcelFormatCSV() {
  if (!isAdminMode) return openAdminUnlockModal();
  const rows = [];
  serviceData.forEach(item => {
    const logs = item.riwayat || [];
    const r1 = ["Nama user", "Seri Laptop", "Keluhann", "Link Foto FB"];
    const r2 = ["(warna)", "Lengkap", "(jam dibawa)", item.tgl_masuk || ""];
    const r3 = [
      item.pelanggan_lengkap || `${item.nama_pelanggan} (${item.warna_unit})`,
      item.seri_perangkat || "",
      item.keluhan || "",
      item.link_fb || ""
    ];

    logs.forEach(l => {
      r1.push(l.teknisi || "");
      r2.push(l.tanggal || "");
      r3.push(l.catatan || "");
    });

    rows.push(r1.map(csvEscape).join(","));
    rows.push(r2.map(csvEscape).join(","));
    rows.push(r3.map(csvEscape).join(","));
    rows.push(",,,,,,,,,,,,,,,,,,,,");
  });

  const csvContent = "\uFEFF" + rows.join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Laporan_Aktivitas_Harian_Teknisi_${getTodayISO()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ==========================================
// IMPORT FILE CSV / JSON BARU (LANGSUNG DI BROWSER)
// ==========================================
let pendingImportedRecords = [];
let pendingImportedFileName = "";

function triggerImportFilePicker() {
  const inp = document.getElementById("importFileInput");
  if (!inp) return;
  inp.value = "";
  inp.click();
}

// Tokenizer CSV lengkap (mendukung pemisah koma ',' maupun titik-koma ';' dari Excel Indonesia, serta tanda kutip)
function parseCSVToMatrix(csvText) {
  const clean = csvText.replace(/^\uFEFF/, "");
  // Deteksi otomatis delimiter ',' atau ';' dari beberapa baris pertama
  const sampleLines = clean.split(/\r?\n/).slice(0, 10).join("\n");
  const commaCount = (sampleLines.match(/,/g) || []).length;
  const semiCount = (sampleLines.match(/;/g) || []).length;
  const delimiter = semiCount > commaCount ? ";" : ",";

  const rows = [];
  let currentRow = [];
  let currentCell = "";
  let inQuotes = false;

  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    const next = clean[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        currentCell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        currentCell += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === delimiter) {
        currentRow.push(currentCell);
        currentCell = "";
      } else if (ch === "\r" && next === "\n") {
        currentRow.push(currentCell);
        rows.push(currentRow);
        currentRow = [];
        currentCell = "";
        i++;
      } else if (ch === "\n" || ch === "\r") {
        currentRow.push(currentCell);
        rows.push(currentRow);
        currentRow = [];
        currentCell = "";
      } else {
        currentCell += ch;
      }
    }
  }
  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell);
    rows.push(currentRow);
  }
  return rows;
}

function normalizeTechNameJS(name) {
  if (!name) return "Teknisi";
  const raw = String(name).trim();
  if (!raw) return "Teknisi";
  const parts = raw.split(/[&,]|(?:\bdan\b)/i);
  const cleaned = [];

  for (let p of parts) {
    p = p.trim();
    if (!p) continue;
    const low = p.toLowerCase();

    // Cek dari TECH_LIST yang terdaftar terlebih dahulu
    const existing = TECH_LIST.find(t => low === t.name.toLowerCase() || low.includes(t.name.toLowerCase()));
    if (existing) {
      cleaned.push(existing.name);
    } else if (low.includes("arif")) {
      cleaned.push("Arif");
    } else if (low.includes("ard")) {
      cleaned.push("Ardin");
    } else if (low.includes("tia")) {
      cleaned.push("Tia");
    } else if (low.includes("fazrun")) {
      cleaned.push("Fazrun");
    } else if (low.includes("vivi")) {
      cleaned.push("Vivi");
    } else if (low.includes("vat")) {
      cleaned.push("Vattar");
    } else if (low.includes("ihwal")) {
      cleaned.push("Ihwal");
    } else if (low.includes("hibrian")) {
      cleaned.push("Hibrian");
    } else if (low.includes("zam")) {
      cleaned.push("Zam Zam");
    } else if (low.includes("egi")) {
      cleaned.push("Egi");
    } else if (low.includes("cust name") || low.includes("nama user")) {
      cleaned.push("Teknisi");
    } else {
      // Title Case untuk teknisi / anak magang baru
      cleaned.push(
        p
          .split(/\s+/)
          .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(" ")
      );
    }
  }
  return cleaned.length > 0 ? cleaned.join(" & ") : "Teknisi";
}

function parseCustomerAndColorJS(custRaw) {
  const s = (custRaw || "").trim();
  if (!s) return { nama: "Tanpa Nama", warna: "-" };
  const m = s.match(/\(([^)]+)\)/);
  if (m) {
    const warna = m[1].trim();
    const nama = (s.slice(0, m.index) + s.slice(m.index + m[0].length)).replace(/^[\s,.\-]+|[\s,.\-]+$/g, "");
    return { nama: nama || s, warna: warna || "-" };
  }
  if (s.includes("(")) {
    const parts = s.split("(");
    const nama = parts[0].replace(/^[\s,.\-]+|[\s,.\-]+$/g, "");
    const warna = parts.slice(1).join("(").replace(/^[\s,.\-)]+|[\s,.\-)]+$/g, "");
    return { nama: nama || s, warna: warna || "-" };
  }
  return { nama: s, warna: "-" };
}

function detectDeviceCategoryJS(seri) {
  const s = (seri || "").toLowerCase();
  if (s.includes("printer") || s.includes("epson") || s.includes("canon") || s.includes("pixma") || s.includes("brother")) {
    return "Printer";
  }
  if (s.includes("cpu") || s.includes("komputer") || s.includes("all in one") || s.includes("aio") || s.includes("thinkcentre") || s.includes("ideacentre") || s.includes("pc ")) {
    return "PC / Komputer";
  }
  if (s.includes("harddisk") || s.includes("hdd") || s.includes("ssd") || s.includes("fd") || s.includes("flashdisk")) {
    return "Storage / Aksesoris";
  }
  if (s.includes("macbook")) {
    return "MacBook";
  }
  return "Laptop / Notebook";
}

function detectStatusFromLogsJS(logs) {
  const allText = logs.map(l => l.catatan || "").join(" ").toLowerCase();
  const lastText = logs.length > 0 ? (logs[logs.length - 1].catatan || "").toLowerCase() : "";

  if (lastText.includes("cancel") || (allText.includes("cancel") && (lastText.includes("ambil") || lastText.includes("cancel")))) {
    if (allText.includes("sudah ambil") || allText.includes("sudah di ambil") || allText.includes("sdh ambil") || allText.includes("dikembalikan")) {
      return "Cancel (Sudah Diambil)";
    }
    return "Cancel";
  }

  const pickupKeywords = [
    "sudah ambil",
    "sudah di ambil",
    "sdh ambil",
    "sdh di ambil",
    "sudah diambil",
    "orangnya sudah ambil",
    "sudah di kasih",
    "sudah, dibeli"
  ];
  for (const kw of pickupKeywords) {
    if (lastText.includes(kw) || allText.includes(kw)) {
      if (!lastText.includes("belum diambil") && !lastText.includes("nnti di bawa lagi")) {
        return "Sudah Diambil";
      }
    }
  }

  if (
    lastText.includes("lunas tapi belum diambil") ||
    lastText.includes("tinggal ambil") ||
    lastText.includes("sisa di ambil") ||
    lastText.includes("sisah di ambil") ||
    lastText.includes("sudah di kabari") ||
    lastText.includes("bisa dihubungi") ||
    lastText.includes("selesai")
  ) {
    return "Selesai (Siap Diambil)";
  }

  return "Dalam Pengerjaan";
}

function parseExcelCSVContent(csvText) {
  const matrix = parseCSVToMatrix(csvText);
  if (!matrix || matrix.length === 0) return [];

  // Pisahkan menjadi blok-blok (dipisahkan baris kosong ATAU baris header baru "Nama user")
  const rawBlocks = [];
  let currentBlock = [];

  for (const row of matrix) {
    const isEmpty = row.every(cell => String(cell || "").trim() === "");
    if (isEmpty) {
      if (currentBlock.length > 0) {
        rawBlocks.push(currentBlock);
        currentBlock = [];
      }
    } else {
      const c0 = String(row[0] || "").trim().toLowerCase();
      const c1 = String(row[1] || "").trim().toLowerCase();
      const isHeaderRow =
        (c0.includes("nama user") || c0.includes("nama pelanggan")) &&
        (c1.includes("seri") || c1.includes("perangkat") || c1.includes("laptop"));

      if (isHeaderRow && currentBlock.length >= 3) {
        rawBlocks.push(currentBlock);
        currentBlock = [row];
      } else {
        currentBlock.push(row);
      }
    }
  }
  if (currentBlock.length > 0) {
    rawBlocks.push(currentBlock);
  }

  // Jika ada blok panjang yang berisi kelipatan 3 baris tanpa spasi, pecah per 3 baris
  const blocks = [];
  for (const b of rawBlocks) {
    if (b.length >= 6) {
      for (let i = 0; i + 2 < b.length; i += 3) {
        blocks.push([b[i], b[i + 1], b[i + 2]]);
      }
    } else {
      blocks.push(b);
    }
  }

  const records = [];
  let idx = 1;

  for (const b of blocks) {
    if (b.length < 3) continue;
    const r1 = [...b[0]];
    const r2 = [...b[1]];
    const r3 = [...b[2]];
    const maxLen = Math.max(r1.length, r2.length, r3.length);
    while (r1.length < maxLen) r1.push("");
    while (r2.length < maxLen) r2.push("");
    while (r3.length < maxLen) r3.push("");

    const custRaw = String(r3[0] || "").trim();
    const seriRaw = String(r3[1] || "").trim();
    if (!custRaw && !seriRaw) continue;
    // Abaikan jika r3 masih berisi teks header kosong
    if (custRaw.toLowerCase() === "nama user" && seriRaw.toLowerCase() === "seri laptop") continue;

    const { nama: namaPelanggan, warna: warnaUnit } = parseCustomerAndColorJS(custRaw);
    const r1c3Low = String(r1[3] || "").toLowerCase();
    const r3c3Low = String(r3[3] || "").toLowerCase();
    const hasFbCol = r1c3Low.includes("link") || r1c3Low.includes("fb") || r3c3Low.includes("http");

    let fbLink = "";
    let tglMasuk = "";
    let keluhan = "";
    let startCol = 3;

    const r1c2Low = String(r1[2] || "").trim().toLowerCase();
    const col2IsTech = !["keluhan", "keluhan orgnya", "keluhann", ""].includes(r1c2Low);

    if (col2IsTech) {
      keluhan = "Cek / Servis";
      startCol = 2;
    } else if (hasFbCol) {
      keluhan = String(r3[2] || "").trim();
      fbLink = String(r3[3] || "").trim();
      tglMasuk = String(r2[3] || "").trim();
      startCol = 4;
    } else {
      keluhan = String(r3[2] || "").trim();
      startCol = 3;
    }

    if (!fbLink && keluhan.includes("http")) {
      const mUrl = keluhan.match(/(https?:\/\/\S+)/);
      if (mUrl) {
        fbLink = mUrl[1];
        keluhan = keluhan.replace(fbLink, "").trim();
      }
    }

    const logs = [];
    for (let c = startCol; c < maxLen; c++) {
      const techRaw = String(r1[c] || "").trim();
      let dateRaw = String(r2[c] || "").trim();
      const noteRaw = String(r3[c] || "").trim();
      if (!techRaw && !dateRaw && !noteRaw) continue;
      if (!noteRaw && !techRaw) continue;
      if (dateRaw === "5/1/1026") dateRaw = "2026-05-01";

      const techNorm = normalizeTechNameJS(techRaw);
      logs.push({
        step: logs.length + 1,
        teknisi: techNorm,
        teknisi_utama: techNorm.split("&")[0].trim(),
        tanggal: dateRaw || (logs.length > 0 ? logs[logs.length - 1].tanggal : tglMasuk),
        catatan: noteRaw || "(Tanpa catatan detail)"
      });
    }

    if (!tglMasuk) {
      const r2c0 = String(r2[0] || "").trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(r2c0)) {
        tglMasuk = r2c0;
      } else if (logs.length > 0 && logs[0].tanggal) {
        tglMasuk = logs[0].tanggal;
      } else {
        tglMasuk = getTodayISO();
      }
    }

    const tglUpdateTerakhir = logs.length > 0 && logs[logs.length - 1].tanggal ? logs[logs.length - 1].tanggal : tglMasuk;
    const status = detectStatusFromLogsJS(logs);
    const kategori = detectDeviceCategoryJS(seriRaw);

    const teknisiTerlibat = [];
    logs.forEach(l => {
      (l.teknisi || "").split("&").forEach(t => {
        const tClean = t.trim();
        if (tClean && !teknisiTerlibat.includes(tClean)) {
          teknisiTerlibat.push(tClean);
        }
      });
    });

    records.push({
      id: `SRV-${String(idx).padStart(3, "0")}`,
      no: idx,
      nama_pelanggan: namaPelanggan,
      warna_unit: warnaUnit,
      pelanggan_lengkap: custRaw,
      seri_perangkat: seriRaw || "-",
      kategori: kategori,
      keluhan: keluhan || "Cek / Servis",
      tgl_masuk: tglMasuk,
      tgl_update: tglUpdateTerakhir,
      link_fb: fbLink,
      status: status,
      teknisi_terlibat: teknisiTerlibat,
      riwayat: logs
    });
    idx++;
  }

  return records;
}

function handleImportFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    let parsedRecords = [];

    if (file.name.toLowerCase().endsWith(".json")) {
      try {
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) {
          parsedRecords = parsed;
        } else if (parsed && Array.isArray(parsed.records)) {
          parsedRecords = parsed.records;
        }
      } catch (err) {
        alert("File JSON tidak valid: " + err.message);
        event.target.value = "";
        return;
      }
    } else {
      try {
        parsedRecords = parseExcelCSVContent(content);
      } catch (err) {
        alert("Gagal membaca file CSV: " + err.message);
        event.target.value = "";
        return;
      }
    }

    event.target.value = "";

    if (!parsedRecords || parsedRecords.length === 0) {
      alert(
        `Tidak ditemukan data unit servis yang valid di dalam file "${file.name}". Pastikan file CSV memiliki format blok 3-baris Excel toko atau JSON yang benar.`
      );
      return;
    }

    pendingImportedRecords = parsedRecords;
    pendingImportedFileName = file.name;
    openImportConfirmModal();
  };
  reader.readAsText(file, "UTF-8");
}

function openImportConfirmModal() {
  const summaryBox = document.getElementById("importSummaryBox");
  const previewList = document.getElementById("importPreviewList");
  if (!summaryBox || !previewList) return;

  summaryBox.innerHTML = `
    <div style="font-weight:800; font-size:0.95rem; margin-bottom:0.25rem;">✅ Berhasil Membaca File: ${escapeHtml(pendingImportedFileName)}</div>
    <div>Ditemukan <b>${pendingImportedRecords.length} Unit Servis</b> siap dimasukkan ke dalam sistem.</div>
  `;

  const sample = pendingImportedRecords.slice(0, 8);
  previewList.innerHTML =
    sample
      .map(
        (item, i) => `
      <div style="padding:0.35rem 0; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; gap:0.5rem;">
        <span><b>#${i + 1} ${escapeHtml(item.nama_pelanggan)}</b> (${escapeHtml(item.warna_unit)}) — ${escapeHtml(item.seri_perangkat)}</span>
        <span style="color:#64748b; white-space:nowrap;">${(item.riwayat || []).length} log</span>
      </div>
    `
      )
      .join("") +
    (pendingImportedRecords.length > 8
      ? `<div style="padding-top:0.4rem; color:#64748b; font-style:italic;">...dan ${pendingImportedRecords.length - 8} unit lainnya.</div>`
      : "");

  document.getElementById("importConfirmModal").classList.add("open");
}

function confirmImportAction(mode) {
  if (!pendingImportedRecords || pendingImportedRecords.length === 0) {
    closeModal("importConfirmModal");
    return;
  }

  if (mode === "replace") {
    serviceData = pendingImportedRecords.map((item, idx) => ({
      ...item,
      no: idx + 1,
      id: `SRV-${String(idx + 1).padStart(3, "0")}`
    }));
  } else {
    const startNo = serviceData.reduce((max, x) => Math.max(max, x.no || 0), 0);
    const appended = pendingImportedRecords.map((item, idx) => {
      const nextNo = startNo + idx + 1;
      return {
        ...item,
        no: nextNo,
        id: `SRV-${String(nextNo).padStart(3, "0")}`
      };
    });
    serviceData = [...serviceData, ...appended];
  }

  // Deteksi otomatis apabila di file baru ada nama teknisi / anak magang baru yang belum ada di TECH_LIST
  const knownNames = new Set(TECH_LIST.map(t => t.name.toLowerCase()));
  let addedNewTech = false;
  serviceData.forEach(item => {
    (item.riwayat || []).forEach(r => {
      (r.teknisi || "").split("&").forEach(part => {
        const clean = part.trim();
        if (
          clean &&
          clean.toLowerCase() !== "teknisi" &&
          !knownNames.has(clean.toLowerCase())
        ) {
          knownNames.add(clean.toLowerCase());
          const usedKeys = new Set(TECH_LIST.map(t => t.colorKey));
          const preset =
            TECH_COLOR_PRESETS.find(p => !usedKeys.has(p.key)) ||
            TECH_COLOR_PRESETS[TECH_LIST.length % TECH_COLOR_PRESETS.length];
          TECH_LIST.push(
            buildTechEntry(
              {
                name: clean,
                role: "Baru",
                colorKey: preset.key,
                colorName: preset.colorName,
                active: true
              },
              TECH_LIST.length
            )
          );
          addedNewTech = true;
        }
      });
    });
  });

  if (addedNewTech) {
    saveTechList();
  } else {
    persistData();
  }

  pendingImportedRecords = [];
  closeModal("importConfirmModal");
  currentPage = 1;
  renderTechLegend();
  applyFilters();
}

window.addEventListener("beforeunload", (event) => {
  if (apiLocalChanges || hasUnsentLocalChanges()) {
    event.preventDefault();
    event.returnValue = "";
  }
});
window.addEventListener("DOMContentLoaded", initApp);


