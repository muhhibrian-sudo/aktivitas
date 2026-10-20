const TECHNICIAN_COLORS = {
  "Arif": {
    "bg": "#ffe4e6",
    "border": "#f87171",
    "text": "#9f1239",
    "badge": "#e11d48",
    "label": "Merah"
  },
  "Ardin": {
    "bg": "#e0f2fe",
    "border": "#38bdf8",
    "text": "#075985",
    "badge": "#0284c7",
    "label": "Biru Muda"
  },
  "Tia": {
    "bg": "#fce7f3",
    "border": "#f472b6",
    "text": "#9d174d",
    "badge": "#db2777",
    "label": "Pink"
  },
  "Fazrun": {
    "bg": "#dbeafe",
    "border": "#60a5fa",
    "text": "#1e3a8a",
    "badge": "#2563eb",
    "label": "Biru Tua"
  },
  "Vivi": {
    "bg": "#ffedd5",
    "border": "#fb923c",
    "text": "#9a3412",
    "badge": "#ea580c",
    "label": "Cream"
  },
  "Vattar": {
    "bg": "#fef9c3",
    "border": "#eab308",
    "text": "#854d0e",
    "badge": "#ca8a04",
    "label": "Kuning"
  },
  "Ihwal": {
    "bg": "#d1fae5",
    "border": "#34d399",
    "text": "#065f46",
    "badge": "#059669",
    "label": "Hijau"
  },
  "Hibrian": {
    "bg": "#f3e8ff",
    "border": "#a855f7",
    "text": "#6b21a8",
    "badge": "#9333ea",
    "label": "Ungu"
  },
  "Zam Zam": {
    "bg": "#ccfbf1",
    "border": "#2dd4bf",
    "text": "#115e59",
    "badge": "#0d9488",
    "label": "Tosca"
  },
  "Egi": {
    "bg": "#e0e7ff",
    "border": "#818cf8",
    "text": "#3730a3",
    "badge": "#4f46e5",
    "label": "Indigo"
  }
};

const INITIAL_TECH_LIST = [
  {
    "name": "Arif",
    "role": "Tetap",
    "colorKey": "merah",
    "colorName": "Merah",
    "active": true
  },
  {
    "name": "Ardin",
    "role": "Tetap",
    "colorKey": "biru_muda",
    "colorName": "Biru Muda",
    "active": true
  },
  {
    "name": "Tia",
    "role": "Tetap",
    "colorKey": "pink",
    "colorName": "Pink",
    "active": true
  },
  {
    "name": "Fazrun",
    "role": "Tetap",
    "colorKey": "biru_tua",
    "colorName": "Biru Tua",
    "active": true
  },
  {
    "name": "Vivi",
    "role": "Tetap",
    "colorKey": "cream",
    "colorName": "Cream",
    "active": true
  },
  {
    "name": "Vattar",
    "role": "Tetap",
    "colorKey": "kuning",
    "colorName": "Kuning",
    "active": true
  },
  {
    "name": "Ihwal",
    "role": "Tetap",
    "colorKey": "hijau",
    "colorName": "Hijau",
    "active": true
  },
  {
    "name": "Hibrian",
    "role": "Tetap",
    "colorKey": "ungu",
    "colorName": "Ungu",
    "active": true
  },
  {
    "name": "Zam Zam",
    "role": "Tetap",
    "colorKey": "tosca",
    "colorName": "Tosca",
    "active": true
  }
];

const INITIAL_SERVICE_DATA = [
  {
    "id": "SRV-001",
    "no": 1,
    "nama_pelanggan": "Mama Sukma",
    "warna_unit": "kuning",
    "pelanggan_lengkap": "Mama Sukma (kuning)",
    "seri_perangkat": "Acer Ze6",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek Dan Layar Putih",
    "tgl_masuk": "5/1/2026",
    "tgl_update": "5/3/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "ihwal",
      "Hibrian",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/1/2026",
        "catatan": "Cek Awal, Layar Putih Berbayang"
      },
      {
        "step": 2,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/1/2026",
        "catatan": "Semua aman kecuali lcd dia kedap kedip lain lain, kamera tdk jadi, agak lambat sedikit, dan cepat panas dibagian bawah.."
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/1/2026",
        "catatan": "SOP, Ada yang bisa bantu validasi, dan coba tulis perkiraan harganya"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/3/2026",
        "catatan": "bongkar lepas SSD & ram (pindahkan ke laptop mama sukma yang warna hitam) hardisk nya ada diluar"
      }
    ]
  },
  {
    "id": "SRV-002",
    "no": 2,
    "nama_pelanggan": "Arika",
    "warna_unit": "Perak",
    "pelanggan_lengkap": "Arika (Perak)",
    "seri_perangkat": "Acer Aspire Lite 14",
    "kategori": "Laptop / Notebook",
    "keluhan": "Keyboar Volume Besar Tertekan",
    "tgl_masuk": "4/30/2026",
    "tgl_update": "5/1/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Fazrun",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "4/30/2026",
        "catatan": "Cek Awal, Tidak Tertekan lagi Tombol Volumenya"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/1/2026",
        "catatan": "SOP, Kabari Orangnya mau diganti apa dibiarkan Dulu"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/1/2026",
        "catatan": "Dikembalikan ke orangnya (Cancel / DIAMBIL )"
      }
    ]
  },
  {
    "id": "SRV-003",
    "no": 3,
    "nama_pelanggan": "Yudi",
    "warna_unit": "CPU Hitam",
    "pelanggan_lengkap": "Yudi (CPU Hitam)",
    "seri_perangkat": "Dell D07D",
    "kategori": "Laptop / Notebook",
    "keluhan": "Sleep error",
    "tgl_masuk": "4/30/2026",
    "tgl_update": "5/1/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "4/30/2026",
        "catatan": "Cek Awal, aman semua hanya kalau sleep gak bisa nyala"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/1/2026",
        "catatan": "Install, QC aman"
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/1/2026",
        "catatan": "SOP, Kabari orangnya INSTALL PC 150 Rb"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/1/2026",
        "catatan": "PC Yudi sudah di ambil (150 rb)"
      },
      {
        "step": 5,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/1/2026",
        "catatan": "Orangnya masih komplain nnti dibawa lagi"
      }
    ]
  },
  {
    "id": "SRV-004",
    "no": 4,
    "nama_pelanggan": "sahrin",
    "warna_unit": "acer hitam",
    "pelanggan_lengkap": "sahrin (acer hitam",
    "seri_perangkat": "acer TravelMate P40-series",
    "kategori": "Laptop / Notebook",
    "keluhan": "koslet",
    "tgl_masuk": "5/1/2026",
    "tgl_update": "5/3/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/1/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/3/2026",
        "catatan": "Rusak Mainboard, short 19v"
      }
    ]
  },
  {
    "id": "SRV-005",
    "no": 5,
    "nama_pelanggan": "yubhar",
    "warna_unit": "silver",
    "pelanggan_lengkap": "yubhar (silver)",
    "seri_perangkat": "NB Acer Aspire One ZE6",
    "kategori": "Laptop / Notebook",
    "keluhan": "hilang wifi",
    "tgl_masuk": "5/1/2026",
    "tgl_update": "5/2/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Fazrun",
      "Tia",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/1/2026",
        "catatan": "semua aman kcuali tombol arah kanan tdk jadi (instal)"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/2/2026",
        "catatan": "SEMUA AMAN SUDAH CLEANING DAN GANTI PASTA (SELESAI)"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/2/2026",
        "catatan": "sudah diambil sisa bayar 200 rb (lunas)"
      }
    ]
  },
  {
    "id": "SRV-006",
    "no": 6,
    "nama_pelanggan": "Dila",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Dila (hitam)",
    "seri_perangkat": "printer epson L3210",
    "kategori": "Printer",
    "keluhan": "kedap-kedip",
    "tgl_masuk": "2026-05-01",
    "tgl_update": "5/2/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Hibrian",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "2026-05-01",
        "catatan": "Bawa ke PB"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/2/2026",
        "catatan": "dila, sdh ambil biaya 350rb Via TF BRI"
      }
    ]
  },
  {
    "id": "SRV-007",
    "no": 7,
    "nama_pelanggan": "IBU AFRIANINGSI",
    "warna_unit": "biru",
    "pelanggan_lengkap": "IBU AFRIANINGSI (biru)",
    "seri_perangkat": "Laptop Lenovo Ideapad 3 Slim 3",
    "kategori": "Laptop / Notebook",
    "keluhan": "GANTI LCD",
    "tgl_masuk": "5/2/2026",
    "tgl_update": "5/4/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Hibrian",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/2/2026",
        "catatan": "cleaning dan ganti pasta. pasang lcd"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/2/2026",
        "catatan": "aman sudah di tes 2x ( selesai)"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/2/2026",
        "catatan": "Trf di Rek BRI. 1650.000"
      },
      {
        "step": 4,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/2/2026",
        "catatan": "Rencana ambil hari ini dibawa dikampus"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "QC ulang semua aman kecuali casing penutup engsel agak terbuka"
      },
      {
        "step": 6,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/4/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-008",
    "no": 8,
    "nama_pelanggan": "pak kadar",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "pak kadar (hitam)",
    "seri_perangkat": "Notebook Acer Aspire One 722",
    "kategori": "Laptop / Notebook",
    "keluhan": "install di SSD",
    "tgl_masuk": "5/2/2026",
    "tgl_update": "5/3/2026",
    "link_fb": "",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Tia",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/2/2026",
        "catatan": "Bongkar, pasang SSD & install win 7 64bIt MBR"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/2/2026",
        "catatan": "semua aman kecuali baterai tdk mengisi & klu pasang baterai kadang menyala kadang tidak kalau lepas baterai aman"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/2/2026",
        "catatan": "tes pasang RAM 4GB DDR3 BEKAS CC (TERBACA)"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/2/2026",
        "catatan": "tes lepas batrei aman"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/2/2026",
        "catatan": "lepas batrei hnya nyala 1 menit baru mati lagi (sempat masuk windows) SELESAI"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/3/2026",
        "catatan": "(orang nya bawa lgi karena di tes office nya tidak bisa dibuka)  beberapa aman kcuali lambat,office sudah bisa dibuka & batrei tidak ada   (Instal ulang office)  SELESAI garansi"
      }
    ]
  },
  {
    "id": "SRV-009",
    "no": 9,
    "nama_pelanggan": "liati",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "liati, (hitam)",
    "seri_perangkat": "laptop  Acer aspire E1-410 Series",
    "kategori": "Laptop / Notebook",
    "keluhan": "keyboard tertindis sendir (DP 350rb)i",
    "tgl_masuk": "5/2/2026",
    "tgl_update": "5/12/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "ihwal",
      "Hibrian",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/2/2026",
        "catatan": "Di cek semua aman kecuali batrei cepat turun, sedang dipesankan keyboardnya"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/2/2026",
        "catatan": "Sementara Pesan di Makassar"
      },
      {
        "step": 3,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/11/2026",
        "catatan": "tes QC ulang semua, semua aman termaksut keyboard nya juga aman, kecuali agak lambat sedikit, dan batrei cpat turun."
      },
      {
        "step": 4,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/11/2026",
        "catatan": "pasang keyboard baru, selesai."
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "QC aman semua kecuali kadang lambat sedikit & baterai cepat turun.."
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-010",
    "no": 10,
    "nama_pelanggan": "TIA",
    "warna_unit": "ACER HITAM",
    "pelanggan_lengkap": "TIA ( ACER HITAM )",
    "seri_perangkat": "one 14 Z1401-C13A",
    "kategori": "Laptop / Notebook",
    "keluhan": "CEK",
    "tgl_masuk": "5/2/2026",
    "tgl_update": "5/4/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Teknisi",
      "Tia",
      "Ardin",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Teknisi",
        "teknisi_utama": "Teknisi",
        "tanggal": "5/2/2026",
        "catatan": "datang beli cas (di cek tidak masu windows ), sop izin bongkar, cek hardis"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/2/2026",
        "catatan": "ssd 100% sudah di backup datanya ( hanya 1 partisi) tes pakai ssd cc"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/2/2026",
        "catatan": "bluecreen dan masuk bios terus ( pakai ssd cc) , tes instal win 10"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/3/2026",
        "catatan": "Qc. bbrap aman kecuali  camera not found, windows agak lambat pakai hdd dan ssd & engsel bagian kanan kurang keras ( bawah nya sudah terbuka)"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/3/2026",
        "catatan": "bongkar lepas CD ROOM, format & pindahkan backup data ke harrdisk orang nya"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/3/2026",
        "catatan": "instal win 10 lite GPT & pasang kembali CD ROOM + HDD orangnya"
      },
      {
        "step": 7,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/3/2026",
        "catatan": "Qc. semua aman dan hubungi orangnya"
      },
      {
        "step": 8,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/4/2026",
        "catatan": "orangnya sudah ambil sore tanggal 5/3/2026"
      }
    ]
  },
  {
    "id": "SRV-011",
    "no": 11,
    "nama_pelanggan": "Mama Sukma",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Mama Sukma (Hitam)",
    "seri_perangkat": "Acer Aspire 4736Z",
    "kategori": "Laptop / Notebook",
    "keluhan": "CEK",
    "tgl_masuk": "5/2/2026",
    "tgl_update": "5/6/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Hibrian",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/2/2026",
        "catatan": "di cek tidak masuk windows, keluhan cek"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/2/2026",
        "catatan": "cek kesehatan Hdd Instal Ulang pakai ssd cc"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/3/2026",
        "catatan": "Qc. semua aman kecuali hdd 52%, batrei not charging, cepat panas"
      },
      {
        "step": 4,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/3/2026",
        "catatan": "sop ganti dgn lptop lainnya estimasi harga pengerjaanya gnti hdd dan ram, 300 rb, knfrmasi"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/3/2026",
        "catatan": "bongkar lepas HDD CC terus kembalikan HDD asli"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/3/2026",
        "catatan": "instal win 7 32bit (sudah pakai SSD dari NB kuning)"
      },
      {
        "step": 7,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/4/2026",
        "catatan": "beli casing hdd eksternal 150 rb + service laptop 300 rb"
      },
      {
        "step": 8,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/6/2026",
        "catatan": "beli casing hdd eksternal 150 rb + service laptop 300 rb"
      }
    ]
  },
  {
    "id": "SRV-012",
    "no": 12,
    "nama_pelanggan": "Faiq",
    "warna_unit": "coklat muda",
    "pelanggan_lengkap": "Faiq (coklat muda)",
    "seri_perangkat": "Laptop Acer Aspire 4352 tdk ada HDD/SSD nya",
    "kategori": "Storage / Aksesoris",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "5/3/2026",
    "tgl_update": "5/4/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun",
      "Hibrian",
      "ihwal",
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/3/2026",
        "catatan": "bongkar cek hardisk ( awal nya orang nya hanya mau beli cas, tapi pas di tes menyala tampilan hitam..tdk masuk system & belum cek yang lainnya)"
      },
      {
        "step": 2,
        "teknisi": "Hibrian & ihwal",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/3/2026",
        "catatan": "Install pakai SSD CC, belum QC"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "semua aman kecuali LCD bergaris putih, Keyboard bnyk yg tdk jadi, USB 1 tdk berfungsi,wifi tdk ada, baterai tdk mengisi,casing engsel retak &  kalau di colokan cas langsung menyala tanpa tekan tombol power"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/4/2026",
        "catatan": "Keyboard Ada beberapa yg tidak jadi, wifi tidak jadi ( sudah pakai USB wifi tidak jadi ) lcd bergaris putih. Kalau di colok cas langsung nyala otomatis. Faiq"
      },
      {
        "step": 5,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/4/2026",
        "catatan": "(Tanpa catatan detail)"
      }
    ]
  },
  {
    "id": "SRV-013",
    "no": 13,
    "nama_pelanggan": "pak taher  PEMBELIAN",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "pak taher (hitam) PEMBELIAN",
    "seri_perangkat": "Laptop  DELL Latitude 7390",
    "kategori": "Laptop / Notebook",
    "keluhan": "-",
    "tgl_masuk": "5/4/2026",
    "tgl_update": "5/4/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "install win 10 biasa GPT & PASANG STIKER KEYBOARD"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "semua aman kecuali kamera tdk berfungsi"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "sudah ambil, pembayaran Via QRIS BNI 3,9jt"
      }
    ]
  },
  {
    "id": "SRV-014",
    "no": 14,
    "nama_pelanggan": "Laptop Lenovo Thinpad T440",
    "warna_unit": "-",
    "pelanggan_lengkap": "Laptop Lenovo Thinpad T440",
    "seri_perangkat": "CC",
    "kategori": "Laptop / Notebook",
    "keluhan": "-",
    "tgl_masuk": "5/4/2026",
    "tgl_update": "5/4/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "install apk standar & pasang stiker keyboard"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "semua aman"
      }
    ]
  },
  {
    "id": "SRV-015",
    "no": 15,
    "nama_pelanggan": "ibu emi",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "ibu emi (hitam)",
    "seri_perangkat": "Printer Epson L3210",
    "kategori": "Printer",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "5/4/2026",
    "tgl_update": "5/4/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "test print an ibu emi aman kecuali tinta mau hbis.."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/4/2026",
        "catatan": "(Tanpa catatan detail)"
      }
    ]
  },
  {
    "id": "SRV-016",
    "no": 16,
    "nama_pelanggan": "Sarif",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Sarif (hitam)",
    "seri_perangkat": "Komputer Compaq CQ300C",
    "kategori": "PC / Komputer",
    "keluhan": "Mati total",
    "tgl_masuk": "5/4/2026",
    "tgl_update": "5/5/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Ardin",
      "ihwal",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/4/2026",
        "catatan": "sop : tes ganti psu ( lepas hardisk kalau tes)"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/4/2026",
        "catatan": "Tes pakai RAM cc"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/5/2026",
        "catatan": "orangnya sudah dp 500 rb untuk pengerjaan"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/5/2026",
        "catatan": "SOP tes pakai mainboard tes cc"
      },
      {
        "step": 5,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/6/2026",
        "catatan": "TES pake poower supply cc tdk tampil"
      },
      {
        "step": 6,
        "teknisi": "Arif & ihwal",
        "teknisi_utama": "Arif",
        "tanggal": "5/8/2026",
        "catatan": "Bongkar, lepas mainboard lama/rusak"
      },
      {
        "step": 7,
        "teknisi": "Arif & ihwal",
        "teknisi_utama": "Arif",
        "tanggal": "5/8/2026",
        "catatan": "pasang, mainboard H61 (BARU)"
      },
      {
        "step": 8,
        "teknisi": "Arif & ihwal",
        "teknisi_utama": "Arif",
        "tanggal": "5/8/2026",
        "catatan": "tes nyalakan (tdk meyala) tapi ada respon kipas processor bergerak tpi hnya sbntar.."
      },
      {
        "step": 9,
        "teknisi": "Arif & ihwal",
        "teknisi_utama": "Arif",
        "tanggal": "5/8/2026",
        "catatan": "bongkar, lepas mainboard H61 (BARU)"
      },
      {
        "step": 10,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/4/2026",
        "catatan": "pasang kembali mainboar, tes putar YouTube 2 menit langsung Bluscreen."
      },
      {
        "step": 11,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/4/2026",
        "catatan": "(Tanpa catatan detail)"
      },
      {
        "step": 12,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/5/2026",
        "catatan": "(Tanpa catatan detail)"
      }
    ]
  },
  {
    "id": "SRV-017",
    "no": 17,
    "nama_pelanggan": "ibu Nur, Hitam",
    "warna_unit": "CPU",
    "pelanggan_lengkap": "ibu Nur,(CPU) Hitam",
    "seri_perangkat": "CPU Qwerty H61",
    "kategori": "PC / Komputer",
    "keluhan": "Mati mati",
    "tgl_masuk": "5/4/2026",
    "tgl_update": "5/5/2026",
    "link_fb": "",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "ihwal",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/4/2026",
        "catatan": "cek nyalakan tdk nyala, tes buka ssd cek kesehatannya 96%,tes pake pawer Supply CC nyala"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/4/2026",
        "catatan": "backup data c dan rename (ssd 96%)"
      },
      {
        "step": 3,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/4/2026",
        "catatan": "tes pakai ssd cc"
      },
      {
        "step": 4,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/4/2026",
        "catatan": "beli pawer supply pasang. tes QC 3x mati aman semua"
      },
      {
        "step": 5,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/5/2026",
        "catatan": "cek ulang, 3x mati, aman, selesai.."
      }
    ]
  },
  {
    "id": "SRV-018",
    "no": 18,
    "nama_pelanggan": "mama fatir",
    "warna_unit": "hitam colkat",
    "pelanggan_lengkap": "mama fatir ( hitam colkat)",
    "seri_perangkat": "Laptop asus K454",
    "kategori": "Laptop / Notebook",
    "keluhan": "Laptop asus K454",
    "tgl_masuk": "5/4/2026",
    "tgl_update": "5/16/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "ihwal",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/4/2026",
        "catatan": "Setelah di cek USB sebelah kanan tidak jadi dua duanya, keyboard tidak jadi, pakai eksternal juga tidak jadi, yang lain aman"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "5/4/2026",
        "catatan": "pura pura instal ( keyboard tidak bisa) tes pakai ektenal jadi. masuk windows tidak jadi dua duanya"
      },
      {
        "step": 3,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/15/2026",
        "catatan": "pengerjaan ganti keyboard, selesai."
      },
      {
        "step": 4,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/15/2026",
        "catatan": "pasang keyboard, cek, QC, aman semua, kecuali 2 port USB  tidah jadi."
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/16/2026",
        "catatan": "sudah di ambil, pembayaran 150rb Cash (sisa DP)"
      }
    ]
  },
  {
    "id": "SRV-019",
    "no": 19,
    "nama_pelanggan": "pak rahmat",
    "warna_unit": "hitam abu",
    "pelanggan_lengkap": "pak rahmat (hitam abu)",
    "seri_perangkat": "Laptop Asus X45A",
    "kategori": "Laptop / Notebook",
    "keluhan": "upgrade SSD 512GB",
    "tgl_masuk": "5/5/2026",
    "tgl_update": "5/6/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/5/2026",
        "catatan": "QC  semua aman kecuali baterai retak tdk mngisi & satu colokan USB rusak port ny sdh bolong.."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/5/2026",
        "catatan": "Bongkar, pasang SSD 512GB & Install win 7 64bit MBR"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/5/2026",
        "catatan": "HDD asli nya 86%"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/5/2026",
        "catatan": "QC  semua aman kecuali baterai retak tdk mngisi & satu colokan USB rusak port ny sdh bolong SUDAH BACKUP DATA DARI HDD KE SSD"
      },
      {
        "step": 5,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/5/2026",
        "catatan": "QC Ulang semua aman kecuali batrei retak tdk jadi, touchpad agak lari2 sedikit..."
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/6/2026",
        "catatan": "install win 10 lite 64bit MBR"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/6/2026",
        "catatan": "semua aman kecuali baterai retak tdk mngisi & satu colokan USB rusak port ny sdh bolong"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/6/2026",
        "catatan": "sudah di ambil pengerjaan ganti SSD 512GB,bayar 1.250.000 CASH"
      }
    ]
  },
  {
    "id": "SRV-020",
    "no": 20,
    "nama_pelanggan": "pak hendra",
    "warna_unit": "-",
    "pelanggan_lengkap": "pak hendra",
    "seri_perangkat": "Acer E5-471",
    "kategori": "Laptop / Notebook",
    "keluhan": "install",
    "tgl_masuk": "5/5/2026",
    "tgl_update": "5/5/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/5/2026",
        "catatan": "QC Aman semua kecuali keyboard bnyk tdk jdi, baterai tdk mngisi (hrus sambil cas) , suara kecil, touchpad kurang bgus (orang ny pke keyboard eksternal & mouse wireless).."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/5/2026",
        "catatan": "BACKUP DATA C KE DATA D"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/5/2026",
        "catatan": "install win 10 GPT (BELUM QC)"
      },
      {
        "step": 4,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/5/2026",
        "catatan": "QC tes matikan 3x ,semua aman, kecuali keyboard banyak yang tdk jadi, touchpad klik kanan kiri tdk jadi, batrei tdk jadi,"
      },
      {
        "step": 5,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/5/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-021",
    "no": 21,
    "nama_pelanggan": "fADLI",
    "warna_unit": "SILFER",
    "pelanggan_lengkap": "fADLI  (SILFER)",
    "seri_perangkat": "Laptop Acer A314-35-C91P",
    "kategori": "Laptop / Notebook",
    "keluhan": "port hdmi, tdk tampil external",
    "tgl_masuk": "5/5/2026",
    "tgl_update": "5/5/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/5/2026",
        "catatan": "QC ,cek semua aman,kecuali port hdmi, tdk tampil external"
      },
      {
        "step": 2,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/5/2026",
        "catatan": "sudah di kasih.."
      }
    ]
  },
  {
    "id": "SRV-022",
    "no": 22,
    "nama_pelanggan": "Ibu Nur",
    "warna_unit": "-",
    "pelanggan_lengkap": "Ibu Nur",
    "seri_perangkat": "CPU H81",
    "kategori": "PC / Komputer",
    "keluhan": "MATI MENYALA",
    "tgl_masuk": "5/6/2026",
    "tgl_update": "5/6/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Ardin",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/6/2026",
        "catatan": "test nyalakan mati menyala"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/6/2026",
        "catatan": "tes bersihkn RAM & lepas soket SSD tetap tdk meyala"
      },
      {
        "step": 3,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "5/6/2026",
        "catatan": "tes pasang PSU bekas menyala & tampil"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/6/2026",
        "catatan": "pasang PSU baru 500W & rapikan kabel nya"
      },
      {
        "step": 5,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/6/2026",
        "catatan": "QC, Tes kasih mati 3x semua aman.."
      }
    ]
  },
  {
    "id": "SRV-023",
    "no": 23,
    "nama_pelanggan": "Ida",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Ida (hitam)",
    "seri_perangkat": "Acer Aspire A314-41 Series",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek key",
    "tgl_masuk": "5/6/2026",
    "tgl_update": "5/8/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/6/2026",
        "catatan": "Qc. semua aman kecuali keyboard banyak tombol tidak berfungsi"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/8/2026",
        "catatan": "QC ulang,aman semua kecuali keyboard bnyk yg tdk jdi & ada yg tertekan"
      }
    ]
  },
  {
    "id": "SRV-024",
    "no": 24,
    "nama_pelanggan": "Arga",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Arga (hitam)",
    "seri_perangkat": "Asus X441N",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak menyala",
    "tgl_masuk": "5/8/2026",
    "tgl_update": "5/12/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/8/2026",
        "catatan": "Qc. semua aman kecuali charger rusak, windows agak berat, suara kresek dan camera kabur"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "QC ulang  semua aman kecuali lambat, suara kresek, keyboard arah panah kanan terangkat, kamera kabur & Windows blm di aktivasi sy sdh coba aktivasi tpi tdk bisa"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "SOP Inul tpi konfirmasi ke orangnya dlu"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "beli cas 19V 2,37A senin baru di ambil"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/9/2026",
        "catatan": "bawa ke CC2 lengkap dengan cas yang mau di beli 19v 2.37A"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/12/2026",
        "catatan": "sudah ambil, biaya 350rb Pembelian Cas  Asus 19V 1.75A CASH"
      }
    ]
  },
  {
    "id": "SRV-025",
    "no": 25,
    "nama_pelanggan": "Roi",
    "warna_unit": "-",
    "pelanggan_lengkap": "Roi",
    "seri_perangkat": "Laptop ASUS A450C",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek, tdk tampil",
    "tgl_masuk": "5/8/2026",
    "tgl_update": "5/8/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/8/2026",
        "catatan": "CANCEL sudah ambil, uang DP 300rb di  ganti dengan Case HDD & USB hub"
      }
    ]
  },
  {
    "id": "SRV-026",
    "no": 26,
    "nama_pelanggan": "Mamat",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Mamat (Hitam)",
    "seri_perangkat": "Laptop HP ProBook X360 11 G2 EE",
    "kategori": "Laptop / Notebook",
    "keluhan": "PEMBELIAN 1 UNIT LAPTOP",
    "tgl_masuk": "5/8/2026",
    "tgl_update": "6/17/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/8/2026",
        "catatan": "Sudah ambil pembayaran CASH 3,7jt"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "semua aman kcuali suara speaker melengking"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "instal win 10 terbaru"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "semua aman"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/23/2026",
        "catatan": "instal ulang win 10"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/23/2026",
        "catatan": "instal aplikasi"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/3/2026",
        "catatan": "instal ulang win 10"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "cek dan backup data dan rename"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/3/2026",
        "catatan": "cek semua aman"
      },
      {
        "step": 10,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/17/2026",
        "catatan": "instal ulang"
      }
    ]
  },
  {
    "id": "SRV-027",
    "no": 27,
    "nama_pelanggan": "Dewi",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Dewi (hitam)",
    "seri_perangkat": "Laptop asus P1401M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Mati Total",
    "tgl_masuk": "5/9/2026",
    "tgl_update": "5/9/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "CANCEL sudah ambil, uang DP 1jt di ganti jdi DP Laptop Lenovo Thinkpad X270"
      }
    ]
  },
  {
    "id": "SRV-028",
    "no": 28,
    "nama_pelanggan": "Dewi",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Dewi (hitam)",
    "seri_perangkat": "Laptop Lenovo Thinkpad X270",
    "kategori": "Laptop / Notebook",
    "keluhan": "PEMBELIAN 1 UNIT LAPTOP",
    "tgl_masuk": "5/9/2026",
    "tgl_update": "5/9/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "sudah ambil, bayar lunas 2,7jt"
      }
    ]
  },
  {
    "id": "SRV-029",
    "no": 29,
    "nama_pelanggan": "Koperasi",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Koperasi (hitam)",
    "seri_perangkat": "Printer Epson L3210",
    "kategori": "Printer",
    "keluhan": "kedap-kedip merah tdk bisa memprint & tinta banjir",
    "tgl_masuk": "5/9/2026",
    "tgl_update": "5/12/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "test print cuma jln sbntar lngsung tersangkut & indikator kedap-kedip"
      },
      {
        "step": 2,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "bawa ke PB"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "Test print aman kecuali tinta hitam mau hbis.."
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "sudah ambil pembayaran CASH 500rb"
      }
    ]
  },
  {
    "id": "SRV-030",
    "no": 30,
    "nama_pelanggan": "Pak Agusman",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Pak Agusman (hitam)",
    "seri_perangkat": "Laptop Lenovo Thinkpad T450",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk windows",
    "tgl_masuk": "5/9/2026",
    "tgl_update": "5/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Ardin",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "Pak Agusman UMB semua aman kecuali keyboard bermasalah hampir semua tombol jdi"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/9/2026",
        "catatan": "sudah backup data tinggal install"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/10/2026",
        "catatan": "QC. Ulang LAPTOP Lenovo,  Semua aman kecuali keyboard error, suara (driver ada tapi tidak ada suara), agak lecet (Terbuka) casing Bagian kiril"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/10/2026",
        "catatan": "sudah instal ulang windows 10 gpt 64 bit, dan update windows QC. Semua aman kecuali Keyboard masih error dan suara tidak ada"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/16/2026",
        "catatan": "Aman semua.. sdh ganti keyboard"
      },
      {
        "step": 6,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/18/2026",
        "catatan": "hibrian bawa dikampus"
      }
    ]
  },
  {
    "id": "SRV-031",
    "no": 31,
    "nama_pelanggan": "An. ani/nur",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "An. ani/nur (Silver)",
    "seri_perangkat": "Laptop HP 15s-du3577TU",
    "kategori": "Laptop / Notebook",
    "keluhan": "Instal Ulang dan cek. cepat panas",
    "tgl_masuk": "5/9/2026",
    "tgl_update": "5/16/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/9/2026",
        "catatan": "QC, Semua aman Kecuali Body di bagian samping kanan layar agak lecet/pecah"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "QC ulang semua aman kecuali pas di nyalakan ada notif fan/kipas eror.."
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/12/2026",
        "catatan": "jika instal ulang win 11 gpt pakai driver tambahan"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/15/2026",
        "catatan": "back up data c dan d dan instal ulang windows 11"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/16/2026",
        "catatan": "QC ulang/validasi ulang semua Aman kecuali setiap di nyalakan muncul notif \"fan eror\" Berikut spesifikasi nya.."
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/16/2026",
        "catatan": "Sudah ambil,pengerjaan install & pembelian Cooling Pad x-850 pembayaran Via QRIS BNI"
      }
    ]
  },
  {
    "id": "SRV-032",
    "no": 32,
    "nama_pelanggan": "An. Irfan",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "An. Irfan (Hitam)",
    "seri_perangkat": "Laptop Toshiba Satellite L510",
    "kategori": "Laptop / Notebook",
    "keluhan": "wifi error/tidak terkoneksi dan bluetooth error",
    "tgl_masuk": "5/10/2026",
    "tgl_update": "5/14/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/10/2026",
        "catatan": "QC, semua aman kecuali wifi tidak terkoneksi, bluetooth error, tidak ada suara, baterai tidak mengisi, usb satu tidak terbaca"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/10/2026",
        "catatan": "Instal ulang windows 10 (MBR) driver stuck/ lama terinstal (shutdown)"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/11/2026",
        "catatan": "Instal ulang windows 8, 7, wifi masih tidak bisa atau silang. kadang bluescreen"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "sudah ambil, biaya cas 50rb CASH"
      }
    ]
  },
  {
    "id": "SRV-033",
    "no": 33,
    "nama_pelanggan": "An. Hasan",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "An. Hasan (Hitam)",
    "seri_perangkat": "Laptop Acer Z1402",
    "kategori": "Laptop / Notebook",
    "keluhan": "Lampu indikator menyala tapi tidak tampil",
    "tgl_masuk": "5/10/2026",
    "tgl_update": "5/14/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/10/2026",
        "catatan": "Laptop Hasan acer layar terbelah dan masuk bios terus"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/14/2026",
        "catatan": "cek kesehatan hdd 100%& backup data c lalu rename"
      }
    ]
  },
  {
    "id": "SRV-034",
    "no": 34,
    "nama_pelanggan": "An. Hasan",
    "warna_unit": "Biru tua",
    "pelanggan_lengkap": "An. Hasan (Biru tua)",
    "seri_perangkat": "Laptop Asus Vivobook A1404Z",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "5/10/2026",
    "tgl_update": "5/10/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/10/2026",
        "catatan": "tidak menyala"
      }
    ]
  },
  {
    "id": "SRV-035",
    "no": 35,
    "nama_pelanggan": "An. Wa Sandia",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "An. Wa Sandia (Silver)",
    "seri_perangkat": "Laptop Acer Aspire 3 A314",
    "kategori": "Laptop / Notebook",
    "keluhan": "Windows Rusak (02:30)",
    "tgl_masuk": "5/11/2026",
    "tgl_update": "5/12/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Hibrian",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/11/2026",
        "catatan": "Bongkar cek ssd (100%) dan backup data C, Instal Ulang windows 11"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/11/2026",
        "catatan": "Instal Ulang win 11, Qc. semua aman tinggal tunggu besok orangnya ambil"
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/12/2026",
        "catatan": "Biaya 150 rb, tindakan : install dan backup"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "sudah ambil, pembayaran CASH 150rb"
      }
    ]
  },
  {
    "id": "SRV-036",
    "no": 36,
    "nama_pelanggan": "An. Pak Faiz",
    "warna_unit": "Merah",
    "pelanggan_lengkap": "An. Pak Faiz (Merah)",
    "seri_perangkat": "Laptop Acer Aspire A314",
    "kategori": "Laptop / Notebook",
    "keluhan": "volume tdk ada",
    "tgl_masuk": "5/12/2026",
    "tgl_update": "5/14/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Arif",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/12/2026",
        "catatan": "QC. Semua aman kecuali suara tidak ada dan tombol ctrl sebelah kiri TDK berfungsi"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "Backup Data C ke D tinggal install"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "install win 11 GPT 64bit"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "semua aman kecuali tombol Ctrl sebela kiri tdk jdi & 1 slot usb tdk jdi.."
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "orang nya bawa kembali keluhan buka word tampilan LCD bermain"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "hapus office 2013 & install office 2019, cek aman sekaligus install driver printer & tes scan aman"
      },
      {
        "step": 7,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/14/2026",
        "catatan": "aktivasi office, sudah selesai dan sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-037",
    "no": 37,
    "nama_pelanggan": "An. Pak Faiz",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "An. Pak Faiz (hitam)",
    "seri_perangkat": "Printer Epson L3210",
    "kategori": "Printer",
    "keluhan": "scanner tdk bisa",
    "tgl_masuk": "5/12/2026",
    "tgl_update": "5/14/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "test print aman kecuali scanner tdk bisa"
      },
      {
        "step": 2,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/12/2026",
        "catatan": "dicek, malam tdk ini menyala."
      },
      {
        "step": 3,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/14/2026",
        "catatan": "instal,driver skenner"
      },
      {
        "step": 4,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/14/2026",
        "catatan": "sudah diambil, dgn kondisi sudah selesai,"
      }
    ]
  },
  {
    "id": "SRV-038",
    "no": 38,
    "nama_pelanggan": "ibu  tuti",
    "warna_unit": "abu-abu silver",
    "pelanggan_lengkap": "ibu  tuti (abu-abu silver)",
    "seri_perangkat": "Asus K451L",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek,lemah listrik skitaran 15 menit da mnyala trus da kedap kedip",
    "tgl_masuk": "5/12/2026",
    "tgl_update": "5/22/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Ardin",
      "Fazrun",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "QC,  semua aman kecuali baterai tdk mngisi."
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/14/2026",
        "catatan": "QC,  semua aman kecuali baterai tdk mngisi speaker bunyi sebelah"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "ganti batrei"
      },
      {
        "step": 4,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/22/2026",
        "catatan": "dicek ulang setelah pasang batrei baru semua aman kecuali spiker bunyi hanya sebelah. sudah diambl"
      }
    ]
  },
  {
    "id": "SRV-039",
    "no": 39,
    "nama_pelanggan": "Firman",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Firman (hitam)",
    "seri_perangkat": "Asus X441N",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "5/12/2026",
    "tgl_update": "5/22/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "ihwal",
      "Arif",
      "Hibrian",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/12/2026",
        "catatan": "QC, semua aman kecuali baterai tdk jdi, lambat & keyboard bnyak yg tdk jdi"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "Kesehatan HDD 100%"
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/12/2026",
        "catatan": "Kesehatan HDD 100%, cek suhunya pakai sentinel juga"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/12/2026",
        "catatan": "hitung total data c, bagi partisi, laptopnya sangat lambat"
      },
      {
        "step": 5,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/14/2026",
        "catatan": "bongkar pasang keyboard baru, sudah selesai,,"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/15/2026",
        "catatan": "Install win 10 lite 64bit GPT,aman semua kecuali suara tdk ada, lambat,baterai tdk mengisi & pas di nyalain agak lama masuk tampilan menu (layar hitam) Kurang lebih sekitar hmpir 2 menit bru msuk win"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/15/2026",
        "catatan": "pindahkn data nya dri SSD CC ke laptopnya"
      },
      {
        "step": 8,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/21/2026",
        "catatan": "semua sudah aman kecuali, batrei tdk jadi, lambat,  dan datanya sudah di backup juga & suara tidak ada"
      },
      {
        "step": 9,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/22/2026",
        "catatan": "semua sudah aman kecuali, batrei tdk jadi, lambat,  dan datanya sudah di backup juga"
      }
    ]
  },
  {
    "id": "SRV-040",
    "no": 40,
    "nama_pelanggan": "Afy",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Afy (hitam)",
    "seri_perangkat": "Lenovo Thinkpad T460",
    "kategori": "Laptop / Notebook",
    "keluhan": "Kadang Layar error atau ganguan",
    "tgl_masuk": "5/12/2026",
    "tgl_update": "5/12/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/12/2026",
        "catatan": "QC, semua aman kecuali sempat nge-Freeze"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/12/2026",
        "catatan": "sudah ambil,Cancel"
      }
    ]
  },
  {
    "id": "SRV-041",
    "no": 41,
    "nama_pelanggan": "Ifan",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Ifan (Silver)",
    "seri_perangkat": "Acer Aspire A314-36P",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak menyala",
    "tgl_masuk": "5/12/2026",
    "tgl_update": "5/25/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/12/2026",
        "catatan": "coba pakai cas baru cc tetap tidak nyala juga"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "bongkar mainboard"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/25/2026",
        "catatan": "sudah diambil laptopnya garansi 1 bulan"
      }
    ]
  },
  {
    "id": "SRV-042",
    "no": 42,
    "nama_pelanggan": "sarif",
    "warna_unit": "hiam",
    "pelanggan_lengkap": "sarif (hiam)",
    "seri_perangkat": "Komputer Compaq CQ300C",
    "kategori": "PC / Komputer",
    "keluhan": "restart terus (8:10)",
    "tgl_masuk": "5/14/2026",
    "tgl_update": "5/20/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Arif",
      "ihwal",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/14/2026",
        "catatan": "restart terus dan bluescreen"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "bongkar, lepas mainboard B75 & kemudian pasang mainboard Sonic Bulldozer H61 + ganti pasta"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "test nyalakan,menyala tapi bluescreen"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "Sarif putar video cuma 2mnit lngsung gelap & bluescreen (install win 10 lite MBR belum install driver sama sekali)"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "pasang Processor bekas intel core i5 gen 2"
      },
      {
        "step": 6,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/14/2026",
        "catatan": "sudah dites menyala dari jam 3 sampai jam 5 lewat tetap aman,,"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/15/2026",
        "catatan": "test putar yt kuran lebih 2jam aman"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/16/2026",
        "catatan": "tes ganti processor awal menyala kemudian langsung mati (belum sempat tampil menu hnya loading di logo windows langsung mati)"
      },
      {
        "step": 9,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/16/2026",
        "catatan": "ganti pasta,prosesor baru  datang ,"
      },
      {
        "step": 10,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/16/2026",
        "catatan": "instal windows 10 gpt,  bluscern."
      },
      {
        "step": 11,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/16/2026",
        "catatan": "instal kembali windows 10 mbr stak di logo."
      },
      {
        "step": 12,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/16/2026",
        "catatan": "buka ganti prosesor bekas,( kasih kembali keprosesor yg kemarin) instal windows 10 mbr, sudah selesai instal..."
      },
      {
        "step": 13,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "instal aplikasi & cek ( semua aman kcuali usb bgian depan tidak berfungsi)"
      },
      {
        "step": 14,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "(ganti ke proc bru) stuck logo windows"
      },
      {
        "step": 15,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "(ganti mainboard ke mb RX7 + masih pakai proc bru) tetap stuck logo"
      },
      {
        "step": 16,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "(ganti dengan proc seken)bbrapa aman kcuali  USB bgian depan tdk jadi"
      }
    ]
  },
  {
    "id": "SRV-043",
    "no": 43,
    "nama_pelanggan": "Bapak fasel",
    "warna_unit": "-",
    "pelanggan_lengkap": "Bapak fasel",
    "seri_perangkat": "Laptop Toshiba Satelite L755",
    "kategori": "Laptop / Notebook",
    "keluhan": "lambat,tdk masuk win (8.40)",
    "tgl_masuk": "5/14/2026",
    "tgl_update": "5/14/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "test nyalakan tdk masuk win"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "bongkar, lepas HDD 9%"
      },
      {
        "step": 3,
        "teknisi": "Arif & ihwal",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "Pasang SSD CC, semua aman kecuali baterai tdk ada & salah satu engsel bermasalah"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "pasang SSD RX7 256GB"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "install win 10 lite MBR, semua aman kecuali engsel sebelah kanan bermasalah & 1 port USB tdk jdi."
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/14/2026",
        "catatan": "sudah ambil, pembayaran 1,5jt CASH pengerjaan ganti SSD 256GB & pesan baterai"
      }
    ]
  },
  {
    "id": "SRV-044",
    "no": 44,
    "nama_pelanggan": "CC",
    "warna_unit": "-",
    "pelanggan_lengkap": "CC",
    "seri_perangkat": "laptop HP CC",
    "kategori": "Laptop / Notebook",
    "keluhan": "keybord, banyak tdk jadi",
    "tgl_masuk": "5/14/2026",
    "tgl_update": "5/14/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/14/2026",
        "catatan": "bongkar , ganti keyboar baru."
      },
      {
        "step": 2,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/14/2026",
        "catatan": "sudah selesai, dan sudah, dibeli.."
      }
    ]
  },
  {
    "id": "SRV-045",
    "no": 45,
    "nama_pelanggan": "hikma",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "hikma (hitam)",
    "seri_perangkat": "Laptop Asus BR1100CK",
    "kategori": "Laptop / Notebook",
    "keluhan": "Keluhan nya baru menyala sbntar langsung mati bru di nyala kn lgi tdk mau mnyala & klu gunakan word agak lama langsung tiba-tiba terkunci..",
    "tgl_masuk": "5/15/2026",
    "tgl_update": "5/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/15/2026",
        "catatan": "QC, semua Aman kecuali lambat, suara kresek, tombol on/off terlepas & tombol volume terlepas + DATA C FULL (MERAH) berikut spesifikasi & kesehatan SSD 100%,ini sdh tes mati 3 kali aman tpi sempat bluescreen 1 kali."
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/18/2026",
        "catatan": "konfirmasi biaya dan sarankan hapus sebagaian file yang tidak penting"
      }
    ]
  },
  {
    "id": "SRV-046",
    "no": 46,
    "nama_pelanggan": "Munarsi",
    "warna_unit": "hitam biru",
    "pelanggan_lengkap": "Munarsi (hitam biru)",
    "seri_perangkat": "Notebook Acer Aspire One D270",
    "kategori": "Laptop / Notebook",
    "keluhan": "install",
    "tgl_masuk": "5/16/2026",
    "tgl_update": "5/16/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "ihwal",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/16/2026",
        "catatan": "QC, aman semua kecuali lambat.. Suara tdk jadi"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/16/2026",
        "catatan": "QC ulang, Aman semua kecuali suara tdk ada Kesehatan HDD 100%"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/16/2026",
        "catatan": "install win 7 32bit MBR"
      },
      {
        "step": 4,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/16/2026",
        "catatan": "di QC desudah di instal ,Sudah di tes matikan 3x , Semua aman kecuali suara tdk jadi, dan agak lambat."
      }
    ]
  },
  {
    "id": "SRV-047",
    "no": 47,
    "nama_pelanggan": "Alkafariz",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Alkafariz (hitam)",
    "seri_perangkat": "Acer Aspire One 14 z1402",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti batrei",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "6/1/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Fazrun",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/18/2026",
        "catatan": "QC, aman semua kecuali windows lambat atau lag dan batrei 0%. dengan saat dinyalakan masuk bios dulu"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/30/2026",
        "catatan": "setelah ganti batrei QC semua aman kecuali windows berat/laq, kesehatan HDD 100%"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "bongkar & ganti batrei"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/31/2026",
        "catatan": "upgrade ram 4 gb dan ssd 128 gb, aman semua tinggal tunggu orangnya saja ambil bayar 1 jt"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/1/2026",
        "catatan": "instal aplikasi standar dan cek. semua aman"
      },
      {
        "step": 6,
        "teknisi": "Tia & Ardin",
        "teknisi_utama": "Tia",
        "tanggal": "6/1/2026",
        "catatan": "sudah di ambil. ( yang layani ardin dan tia )"
      }
    ]
  },
  {
    "id": "SRV-048",
    "no": 48,
    "nama_pelanggan": "umar",
    "warna_unit": "merah",
    "pelanggan_lengkap": "umar (merah)",
    "seri_perangkat": "laptop acer ES1-131",
    "kategori": "Laptop / Notebook",
    "keluhan": "mati total/ tidak menyala",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "5/22/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Fazrun",
      "Ardin",
      "Arif",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "korslet ( tes dibelakang)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "bongkar mainboard"
      },
      {
        "step": 3,
        "teknisi": "Fazrun & Ardin",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "baku tukar mainboard dengn punya CC *ram & hardisk pakai punya orang nya"
      },
      {
        "step": 4,
        "teknisi": "Fazrun & Ardin",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "tampil di eksternal tapi di LCD asli tdk tampil"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "buka LCD + tes pakai LCD a.n zul *LCD zul gelap"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "(rapikan semula & tes nyalakan) sempat tampil normal tapi belum masuk windows *tes nyalakan kedua kali  hnya indikator yg menyala tapi tampilan tdk ada"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/21/2026",
        "catatan": "semua aman kecuali lambat sekali, keyboard bermasalah bnyk yg tdk jdi & tertekan sendiri, & baterai tanda silang."
      },
      {
        "step": 8,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/21/2026",
        "catatan": "Seris mainboard short 19v, ganti ic 3,5v, belum bisa sw"
      },
      {
        "step": 9,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/21/2026",
        "catatan": "Bongkar, lepas HDD & cek sentinel 100%, kemudian pasang kembali pake SSD CC indikator menyala tapi tdk tampil sebelum nya pke HDD asli nya tampil tapi agak lama"
      },
      {
        "step": 10,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/21/2026",
        "catatan": "Bongkar, lepas SSD CC kemudian pasang kembali HDD asli nya & rapikan"
      },
      {
        "step": 11,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/21/2026",
        "catatan": "baku tukar mainboard dengan NB CC & CEK semua aman kecuali touchpad tdk jdi & wlan kurang nangkap sinyal nya.."
      },
      {
        "step": 12,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "bbrapa aman kcuali lambat & touchpad tidak jadi ( ganti kabel wlan card pakai punya CC)"
      },
      {
        "step": 13,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-049",
    "no": 49,
    "nama_pelanggan": "santi",
    "warna_unit": "biru",
    "pelanggan_lengkap": "santi ( biru)",
    "seri_perangkat": "Laptop Acer aspire ES1-432",
    "kategori": "Laptop / Notebook",
    "keluhan": "mati total",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "5/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "korslet ( tes dibelakang)"
      }
    ]
  },
  {
    "id": "SRV-050",
    "no": 50,
    "nama_pelanggan": "Hedi",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Hedi (hitam)",
    "seri_perangkat": "Acer Aspire 3 A314-41",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek (mati total)",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "6/20/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/18/2026",
        "catatan": "Qc.  semua aman kecuali saat pertama kali dinyalakan tidak mau menyala/TDK respon, setelah menunggu lama bisa menyala, keyboard nya tombol di samping satu tertekan"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/20/2026",
        "catatan": "pasang mainboard tes nyalakan tdk mneyala"
      }
    ]
  },
  {
    "id": "SRV-051",
    "no": 51,
    "nama_pelanggan": "trias",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "trias (hitam)",
    "seri_perangkat": "laptop Lenovo think pad x260",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak tampil, hnya indikator yang menyala",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "5/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "bongkar, bersihkan ram (tampil)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "(QC) aman smua kecuali bbrpa keyboard tda jadi + suara kresek sikit sja"
      },
      {
        "step": 3,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/18/2026",
        "catatan": "di cek tdk tampil juga external."
      }
    ]
  },
  {
    "id": "SRV-052",
    "no": 52,
    "nama_pelanggan": "sukran",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "sukran (hitam)",
    "seri_perangkat": "Laptop Toshiba C55-B",
    "kategori": "Laptop / Notebook",
    "keluhan": "layar kedap-kedip",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "5/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "smua aman kcuali LCD kedip² & engsel kurang kuat"
      }
    ]
  },
  {
    "id": "SRV-053",
    "no": 53,
    "nama_pelanggan": "abdil",
    "warna_unit": "silver",
    "pelanggan_lengkap": "abdil (silver)",
    "seri_perangkat": "Laptop Acer Aspire 3 A314",
    "kategori": "Laptop / Notebook",
    "keluhan": "mati total",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "5/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "bongkar mainboard"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "pasang mainbord (rapikan)"
      }
    ]
  },
  {
    "id": "SRV-054",
    "no": 54,
    "nama_pelanggan": "ifan",
    "warna_unit": "silver",
    "pelanggan_lengkap": "ifan (silver)",
    "seri_perangkat": "Laptop Acer Aspire A314-36p",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak menyala",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "5/25/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/18/2026",
        "catatan": "bongkar mainboard"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "pasang mainboard"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "(QC) semua aman"
      }
    ]
  },
  {
    "id": "SRV-055",
    "no": 55,
    "nama_pelanggan": "CC, merah",
    "warna_unit": "-",
    "pelanggan_lengkap": "CC, merah",
    "seri_perangkat": "Acer aspire ES1-431",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "5/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/18/2026",
        "catatan": "cek , wifi tdk bisa konek"
      },
      {
        "step": 2,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/18/2026",
        "catatan": "instal win 8.1 QC , semua aman kecuali, layar bergaris, suara tdk ada, batrei tdk ada sama (tombol 8 dan f) tdk bisa ditekan"
      }
    ]
  },
  {
    "id": "SRV-056",
    "no": 56,
    "nama_pelanggan": "CC.  hitam",
    "warna_unit": "-",
    "pelanggan_lengkap": "CC.  hitam",
    "seri_perangkat": "Acer aspire ES1-431",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "5/18/2026",
    "tgl_update": "5/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/18/2026",
        "catatan": "Di cek menyala tapi tdk masuk windows"
      }
    ]
  },
  {
    "id": "SRV-057",
    "no": 57,
    "nama_pelanggan": "Vicky",
    "warna_unit": "orange",
    "pelanggan_lengkap": "Vicky (orange)",
    "seri_perangkat": "Laptop Asus VivoBook 14",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak tampil",
    "tgl_masuk": "5/19/2026",
    "tgl_update": "5/19/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/19/2026",
        "catatan": "cek ada arus tapi tidak menyala"
      }
    ]
  },
  {
    "id": "SRV-058",
    "no": 58,
    "nama_pelanggan": "Salsabila",
    "warna_unit": "-",
    "pelanggan_lengkap": "Salsabila",
    "seri_perangkat": "Lenovo Thinkpad T460",
    "kategori": "Laptop / Notebook",
    "keluhan": "Keyboard bermasalah & word minta di aktivasi",
    "tgl_masuk": "5/19/2026",
    "tgl_update": "5/20/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Arif",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/19/2026",
        "catatan": "aktivasi office"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/19/2026",
        "catatan": "bongkar, lepas keyboard  & bersihkan"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/19/2026",
        "catatan": "pasang kembali & cek tetap sama keyboard bermaslah"
      },
      {
        "step": 4,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/20/2026",
        "catatan": "Ganti pakai keyboard laptop bekas lain, yang lain nnti di belikan yang baru"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/20/2026",
        "catatan": "aman semua sdh baku ganti keyboard dengan L470 punya CC"
      }
    ]
  },
  {
    "id": "SRV-059",
    "no": 59,
    "nama_pelanggan": "yusra",
    "warna_unit": "biru,hitam",
    "pelanggan_lengkap": "yusra  (biru,hitam)",
    "seri_perangkat": "acer aspire V5 132",
    "kategori": "Laptop / Notebook",
    "keluhan": "Instal",
    "tgl_masuk": "5/19/2026",
    "tgl_update": "5/20/2026",
    "link_fb": "",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/19/2026",
        "catatan": "stuck di logo Acer dan lambat masuk bios, cek kesehatan hdd tidak bisa terabaca di komputer lain"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/19/2026",
        "catatan": "test pakai ssd cc semua aman"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/20/2026",
        "catatan": "QC ulang & matikan 3kali an semua"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/20/2026",
        "catatan": "bongkar, pasang kembali HDD orangnya CANCEL"
      }
    ]
  },
  {
    "id": "SRV-060",
    "no": 60,
    "nama_pelanggan": "filda",
    "warna_unit": "silver",
    "pelanggan_lengkap": "filda (silver)",
    "seri_perangkat": "Laptop Lenovo Ideapad 1 14|GL7",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti casing & instal",
    "tgl_masuk": "5/19/2026",
    "tgl_update": "5/19/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/19/2026",
        "catatan": "semua aman kcuali casing retak (cek)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/19/2026",
        "catatan": "ganti casing (yang diganti casing bgian keyboard & bgian bawah saja *casing bgian LCD tdk jadi diganti krna ada kendala karet putus)"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/19/2026",
        "catatan": "semua aman kcuali bgian casing atas *bgian keyboard..retak (sudah pasang casing yang baru)"
      }
    ]
  },
  {
    "id": "SRV-061",
    "no": 61,
    "nama_pelanggan": "elin",
    "warna_unit": "silver",
    "pelanggan_lengkap": "elin (silver)",
    "seri_perangkat": "Laptop Lenovo Ideapad 1 14MN07",
    "kategori": "Laptop / Notebook",
    "keluhan": "engsel patah",
    "tgl_masuk": "5/19/2026",
    "tgl_update": "5/19/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/19/2026",
        "catatan": "semua aman casing bgian LCD terbuka (cek)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/19/2026",
        "catatan": "tidak bisa/cocok (ganti paka casing bgian LCD yg bru)"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/19/2026",
        "catatan": "rapikan"
      }
    ]
  },
  {
    "id": "SRV-062",
    "no": 62,
    "nama_pelanggan": "Zul",
    "warna_unit": "silver",
    "pelanggan_lengkap": "Zul (silver)",
    "seri_perangkat": "Notebook Acer Aspire E3-112",
    "kategori": "Laptop / Notebook",
    "keluhan": "indikator kedap-kedip & menyala tampi tdk tampil",
    "tgl_masuk": "5/20/2026",
    "tgl_update": "5/22/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun",
      "ihwal"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/20/2026",
        "catatan": "Cek, indikator menyala tpi tdk tampil.. Sdh sy cek klu pke cas asli ny indikator kedap-kedip, sy tes ganti cas lain bisa menyala tapi hnya sampai logo windows langsung gelap layar.."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/20/2026",
        "catatan": "Bongkar, Lepas HDD & pasang SSD CC"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/20/2026",
        "catatan": "Cek HDD 100%, tes pasang SSD CC juga sama hbis tampil logo Acer langsung layar gelap kecuali di senter  tapi kadang tiba-tiba terang sendiri & tampil jelas.."
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "(tes pakai LCD test) tampil *tes pakai LCD asli gelap"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "(tes LCD dilaptop a.n umar) LCD mmng gelap juga"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/20/2026",
        "catatan": "(rapikan dalam keadaan msih pakai SSD CC)"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "5/20/2026",
        "catatan": "Bongkar, lepas SSD CC kemudian pasang kembali HDD asli nya & rapikan"
      },
      {
        "step": 8,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/21/2026",
        "catatan": "QC ,sudak dites matikan 3x ,Semua aman kecuali, touchpad kadang bisa kadang tdk bisa di gerakin , dan agak lambat,.."
      },
      {
        "step": 9,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "instal win 7 64bit"
      },
      {
        "step": 10,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "(tampil hanya ada garis di tengah LCD) pasang LCD nb cc warna pink"
      },
      {
        "step": 11,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/22/2026",
        "catatan": "semua aman kcuali LCD ada garis ditengah, touchpad kadang jadi kadang tidak & lumyan lambat (cek )"
      }
    ]
  },
  {
    "id": "SRV-063",
    "no": 63,
    "nama_pelanggan": "Ijal",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Ijal (Hitam)",
    "seri_perangkat": "Lenovo Ideapad 320",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "5/23/2026",
    "tgl_update": "6/1/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/23/2026",
        "catatan": "windows lambat, batrei silang, tidak bisa terkoneksi di wifi, USB satu tidak terbaca, suara kecil dan kresek, keyboard belum di cek semua karena tidak bisa terhubung di dinternet dan tidak ada office dan kesehatan HDD 99%"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/1/2026",
        "catatan": "rename, backp data c dan instal ulang"
      }
    ]
  },
  {
    "id": "SRV-064",
    "no": 64,
    "nama_pelanggan": "hasri",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "hasri,(hitam)",
    "seri_perangkat": "Acer Aspire ES1-432-C8ZP",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal ulang",
    "tgl_masuk": "5/23/2026",
    "tgl_update": "5/23/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "ihwal",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "ihwal",
        "teknisi_utama": "ihwal",
        "tanggal": "5/23/2026",
        "catatan": "𝗱𝗶𝗰𝗲𝗸 𝘀𝗲𝗺𝘂𝗮 𝗮𝗺𝗮𝗻 𝗸𝗲𝗰𝘂𝗮𝗹𝗶 𝗯𝗮𝘁𝗿𝗲𝗶 𝘁𝗱𝗸 𝗷𝗮𝗱𝗶 𝗹𝗮𝗺𝗯𝗮𝘁 𝘀𝗲𝗸𝗮𝗹𝗶 𝗱𝗮𝗻 𝗲𝗻𝗴𝘀𝗲𝗹 𝗸𝗮𝗻𝗮𝗻 𝗽𝗮𝘁𝗮𝗵."
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/23/2026",
        "catatan": "bongkar cek HDD 100%"
      }
    ]
  },
  {
    "id": "SRV-065",
    "no": 65,
    "nama_pelanggan": "nurul",
    "warna_unit": "silver kebiruan",
    "pelanggan_lengkap": "nurul (silver kebiruan)",
    "seri_perangkat": "Laptop Acer  A514-53-3852",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti casing",
    "tgl_masuk": "5/23/2026",
    "tgl_update": "5/30/2026",
    "link_fb": "",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Fazrun",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/23/2026",
        "catatan": "semua aman kcuali engsel terbuka, penyok, touchpad kdng tdk fast respon & suara kecil + kresek"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "5/30/2026",
        "catatan": "sudah diambil, cancel"
      }
    ]
  },
  {
    "id": "SRV-066",
    "no": 66,
    "nama_pelanggan": "ijal",
    "warna_unit": "silver",
    "pelanggan_lengkap": "ijal (silver)",
    "seri_perangkat": "Laptop Lenovo Ideapad 320",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "5/23/2026",
    "tgl_update": "6/2/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/23/2026",
        "catatan": "(QC) bbrapa aman kcuali speaker kcil + kresek, batrei tda jdi (keyboard ada indikasi tertekan *sejauh ini blum di dpt lgi)"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/1/2026",
        "catatan": "tidak ada data c, layar kadang hitam kemudian kembali lagi, suka tertekan sendiri, lambat, suara kecil dan kresek , batrei tidak jadi"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/1/2026",
        "catatan": "ganti keyboard dan instal ulang  cek model dan seri batrei"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/1/2026",
        "catatan": "Keyboard sudah di ganti aman, lambat, batrei sementara di cek ( mengisi )"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/1/2026",
        "catatan": "Lepas batrei. Sudha dicoba ksih mati menyala, kalau di colokan cas menyala sndiri ( tanpa tekan tombol on off )"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/2/2026",
        "catatan": "instal windows"
      }
    ]
  },
  {
    "id": "SRV-067",
    "no": 67,
    "nama_pelanggan": "Agil",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Agil (Hitam)",
    "seri_perangkat": "Laptop Lenovo Ideapad 110-14BR",
    "kategori": "Laptop / Notebook",
    "keluhan": "Instal Ulang",
    "tgl_masuk": "5/24/2026",
    "tgl_update": "5/25/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/24/2026",
        "catatan": "Qc. semua aman kecuali batrei stuck di 0%, dan tidak bisa klik taksbar"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "5/24/2026",
        "catatan": "back  up data c agil dan rename, instal windows 10 pro 64 bit"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "bbrapa aman kcuali batrei tidak jadi"
      }
    ]
  },
  {
    "id": "SRV-068",
    "no": 68,
    "nama_pelanggan": "CC",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "CC (hitam)",
    "seri_perangkat": "laptop thinkpad T470",
    "kategori": "Laptop / Notebook",
    "keluhan": "-",
    "tgl_masuk": "5/25/2026",
    "tgl_update": "5/25/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "bongkar + baku tukar mainboard (tukar dengan T470 CC yg sebelumnya berkendala tdk mau mati)"
      }
    ]
  },
  {
    "id": "SRV-069",
    "no": 69,
    "nama_pelanggan": "CC",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "CC (hitam)",
    "seri_perangkat": "nb lenovo thinkpad X270",
    "kategori": "Laptop / Notebook",
    "keluhan": "-",
    "tgl_masuk": "5/25/2026",
    "tgl_update": "5/25/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "backup data & instal"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "(QC) semua aman"
      }
    ]
  },
  {
    "id": "SRV-070",
    "no": 70,
    "nama_pelanggan": "agung",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "agung (hitam)",
    "seri_perangkat": "laptop lenovo X1 carbon",
    "kategori": "Laptop / Notebook",
    "keluhan": "keyboard tidk jadi",
    "tgl_masuk": "5/25/2026",
    "tgl_update": "5/25/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "bbrapa aman kcuali keyboard tidk jadi  (sebelumnya sempat jadi smua)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "instal win 11 & backup data"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "belum bisa dicek ( keyboard tidk jadi + di eksternal juga tdak bisa)"
      }
    ]
  },
  {
    "id": "SRV-071",
    "no": 71,
    "nama_pelanggan": "hasirun",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "hasirun (hitam)",
    "seri_perangkat": "printer epson L3210",
    "kategori": "Printer",
    "keluhan": "cek catridge",
    "tgl_masuk": "5/30/2026",
    "tgl_update": "5/30/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "( test reset) msih kedap-kedip"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "kedap kedip ( sudah tes reset tapi tetap sama)"
      }
    ]
  },
  {
    "id": "SRV-072",
    "no": 72,
    "nama_pelanggan": "armin",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "armin (hitam)",
    "seri_perangkat": "Laptop lenovo  G4080",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek LCD & keyboard",
    "tgl_masuk": "5/30/2026",
    "tgl_update": "5/30/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "bbrapa aman kcuali touchpad kdg jadi/tdk(kemungkinan krna efek keyboard tertekan) , keyboard ada yg tertindis + tdk jadi, layar kusam & sdkit lambat"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "tampil jernih (tes pakai LCD CC)"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "bongkar (cek keyboard )"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "rapikan"
      }
    ]
  },
  {
    "id": "SRV-073",
    "no": 73,
    "nama_pelanggan": "dian",
    "warna_unit": "abu abu",
    "pelanggan_lengkap": "dian (abu abu)",
    "seri_perangkat": "Laptop Advan  Soulmate 1405",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak tampil",
    "tgl_masuk": "5/30/2026",
    "tgl_update": "6/23/2026",
    "link_fb": "",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "bongkar bersihkan ram (tampil) blum masuk win"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "tes pakai ram CC ( tampil juga) blum msuk win"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/30/2026",
        "catatan": "backup data di laptop CC & tes masuk bios (blum bisa masuk bios)"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/31/2026",
        "catatan": "bongkar mainboard"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "pasang mainboard (cancel)"
      }
    ]
  },
  {
    "id": "SRV-074",
    "no": 74,
    "nama_pelanggan": "Matraf",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Matraf (hitam)",
    "seri_perangkat": "Komputer Dell W19B",
    "kategori": "PC / Komputer",
    "keluhan": "CEK HARDISK",
    "tgl_masuk": "6/2/2026",
    "tgl_update": "6/2/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/2/2026",
        "catatan": "cek HDD tdk terbaca"
      }
    ]
  },
  {
    "id": "SRV-075",
    "no": 75,
    "nama_pelanggan": "Saiful",
    "warna_unit": "Biru",
    "pelanggan_lengkap": "Saiful (Biru)",
    "seri_perangkat": "Notebook Acer Aspire V5-132",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk windows",
    "tgl_masuk": "6/2/2026",
    "tgl_update": "6/4/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/2/2026",
        "catatan": "bongkar, cek HDD tdk terbaca"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/3/2026",
        "catatan": "semua aman kecuali pas di colokan cas langsung menyala, baterai tdk mngisi 0%,layar pojok kanan agak gelap & kamera tdk bisa TEST PAKE SSD CC"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/3/2026",
        "catatan": "tes pasang RAM 4GB DDR3 menyala tpi tes putar yt sekitar 5mnit lngsung mati..Lepas RAM 4GB DDR3 sama putar yt sbntar lngsung mati"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/3/2026",
        "catatan": "instal pakai ssd cc win 8 dan 10 mati mati. win 7 satu kali bluecreen"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/3/2026",
        "catatan": "batrei tidak jadi, hardisk tidak terbaca, lcd bgian ujung hitam,"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/3/2026",
        "catatan": "tambah ram 4gb ( lepas soket batrei)"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/3/2026",
        "catatan": "pasang soket batrei dan lepas ram 4 gb  ( tidak nyala )"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "cleaning & ganti pasta"
      },
      {
        "step": 9,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "tes nyalakan (menyala sempat putar yt tapi 10 mnit kemudian mati)"
      },
      {
        "step": 10,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "tes pasang/lepas batrei tetap tidak nyala"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/4/2026",
        "catatan": "tidak nyala"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/4/2026",
        "catatan": "nyala, hanya tidak bisa masuk win ( masih pakai ssd cc) masuk bios mati"
      },
      {
        "step": 13,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/4/2026",
        "catatan": "sudah di ambil (blm di kembalikan dp nya ) kena cas 100rb"
      }
    ]
  },
  {
    "id": "SRV-076",
    "no": 76,
    "nama_pelanggan": "armin",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "armin (hitam)",
    "seri_perangkat": "Laptop lenovo  G4080",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek LCD & keyboard",
    "tgl_masuk": "6/1/2026",
    "tgl_update": "6/1/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/1/2026",
        "catatan": "bongkar ganti LCD & keyboard"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/1/2026",
        "catatan": "(cek) semua aman kcuali batrei nya cepat turun"
      }
    ]
  },
  {
    "id": "SRV-077",
    "no": 77,
    "nama_pelanggan": "matraf",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "matraf (hitam)",
    "seri_perangkat": "Komputer Dell W19B (inspiron 22-3280)",
    "kategori": "PC / Komputer",
    "keluhan": "cek hardisk",
    "tgl_masuk": "6/1/2026",
    "tgl_update": "6/3/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/1/2026",
        "catatan": "(tes pakai USB WIN) tidak terbaca"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/1/2026",
        "catatan": "(tes instal pakai ssd eksternal) tidak terbaca"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/2/2026",
        "catatan": "bongkar & pasang SSD CC"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/2/2026",
        "catatan": "instal win 10 lite mbr"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/2/2026",
        "catatan": "semua aman kcuali kamera tdk jadi"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/2/2026",
        "catatan": "psang HDD CC seken 500gb (100gb)"
      },
      {
        "step": 7,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/2/2026",
        "catatan": "instal win 10 lite mbr"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "(cek) semua aman kcuali kamera tdk jadi"
      },
      {
        "step": 9,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "sudah ambil,"
      }
    ]
  },
  {
    "id": "SRV-078",
    "no": 78,
    "nama_pelanggan": "Ijal",
    "warna_unit": "silver",
    "pelanggan_lengkap": "Ijal (silver)",
    "seri_perangkat": "Lenovo Ideapad 320",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "6/2/2026",
    "tgl_update": "6/2/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/2/2026",
        "catatan": "instal aplikasi"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/2/2026",
        "catatan": "bbrapa aman kcuali suara kecil + kresek, batrei tdk jadi & usb 1 tdk fungsi"
      }
    ]
  },
  {
    "id": "SRV-079",
    "no": 79,
    "nama_pelanggan": "Saiful",
    "warna_unit": "Biru",
    "pelanggan_lengkap": "Saiful (Biru)",
    "seri_perangkat": "Notebook Acer Aspire V5-132",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk windows",
    "tgl_masuk": "6/3/2026",
    "tgl_update": "6/3/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "cleaning & ganti pasta"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "tes nyalakan (menyala sempat putar yt tapi 10 mnit kemudian mati)"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "tes pasang/lepas batrei tetap tidak nyala"
      }
    ]
  },
  {
    "id": "SRV-080",
    "no": 80,
    "nama_pelanggan": "Firman",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Firman (hitam)",
    "seri_perangkat": "Asus X441N",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "6/3/2026",
    "tgl_update": "6/12/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "bongkar cleaning & ganti pasta"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "bbrapa aman kcuali speaker tdk jadi & batrei"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "rapikan"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "bbrapa aman kcuali speaker tdk jadi & batrei (touchpad nya tiba2 tdk jadi )"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "bongkar lepas pasang soket touchpad (blum jadi)"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "tes lepas/pasang soket touchpad lagi ( jadi)"
      },
      {
        "step": 7,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "lem speaker CC & pasang di laptop firman"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "speaker nya tetap tidak jadi"
      },
      {
        "step": 9,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "rapikan & pasang ulang smuanya"
      },
      {
        "step": 10,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/3/2026",
        "catatan": "bbrapa aman kcuali speaker tdk jadi & batrei (touchpad nya tiba2 tdk jadi lagi )"
      },
      {
        "step": 11,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/4/2026",
        "catatan": "bongkar tes lepas/pasang soket touchpad"
      },
      {
        "step": 12,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/4/2026",
        "catatan": "bbrapa aman kcuali speaker tdk jadi & batrei (touchpad nya tiba2 tdk jadi )"
      },
      {
        "step": 13,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/12/2026",
        "catatan": "aman semua kecuali agak lambat sedikit, baterai tdk mngisi & suara tdk ada"
      }
    ]
  },
  {
    "id": "SRV-081",
    "no": 81,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Lenovo Thinkpad E450",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "6/4/2026",
    "tgl_update": "6/4/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/4/2026",
        "catatan": "tes pakai keyb matraf (bbrapa aman kcuali tombol ada yg double terklik, ram terbaca 4gb di system tapi terbaca 8gb di speecy)"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/4/2026",
        "catatan": "bersihkan keyboard  & di pukul2 malah bnyk yg tdk jdi + bnyk tombol yg di tekan malah double terklik"
      }
    ]
  },
  {
    "id": "SRV-082",
    "no": 82,
    "nama_pelanggan": "nurul hidayah",
    "warna_unit": "silver",
    "pelanggan_lengkap": "nurul hidayah (silver)",
    "seri_perangkat": "Laptop asus A416J",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak nyala",
    "tgl_masuk": "6/4/2026",
    "tgl_update": "6/6/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/4/2026",
        "catatan": "cek di belakang tidak naik sama sekali ampernya"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/4/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/4/2026",
        "catatan": "pasang mainboard (menyala )tp ada pasword blm sempat di cek"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/4/2026",
        "catatan": "semua aman (cek)"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/6/2026",
        "catatan": "aman semua kecuali kamera agak buram"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/6/2026",
        "catatan": "sudah di cleaning dan ganti pasta cek semua aman kecuali tombolctrl sebelah kiri tdk jdi"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/6/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-083",
    "no": 83,
    "nama_pelanggan": "Malik",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Malik (Hitam)",
    "seri_perangkat": "Laptop HP Envy 13-ar0014AU",
    "kategori": "Laptop / Notebook",
    "keluhan": "Tidak Menyala",
    "tgl_masuk": "6/5/2026",
    "tgl_update": "6/14/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia",
      "Fazrun",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/5/2026",
        "catatan": "tdk menyala (indikator cas menyala)"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/5/2026",
        "catatan": "Bongkar, Mainboard"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/5/2026",
        "catatan": "pasng mainboard"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/5/2026",
        "catatan": "arus naik tapi tidak ada tampilan (tes nyala)"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/5/2026",
        "catatan": "nyala, bisa masuk windows ( lepas keyb & lepas batrei)"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/5/2026",
        "catatan": "tidak menyala (tes pasang keyboard & lepas batrei)"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/6/2026",
        "catatan": "semua aman kecuali baterai tdk terpasang & port USB sebelah kanan tdk jdi"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/6/2026",
        "catatan": "pasang baut nya kemudian tes nyalakan tdk menyala (indikator nyala tapi tdk tampil)"
      },
      {
        "step": 9,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/14/2026",
        "catatan": "periksa on/off (perbaiki) tapi lepas baterainya"
      }
    ]
  },
  {
    "id": "SRV-084",
    "no": 84,
    "nama_pelanggan": "hardiani",
    "warna_unit": "merah",
    "pelanggan_lengkap": "hardiani (merah)",
    "seri_perangkat": "Notebook Dell P25T",
    "kategori": "Laptop / Notebook",
    "keluhan": "blank, layar tiba tiba merah, instal",
    "tgl_masuk": "6/5/2026",
    "tgl_update": "6/6/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/5/2026",
        "catatan": "Keyboard Ada beberapa yg tidak jadi, dan tertekan sendiri, touchpad tidak jadi, batrei bermasalah ( bengkak), suara kresek, agak lambat sedikit, yang lain aman."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/6/2026",
        "catatan": "sudah di ambil jam 9.30"
      }
    ]
  },
  {
    "id": "SRV-085",
    "no": 85,
    "nama_pelanggan": "hardiani",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "hardiani (hitam)",
    "seri_perangkat": "cpu H61",
    "kategori": "PC / Komputer",
    "keluhan": "menyala tapi tidak tampil",
    "tgl_masuk": "6/5/2026",
    "tgl_update": "6/27/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/5/2026",
        "catatan": "semua aman sdh cek sentinel SSD & HDD ny 100%"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/5/2026",
        "catatan": "tes pakai kabel power & VGA orang nya (Tampil )"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/5/2026",
        "catatan": "tes mati nyala 3x  ( tampil normal)"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/6/2026",
        "catatan": "CPU hardiani di tes pake monitor aslinya & kabel VGA baru tdk tampil kalau di tes pake Monitor CC & kabel VGA CC tampil.."
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/6/2026",
        "catatan": "tes pake kabel VGA CC & monitor an hardiani tampil.."
      },
      {
        "step": 6,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/9/2026",
        "catatan": "pengecekkan lama dan ada mendalam dikenakan biaya 100 rb"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/11/2026",
        "catatan": "tes pake kabel VGA baru sempat tampil tpi hnya sbentar kemudian tdk tampil kemudian tes ganti pake kabel VGA CC langsung tampil"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/27/2026",
        "catatan": "tes pake kabel VGA baru merek MTECH tdk mau tampil"
      }
    ]
  },
  {
    "id": "SRV-086",
    "no": 86,
    "nama_pelanggan": "munawar",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "munawar ( hitam)",
    "seri_perangkat": "Laptop asus E410K (cas)",
    "kategori": "Laptop / Notebook",
    "keluhan": "mati total",
    "tgl_masuk": "6/6/2026",
    "tgl_update": "6/9/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Hibrian",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/6/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/7/2026",
        "catatan": "servis mainboard, nyala."
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/7/2026",
        "catatan": "tapi ganti pasta (diskon), sarankan hapus file data c sebagian"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/8/2026",
        "catatan": "ganti pasta dan cek"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/8/2026",
        "catatan": "semua aman sdh di tes 3jam, tetapi agak panas ( tdk ada fan )"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/8/2026",
        "catatan": "backup data c, tapi tidak bisa"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/8/2026",
        "catatan": "backup data c di ssd cc tetap tidak bisa"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/9/2026",
        "catatan": "sudah ambil, sisa DP/Bayar Lunas 700rb CASH"
      }
    ]
  },
  {
    "id": "SRV-087",
    "no": 87,
    "nama_pelanggan": "Sultan",
    "warna_unit": "-",
    "pelanggan_lengkap": "Sultan",
    "seri_perangkat": "Printer Epson L3110 (Hitam)",
    "kategori": "Printer",
    "keluhan": "Cek",
    "tgl_masuk": "6/8/2026",
    "tgl_update": "6/8/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/8/2026",
        "catatan": "tes print tdk bisa (indikator kedap-kedip merah) & suara nya kasar/keras sekali."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/8/2026",
        "catatan": "sudah ambil, cancel"
      }
    ]
  },
  {
    "id": "SRV-088",
    "no": 88,
    "nama_pelanggan": "Sultan",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Sultan (Hitam)",
    "seri_perangkat": "Laptop Lenovo Ideapad 130",
    "kategori": "Laptop / Notebook",
    "keluhan": "Upgrade SSD",
    "tgl_masuk": "6/7/2026",
    "tgl_update": "6/8/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/7/2026",
        "catatan": "semua aman, catatan keluhan orang bilang lambat, jadi upgrade ke SSD,"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/8/2026",
        "catatan": "aman semua kecuali agak lambat sedikit..BACKUP DATA"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/8/2026",
        "catatan": "instal"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/8/2026",
        "catatan": "aman semua"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/8/2026",
        "catatan": "sdh  ambil pembayaran 100rb Via TF BNI"
      }
    ]
  },
  {
    "id": "SRV-089",
    "no": 89,
    "nama_pelanggan": "ahmad daholu",
    "warna_unit": "silver",
    "pelanggan_lengkap": "ahmad daholu (silver)",
    "seri_perangkat": "MacBook  Pro 13",
    "kategori": "MacBook",
    "keluhan": "Upgarde RAM",
    "tgl_masuk": "6/9/2026",
    "tgl_update": "6/11/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Hibrian",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/9/2026",
        "catatan": "semua aman"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/9/2026",
        "catatan": "bongkar, pasang RAM 8GB DDR3"
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/9/2026",
        "catatan": "total ram 16gb, bisa dihubungi"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/11/2026",
        "catatan": "sudah ambil, pembayaran CASH 800rb"
      }
    ]
  },
  {
    "id": "SRV-090",
    "no": 90,
    "nama_pelanggan": "ibu nur daihatsu",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "ibu nur daihatsu (hitam)",
    "seri_perangkat": "CPU H110",
    "kategori": "PC / Komputer",
    "keluhan": "RAKIT CPU, Baru",
    "tgl_masuk": "6/9/2026",
    "tgl_update": "6/10/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/9/2026",
        "catatan": "pasang mainboard H110,Proc 15 gen 7,RAM 8GB DDR4,SSD 256GB & Casing Computer Varro Z4 (include PSU 500W)"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/9/2026",
        "catatan": "tes nyalakn, menyala install win 10 biasa 64bit GPT"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/9/2026",
        "catatan": "semua aman kecuali putar yt 15mnit mati2"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/9/2026",
        "catatan": "ganti pasta"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/9/2026",
        "catatan": "install win 10 lite 2004 64bit GPT semua aman tes yt 30mnit lebih aman tdk mati2 lagi"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "sudah ambil, pembayaran 6,5jt Via TF BNI"
      }
    ]
  },
  {
    "id": "SRV-091",
    "no": 91,
    "nama_pelanggan": "agung",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "agung (hitam)",
    "seri_perangkat": "laptop lenovo X1 carbon",
    "kategori": "Laptop / Notebook",
    "keluhan": "keyboard tidk jadi",
    "tgl_masuk": "5/25/2026",
    "tgl_update": "6/16/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun",
      "Ardin",
      "Hibrian",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "bbrapa aman kcuali keyboard tidk jadi  (sebelumnya sempat jadi smua)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "instal win 11 & backup data"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "5/25/2026",
        "catatan": "belum bisa dicek ( keyboard tidk jadi + di eksternal juga tdak bisa)"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/10/2026",
        "catatan": "QC. semua aman kecuali keyboard tombol alt tidak berfungsi dan tombol win tertekan"
      },
      {
        "step": 5,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/11/2026",
        "catatan": "perbaiki tuts win + install win 10, cek aman"
      },
      {
        "step": 6,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/12/2026",
        "catatan": "cek keyboard aman semua. win 10"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/16/2026",
        "catatan": "QC semua aman"
      }
    ]
  },
  {
    "id": "SRV-092",
    "no": 92,
    "nama_pelanggan": "CC",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "CC (hitam)",
    "seri_perangkat": "NoteBook Acer Travel Mate B117",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "6/10/2026",
    "tgl_update": "6/10/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Teknisi"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/10/2026",
        "catatan": "QC. semua aman kecuali layar bergaris dan ada bulat hitam dilayar  dan casing ada yang terbuka di bagian layar"
      },
      {
        "step": 2,
        "teknisi": "Teknisi",
        "teknisi_utama": "Teknisi",
        "tanggal": "6/10/2026",
        "catatan": "B"
      }
    ]
  },
  {
    "id": "SRV-093",
    "no": 93,
    "nama_pelanggan": "Najwan",
    "warna_unit": "biru",
    "pelanggan_lengkap": "Najwan (biru)",
    "seri_perangkat": "Notebook Acer Aspire One Q1VZC",
    "kategori": "Laptop / Notebook",
    "keluhan": "install ulang",
    "tgl_masuk": "6/10/2026",
    "tgl_update": "6/10/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "bongkar, cek HDD 95% & Backup Data"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "pasang SSD CC QC semua aman kecuali baterai tdk mngisi"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "pasang hdd asli kemudian install win 7 64bit MBR"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "aman semua kecuali baterai tdk mngisi"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "sudah ambil, pembayaran 150rb CASH"
      }
    ]
  },
  {
    "id": "SRV-094",
    "no": 94,
    "nama_pelanggan": "mus motor",
    "warna_unit": "silver",
    "pelanggan_lengkap": "mus motor (silver)",
    "seri_perangkat": "A314-35-P69E",
    "kategori": "Laptop / Notebook",
    "keluhan": "lcd garis dan keyb tertekan",
    "tgl_masuk": "6/10/2026",
    "tgl_update": "6/16/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Hibrian",
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/10/2026",
        "catatan": "belum QC, minta dp 700 rb"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/10/2026",
        "catatan": "ganti keyboard dan ganti lcd (kosong dipesankan)"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "Laptop sdh di ambil nnti di kabari klu sdh tiba keyboard nya"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/15/2026",
        "catatan": "ganti keyboard dan cek"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/16/2026",
        "catatan": "Semua aman kecuali LCD  \nbermasalah"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/16/2026",
        "catatan": "sudah ambil,"
      }
    ]
  },
  {
    "id": "SRV-095",
    "no": 95,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Lenovo Thinkpad E450",
    "kategori": "Laptop / Notebook",
    "keluhan": "Ganti Keyboard",
    "tgl_masuk": "6/10/2026",
    "tgl_update": "6/10/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "bongkar, pasang keyboard baru & cek semua aman"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "bongkar, pasang RAM 4GB DDR3L jdi total 8GB"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "tes nyalakan baterai tiba2 tdk mngisi & tiba2 langsung 100%"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/10/2026",
        "catatan": "Install win 10 biasa 64bit MBR tetap sama baterai eror (hrus di nyalakan pake cas)"
      }
    ]
  },
  {
    "id": "SRV-096",
    "no": 96,
    "nama_pelanggan": "MUNAWAR",
    "warna_unit": "biru tua",
    "pelanggan_lengkap": "MUNAWAR (biru tua)",
    "seri_perangkat": "Asus E410K",
    "kategori": "Laptop / Notebook",
    "keluhan": "Instal Ulang",
    "tgl_masuk": "6/10/2026",
    "tgl_update": "6/10/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/10/2026",
        "catatan": "QC.  semua aman kecuali tombol win tertekan"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/10/2026",
        "catatan": "instal ulang win 11, semua aman"
      }
    ]
  },
  {
    "id": "SRV-097",
    "no": 97,
    "nama_pelanggan": "Amal",
    "warna_unit": "-",
    "pelanggan_lengkap": "Amal",
    "seri_perangkat": "fd (hitam)",
    "kategori": "Storage / Aksesoris",
    "keluhan": "recovery data",
    "tgl_masuk": "2026-10-19",
    "tgl_update": "2026-10-19",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [],
    "riwayat": []
  },
  {
    "id": "SRV-098",
    "no": 98,
    "nama_pelanggan": "cc hitam baru",
    "warna_unit": "-",
    "pelanggan_lengkap": "cc hitam baru",
    "seri_perangkat": "thinkpad E450",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "6/11/2026",
    "tgl_update": "6/11/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "bongkar, buka batrei ( bersihkan dan lepas pasang soket"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "tes, batrei tidak mengisi"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "bongkar buka mainboard"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "bongkar buka batrei ( baku tukar dengan cc lama )"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "(Tanpa catatan detail)"
      }
    ]
  },
  {
    "id": "SRV-099",
    "no": 99,
    "nama_pelanggan": "cc hitam bakas",
    "warna_unit": "-",
    "pelanggan_lengkap": "cc hitam bakas",
    "seri_perangkat": "thinkpad e450",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "6/11/2026",
    "tgl_update": "6/11/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "tes pakai mainboard cc  baru tidak tampil"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "lepas ram dan hardisk tidak tampil"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "buka batrei tes di punya cc baru"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "blm di pasang"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "tes, cek hardisk 100 %"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "6/11/2026",
        "catatan": "LCD 30PIN (PUNYA KUPING )"
      }
    ]
  },
  {
    "id": "SRV-100",
    "no": 100,
    "nama_pelanggan": "Ari",
    "warna_unit": "hitam & Silver",
    "pelanggan_lengkap": "Ari (hitam & Silver)",
    "seri_perangkat": "Asus X441M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Kadang Bluescreen",
    "tgl_masuk": "6/12/2026",
    "tgl_update": "6/13/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/12/2026",
        "catatan": "QC. semua aman kecuali tombol key F8 kdang tertekan kadang tidak."
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/12/2026",
        "catatan": "back up data C, rename & inul win 10 64 bit"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/12/2026",
        "catatan": "bersihkan dan ganti pasta"
      },
      {
        "step": 4,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/13/2026",
        "catatan": "qc ulang dan tes 3x mati"
      }
    ]
  },
  {
    "id": "SRV-101",
    "no": 101,
    "nama_pelanggan": "Nadia",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Nadia (Silver)",
    "seri_perangkat": "Laptop Hp X360 G2",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek key, dan cek lainnya",
    "tgl_masuk": "6/12/2026",
    "tgl_update": "6/12/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/12/2026",
        "catatan": "key ada beberapa tombol tidak berfungsi"
      }
    ]
  },
  {
    "id": "SRV-102",
    "no": 102,
    "nama_pelanggan": "kepsek SDN 2 KTB",
    "warna_unit": "abu-abu",
    "pelanggan_lengkap": "kepsek SDN 2 KTB (abu-abu)",
    "seri_perangkat": "Lenovo V14-ADA",
    "kategori": "Laptop / Notebook",
    "keluhan": "LCD bermasalah & cek",
    "tgl_masuk": "6/12/2026",
    "tgl_update": "6/18/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/12/2026",
        "catatan": "semua aman kecuali agak sedikit lambat, beberapa baut tdk & LCD bergaris+berbayang merah"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/12/2026",
        "catatan": "Backup Data C ke D"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/12/2026",
        "catatan": "pasang baut yg tdk ada"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "buka & cek LCD"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "rapikan + tes nyala (menyala)"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/15/2026",
        "catatan": "Bongkar, Pasang SSD 128GB & install win 10 lite 64bit GPT"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/15/2026",
        "catatan": "semua aman kecuali LCD bermasalah"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/17/2026",
        "catatan": "bongkar LCD lama + ganti LCD baru"
      },
      {
        "step": 9,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/17/2026",
        "catatan": "tes nyala (tampil jernih)"
      },
      {
        "step": 10,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/18/2026",
        "catatan": "sudah ambil,sisa DP bayar CASH 1.050.000"
      }
    ]
  },
  {
    "id": "SRV-103",
    "no": 103,
    "nama_pelanggan": "salsabila",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "salsabila (Hitam)",
    "seri_perangkat": "Lenovo Thinkpad T460",
    "kategori": "Laptop / Notebook",
    "keluhan": "LCD bergaris & berbayang",
    "tgl_masuk": "6/12/2026",
    "tgl_update": "6/13/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/12/2026",
        "catatan": "semua aman kecuali LCD bermasalah"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/12/2026",
        "catatan": "bongkar, lepas LCD"
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/13/2026",
        "catatan": "pasang lcd bekas cc, belum di kasih kembali siapa tahu mau diambil"
      },
      {
        "step": 4,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/13/2026",
        "catatan": "dikasih kembali fazrun, LCD merahnya"
      }
    ]
  },
  {
    "id": "SRV-104",
    "no": 104,
    "nama_pelanggan": "Matraf",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Matraf (hitam)",
    "seri_perangkat": "Acer E1-422",
    "kategori": "Laptop / Notebook",
    "keluhan": "Windows lambat",
    "tgl_masuk": "6/13/2026",
    "tgl_update": "6/14/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/13/2026",
        "catatan": "QC.  laptop Acer matraf semua aman kecuali windows lambat dan saat masuk ke win nya lama, suara agak kresek, USB satu tidak terbaca dan batrei silang. Yang lain tombol touchpad sebelah kiri kadang jadi kadang tidak"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/13/2026",
        "catatan": "back up data c, rename, dan instal ulang"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/14/2026",
        "catatan": "proses masuk ke windows masih lama sekali"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/14/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-105",
    "no": 105,
    "nama_pelanggan": "bapak ninda",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "bapak ninda (hitam)",
    "seri_perangkat": "lenovo thinkpad x250",
    "kategori": "Laptop / Notebook",
    "keluhan": "suara tidak ada",
    "tgl_masuk": "6/14/2026",
    "tgl_update": "6/15/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/14/2026",
        "catatan": "instal ulang, back up data, dan update windows. tetap tidak ada suaranya"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/15/2026",
        "catatan": "sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-106",
    "no": 106,
    "nama_pelanggan": "pak andi",
    "warna_unit": "putih",
    "pelanggan_lengkap": "pak andi ( putih)",
    "seri_perangkat": "AIO 330-320IGM",
    "kategori": "PC / Komputer",
    "keluhan": "Bluescreen",
    "tgl_masuk": "6/14/2026",
    "tgl_update": "6/14/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "tidak masuk windows + tampilan bluescreen (tes nyala)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "buka n lepas hardisk"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "HDD health 100% & backup data"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "pasang HDD & instal win 10 biasa gpt"
      }
    ]
  },
  {
    "id": "SRV-107",
    "no": 107,
    "nama_pelanggan": "pak andi",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "pak andi (hitam)",
    "seri_perangkat": "printer epson L3210",
    "kategori": "Printer",
    "keluhan": "cek tinta biru",
    "tgl_masuk": "6/14/2026",
    "tgl_update": "6/20/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "bbrapa tinta aman kcuali tinta warna biru yang tidak keluar ( test print)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "tinta biru ny masih tidak keluar ( cleaning n flush)"
      },
      {
        "step": 3,
        "teknisi": "Fazrun & Arif",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/16/2026",
        "catatan": "-bawa printer ke portabel"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/20/2026",
        "catatan": "sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-108",
    "no": 108,
    "nama_pelanggan": "CC",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "CC (hitam)",
    "seri_perangkat": "Lenovo Thinkpad T450",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "6/14/2026",
    "tgl_update": "6/17/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/14/2026",
        "catatan": "pasang keyboard bru dan pasang lcd"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "pasang SSD CC & ganti ram 2gb ke ram 8gb"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/16/2026",
        "catatan": "instal windows 10 gpt 64 bit pakai ssd tes cc. semua aman kecuali tombol touchpad Bagian bawah tidak bisa di Tekan. Sementara lagi cas batrei"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/16/2026",
        "catatan": "sudah kembalikan laptop cc di cc1 dan pasang ssd yang sebelumnya dilepas di laptop E450"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/17/2026",
        "catatan": "lem kembali casing lcd pake double tip dan pajang di cc2"
      }
    ]
  },
  {
    "id": "SRV-109",
    "no": 109,
    "nama_pelanggan": "marwah",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "marwah (hitam)",
    "seri_perangkat": "epson L3210",
    "kategori": "Printer",
    "keluhan": "cek tinta",
    "tgl_masuk": "6/14/2026",
    "tgl_update": "6/16/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/14/2026",
        "catatan": "tinta rata2 hitam & hnya kuning yang kelihatan"
      },
      {
        "step": 2,
        "teknisi": "Fazrun & Arif",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/16/2026",
        "catatan": "-bawa printer ke portabel"
      }
    ]
  },
  {
    "id": "SRV-110",
    "no": 110,
    "nama_pelanggan": "naufal",
    "warna_unit": "silver",
    "pelanggan_lengkap": "naufal (silver)",
    "seri_perangkat": "Lenovo Idepad Slim 3",
    "kategori": "Laptop / Notebook",
    "keluhan": "Batrei stuck di 6% (04:00)",
    "tgl_masuk": "6/15/2026",
    "tgl_update": "6/15/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/15/2026",
        "catatan": "QC. Semua aman, kecuali batrei stuck 6%."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/15/2026",
        "catatan": "semua aman kecuali baterai tdk mngisi sdh tes ganti cas juga"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/15/2026",
        "catatan": "cancel, sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-111",
    "no": 111,
    "nama_pelanggan": "Nova",
    "warna_unit": "merah",
    "pelanggan_lengkap": "Nova (merah)",
    "seri_perangkat": "Notebook Asus E202S",
    "kategori": "Laptop / Notebook",
    "keluhan": "LCD bergaris",
    "tgl_masuk": "6/16/2026",
    "tgl_update": "7/15/2026",
    "link_fb": "https://www.facebook.com/share/p/1JJcVKsexP/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Arif",
      "Fazrun",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/16/2026",
        "catatan": "semua aman kecuali lcd bergaris, agak lambat sedikit  dan suara kresek"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/16/2026",
        "catatan": "Validasi ulang semua aman kecuali agak lambat sedikit, suara kresek sekali & LCD bergaris."
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/16/2026",
        "catatan": "buka/cek LCD"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/16/2026",
        "catatan": "cek hardisk & backup data (100%)"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/16/2026",
        "catatan": "rapikan (sblum dirapikan sudah tes, menyala)"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/19/2026",
        "catatan": "bongkar, pasang LCD Baru"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/19/2026",
        "catatan": "semua aman  kecuali agak lumayan lambat & suara kresek sdh tawari install, ganti speaker & upgrade tapi yg di acc hanya ganti LCD"
      },
      {
        "step": 8,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/19/2026",
        "catatan": "sudah ambil"
      },
      {
        "step": 9,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/20/2026",
        "catatan": "masuk lagi notebooknya (Instal Ulang)"
      },
      {
        "step": 10,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/20/2026",
        "catatan": "Rename, back up data C dan instal ulang windows 10 gpt"
      },
      {
        "step": 11,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/20/2026",
        "catatan": "sudah diambil"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/15/2026",
        "catatan": "tes pakai ssd cc. keyboard ada beberapa yang tidak jadi, suara kresek yang lain aman"
      },
      {
        "step": 13,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/15/2026",
        "catatan": "instal win 10"
      },
      {
        "step": 14,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/15/2026",
        "catatan": "bongkar hdd dan backup data"
      },
      {
        "step": 15,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/15/2026",
        "catatan": "instal win 8 dan cek semua aman kecuali suara kresek"
      }
    ]
  },
  {
    "id": "SRV-112",
    "no": 112,
    "nama_pelanggan": "Nur",
    "warna_unit": "Abu-abu",
    "pelanggan_lengkap": "Nur (Abu-abu)",
    "seri_perangkat": "Laptop Asus A416F",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk win",
    "tgl_masuk": "6/16/2026",
    "tgl_update": "6/22/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/16/2026",
        "catatan": "tes nyalakan langsung masuk bios & di bios tdk terbaca SSD nya"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/16/2026",
        "catatan": "bongkar, lepas SSD & cek terbaca"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/16/2026",
        "catatan": "pasang SSD CC & tes nyalakan masuk win kemudian install ula ng win 10 lite 64bit GPT"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/16/2026",
        "catatan": "Instal apk & QC (semua aman) *masih pakai SSD CC"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/22/2026",
        "catatan": "Cancel Sudah Ambil"
      }
    ]
  },
  {
    "id": "SRV-113",
    "no": 113,
    "nama_pelanggan": "Pak Dosen Arif",
    "warna_unit": "putih",
    "pelanggan_lengkap": "Pak Dosen Arif (putih)",
    "seri_perangkat": "PC ALL IN ONE Lenovo C40-30",
    "kategori": "PC / Komputer",
    "keluhan": "tdk menyala",
    "tgl_masuk": "6/17/2026",
    "tgl_update": "6/17/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/17/2026",
        "catatan": "semua aman kecuali lumayan lambat & klu pake adapter ny tdk mau menyala sdh sy tes ganti kabel power tetap sama kemudian sy tes di belakang menyala.."
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/17/2026",
        "catatan": "tes pakai cas asliny (tidak menyala sama sekali), tes pakai 2 cas cc (menyala), tes pakai adapter cc + kabel power arif (menyala) & tes pakai adapter arif + kabel power cc (tdk menyala) kesimpulan : adapter pak arif bermasalah"
      }
    ]
  },
  {
    "id": "SRV-114",
    "no": 114,
    "nama_pelanggan": "Rahmatia",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Rahmatia (Silver)",
    "seri_perangkat": "Laptop HP 14s-dq2622TU",
    "kategori": "Laptop / Notebook",
    "keluhan": "Laptop HP 14s-dq2622TU",
    "tgl_masuk": "6/18/2026",
    "tgl_update": "6/18/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/18/2026",
        "catatan": "semua aman kecuali di Microsoft egde kyk terspam begitu.. klu di chrome tdk & sdh cek keyboard aman"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/18/2026",
        "catatan": "disable microsoft egde"
      },
      {
        "step": 3,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "6/18/2026",
        "catatan": "cek aman tdk terspam lagi"
      }
    ]
  },
  {
    "id": "SRV-115",
    "no": 115,
    "nama_pelanggan": "Andi Lopes",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Andi Lopes (hitam)",
    "seri_perangkat": "Epson L121",
    "kategori": "Printer",
    "keluhan": "Kertas tersangkut",
    "tgl_masuk": "6/18/2026",
    "tgl_update": "6/27/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Egi",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/18/2026",
        "catatan": "Lampu Indikator dua2 Kedap-kedip"
      },
      {
        "step": 2,
        "teknisi": "Ardin & Egi",
        "teknisi_utama": "Ardin",
        "tanggal": "6/19/2026",
        "catatan": "bawah ke portable"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/22/2026",
        "catatan": "test print aman"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/27/2026",
        "catatan": "SUDAH AMBIL,Pembayaran CASH 450RB"
      }
    ]
  },
  {
    "id": "SRV-116",
    "no": 116,
    "nama_pelanggan": "Andi Lopes",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Andi Lopes (hitam)",
    "seri_perangkat": "Epson L3110",
    "kategori": "Printer",
    "keluhan": "Cek",
    "tgl_masuk": "6/18/2026",
    "tgl_update": "6/27/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Ardin",
      "Egi",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/18/2026",
        "catatan": "Lampu Indikator dua2 Kedap-kedip"
      },
      {
        "step": 2,
        "teknisi": "Ardin & Egi",
        "teknisi_utama": "Ardin",
        "tanggal": "6/18/2026",
        "catatan": "bawah ke portable"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/27/2026",
        "catatan": "SUDAH AMBIL, CANCEL"
      }
    ]
  },
  {
    "id": "SRV-117",
    "no": 117,
    "nama_pelanggan": "Rahmat",
    "warna_unit": "merahI",
    "pelanggan_lengkap": "Rahmat (merahI",
    "seri_perangkat": "Acer E5-471",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak menyala",
    "tgl_masuk": "6/18/2026",
    "tgl_update": "6/29/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun",
      "Zam Zam",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/18/2026",
        "catatan": "cek tdk menyala sdh tes pke cas asli & lepas pasang baterai.."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/19/2026",
        "catatan": "bongkar,lepas mainboard"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/19/2026",
        "catatan": "pasag kembali & cek pake cas asli & cas CC tdk menyala kecuali tes nyalakan di belakang menyala tapi hrus lepas baterai"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/19/2026",
        "catatan": "bongkar lepas mainboard lagi"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/20/2026",
        "catatan": "Pasang Mainboard & tes nyalakan tdk menyala sdh tes pake cas asli & tes di belakang sdh tes juga lepas pasang baterai"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/20/2026",
        "catatan": "bongkar lepas mainboard lagi"
      },
      {
        "step": 7,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "pasang mainboard"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "tes nyala tanpa batrei (tampil normal + masuk windows)"
      },
      {
        "step": 9,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "pasang semua (tes nyalakan tidak menyala)"
      },
      {
        "step": 10,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "lepas batrei (menyala)"
      },
      {
        "step": 11,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "tes tanpa batrei (semua aman, batrei pengecualian)"
      },
      {
        "step": 12,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/24/2026",
        "catatan": "tes kembali tidak pakai bateri tidak nyala biar sudah tes cas yang lain"
      },
      {
        "step": 13,
        "teknisi": "Zam Zam",
        "teknisi_utama": "Zam Zam",
        "tanggal": "6/29/2026",
        "catatan": "QC semua aman kecuali pas mau di nyalakan lepas  baterai sdh tes mati 2kli"
      },
      {
        "step": 14,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/29/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-118",
    "no": 118,
    "nama_pelanggan": "Fitrah",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Fitrah (Silver)",
    "seri_perangkat": "Lenovo V330-14ARR",
    "kategori": "Laptop / Notebook",
    "keluhan": "windows Lambat",
    "tgl_masuk": "6/19/2026",
    "tgl_update": "6/19/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/19/2026",
        "catatan": "QC. Laptop an. Fitrah semuaa aman kecuali windows lambat, suara kresek, dan tombol win nya tidak respon"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/19/2026",
        "catatan": "SOP: Rename dan back up data C, lalu instal ulang"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/19/2026",
        "catatan": "sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-119",
    "no": 119,
    "nama_pelanggan": "Fizrah",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Fizrah (Silver)",
    "seri_perangkat": "Asus X441M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Kursor Bergerak sendiri",
    "tgl_masuk": "6/19/2026",
    "tgl_update": "6/22/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/19/2026",
        "catatan": "QC. Semua aman kecuali windows agak lambat, dan ada tombol key yang tertekan."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/20/2026",
        "catatan": "Backup Data C"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/20/2026",
        "catatan": "install win 10 64bit GPT semua aman kecuali masih agak sedikit lambat, suara klu di ksih full kresek & keyboard ada yg tertekan"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/20/2026",
        "catatan": "sudah dibongkar, di cek keynya tidak cocok, jadi tunggu dipesan dulu"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/22/2026",
        "catatan": "sSs"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/22/2026",
        "catatan": "sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-120",
    "no": 120,
    "nama_pelanggan": "UMB2",
    "warna_unit": "CPU HITAM",
    "pelanggan_lengkap": "UMB2 (CPU HITAM)",
    "seri_perangkat": "Acer Care",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/17/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2285241468905245/?app=fbl",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "QC. semua aman, sudah putar youtube 30 menit serta matikan 3x dan instal win 10, cttn ram 2GB rekomendasi Upgrade 4 GB"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/17/2026",
        "catatan": "Tambah ram 2 GB jadi total 4 gb sementara tes putar youtube 30 menit"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/17/2026",
        "catatan": "Putar yotube 30 menit bluescreen"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/17/2026",
        "catatan": "Ganti Pasta, besok baru instal ualng dan tes putar yotube"
      }
    ]
  },
  {
    "id": "SRV-121",
    "no": 121,
    "nama_pelanggan": "UMB3",
    "warna_unit": "CPU Hitam",
    "pelanggan_lengkap": "UMB3 (CPU Hitam)",
    "seri_perangkat": "Lenovo Thinkcentre M90",
    "kategori": "PC / Komputer",
    "keluhan": "CEK",
    "tgl_masuk": "7/15/2026",
    "tgl_update": "7/15/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2263980524364673/?app=fbl",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "QC. Semua aman, sementara putar YouTube 1 jam & coba matikan 3 kali"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/21/2026",
        "catatan": "sudah rename, instal ulang  & back up data c. Instal win 10  home  64 bit (MBR)"
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/21/2026",
        "catatan": "INSTLL PC 150"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "Tes Kembali putar youtube sempat bluescreen + restart sendiri, lanjut putar youtube lagi 30 = menit + matikan 3x aman Cttn ganti pastanya"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "sudah ganti pasta test putar youtube masih bluescreen"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "Instal Ulang win10 lita 64 bit MBR"
      },
      {
        "step": 7,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "putar youtube  30 menit dan matikan 3x aman"
      },
      {
        "step": 8,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "putar youtube  1 Jam dan matikan 3x aman"
      }
    ]
  },
  {
    "id": "SRV-122",
    "no": 122,
    "nama_pelanggan": "UMB6",
    "warna_unit": "CPU Hitam",
    "pelanggan_lengkap": "UMB6 (CPU Hitam)",
    "seri_perangkat": "Lenovo Thinkcentre M90",
    "kategori": "PC / Komputer",
    "keluhan": "CEK",
    "tgl_masuk": "7/15/2026",
    "tgl_update": "7/16/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2285533582209367/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Egi"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "tes pakai PSU CC nyala tampil tapi tidak bisa masuk windows."
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "PSU rusak dan HDD Tidak terbaca"
      },
      {
        "step": 3,
        "teknisi": "Ardin & Egi",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "Rename dan BackUp data C HDD UMB4"
      },
      {
        "step": 4,
        "teknisi": "Ardin & Egi",
        "teknisi_utama": "Ardin",
        "tanggal": "7/16/2026",
        "catatan": "Tes pakai Psu CC Dan HDD UMB4, Instal Ulang Win 10 LIte MBR"
      },
      {
        "step": 5,
        "teknisi": "Ardin & Egi",
        "teknisi_utama": "Ardin",
        "tanggal": "7/16/2026",
        "catatan": "Test Putar youtube 1 jam dan matikan 3x aman"
      },
      {
        "step": 6,
        "teknisi": "Ardin & Egi",
        "teknisi_utama": "Ardin",
        "tanggal": "7/16/2026",
        "catatan": "Tambah ram 2 gb jadi total 4GB cek"
      },
      {
        "step": 7,
        "teknisi": "Ardin & Egi",
        "teknisi_utama": "Ardin",
        "tanggal": "7/16/2026",
        "catatan": "tes pakai psu cc dan putar youtube 1 jam dan matikan 3x aman"
      }
    ]
  },
  {
    "id": "SRV-123",
    "no": 123,
    "nama_pelanggan": "UMB7",
    "warna_unit": "CPU Hitam",
    "pelanggan_lengkap": "UMB7 (CPU Hitam)",
    "seri_perangkat": "Lenovo Thinkcentre M90",
    "kategori": "PC / Komputer",
    "keluhan": "CEK",
    "tgl_masuk": "6/21/2026",
    "tgl_update": "7/16/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/21/2026",
        "catatan": "QC. Semua aman, sementara putar YouTube 1 jam & coba matikan 3 kali"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/21/2026",
        "catatan": "sudah rename, instal ulang  & back up data c. Instal win 10  home  64 bit (MBR)"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/21/2026",
        "catatan": "terakhir di tes, pc nya tiba tiba tidak terbaca sistem operasinya"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/22/2026",
        "catatan": "Kesehatan 100% HDD"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/23/2026",
        "catatan": "tes puter youtube 1 jam tiba tiba restart sendiri"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/23/2026",
        "catatan": "tes pakai ram cc tidak tampil, kemudian tambah ramnya yang 2 gb jadi 4 gb pakai ram  pc umb yang lain tampil, tapi pas putar youtube tiba-tiba bluescreen"
      },
      {
        "step": 7,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "Sudah ganti pasta besok baru di tes putar youtube"
      },
      {
        "step": 8,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/16/2026",
        "catatan": "coba putar youtube 1 jam tiba2 bluescreen, lanjut cek hdd instal ulang win10 lite"
      },
      {
        "step": 9,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/16/2026",
        "catatan": "tes putar you tube 1 jam setengah dan matikan 3X aman"
      }
    ]
  },
  {
    "id": "SRV-124",
    "no": 124,
    "nama_pelanggan": "Vattar",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Vattar (Hitam)",
    "seri_perangkat": "Acer Aspire E5-473G",
    "kategori": "Laptop / Notebook",
    "keluhan": "Tidak Tampil",
    "tgl_masuk": "6/21/2026",
    "tgl_update": "6/22/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/21/2026",
        "catatan": "laptop tidak mau tampil, lampu led biru nyala hanya sebentar setelah itu mati lagi"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/22/2026",
        "catatan": "tes di belakang sempat menyala indikator & ampere naik tapi hnya sbntar langsung mati indikator & ampere turun (belum sempat tampil & masuk win)"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/22/2026",
        "catatan": "Bongkar, Lepas Mianboard & cek HDD 18%"
      }
    ]
  },
  {
    "id": "SRV-125",
    "no": 125,
    "nama_pelanggan": "Aksa",
    "warna_unit": "Biru Tua",
    "pelanggan_lengkap": "Aksa (Biru Tua)",
    "seri_perangkat": "Lenovo Ideapad Slim 3",
    "kategori": "Laptop / Notebook",
    "keluhan": "Keyboard Tertekan & cek  klau laptop di matikan dan ingin di nyalakan ulang tidak bisa, dan jika sdh mnyala bunyi bip bip yang trus berulang, mouse touchpad nya juga kadang brmasalah.",
    "tgl_masuk": "6/22/2026",
    "tgl_update": "7/1/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun",
      "Ardin",
      "Vattar",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/22/2026",
        "catatan": "semua aman kecuali keyboard angka 5 tertekan trus, port USB 1 tdk jadi & data C Full (Merah)"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/22/2026",
        "catatan": "Bongkar dan lepas ssd aksa dan cek 97% kemudian pasang ssd cc dan cek"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/22/2026",
        "catatan": "QC semua aman kecuali pas baru di matikan trus mau di  nyalakan lagi tdk mau menyala (sama dengan klu di pasang SSD asli nya)"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "tes nyalakan pakai cas asli + lepas batrei ( tidak menyala )"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/24/2026",
        "catatan": "lepas batrei colok casnya langsung nyala"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/24/2026",
        "catatan": "pasang batrei saat dinyalakan langsung nyala, shutdown lalu tekan tombol power tidak nyala"
      },
      {
        "step": 7,
        "teknisi": "Arif & Vattar",
        "teknisi_utama": "Arif",
        "tanggal": "6/25/2026",
        "catatan": "bongkar, lepas soket baterai & tes nyalakan menyala tapi msih bunyi bip bip"
      },
      {
        "step": 8,
        "teknisi": "Vattar",
        "teknisi_utama": "Vattar",
        "tanggal": "6/25/2026",
        "catatan": "Rapikan semua pasang soket keyboard & baterai"
      },
      {
        "step": 9,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/30/2026",
        "catatan": "orang ny bawa kembali mau ganti keyboard"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "Bongkar, Pasang Keyboard Baru kemudian cek semua aman sdh tes mati 2 kali & nyalakan menggunakan tombol power"
      }
    ]
  },
  {
    "id": "SRV-126",
    "no": 126,
    "nama_pelanggan": "Ail",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Ail (Hitam)",
    "seri_perangkat": "HP Pavilion",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak tampil",
    "tgl_masuk": "6/22/2026",
    "tgl_update": "6/23/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/22/2026",
        "catatan": "test nyalakan menyala tapi tdk tampil di layatr laptop nya kecuali pke eksternal baru tampil  (belum.QC karena orang ny tdk ksih kn password laptop nya dengan alasan keamaan data sensitif  yg ada di dalam laptop nya"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "masih tampil di eksternal tapi di layar bawaan tidak tampil (tes tampilan eksternal)"
      }
    ]
  },
  {
    "id": "SRV-127",
    "no": 127,
    "nama_pelanggan": "Pak Agus Dekan",
    "warna_unit": "biru",
    "pelanggan_lengkap": "Pak Agus Dekan (biru)",
    "seri_perangkat": "Asus X441M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek",
    "tgl_masuk": "6/22/2026",
    "tgl_update": "6/25/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Hibrian",
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/22/2026",
        "catatan": "Agak lambat dan batrei silang, setelah mau buka gogle chome laptop tiba² mati"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/22/2026",
        "catatan": "sop, cek pakai cc"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "hardisk 100% + backup data"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "bongkar n pasang SSD CC + instal win 10 lite"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "bbrapa aman kcuali suara sdikt kresek, engsel tdk kuat, keyboard bbrapa tdk jadi & tertekan"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "rapikan semula"
      },
      {
        "step": 7,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/23/2026",
        "catatan": "sudah ganti keyboard, besok dichek"
      },
      {
        "step": 8,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/23/2026",
        "catatan": "Rename dan Back up data c, instal Windows 10 lite"
      },
      {
        "step": 9,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/24/2026",
        "catatan": "yang di ganti/kerjakan semua aman kecuali speaker tidak dikerja"
      },
      {
        "step": 10,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/24/2026",
        "catatan": "nanti sore di ambi"
      },
      {
        "step": 11,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/25/2026",
        "catatan": "Aman semua kecuali suara agak sedikit kresek.."
      }
    ]
  },
  {
    "id": "SRV-128",
    "no": 128,
    "nama_pelanggan": "Yusni",
    "warna_unit": "biru tua",
    "pelanggan_lengkap": "Yusni (biru tua)",
    "seri_perangkat": "MSI Modern 14 C12MO",
    "kategori": "Laptop / Notebook",
    "keluhan": "suara tidak ada",
    "tgl_masuk": "6/23/2026",
    "tgl_update": "6/23/2026",
    "link_fb": "",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/23/2026",
        "catatan": "QC.  semua aman kecuali suara tidak ada"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/23/2026",
        "catatan": "rename dan back up data C kemudian instal win 11 64 bit gpt"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/23/2026",
        "catatan": "instal driver partisinya dan back up data. tinggal ambil besok"
      }
    ]
  },
  {
    "id": "SRV-129",
    "no": 129,
    "nama_pelanggan": "Rahmat",
    "warna_unit": "abu-abu",
    "pelanggan_lengkap": "Rahmat (abu-abu)",
    "seri_perangkat": "Laptop Acer  Aspire 4741",
    "kategori": "Laptop / Notebook",
    "keluhan": "tampilan blank hitam",
    "tgl_masuk": "6/23/2026",
    "tgl_update": "6/29/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Fazrun",
      "Ardin",
      "Vattar",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "tampilan awal hitam, tes tampil di eksternal (tampil tapi tidak masuk windows)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "6/23/2026",
        "catatan": "belum bisa masuk win, lumyan delay n hardisk tidak terbaca (tes setting bios)"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/24/2026",
        "catatan": "tes lcd cc dan cek hddnya di laptop cc tidak terbaca"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/25/2026",
        "catatan": "masih test dgn lcd cc. semuaa aman kecuali layar blank putih, HDD sudah TDK terbaca dan kursor kadang tiba² gerak sendiri."
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/25/2026",
        "catatan": "Pindahkan ram dan ssd, Rahmat laptop mereh ke laptop abu abu tampil terbaca 8 GB tetapi tidak  masuk win"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/25/2026",
        "catatan": "coba instal win 7 dan 8 32 bit maupun 64 bit, ketika masuk di win sateupnya laptop restart tiba2 (tdk bisa instal)"
      },
      {
        "step": 7,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/25/2026",
        "catatan": "besok back up data di ssdnya dan format ulang pakai mbr"
      },
      {
        "step": 8,
        "teknisi": "Vattar",
        "teknisi_utama": "Vattar",
        "tanggal": "6/26/2026",
        "catatan": "Backup Data di SSD nya"
      },
      {
        "step": 9,
        "teknisi": "Vattar",
        "teknisi_utama": "Vattar",
        "tanggal": "6/26/2026",
        "catatan": "pasang HDD CC & install win 7 32bit kemudian QC semua aman"
      },
      {
        "step": 10,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/26/2026",
        "catatan": "pasang ram yang sebelumnya 1 gb dan instal aplikasi standar"
      },
      {
        "step": 11,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "Sudah tiba LCD baru"
      },
      {
        "step": 12,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "pasang LCD baru & QC aman semua"
      },
      {
        "step": 13,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/29/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-130",
    "no": 130,
    "nama_pelanggan": "Rijal",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Rijal (Silver)",
    "seri_perangkat": "Laptop Acer Aspire Lite 14 N23G1",
    "kategori": "Laptop / Notebook",
    "keluhan": "Install & Backup",
    "tgl_masuk": "6/25/2026",
    "tgl_update": "6/25/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/25/2026",
        "catatan": "Install win 11 64bit GPT"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/25/2026",
        "catatan": "QC semua aman"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/25/2026",
        "catatan": "sudah ambil pembayaran CASH 150rb"
      }
    ]
  },
  {
    "id": "SRV-131",
    "no": 131,
    "nama_pelanggan": "Ibu Dosen Kusrini",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Ibu Dosen Kusrini (Silver)",
    "seri_perangkat": "Notebbok Acer V5-131",
    "kategori": "Laptop / Notebook",
    "keluhan": "file kadang terhapus sendiri/keyboard tertekan",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "7/1/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2267707173992008/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Vattar",
      "Hibrian",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/25/2026",
        "catatan": "QC semua Aman kecuali casing engsel bagian atas kiri kanan retak/pecah (tpi msih Aman)"
      },
      {
        "step": 2,
        "teknisi": "Vattar",
        "teknisi_utama": "Vattar",
        "tanggal": "6/25/2026",
        "catatan": "test mngetik di word aman"
      },
      {
        "step": 3,
        "teknisi": "Vattar",
        "teknisi_utama": "Vattar",
        "tanggal": "6/25/2026",
        "catatan": "baru di dapati keyboard tombol delete tertekan biar hnya di sentuh sediki"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/25/2026",
        "catatan": "sudah tiba keyboard nya"
      },
      {
        "step": 5,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "6/29/2026",
        "catatan": "Konfirmasi Ulang, kemungkinan ganti pasta"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/30/2026",
        "catatan": "bongkar,Pasang keyboard baru & segel"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/30/2026",
        "catatan": "semua aman kecuali casing atas bagian engsel retak/pecah (sdh ganti keyboard)"
      },
      {
        "step": 8,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "6/30/2026",
        "catatan": "bongkar ulang, cleaning & ganti pasta kemudian cek semua aman  kecuali casing atas bagian engsel retak/pecah"
      },
      {
        "step": 9,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/1/2026",
        "catatan": "sudah ambil, pembayaran 500rb Via TF BRI"
      }
    ]
  },
  {
    "id": "SRV-132",
    "no": 132,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Lenovo Thinkpad L450",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "6/26/2026",
    "tgl_update": "6/26/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/26/2026",
        "catatan": "QC semua aman kecuali baterai cepat sekali turun & tombol ank panah bawah bermasalah"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/26/2026",
        "catatan": "Bongkar, lepas SSD & CEK 95%"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/26/2026",
        "catatan": "Pasang SSD X270 & QC aman semua kecuali tombol ank panah bawah bermasalah"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/26/2026",
        "catatan": "Instal Ulang win 10 gpt"
      }
    ]
  },
  {
    "id": "SRV-133",
    "no": 133,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Lenovo Thinkpad X270",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "6/26/2026",
    "tgl_update": "6/26/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/26/2026",
        "catatan": "bongkar, lepas SSD & CEK 77%"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/26/2026",
        "catatan": "Pasang SSD L450 & QC aman semua"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/26/2026",
        "catatan": "Instal Ulang win 10 gpt"
      }
    ]
  },
  {
    "id": "SRV-134",
    "no": 134,
    "nama_pelanggan": "Fitra",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Fitra (Silver)",
    "seri_perangkat": "Acer Aspire Lite 14",
    "kategori": "Laptop / Notebook",
    "keluhan": "wifi ditaksbar tidak ada dan setting tidak bisa terbuka",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "6/27/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2268660410563351/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/26/2026",
        "catatan": "QC.  semua aman kecuali os error seperti wifi dan setting seperti keluhannya dan camera tidak bisa terbuka"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/27/2026",
        "catatan": "Bongkar,Cek SSD 89% Sekaligus BACKUP di SSD SATA CC"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/27/2026",
        "catatan": "sudah selesai di instal, semua aman"
      }
    ]
  },
  {
    "id": "SRV-135",
    "no": 135,
    "nama_pelanggan": "Dosen Hamid",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Dosen Hamid (Hitam)",
    "seri_perangkat": "Laptop Asus P2430U",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak menyala (kadang menyala kadang tdk)",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "8/17/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2269443783818347/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Ardin",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/27/2026",
        "catatan": "semua Aman kecuali suara kresek & baterai tdk mngisi 0% trus"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/27/2026",
        "catatan": "setelah putar you tube agak lama laptop nya mati, tekan tombol power tidak mau menyala dan agak panas"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/27/2026",
        "catatan": "Validasi ulang, coba dikasih nyala tetap tidak mau menyala, setela didiamkan agak lama"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "tes pake cas asli & tes di belakang tetap tdk mnyala"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "Bongkar, Lepas Mainboard"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/2/2026",
        "catatan": "pasang mainboard dan tes"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/2/2026",
        "catatan": "lambat, tombol tab tidak jadi. suara kresek, batrei bermasalah"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/4/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "pasang mainboard ( belum di tes)"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/1/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 11,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/17/2026",
        "catatan": "pasang mainboard dan cek, kemudian di tes windows nya sedikit lambat"
      }
    ]
  },
  {
    "id": "SRV-136",
    "no": 136,
    "nama_pelanggan": "Tiar Tumanda",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Tiar Tumanda (Silver)",
    "seri_perangkat": "hp 14s-cf2517TU",
    "kategori": "Laptop / Notebook",
    "keluhan": "LCD Bergaris",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "7/3/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2271036696992389/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Arif",
      "Tia",
      "Egi"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/29/2026",
        "catatan": "QC. semua aman kecuali Lcd bergaris dan goyang, Windows agak lambat , touchpad juga kadang kurang respon"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/30/2026",
        "catatan": "Bongkar LCD & foto"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/2/2026",
        "catatan": "bongkar, ganti Lcd danc cleaning ganti pasta"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/2/2026",
        "catatan": "cek, dan backup data semua aman ( sisah di instal)"
      },
      {
        "step": 5,
        "teknisi": "Ardin & Egi",
        "teknisi_utama": "Ardin",
        "tanggal": "7/2/2026",
        "catatan": "Instal Ulang win 10 Gpt 64 Bit (Aman)"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/3/2026",
        "catatan": "QC. semua aman"
      }
    ]
  },
  {
    "id": "SRV-137",
    "no": 137,
    "nama_pelanggan": "Tiar Tumanda",
    "warna_unit": "Biru",
    "pelanggan_lengkap": "Tiar Tumanda (Biru)",
    "seri_perangkat": "Acer Aspire A314",
    "kategori": "Laptop / Notebook",
    "keluhan": "windows lambat dan key tidak berfungsi",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "7/1/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2271034503659275/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/29/2026",
        "catatan": "QC. semua aman kecuali widows lambat, keyboard semua tombol TDK berfungsi kecuali tombol power, batrei silang dan camera tidak terdeteksi"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/29/2026",
        "catatan": "Rename dan Back Up data di partisii C dan instal ulang windows 10"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "6/30/2026",
        "catatan": "Ganti key"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/1/2026",
        "catatan": "QC semua aman kecuali masih agak lambat & baterai tanda silang"
      }
    ]
  },
  {
    "id": "SRV-138",
    "no": 138,
    "nama_pelanggan": "Tiar Tumanda",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Tiar Tumanda (Hitam)",
    "seri_perangkat": "Printer Epson L3211",
    "kategori": "Printer",
    "keluhan": "cek, lampu indikator kedap-kedip",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "7/1/2026",
    "link_fb": "https://www.facebook.com/share/p/1M5f5AQnrc/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Zam Zam"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "kedap-kedip merah.. (Tdk bisa memprint)"
      },
      {
        "step": 2,
        "teknisi": "Arif & Zam Zam",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "bawa ke portabel"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/1/2026",
        "catatan": "tes print Aman..SDH di kabari tinggal ambil biaya 400rb"
      }
    ]
  },
  {
    "id": "SRV-139",
    "no": 139,
    "nama_pelanggan": "CC",
    "warna_unit": "ungu",
    "pelanggan_lengkap": "CC (ungu)",
    "seri_perangkat": "Asus VivoBook 14",
    "kategori": "Laptop / Notebook",
    "keluhan": "install win",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "6/29/2026",
    "link_fb": "https://www.facebook.com/share/p/19CrhJUway/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Zam Zam"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "pasang HDD CC 100% & RAM kemudian tes nyalakan menyala tapi tidak tampil"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "Bongkar kembali & lepas RAM kemudian install win 10 64bit GPT"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "belum sempat QC karena tampilan LCD kedap-kedip/bermain"
      },
      {
        "step": 4,
        "teknisi": "Zam Zam",
        "teknisi_utama": "Zam Zam",
        "tanggal": "",
        "catatan": "QC semua aman kecuali LCD bermain"
      }
    ]
  },
  {
    "id": "SRV-140",
    "no": 140,
    "nama_pelanggan": "Laniampe Kodim",
    "warna_unit": "biru muda",
    "pelanggan_lengkap": "Laniampe Kodim (biru muda)",
    "seri_perangkat": "Laptop Acer Aspire 3 A314-32",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak tampil",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "7/1/2026",
    "link_fb": "https://www.facebook.com/share/p/1MPqoq2pVc/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "6/29/2026",
        "catatan": "tes nyalakan menyala tapi tdk tampil kemudian tes bersihkn RAM  tetap tdk tampil & terakhir tes pake RAM CC tetap sama juga tdk tampil"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-141",
    "no": 141,
    "nama_pelanggan": "Abar",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Abar (Hitam)",
    "seri_perangkat": "Laptop Acer Nitro ANV15",
    "kategori": "Laptop / Notebook",
    "keluhan": "korslet/tdk menyala",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "7/1/2026",
    "link_fb": "https://www.facebook.com/share/p/16zYpdhzoR/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/1/2026",
        "catatan": "tes pake PSU tdk menyala (konslet)"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "Bongkar, Lepas Mainboard"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/2/2026",
        "catatan": "pasang mainboard dan tes"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "toucpad tidak jadi, dan usb sebelah kiri tidak jadi, lambat yang lain aman"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "restar. semua aman hanya lambat"
      }
    ]
  },
  {
    "id": "SRV-142",
    "no": 142,
    "nama_pelanggan": "Awal",
    "warna_unit": "Biru",
    "pelanggan_lengkap": "Awal (Biru)",
    "seri_perangkat": "Lenovo Ideapad 3 Slim 3",
    "kategori": "Laptop / Notebook",
    "keluhan": "Pesan Baterai",
    "tgl_masuk": "6/29/2026",
    "tgl_update": "7/1/2026",
    "link_fb": "https://www.facebook.com/share/p/18dMkDciYk/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/1/2026",
        "catatan": "semua aman kecuali baterai tdk mengisi & suara agak sedikit kresek"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/1/2026",
        "catatan": "bongkar, lepas baterai & foto"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/1/2026",
        "catatan": "sdh di ambil laptop nya, nnti di bawa lagi klu sdh tiba baterai nya"
      }
    ]
  },
  {
    "id": "SRV-143",
    "no": 143,
    "nama_pelanggan": "ibu rini",
    "warna_unit": "abuabu",
    "pelanggan_lengkap": "ibu rini ( abuabu)",
    "seri_perangkat": "Lenovo Ideapad 3320",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk windows",
    "tgl_masuk": "7/1/2026",
    "tgl_update": "7/3/2026",
    "link_fb": "https://www.facebook.com/share/p/18YovpsPVU/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "cek bios tetap tidak bisa, casing patah dan engsel bermasalah"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "bongkar, cek ssd dan hardisk"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/1/2026",
        "catatan": "ssd tidak terbaca, hardisk 5% ( data masih bisa di buka )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/2/2026",
        "catatan": "Bongkar, Pasang SSD 128GB & Install win 10lite 64bit GPT"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/2/2026",
        "catatan": "pasang HDD BEKAS 500GB & pindahkn  data nnya dari HDD lamanya ke HDD BEKAS"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/2/2026",
        "catatan": "aman semua kecuali engsel/casing bermasalah & baterai cepat sekali turun (sdh backup semua datanya yg di ada di hardisk lamanya)"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/3/2026",
        "catatan": "Sudah Ambil, PEMBAYARAN CASH 1,2jt Diskon 100rb"
      }
    ]
  },
  {
    "id": "SRV-144",
    "no": 144,
    "nama_pelanggan": "Zain",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Zain (Hitam)",
    "seri_perangkat": "Laptop Lenovo T420",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cepat Panas & Berishkan",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/3/2026",
    "link_fb": "https://www.facebook.com/share/p/1CvuXGHdjf/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/3/2026",
        "catatan": "QC Lambat,batrei cpt lobet,dan cepat panas."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/3/2026",
        "catatan": "Bongkar, Cleaning & Ganti Pasta"
      },
      {
        "step": 3,
        "teknisi": "Tia & Arif",
        "teknisi_utama": "Tia",
        "tanggal": "7/3/2026",
        "catatan": "Install win 10 64bit GPT"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/3/2026",
        "catatan": "QC aman semua kecuali baterai cepat turun persen ny"
      }
    ]
  },
  {
    "id": "SRV-145",
    "no": 145,
    "nama_pelanggan": "akram",
    "warna_unit": "silver",
    "pelanggan_lengkap": "akram ( silver)",
    "seri_perangkat": "Laptop Acer Aspire 3 14",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/15/2026",
    "link_fb": "https://www.facebook.com/share/p/1EmrwwUwu1/",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "tes kasih nyala, hanya  muncul logo acer kemudian mati lagi ( belum sampe 1 menit )"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "sop, izin bongkar dan tes pakai nvme cc"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "bongkar, kotor sekali, ssd nvme 98% data c sudah ful ( lama sekali di buka ), backup data c. dan tes pakai ssdnvme cc"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "lama tampil ( walau sudah tes masuk bios) tidak bisa di matikan, ( di tutup mati sendiri indikator, dan kalau di buka nyala sendiri indikatornya )"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "pasang kembali ssd aslinya ( muncul logo acer lalu mati ) ram tanam"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "tes kembali pakai nvme cc ( tidak tampil) tidak bisa masuk bios sudah coba pakai keyboard ekternal"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "lepas batrei, cmos dan nvme. tes hanya berkedip sebentara Lcdnya ( blm sempat muncul logo acer )"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "dirapikan semua"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/6/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/13/2026",
        "catatan": "pasang mainboard  ( tes pakai ssd cc)"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/13/2026",
        "catatan": "sempat tampil masuk windows, blm sempat cek semua tapi toucpad tidak jadi, sudah instal driver 2 kali, ) mati tiba tiba satu kali )"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/13/2026",
        "catatan": "rencana instal ulang ( pakai ssd cc) tidak tampil kaya awal sebelum di servis"
      },
      {
        "step": 13,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/13/2026",
        "catatan": "ganti pasta dan tes. tetap tidak tampil"
      },
      {
        "step": 14,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/13/2026",
        "catatan": "lepas batrei dan tes pakai psu ( sudah di diamkan 15menit ) belum tampil tampil"
      },
      {
        "step": 15,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/14/2026",
        "catatan": "Tes nyalakan  sempat menyala & tampil hnya sbntar langsung mati tpi indikator msih mnyala tekan tombol power lgi amper hbis naik lngsung turun begitu trus & tes eksternal jg tdk tampil"
      },
      {
        "step": 16,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/15/2026",
        "catatan": "rapikan & pasang kemabli SSD ny & CANCEL"
      }
    ]
  },
  {
    "id": "SRV-146",
    "no": 146,
    "nama_pelanggan": "feri",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "feri ( hitam )",
    "seri_perangkat": "Laptop Acer  A314-33",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek, ganti keyboard",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/7/2026",
    "link_fb": "https://www.facebook.com/share/p/1HUt9HT6Gc/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "tidak masuk windows"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "bongkar, cek hardisk dan tes pakai hardisk cc"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "instal ulang pakai hardisk cc. keyboard bermasalah yang lain aman"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/7/2026",
        "catatan": "backup data c dan renama. hdd 100%"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "ganti keyboard dan tes pakai ssd cc dan semua aman"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "cek hardisknya 3 kali tidak terbaca sama sekali  lagi datanya ( sop ganti hdd atau ssd)"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "ganti ssd 128gb"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "semua aman. dan sudah di ambil orangnya"
      }
    ]
  },
  {
    "id": "SRV-147",
    "no": 147,
    "nama_pelanggan": "Tiar Tumada",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Tiar Tumada (Hitam)",
    "seri_perangkat": "CPU Asus H81M-K",
    "kategori": "PC / Komputer",
    "keluhan": "tdk mau menyala berat sekali",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/12/2026",
    "link_fb": "https://www.facebook.com/share/p/1KHDAgXbQk/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/7/2026",
        "catatan": "QC semua aman kecuali lambat. awal menyala ringan tapi lama2 langsung lambat"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/8/2026",
        "catatan": "cek kesehatan hdd nya 56% dan pakai usb wifi tidak terbaca"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/10/2026",
        "catatan": "Tes pakai SSD CC  tiba² ngefreze Saat putar You Tube win 10 gpt"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/10/2026",
        "catatan": "Tes kembali dan coba instal win 10 mbr pakai SSD CC (aman)"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/10/2026",
        "catatan": "sudah selesai di ganti SSD + ganti pasta serta cleaning, sementara tes putar YouTube 30 menit"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/11/2026",
        "catatan": "putar youtbe dan matika 3x semua aman"
      },
      {
        "step": 7,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/12/2026",
        "catatan": "Lunas Tapi belum diambil"
      }
    ]
  },
  {
    "id": "SRV-148",
    "no": 148,
    "nama_pelanggan": "Tiar Tumada",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Tiar Tumada (Hitam)",
    "seri_perangkat": "PC ALL IN ONE HP 205 Pro G4 22",
    "kategori": "PC / Komputer",
    "keluhan": "Tiba-tiba tdk menyala",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/9/2026",
    "link_fb": "https://www.facebook.com/share/p/1BwLUP3uzW/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/7/2026",
        "catatan": "tes tdk tdk menyala sdh ganti cas juga kebetulan ada yg sama di CC2 tetap tdk nyala"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/9/2026",
        "catatan": "Tes pakai mesin, ampere tidak betul (error)"
      }
    ]
  },
  {
    "id": "SRV-149",
    "no": 149,
    "nama_pelanggan": "feri",
    "warna_unit": "silver",
    "pelanggan_lengkap": "feri ( silver)",
    "seri_perangkat": "Laptop acer AL 14-31P",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak menyala",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/13/2026",
    "link_fb": "https://www.facebook.com/share/p/17s2fZLFuM/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/7/2026",
        "catatan": "cek eksternal tampil, semua aman kecuali ( casing ada yg retak bagian engsel, dan susah rapat kalau di tutup )"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "bongkar, rencana mau buka lcd ( engsel lcd goyang ) tgg konfimasi orgnya"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "dipasang kembali ( sudah di dp 300rb)"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/10/2026",
        "catatan": "bongkar, buka lcd. 30pin"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/10/2026",
        "catatan": "tes pakai lcd cc ( yang sama persis tidak tampil )"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/10/2026",
        "catatan": "tes pakai lcd aslinya ( tidak tampil )"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/11/2026",
        "catatan": "perbaiki engsel Lcd"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/11/2026",
        "catatan": "pasang tes pakai lcd aslinya"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/11/2026",
        "catatan": "tes ke 2kalinya aman"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/13/2026",
        "catatan": "aman semua ( sudah kabari orgnya)"
      },
      {
        "step": 11,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "7/13/2026",
        "catatan": "sudah diambil, pemasukkan 600k"
      }
    ]
  },
  {
    "id": "SRV-150",
    "no": 150,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Lenovo Thinkpad T450",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/10/2026",
    "link_fb": "https://www.facebook.com/share/p/1LWQWKDtyD/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/8/2026",
        "catatan": "Install Win 10 64bit MBR"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/8/2026",
        "catatan": "Semua aman Kecuali tombol F4 tdk bisa"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/10/2026",
        "catatan": "Spesifikasi Teknis:\n‎🔹 Processor : Intel Core i5-5200U\n‎🔹 Memory : 8GB DDR3\n‎🔹 Storage : SSD 256 GB Kencang\n‎🔹 Display : 14inch"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/10/2026",
        "catatan": "‎🔹 Resolusi : 1600×900 HD+\n‎🔹 Operating System :  Windows 10\n‎🔹 Fitur Tambahan :\n‎      • Touchscreen (Layar Sentuh) \n      • Double Baterai"
      }
    ]
  },
  {
    "id": "SRV-151",
    "no": 151,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Lenovo Thinkpad T450s",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/10/2026",
    "link_fb": "https://www.facebook.com/share/p/1JzA9NtW1S/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/8/2026",
        "catatan": "Install apk standar"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/8/2026",
        "catatan": "QC semua aman kecuali baterai tdk mngisi karena longgar pengait patah & casing LCD renggang & lecet"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/8/2026",
        "catatan": "pasang baterai luar CC hnya satu yg mngisi"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/10/2026",
        "catatan": "Spesifikasi Teknis:\n‎🔹 Processor : Intel Core i7-5600U\n‎🔹 Memory : 8GB DDR3\n‎🔹 Storage : SSD 256GB Kencang\n‎🔹 Display : 14inch \n‎"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/10/2026",
        "catatan": "🔹 Resolusi : 1920×1080 FHD\n‎🔹 Operating System :  Windows 10\n‎🔹 Fitur Tambahan :\n‎      • Fingerprint\n      • Backhligth\n      • Double Baterai\n❌ MINUS LECET PEMAKAIAN 10%"
      }
    ]
  },
  {
    "id": "SRV-152",
    "no": 152,
    "nama_pelanggan": "Tiar Tumada",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Tiar Tumada (Hitam)",
    "seri_perangkat": "Printer Epson L3110",
    "kategori": "Printer",
    "keluhan": "indikator kedap-kedip",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/12/2026",
    "link_fb": "https://www.facebook.com/share/p/1BzLvC1pPr/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/8/2026",
        "catatan": "tes nyalakan  kedap-kedip merah & bunyinya sdh agak lain.."
      },
      {
        "step": 2,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "7/8/2026",
        "catatan": "Bawa ke Portable"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/12/2026",
        "catatan": "Lunas Tapi belum diambil"
      }
    ]
  },
  {
    "id": "SRV-153",
    "no": 153,
    "nama_pelanggan": "PAK CHAIDIR",
    "warna_unit": "HITAM",
    "pelanggan_lengkap": "PAK CHAIDIR ( HITAM )",
    "seri_perangkat": "Laptop asus A1402Z",
    "kategori": "Laptop / Notebook",
    "keluhan": "TERTUMPAH KOPI",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/9/2026",
    "link_fb": "https://www.facebook.com/share/p/1BNJaMgKZo/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/8/2026",
        "catatan": "TES KASIH NYALA DI PSU ( NYALA ) BELUM SEMPAT DI CEK"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/8/2026",
        "catatan": "BONGKAR, KERINGKAN SEMUA DI BAWA DAN DI ATAS KEYBOARD ( MESIN DI BUKA SEMUA )"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "TES KASIH NYALA. SEMUA  AMAN ( sudah di tes 2 jam lebih )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "semua aman sudah di tes 2 kali ( sisah di cleaning dan ganti pasta"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "sudah di cleaning dan ganri pasta. sisah di kabari ( sudah aman sudah di cek seharian )"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-154",
    "no": 154,
    "nama_pelanggan": "fida",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "fida ( hitam)",
    "seri_perangkat": "Laptop Acer Aspire A314-41",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti keyboard",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/9/2026",
    "link_fb": "https://www.facebook.com/share/p/1ANbmhVqLQ/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "cek, keyboard bermasalah, lambat yang lain aman. backup data c, nvme 98%"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "ganti keyboard"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "semua aman, sisah lambat"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "instal ulang."
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/9/2026",
        "catatan": "cek semua aman. sisah di ambil"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/9/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-155",
    "no": 155,
    "nama_pelanggan": "Fitri",
    "warna_unit": "Sand Gold",
    "pelanggan_lengkap": "Fitri (Sand Gold)",
    "seri_perangkat": "Lenovo Ideapad Slim 11",
    "kategori": "Laptop / Notebook",
    "keluhan": "bagian engsel rusak",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/11/2026",
    "link_fb": "https://www.facebook.com/share/p/18pNybRsBV/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/11/2026",
        "catatan": "QC. semua aman kecuali bagian engselnya rusak, layar lcd bergaris, cukup lambat win"
      }
    ]
  },
  {
    "id": "SRV-156",
    "no": 156,
    "nama_pelanggan": "Anto",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Anto (Hitam)",
    "seri_perangkat": "Printer Epson L121",
    "kategori": "Printer",
    "keluhan": "ketika print kertas yg ke tarik lebih dari 1 lembar",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/13/2026",
    "link_fb": "https://www.facebook.com/share/p/1C9pCkkXbx/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Zam Zam"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/11/2026",
        "catatan": "tes print tinta putus2 & yg keluar kertas lebih dari 1 sy sdh coba cleaning 2 kali tetap sama"
      },
      {
        "step": 2,
        "teknisi": "Arif & Zam Zam",
        "teknisi_utama": "Arif",
        "tanggal": "7/11/2026",
        "catatan": "Bawa ke Portable"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "Tes Print aman"
      }
    ]
  },
  {
    "id": "SRV-157",
    "no": 157,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Laptop Lenovo Thinkpad T450",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/13/2026",
    "link_fb": "https://www.facebook.com/share/p/1EjniqFphp/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "tes pasang SSD CC & QC semua aman kecuali touchpad kiri kanan tdk bisa di klik (keras) & LCD bercak merah & berbayang"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "Bongkar, Lepas LCD & SSD kemudian pasang LCD Laptop T450s & SSD 256GB"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "Install win 10 64bit GPT Kemudian QC semua aman kecuali touchpad kiri & kanan tdk jddi"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "Baku tukar keyboard dengan T450s Backligth kemudian cek aman"
      }
    ]
  },
  {
    "id": "SRV-158",
    "no": 158,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Laptop Lenovo Thinkpad T450s",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/13/2026",
    "link_fb": "https://www.facebook.com/share/p/1EjniqFphp/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "Bongkar, Lepas LCD kemudian pasang LCD T450 Kemudian Pasang SSD CC 128GB"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "QC semua aman kecuali LCD bercak merah & berbayang (frame LCD jelek sdh kropos & casing bnyak yg retak)"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "Baku tukar keyboard dengan T450 Non Backligth kemudian cek aman"
      }
    ]
  },
  {
    "id": "SRV-159",
    "no": 159,
    "nama_pelanggan": "Pak Darmawan",
    "warna_unit": "-",
    "pelanggan_lengkap": "Pak Darmawan",
    "seri_perangkat": "Printer Epson L121",
    "kategori": "Printer",
    "keluhan": "tdk bisa memprint",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/15/2026",
    "link_fb": "https://www.facebook.com/share/p/193ZysN9ma/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/14/2026",
        "catatan": "Tes Print tidak bisa memprint ( hanya setenga )"
      },
      {
        "step": 2,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "7/13/2026",
        "catatan": "Bawa ke Portable"
      },
      {
        "step": 3,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "7/15/2026",
        "catatan": "Ambil dri portabel"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/15/2026",
        "catatan": "test print aman kecuali tinta warna biru putus2"
      }
    ]
  },
  {
    "id": "SRV-160",
    "no": 160,
    "nama_pelanggan": "ari",
    "warna_unit": "biru",
    "pelanggan_lengkap": "ari (biru)",
    "seri_perangkat": "DELL Inspiron 11 3000",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek, kdng bluecreen",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/16/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/14/2026",
        "catatan": "lambat suara kresek,usb 1 tidak bisa di colok  semua aman kecuali setiap mau backup data blueceen"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/14/2026",
        "catatan": "bongkar, cek hdd dan tes pakai ssd cc. hdd aslinya 100% backup data dan reaname"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/14/2026",
        "catatan": "tes pakai ssd cc. semua aman , kecuali suara agak kresek,1 usb tidak jadi"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "pasang ssd 512 dan instal"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "suara kresek,usb 1 tidak bisa di colok  semua aman kecuali setiap mau backup data blueceen . suda tes 3x"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-161",
    "no": 161,
    "nama_pelanggan": "Rahmat",
    "warna_unit": "abu-abu",
    "pelanggan_lengkap": "Rahmat (abu-abu)",
    "seri_perangkat": "Laptop acer Aspire 4739",
    "kategori": "Laptop / Notebook",
    "keluhan": "Layar Kedap-Kedip",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/22/2026",
    "link_fb": "https://www.facebook.com/share/p/19Jupk4mq1/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/16/2026",
        "catatan": "QC semua aman kecuali layar kedap-kedip (ada bercak jg di LCD ny) , baterai tdk mengisi & agak sedikit lambat"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "bongkar, buka kcd tes pakai lcd cc"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "batrei tidak jadi, lambat, yang lain aman tes pakai lcd cc ( 40pin )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "tes ke 2x nya pakai lcd cc aman"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "pasang semua dan tes tidak tammpil ( ekternal tampil )"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/21/2026",
        "catatan": "ganti lcd baru dan cek"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/21/2026",
        "catatan": "Rahmat. Sudah 2x mati. Batrei bermasalah yang lain aman"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/22/2026",
        "catatan": "SDH AMBIL"
      }
    ]
  },
  {
    "id": "SRV-162",
    "no": 162,
    "nama_pelanggan": "Pa Kasim",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Pa Kasim (Silver)",
    "seri_perangkat": "Laptop acer  aspire 3 A314",
    "kategori": "Laptop / Notebook",
    "keluhan": "lcd bermasalah",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/24/2026",
    "link_fb": "https://www.facebook.com/share/p/1JPVGkAeXV/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "lcd goyang goyang, lambat, yang lain aman ( belum cek ekternal"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/16/2026",
        "catatan": "semua aman kecuali LCD bermasalah & Keyboard F12/NumLock ny tertekan.."
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/16/2026",
        "catatan": "test eksternal tdk mau tampil"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "bongkar, buka lcd 30 in FHD no kuping"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "tes pakai lcd cc ( aman ) belum semoat tes standar. tes 2 lcd yang berbeda aman"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "lumayan kotor juga dalamnya ( sudah di rapikan kembali ) sisah tgg lcd dtg"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/21/2026",
        "catatan": "ganti lcd. pasang lcd baru dan tes"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/22/2026",
        "catatan": "QC  semua aman kecuali keyboard tombol F12/Num lock ny tertekan."
      },
      {
        "step": 9,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/24/2026",
        "catatan": "sdh ambil"
      }
    ]
  },
  {
    "id": "SRV-163",
    "no": 163,
    "nama_pelanggan": "Pa Kasim",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Pa Kasim (Hitam)",
    "seri_perangkat": "Komputer Lenovo ideacentre F0DT",
    "kategori": "PC / Komputer",
    "keluhan": "tdk masuk windows",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/22/2026",
    "link_fb": "https://www.facebook.com/share/p/1F7YzdmKqK/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/16/2026",
        "catatan": "menyala tapi tdk msuk win sy sdh coba setting bios tetap tdk bisa.."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "bongkar, cek hdd"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "hdd tidak terbaca ( pakai hdd besar)"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "tes pakai ssd cc ( layar agak kuning) belum cek standar"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "bongkar ulang, cek fleksibel"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "tetap masih sama layar agak kuning"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "pasang kembali hdd aslinya dan tes kasih nyala ( layar masih kuning )"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/22/2026",
        "catatan": "test nyalakn layar kuning bercak hijau & kedap-kedip"
      }
    ]
  },
  {
    "id": "SRV-164",
    "no": 164,
    "nama_pelanggan": "muhaimin",
    "warna_unit": "abu abu",
    "pelanggan_lengkap": "muhaimin (abu abu )",
    "seri_perangkat": "asus x441m",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek upgrade ke ssd",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/16/2026",
    "link_fb": "https://www.facebook.com/share/p/1Hfrtyenhk/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "usb 1 tudak jadi, lambat, suara tidak ada yang lain aman. backup data dan rename"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "bongkar, ganti ssd 256gb dan instal"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "psng hdd cady, tes matikan 3x. suara tidak jadi ( speker sudah luka parah ) yang lain aman"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/16/2026",
        "catatan": "sudah di ambil jam 5 sore"
      }
    ]
  },
  {
    "id": "SRV-165",
    "no": 165,
    "nama_pelanggan": "Hilya/Inang",
    "warna_unit": "Hitam Gold",
    "pelanggan_lengkap": "Hilya/Inang (Hitam Gold)",
    "seri_perangkat": "Laptop Asus X441M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Layar kedap-kedip",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/20/2026",
    "link_fb": "https://www.facebook.com/share/p/1D7T5kF3a1/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/17/2026",
        "catatan": "QC semua aman kecuali layar berkedip-kedip biar pun di eksternal & suara kresek.."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/17/2026",
        "catatan": "pasang SSD CC & QC semua aman kecuali suara Kresek (layar tdk berkedip lagi)"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/17/2026",
        "catatan": "cek SSD 100% & backup data C"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/17/2026",
        "catatan": "tes pakai ssd aslinya layar kedap kedip"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "pakai ssd cc aman semua kecuali suara kresek"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "instal ulang ( pakai ssd aslinya)"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "semua aman, kecuali suara kresek sudah di tes 2x"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-166",
    "no": 166,
    "nama_pelanggan": "Aksal",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Aksal (Hitam)",
    "seri_perangkat": "Laptop DELL LATITUDE E7450",
    "kategori": "Laptop / Notebook",
    "keluhan": "tdk masuk win",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/20/2026",
    "link_fb": "https://www.facebook.com/share/p/1D7Tw19dZb/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/17/2026",
        "catatan": "tes nyalakan hrus sambil cas & tdk msuk windows.."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/17/2026",
        "catatan": "Cek SSD 100% & Backup Data C"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "bongkar, tes pakai ssd cc"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "tidak menyala"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "lepas batrei dan tes pakai psu ( tidak tampil) menyala ampere normal  dan panas sekali"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "pasang kembali dan dinginkan dlu ( masih pakai ssd cc)"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "Tes pakai ssd cc, batrei 48% trs yg lain aman semua"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/17/2026",
        "catatan": "Tes ke 3 kalinya. Setiap di nyalakan masuk bios trs ( harus di setting) dan layar mati menyala smpe 3 atau 4 kali baru masuk win ( masih pakai ssd cc )"
      },
      {
        "step": 9,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/18/2026",
        "catatan": "semua aman kecuali lama masuk win hrus setting bios & baterai stuck di 48% tdk naik kemudian saya matikan & nyalakan lgi tdk tampil tpi keyboard & indikator mnyala"
      },
      {
        "step": 10,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/18/2026",
        "catatan": "Tes di belakang tdk tampil tapi pas di colokan cas langsung mnyala sendiri tanpa tekan tombol power.. di ksih mati jga tdk bisa seperti tdk berfungsi tombol power ny..Kemudian tes kembali pke cas asli mnyala & tampil (tanpa tekan tombol power)"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "tes kasih menyala( indikator menyala ) tapi tidak menyala"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "tes buka batrei ( sama saja ) tidak menyala"
      },
      {
        "step": 13,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "GANTI BATREI CMOS, TES PAKAI SSD CC ( PASTA SUDAH KERING) SUSAH BONGKARNYA SUDAH DI TES 3X MATI MENYALA  AMAN. SUDAH DIDIAMKAN 20MENIT JUGA"
      },
      {
        "step": 14,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "instal ulang, ganti batrei cmos  ( sudah dp 200rb)"
      },
      {
        "step": 15,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "semua aman kecuali batrei 48 terus"
      },
      {
        "step": 16,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "semua aman kecuali batrei 48 terus"
      },
      {
        "step": 17,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-167",
    "no": 167,
    "nama_pelanggan": "Ilham",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Ilham (Hitam)",
    "seri_perangkat": "All In One Lenovo V130-20|GM",
    "kategori": "PC / Komputer",
    "keluhan": "Install",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/20/2026",
    "link_fb": "https://www.facebook.com/share/p/1DKFA2i2ZZ/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/18/2026",
        "catatan": "QC semua aman kecuali lumayan lambat keluhannya minta di install ulang"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/18/2026",
        "catatan": "Backup Data Rename"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "ganti ssd 256gb dan instal"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "cek hdd 100%"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/18/2026",
        "catatan": "semua aman sudah di tes mati menyala ( sisah di ambil )"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "semua aman (sudah kabari orgnya)"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/20/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-168",
    "no": 168,
    "nama_pelanggan": "Roby",
    "warna_unit": "Biru Tua",
    "pelanggan_lengkap": "Roby (Biru Tua)",
    "seri_perangkat": "Lenovo Ideapad  Slim 3",
    "kategori": "Laptop / Notebook",
    "keluhan": "Tidak Nyala",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/29/2026",
    "link_fb": "https://www.facebook.com/share/v/187cXhbTcd/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/21/2026",
        "catatan": "Cek pakai cas tidak nyala dan tes di mesin ampere nya hanya sampai 0,006"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "Bongkar, Lepas Mainboard"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "pasang mainboard"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "semua aman hanya panas sekali ( sudah dites 3x)"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "ganti pasta ( ardin yang cek di cc2)"
      }
    ]
  },
  {
    "id": "SRV-169",
    "no": 169,
    "nama_pelanggan": "Agung",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Agung (Hitam)",
    "seri_perangkat": "Printer Epson L3210",
    "kategori": "Printer",
    "keluhan": "indikator kedap-kedip",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/22/2026",
    "link_fb": "https://www.facebook.com/share/p/17qjtU34aL/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/22/2026",
        "catatan": "tes nyalakan indikator kedap-kedip."
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "7/22/2026",
        "catatan": "Reset"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/22/2026",
        "catatan": "tes print aman kecuali tinta biru agak putus2"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/22/2026",
        "catatan": "Cleaning & tes print 4x aman"
      }
    ]
  },
  {
    "id": "SRV-170",
    "no": 170,
    "nama_pelanggan": "Kayan",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Kayan (Hitam)",
    "seri_perangkat": "Laptop Lenovo Thinkpad T440s",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cas Tdk mngisi",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/22/2026",
    "link_fb": "https://www.facebook.com/share/p/1bXEM718iK/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/22/2026",
        "catatan": "tes cas pke cas asli tdk mngisi kemudian tes ganti cas dgn ampere yg sama 3,25A tetaptdk mngisi"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/22/2026",
        "catatan": "tes pke cas 4,5A mngisi kemudian QC semua aman"
      }
    ]
  },
  {
    "id": "SRV-171",
    "no": 171,
    "nama_pelanggan": "yuli",
    "warna_unit": "silver",
    "pelanggan_lengkap": "yuli ( silver",
    "seri_perangkat": "asus A15OK",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal office",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/22/2026",
    "link_fb": "",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "semua aman. instal office 2013"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-172",
    "no": 172,
    "nama_pelanggan": "zain",
    "warna_unit": "hitam coklat",
    "pelanggan_lengkap": "zain ( hitam coklat)",
    "seri_perangkat": "asus x441m",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal ulang",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/22/2026",
    "link_fb": "https://www.facebook.com/share/p/1HraPJM4t4/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "lambat, yang lain aman . sudah pakai ssd. ram 4gb"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "backup data c dan raneme"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "instal win 10 dan cek"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "sudah di tes 2x aman"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-173",
    "no": 173,
    "nama_pelanggan": "mama resta",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "mama resta ( hitam",
    "seri_perangkat": "printer epson L120",
    "kategori": "Printer",
    "keluhan": "cek tinta",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "8/1/2026",
    "link_fb": "https://www.facebook.com/share/p/19PcygToFy/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Arif",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/22/2026",
        "catatan": "tidak bisa memprint ( kertas tidak mau turun ) dan ada bunyi bunyi"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/23/2026",
        "catatan": "sy cek ada kertas tersangkut di dalam tapi sdh sy keluar kn & ini kemungkinan roler/penarik kertas ny bermasalah karena sy tes print lngsung kusut kertas + tempat kertas ny kyk ikut ketarik begitu"
      },
      {
        "step": 3,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "7/23/2026",
        "catatan": "bawa ke portable"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "tes print tinta putus2.. Sy cek semua tintanya mau hbis.."
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "sdh ambil"
      }
    ]
  },
  {
    "id": "SRV-174",
    "no": 174,
    "nama_pelanggan": "Fandi Ahmad",
    "warna_unit": "Putih",
    "pelanggan_lengkap": "Fandi Ahmad (Putih)",
    "seri_perangkat": "Komputer Advan One pice ANa4S01A",
    "kategori": "PC / Komputer",
    "keluhan": "Lalot",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/24/2026",
    "link_fb": "https://www.facebook.com/share/p/1JrA3rJSC9/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/23/2026",
        "catatan": "cek aman semua kecuali kadang agak lambat sedikit"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/23/2026",
        "catatan": "Backup & Rename"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/23/2026",
        "catatan": "cek sentinel SSD 89%"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/23/2026",
        "catatan": "install win 11 64bit GPT"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/23/2026",
        "catatan": "cek semua aman sudah di tes 2kali dan sudah di kabari"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/24/2026",
        "catatan": "SUDAH AMBIL"
      }
    ]
  },
  {
    "id": "SRV-175",
    "no": 175,
    "nama_pelanggan": "Voril",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Voril (Hitam)",
    "seri_perangkat": "Laptop DELL LATITUDE 3410",
    "kategori": "Laptop / Notebook",
    "keluhan": "Tidak Tampil Indikator Kedap-Kedip (09.50)",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "7/24/2026",
    "link_fb": "https://www.facebook.com/share/p/1HiFoE48GD/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/24/2026",
        "catatan": "Tes nyalakan tdk tampil hnya indikator kedap-kedip kemudian tes di eksternal jga sama tdk tampil"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/24/2026",
        "catatan": "Bongkar, Lepas soket Baterai Kemudian tes nyalakn mnyala tpi lngsung msuk bios minta settting waktu nya"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/24/2026",
        "catatan": "QC semua aman kecuali pas awal di nyalakn sempat mati menyala 2-3x bru tampil & langsung msuk bios"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/24/2026",
        "catatan": "Pasang Baterai CMOS baru tetap sama pas di nyalakn kembali masuk bios"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/24/2026",
        "catatan": "Rapikan semua kembalikan Baterai CMOS asli nya & pasang kembali soket baterai nya"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/24/2026",
        "catatan": "tes nyalakan menyala tapi kembali seperti awal orang nya bawa tdk tampil"
      }
    ]
  },
  {
    "id": "SRV-176",
    "no": 176,
    "nama_pelanggan": "Irman",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Irman (Silver)",
    "seri_perangkat": "Laptop Asus X441U",
    "kategori": "Laptop / Notebook",
    "keluhan": "Tidak masuk Win",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "7/25/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2293711801391545/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/25/2026",
        "catatan": "Bongkar Cek HDD dan Pasang SSD cc Unutk QC"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/25/2026",
        "catatan": "cek hdd irman health 9% dan data2 nya tidak bisa terbaca"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/25/2026",
        "catatan": "Tes pakai SSD CC, QC. semua aman kecuali suara kresek.:"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/25/2026",
        "catatan": "ganti pakai hdd bekas instal ualng win 10 gpt"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/25/2026",
        "catatan": "cek semua aman kecuali suara agak kresek, dan orang nya sudah ambil pembayaran tunai"
      }
    ]
  },
  {
    "id": "SRV-177",
    "no": 177,
    "nama_pelanggan": "Andar",
    "warna_unit": "Abu-abu",
    "pelanggan_lengkap": "Andar (Abu-abu)",
    "seri_perangkat": "Asus A409f",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak menyala",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "7/25/2026",
    "link_fb": "https://www.facebook.com/share/p/183eEQ4qQD/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/25/2026",
        "catatan": "tes di belakang pake PSU tetap tdk mnyala"
      }
    ]
  },
  {
    "id": "SRV-178",
    "no": 178,
    "nama_pelanggan": "CC",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "CC (Hitam)",
    "seri_perangkat": "Lenovo Thinkpad T460",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "7/25/2026",
    "link_fb": "https://www.facebook.com/share/p/1DCoeWnHW6/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/25/2026",
        "catatan": "install apk standar & QC semua aman ada 3 unit"
      }
    ]
  },
  {
    "id": "SRV-179",
    "no": 179,
    "nama_pelanggan": "Faril Samit",
    "warna_unit": "Biru Tua",
    "pelanggan_lengkap": "Faril Samit (Biru Tua)",
    "seri_perangkat": "Asus VivoBook E401K",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cepta Panas dan lama kelamaan jadi lambat windows",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "7/27/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2293913131371412/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/25/2026",
        "catatan": "QC, semua aman kecuali laptop cepat panas dan lama² windows jadi lambat"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/25/2026",
        "catatan": "ganti pasta + Instal Ulang Win 10 , tapi back up data C dan Rename"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/25/2026",
        "catatan": "sudah selesai di Instal Cek Semua aman, kecuali agak panas saja"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/27/2026",
        "catatan": "Faril samit. Semua aman ( sejauh ini blm panas ) sementara di cek"
      }
    ]
  },
  {
    "id": "SRV-180",
    "no": 180,
    "nama_pelanggan": "Arman",
    "warna_unit": "Biru Tua agak Hitam",
    "pelanggan_lengkap": "Arman (Biru Tua agak Hitam)",
    "seri_perangkat": "Asus VivoBook Pro 14 Oled",
    "kategori": "Laptop / Notebook",
    "keluhan": "lampu cas nya nyala terus + Clening",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "7/26/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2294611547968237/?app=fbl",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/26/2026",
        "catatan": "QC.  semua aman kecuali lampu cas nya nyala terus dan batreinya dicas masih 0%"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/26/2026",
        "catatan": "back up Data C, Rename dan Inul win 11 GPT"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/26/2026",
        "catatan": "setelah di inul masih tetap menyala lampu indikator cas, padhal sudah tidak cas + batrei 0%"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/26/2026",
        "catatan": "bongkar serta clening + ganti pasta"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/26/2026",
        "catatan": "tes dan qc kembali semua aman kecuali kadang di mau kadang tidak"
      }
    ]
  },
  {
    "id": "SRV-181",
    "no": 181,
    "nama_pelanggan": "Fatah",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Fatah (Hitam)",
    "seri_perangkat": "CPU Asus U31G1_12",
    "kategori": "PC / Komputer",
    "keluhan": "Install Ulang",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "7/30/2026",
    "link_fb": "https://www.facebook.com/share/p/1G2HDYCCoU/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Ardin",
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/28/2026",
        "catatan": "Tes nyalakan hanya mati menyala (tdk tampil) & di dalam nya kotor sekali"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/28/2026",
        "catatan": "Bersihkan ram, bisa tampil kembali"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/28/2026",
        "catatan": "QC pc an. semua aman kecuali windows saja lumayan lambat, kesehatan Hdd dan  spesifikasinya:"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "7/28/2026",
        "catatan": "Back Up data C dan Rename Kemudian instal Win 10 GPT"
      },
      {
        "step": 5,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "7/29/2026",
        "catatan": "Cleaning & Ganti Pasta"
      },
      {
        "step": 6,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "7/29/2026",
        "catatan": "tes nyalakan tampil tdk masuk win trus ada tulisan 1 fan eror"
      },
      {
        "step": 7,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "7/29/2026",
        "catatan": "lepas lalu pindahkn soket fan (kipas)"
      },
      {
        "step": 8,
        "teknisi": "Arif & Ardin",
        "teknisi_utama": "Arif",
        "tanggal": "7/29/2026",
        "catatan": "tes nyalakan kembali aman smntara tes putar video"
      },
      {
        "step": 9,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/29/2026",
        "catatan": "sdh tes putar video 30mnit & tes mati menyala 1x aman.."
      },
      {
        "step": 10,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/29/2026",
        "catatan": "sudah ambil pembayran cash 300rb"
      },
      {
        "step": 11,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/30/2026",
        "catatan": "Bawa Kembali dgn keluhan lambat"
      },
      {
        "step": 12,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/30/2026",
        "catatan": "install ulang win 8.1 64bit GPT kemudian tes mati 3x aman"
      }
    ]
  },
  {
    "id": "SRV-182",
    "no": 182,
    "nama_pelanggan": "Pak Darmawan",
    "warna_unit": "-",
    "pelanggan_lengkap": "Pak Darmawan",
    "seri_perangkat": "Komputer Acer Aspire Z1-211",
    "kategori": "PC / Komputer",
    "keluhan": "Lambat (1.30)",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "8/4/2026",
    "link_fb": "https://www.facebook.com/share/p/1Bg3SyXATL/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/28/2026",
        "catatan": "QC semua aman kecuali lambat"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/28/2026",
        "catatan": "Cek Sentinel HDD 100%"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "Bongkar, Pasang SSD 128GB"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "Install win 10 64bit MBR"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "Semua aman kecuali masih agak lambat"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "semua aman sudah di cek dan tes 3x"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/1/2026",
        "catatan": "Install win 8.1 64bit MBR QC semuan aman &  sdh di matikn 3x"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/4/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-183",
    "no": 183,
    "nama_pelanggan": "Upeng",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Upeng (Silver)",
    "seri_perangkat": "Laptop Advan Soulmate 1405 L24G-NSNS1",
    "kategori": "Laptop / Notebook",
    "keluhan": "LCD PECAH",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "7/31/2026",
    "link_fb": "https://www.facebook.com/share/p/1EWpeFpvgE/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/29/2026",
        "catatan": "QC Semua aman kecuali LCD pecah, Lambat & suara tdk ada.."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "Validasi Ulang Lambat, touchpad kdng kandas2, lcd pecah yg lain aman"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "Bongkar, Foto LCD  30pin"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/31/2026",
        "catatan": "ganti lcd dan cek"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/31/2026",
        "catatan": "semua aman ( sudah di kabari orangnya )"
      }
    ]
  },
  {
    "id": "SRV-184",
    "no": 184,
    "nama_pelanggan": "sri yuliana",
    "warna_unit": "-",
    "pelanggan_lengkap": "sri yuliana",
    "seri_perangkat": "Laptop asus A407M",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek rencana mau ganti ssd",
    "tgl_masuk": "7/25/2026",
    "tgl_update": "7/30/2026",
    "link_fb": "https://www.facebook.com/share/p/17QDA8fpw2/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "Lambat sekali, ssd tidak bisa dicek ( tidak mau terbuka hddcentinel) sdh di backup data c nya yg lain aman"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/29/2026",
        "catatan": "ssd 98% kesehatannya"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/30/2026",
        "catatan": "Bongkar, cek SSD 98% & di dalamnya luamayan kotor"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/30/2026",
        "catatan": "Backup Data di luar (Flashdisk Sandiks CC)"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "ganti ram 8gb ddr4"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "cleaning dan ganti pasta."
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "tes, semua aman ( pakai ssd cc) sisah di instal ulang"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "sudah di tes 3x matikan, lanjut instal ulang pakai ssd aslinya"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "instal ulang"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "SUDAH DI CEK DAN TES SEMUA AMAN"
      }
    ]
  },
  {
    "id": "SRV-185",
    "no": 185,
    "nama_pelanggan": "ari",
    "warna_unit": "biru",
    "pelanggan_lengkap": "ari (biru)",
    "seri_perangkat": "DELL Inspiron 11 3000",
    "kategori": "Laptop / Notebook",
    "keluhan": "tbtb suka blecreen",
    "tgl_masuk": "7/3/2026",
    "tgl_update": "8/3/2026",
    "link_fb": "https://www.facebook.com/share/p/1Vy3xeBUfm/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "suara agak kresek, usb 1 tidak bisa di colok. ( baru tes 15menit tbtb bluecreen) dan masuk bios tertekan sendiri"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "bongkar, lepas soket keyboard dan tes pakai ssd cc"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "Tes pakai ssd cc, lepas soket keyboard ( soalnya kalau masuk bios tertekan sndiri) setelah di lepas tidak. Tp masih tbtb masuk bios sendiri walau pakai ssd cc"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/30/2026",
        "catatan": "backup data c dan ssd 100%"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "tes pakai psu di belakang tidak bisa ( tetap masuk bios ) masih pakai ssd cc"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "tes keyboard aman smntara tes putar yt tapi tdk ada suara ny"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "Instal win 8. Suara agak kresek, USB 1 tidak bisa dicolok ( keras) yang lain aman. Sementara tes"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/3/2026",
        "catatan": "suara agak kresek, engsel agak goyang, usb 1 tidak jadi ( susah di colok) yang lain aman"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/3/2026",
        "catatan": "sisah di  kabari ( garansi )"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/3/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-186",
    "no": 186,
    "nama_pelanggan": "Pak Wardana",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Pak Wardana (Hitam)",
    "seri_perangkat": "Laptop Acer Z3-451/8",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek & install ulang",
    "tgl_masuk": "8/1/2026",
    "tgl_update": "8/3/2026",
    "link_fb": "https://www.facebook.com/share/p/1945sbZ5X1/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "7/30/2026",
        "catatan": "QC semua aman kecuali LAMBAT,LCD bercak putih, wifi tdk jdi, baterai tdk mengisi & kamera tdk jdi"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "bongkar cek hdd dan tes pakai ssd cc ( hdd aslinya 100%) sudah di backup data c dan rename"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "kotor sekali dalamnya, ( harus cleaning dan ganti pasta )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "wifi tidak jadi, lcd ada bercak putih yang lain aman"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "instal ulang win 10 lite ( masih pakai ssd cc)"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "wifi tidak jadi, lcd bercak  putih yang lain aman"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/30/2026",
        "catatan": "sop : tawari instal dan cleaning ganti pasta ( beli usb wifi)"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/31/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/31/2026",
        "catatan": "instal win 8.1 ( tidak terbaca"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/31/2026",
        "catatan": "instal win 10 dan cek"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "7/31/2026",
        "catatan": "semua aman sudah di tes 3 kali ( hanya lcd bercak putih )"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/3/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-187",
    "no": 187,
    "nama_pelanggan": "Pak Dosen Aswad",
    "warna_unit": "-",
    "pelanggan_lengkap": "Pak Dosen Aswad",
    "seri_perangkat": "Laptop Lenovo Ideapad 1 14|GL7",
    "kategori": "Laptop / Notebook",
    "keluhan": "Install (tdk masuk windows)",
    "tgl_masuk": "8/1/2026",
    "tgl_update": "8/1/2026",
    "link_fb": "https://www.facebook.com/share/p/1Ehe9PSyfU/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "tdk masuk windows.. blm bisa QC"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "Bongkar, Lepas SSD & cek kesehatan 99%"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "Backup Data C di SSD Sandisk CC"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "Pasang SSD CC & QC aman semua"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "Pasang Kembali SSD asli nya kemudian install win 11 64bit GPT"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/1/2026",
        "catatan": "QC semua aman & data C sdh sy simpan di Download"
      }
    ]
  },
  {
    "id": "SRV-188",
    "no": 188,
    "nama_pelanggan": "Syahrul dhamet",
    "warna_unit": "bank mantap",
    "pelanggan_lengkap": "Syahrul dhamet (bank mantap)",
    "seri_perangkat": "CPU HP",
    "kategori": "PC / Komputer",
    "keluhan": "masuk 2 unit. satu upgrade 256 gb, satunya install (tapi di exe gak bisa diinstall)",
    "tgl_masuk": "8/1/2026",
    "tgl_update": "8/2/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2301786937250698/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Hibrian"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "8/2/2026",
        "catatan": "1 unit di upgrade, install tanpa apk"
      },
      {
        "step": 2,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "8/2/2026",
        "catatan": "1 unit gak bisa di install dan copy untuk backup datanya."
      },
      {
        "step": 3,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "8/2/2026",
        "catatan": "akhirnya di upgrade, instlal os tanpa apk"
      },
      {
        "step": 4,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "8/2/2026",
        "catatan": "2 pcs ssd 256"
      },
      {
        "step": 5,
        "teknisi": "Hibrian",
        "teknisi_utama": "Hibrian",
        "tanggal": "8/2/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-189",
    "no": 189,
    "nama_pelanggan": "Muna",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Muna (Silver)",
    "seri_perangkat": "Laptop Asus X441M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Ganti Keyboard",
    "tgl_masuk": "8/3/2026",
    "tgl_update": "8/3/2026",
    "link_fb": "https://www.facebook.com/share/p/1K731W58Vs/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/3/2026",
        "catatan": "QC semua aman kecuali keyboard bermasalah, suara kresek,casing engsel ada salah 1 yg patah & tdi minta di aktivasi windows & office ny.."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/3/2026",
        "catatan": "ganti keyboard"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/3/2026",
        "catatan": "suara kresek,casing engsel ada salah 1 yg patah yang lain aman"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/3/2026",
        "catatan": "cek ssd 99% sudah di backup data c nya"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/3/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-190",
    "no": 190,
    "nama_pelanggan": "ibu tuti",
    "warna_unit": "silver",
    "pelanggan_lengkap": "ibu tuti ( silver)",
    "seri_perangkat": "Laptop asus K451L",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "8/3/2026",
    "tgl_update": "8/5/2026",
    "link_fb": "https://www.facebook.com/share/p/1FRHMHRN35/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/4/2026",
        "catatan": "semua aman kecuali casing lcd agak bermasalah"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/5/2026",
        "catatan": "Cancel,sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-191",
    "no": 191,
    "nama_pelanggan": "komang",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "komang ( hitam )",
    "seri_perangkat": "lenovo thinkpad X250",
    "kategori": "Laptop / Notebook",
    "keluhan": "kadang menyala kadang tidak",
    "tgl_masuk": "8/3/2026",
    "tgl_update": "8/7/2026",
    "link_fb": "https://www.facebook.com/share/p/17poicqgQ7/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif",
      "Fazrun",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/6/2026",
        "catatan": "di cek suara kresek, batrei cpt lobet, yang lain aman ( sementara tes)"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/5/2026",
        "catatan": "tiba-tiba tdi tdk bisa tampil hnya bunyi bib bib bib (indikator mati menyala) setelah itu kmi coba diamkn dan nyala kn lagi tiba-tiba bluescreen"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/5/2026",
        "catatan": "hnya pakai 1 batarai (baterai luar)"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/5/2026",
        "catatan": "Komang, smua aman kcuali suara kresek kcil (batrei hnya ada 1 diluar, di dlm tdk ada) CEK"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/7/2026",
        "catatan": "semua aman kecuali suara kresek & baterai cepat turun persen ny (sdh aktivasi windows & office nya karena ada notifikasi minta di aktivasi)."
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/7/2026",
        "catatan": "Tes Pake Baterai Tanam X270 tdk mau menyala"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/7/2026",
        "catatan": "Tes pake baterai luar CC yg pertama tdk mengisi kemudian tes yg ke 2 mengisi"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/7/2026",
        "catatan": "batrei naik, (agak lumayan lama ) suara kresek,yang lain aman semua"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/7/2026",
        "catatan": "suara kresek, batrei lama lobet yang lain aman ( pengancing batreinya ada yang patah tapi masih aman )"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/7/2026",
        "catatan": "sudah di cek dan tes seharian aman kecuali spiker"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/7/2026",
        "catatan": "sudah di kabari sisah di ambil"
      },
      {
        "step": 12,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/7/2026",
        "catatan": "setelah isolasi bateri komang untuk penahannya, bateri naik 63% + orangnya ambil hari senin"
      }
    ]
  },
  {
    "id": "SRV-192",
    "no": 192,
    "nama_pelanggan": "Fahrin",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Fahrin ( hitam )",
    "seri_perangkat": "Epson L210",
    "kategori": "Printer",
    "keluhan": "tidak keluar tinta dan kertas los",
    "tgl_masuk": "8/3/2026",
    "tgl_update": "8/10/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2305837600178965/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/7/2026",
        "catatan": "pas Dicek sempat los kertas setelah prin ulang aman cuman warna merah dan biru bergaris"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/8/2026",
        "catatan": "pas Dicek sempat los kertas setelah prin ulang aman cuman warna merah dan biru bergaris"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "Cancel sdh ambil"
      }
    ]
  },
  {
    "id": "SRV-193",
    "no": 193,
    "nama_pelanggan": "rahman",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "rahman ( hitam)",
    "seri_perangkat": "aspire 3 A314 series",
    "kategori": "Laptop / Notebook",
    "keluhan": "keyboard tidak jadi",
    "tgl_masuk": "8/3/2026",
    "tgl_update": "8/8/2026",
    "link_fb": "https://www.facebook.com/share/p/19RCXsD1Fb/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "Keyboard tidak jadi sama sekali. Pakai eksternal juga tidak jadi yang lain aman"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "tes masuk bios tetap tidak jadi keyboard nya"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "stok keyboard kosong kecuali di pesan"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "CANCEL ( SUDAH DI AMBIL )"
      }
    ]
  },
  {
    "id": "SRV-194",
    "no": 194,
    "nama_pelanggan": "RAUDAH",
    "warna_unit": "silver",
    "pelanggan_lengkap": "RAUDAH ( silver)",
    "seri_perangkat": "hp EliteBook 840 G6",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek ssd",
    "tgl_masuk": "8/3/2026",
    "tgl_update": "8/20/2026",
    "link_fb": "https://www.facebook.com/share/p/19NAerEsAc/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "agak lambat, ram 16gb, sudah pakai ssd 256gb, semua aman hanya belum sempat tes lama lama tbtb blucreen"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "sop kabari orangnya mau bongkar cek ssd"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "bongkar, masih ada slot ram, pakai nvme m.2, lumayan kotor data c full"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "Cek Kesehatan SSD 75% & SDH BACKUP DATA C nya"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/10/2026",
        "catatan": "Tes pakai nvme cc. Aman semua kecuali cepat panas baru di tes 1kali."
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/10/2026",
        "catatan": "masih pakai nvme cc. panas yang lain aman sudah di tes2x"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/10/2026",
        "catatan": "masih pakai nvme cc. panas yang lain aman sudah di tes 3X. sudah dp sisah tgg spertpat"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/12/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/12/2026",
        "catatan": "tes pakai m.2 cc yang baru"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/12/2026",
        "catatan": "semua aman sdah di tes 3x matikam dan di tes sampai sore"
      },
      {
        "step": 11,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/20/2026",
        "catatan": "Bongkar, Pasang SSD RX7 NVMe M.2 512GB & Pasang RAM 16GB DDR4"
      },
      {
        "step": 12,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/20/2026",
        "catatan": "install win 11 64bit GPT QC semua aman & fungsi touchscreen (layar sentuh aman) serta request pembagian data C aman."
      },
      {
        "step": 13,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/20/2026",
        "catatan": "sdh ambil pembayaran Via TF BNI"
      }
    ]
  },
  {
    "id": "SRV-195",
    "no": 195,
    "nama_pelanggan": "ibu tika",
    "warna_unit": "abu abu",
    "pelanggan_lengkap": "ibu tika ( abu abu)",
    "seri_perangkat": "Laptop Hp HP 240 GB",
    "kategori": "Laptop / Notebook",
    "keluhan": "lcd pecah",
    "tgl_masuk": "8/3/2026",
    "tgl_update": "8/12/2026",
    "link_fb": "https://www.facebook.com/share/p/1D3UC8xxSE/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "bongkar lcd. 30pin HD No Brackets"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "pasang dan rapikan kembali"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/12/2026",
        "catatan": "ganti lcd baru"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/12/2026",
        "catatan": "semua aman"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/12/2026",
        "catatan": "sudah di cek 3 kali aman. sudah di kabari"
      }
    ]
  },
  {
    "id": "SRV-196",
    "no": 196,
    "nama_pelanggan": "habibi dehatsu",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "habibi dehatsu ( hitam )",
    "seri_perangkat": "epson L3250",
    "kategori": "Printer",
    "keluhan": "warna merah macet, tidak bisa memprint",
    "tgl_masuk": "8/3/2026",
    "tgl_update": "8/12/2026",
    "link_fb": "https://www.facebook.com/share/p/1EZAwwXk2X/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/8/2026",
        "catatan": "tes print ( tidak mau memprint indikator kedap kedip"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/8/2026",
        "catatan": "Bawa Ke Portabel"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/12/2026",
        "catatan": "Cancel, sdh ambil"
      }
    ]
  },
  {
    "id": "SRV-197",
    "no": 197,
    "nama_pelanggan": "Pak Juned",
    "warna_unit": "Merah",
    "pelanggan_lengkap": "Pak Juned (Merah)",
    "seri_perangkat": "Notebook Asus X200M",
    "kategori": "Laptop / Notebook",
    "keluhan": "tdk bisa print di printer epson L3211",
    "tgl_masuk": "8/10/2026",
    "tgl_update": "8/17/2026",
    "link_fb": "https://www.facebook.com/share/p/19K83PiNhe/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Ardin",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "semua aman kecuali pas di nyalakan pertama tdi langsung masuk bios, baterai tdk mengisi 0%, LCD Bergaris bagian bawah+pojok kiri kanan atas ada bercak putih, & suara kresek"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "Coba Install driver printer L3211 tdk bisa muncul notifikasi eror"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/10/2026",
        "catatan": "Coba Install driver printer L3211 tdk bisa muncul notifikasi eror"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/11/2026",
        "catatan": "back up data c dan rename lalu Instal ulang win 8 mbr"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/11/2026",
        "catatan": "sudah selesai di instal Windowsnya, driver printernya juga bisa terinstal. tinggal coba print di cc1"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "GANTI BATREI BARU"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "suara kresek yang lain aman semua"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "Sudah tes 2x batrei naik/ bisa tanpa cas. Suara kresek yg lain aman. Sudah di kabari"
      }
    ]
  },
  {
    "id": "SRV-198",
    "no": 198,
    "nama_pelanggan": "Pak Dani",
    "warna_unit": "Silver/Gold",
    "pelanggan_lengkap": "Pak Dani (Silver/Gold)",
    "seri_perangkat": "asus A455L",
    "kategori": "Laptop / Notebook",
    "keluhan": "Kemasukkan air",
    "tgl_masuk": "8/10/2026",
    "tgl_update": "9/30/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2308253396604052/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Tia",
      "Fazrun",
      "Arif",
      "Vivi"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/10/2026",
        "catatan": "tes pakai mesin dibelakang, tidak nyala"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/10/2026",
        "catatan": "Bongkar, Lepas Mainboard"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "pasang mainboard"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "menyala. tapi tampil tulisan satrtup repair"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "Baut engsel sdh patah kiri kanan, batrei tanda silang, wifi tidak ada, lambat, suara blm di cek"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "Setelah di restart. Wifi jadi, suara kresek, batrei tanda silang, engsel kiri kanan sdh patah( sdh tidak bisa di baut ) hdd 100%"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "bongkar,buka kembali batreinya"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/29/2026",
        "catatan": "pasang mainboard & tes nyalakn menyala .bbrapa aman kcuali suara kresek, menyala tanpa tekan tombol ON, batrei tdk jadi, baut ada yg dol"
      },
      {
        "step": 9,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/29/2026",
        "catatan": "tes mati menyala 3x pke cas bisa menyala tapi batrai tanda silang klu tanpa cas tdk mneyala tapi pas di colokan langsung menyala tanpa tekan tombol on/off"
      },
      {
        "step": 10,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/29/2026",
        "catatan": "tes pasang baterai hamid ke laptop pak dani bisa menyala tanpa cas (mengisi)"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/11/2026",
        "catatan": "ganti batrei dan cek"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/11/2026",
        "catatan": "Suara kresek, lcd bercak2 putih ( sedikit) yang lain aman sdh tes cabut cas jg aman batrei sdh naik jadi 50%."
      },
      {
        "step": 13,
        "teknisi": "Vivi",
        "teknisi_utama": "Vivi",
        "tanggal": "9/12/2026",
        "catatan": "Pak dani, setelah di cas dalam kondisi mati selama 1 jam an Baterai tidak mengisi"
      },
      {
        "step": 14,
        "teknisi": "Vivi",
        "teknisi_utama": "Vivi",
        "tanggal": "9/12/2026",
        "catatan": "Selang setelah di nyalakan kurang lebih 2 menit icon baterainya tiba\" tidak muncul"
      },
      {
        "step": 15,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/12/2026",
        "catatan": "bongkar mainboard"
      },
      {
        "step": 16,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/14/2026",
        "catatan": "pasang mainboard dan cek suara kresek, batrei tetap 19% sudah tes setenga jam"
      },
      {
        "step": 17,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/14/2026",
        "catatan": "bongkar kembali MB"
      },
      {
        "step": 18,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/24/2026",
        "catatan": "pasang batrei baru & cek, bbrapa aman kcuali suara kcil kresek n batrei tdk mengisi (sdh tes mati nyala 2x + cas ttp tdk mengisi batrei ny)"
      },
      {
        "step": 19,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/24/2026",
        "catatan": "bongkar & pasang kembali batrei lama + cek (bbrapa aman kcuali suara kcil kresek + batrei tak mengisi (sdh tes mati nyala 2x ttp tak mengisi & sempat menyala sendiri pas prtama kali colok cas tanpa dipencet tombol on ny) 2 BAUT DI ENGSEL TIDAK ADA KUNINGANNYA"
      },
      {
        "step": 20,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/30/2026",
        "catatan": "perbaiki speker. setelah di cek hardisknya tidak terbaca lagi"
      },
      {
        "step": 21,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/30/2026",
        "catatan": "tes pakai ssd cc. suara masih kresek sedikit tapi sudah agak lumayan, di tes tanpa batrei sdah di coba matikan dan tes 2x"
      },
      {
        "step": 22,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/30/2026",
        "catatan": "bongkar, buka kembali mainboard"
      }
    ]
  },
  {
    "id": "SRV-199",
    "no": 199,
    "nama_pelanggan": "Rahmat",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Rahmat (Hitam)",
    "seri_perangkat": "CPU Acer H61H2-AM3",
    "kategori": "PC / Komputer",
    "keluhan": "Tampilan Hitam",
    "tgl_masuk": "8/10/2026",
    "tgl_update": "8/11/2026",
    "link_fb": "https://www.facebook.com/share/p/1CcPP65CF2/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Vattar"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "tes nyalaakn hanya tampil logo acer setelah itu layar hitam"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "cek HDD 7%"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "Tes pasang SDD CC Aman"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "tambah RAM 4GB DDR3 Bekas CC Aman & Terbaca"
      },
      {
        "step": 5,
        "teknisi": "Arif & Vattar",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "Bongkar,Cleaning & Ganti Pasta"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "tes nyalakan aman"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/10/2026",
        "catatan": "pasang SSD 128GB & install windoes 10lite 64bit GPT"
      },
      {
        "step": 8,
        "teknisi": "Vattar",
        "teknisi_utama": "Vattar",
        "tanggal": "8/10/2026",
        "catatan": "QC semua aman sdh  tes mati meyala 3x"
      },
      {
        "step": 9,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/11/2026",
        "catatan": "sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-200",
    "no": 200,
    "nama_pelanggan": "Ronal",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Ronal (Hitam)",
    "seri_perangkat": "asus FX506L",
    "kategori": "Laptop / Notebook",
    "keluhan": "Tidak tampil",
    "tgl_masuk": "8/10/2026",
    "tgl_update": "8/17/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2308313083264750/",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Ardin",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/10/2026",
        "catatan": "lepas dan bersihkan ram tetap tidak tampil + tes pakai ram cc tetap tidak tampil"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/11/2026",
        "catatan": "Bongkar, Lepas Mainboard"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "pasang mainboard ( tidak jadi ) cancel"
      }
    ]
  },
  {
    "id": "SRV-201",
    "no": 201,
    "nama_pelanggan": "Via",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Via (Hitam)",
    "seri_perangkat": "Printer Epson L360",
    "kategori": "Printer",
    "keluhan": "Cek",
    "tgl_masuk": "8/10/2026",
    "tgl_update": "8/13/2026",
    "link_fb": "https://www.facebook.com/share/p/1CuFzANHgg/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/11/2026",
        "catatan": "tes indikator kedap-kedip merah"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/11/2026",
        "catatan": "sdh tes reset msih kedap-kedip.."
      },
      {
        "step": 3,
        "teknisi": "Arif & Fazrun",
        "teknisi_utama": "Arif",
        "tanggal": "8/11/2026",
        "catatan": "bawa ke portabel"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/13/2026",
        "catatan": "Cancel sdh ambil"
      }
    ]
  },
  {
    "id": "SRV-202",
    "no": 202,
    "nama_pelanggan": "HASRIN",
    "warna_unit": "HITAM",
    "pelanggan_lengkap": "HASRIN ( HITAM)",
    "seri_perangkat": "ASUS G513",
    "kategori": "Laptop / Notebook",
    "keluhan": "Tidak tampil",
    "tgl_masuk": "8/10/2026",
    "tgl_update": "8/21/2026",
    "link_fb": "https://www.facebook.com/share/p/1BnCjysrAb/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/10/2026",
        "catatan": "tes kasih nyala, tida tampil ( ekternal tidak tampil ) kadang layar goyang2 hitam putih"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/11/2026",
        "catatan": "bongkar lcd 40pin FHD"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "nyala tapi tampilan hitam bergaris, di eskternal tidak tampil2 (sudah test restart)"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/13/2026",
        "catatan": "QC semua aman kecuali tdk tampil di LCD aslinya, kamera tdk jadi, Tombol di keyboard beberapa terhapus Huruf nya & data C Full (Merah) Kesehatan SSD 81% TEST EKSTERNAL"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/15/2026",
        "catatan": "Bongkar, pasang LCD Baru tes menyala tapi tdk tampil"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/15/2026",
        "catatan": "tes eksternal tdk tampil juga"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/15/2026",
        "catatan": "cek kode seri lcd baru dan lcd lamanya ( sama persis semua )"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/15/2026",
        "catatan": "tes kembali lcd lama ( tidak tampil) berbayang / bogoyang2 hitam"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/15/2026",
        "catatan": "di rapikan ( pasang lcd aslinya, lcd baru di amankan )"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "pasang lcd baru ( tidak tampil )"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "di pasang bapak azzam jadi ( semua aman belum di tes matikan sampe 3x)"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "sudah di tes kasih mati 1x semua aman"
      },
      {
        "step": 13,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/21/2026",
        "catatan": "tes kembali pakai lcd baru ( tidak tampil lagi )"
      }
    ]
  },
  {
    "id": "SRV-203",
    "no": 203,
    "nama_pelanggan": "Nasrin",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Nasrin (hitam)",
    "seri_perangkat": "CPU powerloqic cpu",
    "kategori": "PC / Komputer",
    "keluhan": "Tidak menyala",
    "tgl_masuk": "8/12/2026",
    "tgl_update": "8/12/2026",
    "link_fb": "https://www.facebook.com/share/v/1cGee1oaug/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "psu nya bunyi, tidak tampil, kdng menyala kdng tdk *lebih bnyk tdk nyala nya (tes nyala)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "nyala + tampil (Tes pakai psu cc )"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "bbrapa aman kcuali USB bagian depan tdk jadi, lambat & tampilan sempat nge-freeze (tes pkai psu CC) *masih pakai hardisk aslli ny"
      },
      {
        "step": 4,
        "teknisi": "Fazrun & Arif",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/11/2026",
        "catatan": "HDD 100% & backup data c"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "pasang kembali HDD asli nya tapi tidak masuk win (di bios nama HDD ny terbaca + sudah coba sett bios juga) *masih pakai psu CC"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "tes instal win 10 lite mbr ( pakai SSD & PSU CC)"
      },
      {
        "step": 7,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "bbrapa aman kcuali usb 1 dibgaian belakang tidak jadi (pakai PSU & SSD CC)"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "tes mati nyala 3x, ttp nyala & masuk win (pakai SSD & PSU CC)"
      },
      {
        "step": 9,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/12/2026",
        "catatan": "tidak menyala (pakai SSD CC & PSU asli nya)"
      }
    ]
  },
  {
    "id": "SRV-204",
    "no": 204,
    "nama_pelanggan": "Mita",
    "warna_unit": "Abu-abu",
    "pelanggan_lengkap": "Mita (Abu-abu)",
    "seri_perangkat": "Laptop Asus X441B",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek,Engsel",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/14/2026",
    "link_fb": "https://www.facebook.com/share/p/1EZWFtKmgE/",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/14/2026",
        "catatan": "semua aman kecuali engsel sebelah kiri bermasalah jdi klu di buka langsung terbuka dgn casing LCD ny & suara kresek.. Berikut spesifikasi nya sdh pke SSD & HDD"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/14/2026",
        "catatan": "Cancel"
      }
    ]
  },
  {
    "id": "SRV-205",
    "no": 205,
    "nama_pelanggan": "Risman",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Risman (Hitam)",
    "seri_perangkat": "Laptop Toshiba Satelitte A665",
    "kategori": "Laptop / Notebook",
    "keluhan": "menyala tapi tdk tampil",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/14/2026",
    "link_fb": "https://www.facebook.com/share/p/14jNazfNtfY/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/14/2026",
        "catatan": "Sy tes di belakang tdk menyala tapi indikator cas menyala.."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/14/2026",
        "catatan": "cancel. sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-206",
    "no": 206,
    "nama_pelanggan": "ibu hasna",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "ibu hasna ( hitam)",
    "seri_perangkat": "Laptop Dell Latitude E7470",
    "kategori": "Laptop / Notebook",
    "keluhan": "cek",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/19/2026",
    "link_fb": "https://www.facebook.com/share/p/1DXRr8rD5y/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Tia",
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/17/2026",
        "catatan": "tidak masuk win ( harus pakai cas)"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/17/2026",
        "catatan": "qc. semua aman kecuali batrei nya terbaca 97% pas dicabut casnya laptop mati, kemudian setiap dinyalakan harus setting bios dari legecy ke UEFI baru bisa masuk win (JIka cabut casnya)"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/18/2026",
        "catatan": "bongkar, ganti cmos"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "cleaning dan ganti pasta, ganti batrei cmos lagi dan insta ulang pakai ssd cc"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "Sudah coba Instal ulang pakai ssd cc, sudah 2kali tes pakai batrei CMOs cc, sudah coba lepas pasang batrei tetap sama sama bgini. ( tidak di setting lagi) tp muncul tulisa dlu baru masuk windows"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "tes kesekian kalinya tetap sama muncul tulisan dlu baru masuk win ( tp tidak harus setting windows)"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "pasang ssd aslinya ( harus di setting dlu baru masuk windows )"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "instal win 11 tidak jadi"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "instal win 10 dan cek"
      },
      {
        "step": 10,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/19/2026",
        "catatan": "backup dan rename"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "Sudha di Instal ulang semua aman kecuali batrei kecuali sambil cas. ( sudah ganti CMOs dan cleaning ganti pasta ) sisah tes. Sudah coba di restart langsung masuk win"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "sudah di tes 3x  tetap sama muncul tulisan dlu baru masuk win ( tp tidak harus setting windows). sudah di kabari"
      }
    ]
  },
  {
    "id": "SRV-207",
    "no": 207,
    "nama_pelanggan": "pak wardana",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "pak wardana ( hitam)",
    "seri_perangkat": "lenovo X1 carbon",
    "kategori": "Laptop / Notebook",
    "keluhan": "Lcd bermasalalah",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/19/2026",
    "link_fb": "https://www.facebook.com/share/p/181XzJVF8e/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "Keluhan lcd bermasalah ( kdng goyang2 sndiri), tombol huruf P tidka jadi, cpt panas yang lain aman semua"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "tes ke 2x nya ( kata sandi 1234) tombol huruf P tidka jadi, cpt panas yang lain aman semua blm dtg layar goyang goyang"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "setelah ganti pasta di tes. tbtb layarnya bergaris dan bunyi2 ( sudah konfirmasi orangnya ) memeng seperti itu"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "bersihkan keyboard dan lepas soket keyboard"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "sempat masuk windows, kemudian bergaris kembali lagi lcdnya"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "lepas cmos, tes pakai ssd cc, lepas soket keyboard ttidak mau tampil"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "pasang kembali semuanya. sempat masuk windows, tetapi langsung kembali bergaris lagi lcdnya"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "tampil ekstenal tetapi tidak bisa di kore kore"
      },
      {
        "step": 10,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/19/2026",
        "catatan": "tampil tapi tidak bisa di apa apakan"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "menyala tapi tidak tampil ( eksternal juga tidak tampil )"
      }
    ]
  },
  {
    "id": "SRV-208",
    "no": 208,
    "nama_pelanggan": "ari",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "ari ( hitam)",
    "seri_perangkat": "Laptop acer aspire A314-22",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal ulang",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/19/2026",
    "link_fb": "https://www.facebook.com/share/p/1BLLAh8ypW/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "lambat, wifi tidak jadi yang lain aman"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/18/2026",
        "catatan": "backup data c dan rename"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/19/2026",
        "catatan": "aman semua kecuali LCD ada 2 titik bercak putih.Kesehatan SSD 99%"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/19/2026",
        "catatan": "semua aman kecuali LCD ada bercak putih sdh install win 11 64bit GPT"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/19/2026",
        "catatan": "SDH AMBIL, PEMBYAARAN CASH"
      }
    ]
  },
  {
    "id": "SRV-209",
    "no": 209,
    "nama_pelanggan": "irwan",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "irwan ( hitam )",
    "seri_perangkat": "acer aspire 314",
    "kategori": "Laptop / Notebook",
    "keluhan": "saat operasikan layar lama2 tidak tampil",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/22/2026",
    "link_fb": "https://www.facebook.com/share/p/1DJA3TPg1h/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Ardin",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/19/2026",
        "catatan": "putar youtube 3 jam lebih, di shutdown kemudian nyalakan kembali nda tampil"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "bongkar, cek hardisk 100% dan bakup data dan rename"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "instal ulang pakai ssd cc intal win 8 tidak jadi"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "instal win 10 masih pakai ssd cc"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "layar tiba tiba gerak gerak ( warna hijau, kaya tv acak) sempat layar putih 1menit kemudian normal kembali, suara agak kresek sedikit dan kecil, agak panas yang lain aman"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/19/2026",
        "catatan": "sop : instak ulang, cleaning dan ganti pasta ( tetapi kemungkinan mesinnya kena )"
      },
      {
        "step": 7,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/22/2026",
        "catatan": "sudah di ambil ( cancel)"
      }
    ]
  },
  {
    "id": "SRV-210",
    "no": 210,
    "nama_pelanggan": "student comp",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "student comp ( hitam )",
    "seri_perangkat": "Laptop Asus E1404G",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal ulang",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/22/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2318185705610821/?mibextid=rS40aB7S9Ucbxw6v",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/21/2026",
        "catatan": "QC  semua aman kecuali touchpadnya tidak berfungsi + ada beberapa driver yang TDK bisa terinstal, kemudian jika pakai mouse bisa berfungsi tapi tombol klik kanan dan kiri terbalik"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/21/2026",
        "catatan": "touchpadnya sudah berfungsi, dan cek pakai senstinel, Tidak terbaca kesehatan ssd nya,"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/21/2026",
        "catatan": "back up data c dan rename lalu Instal Ulang win 11 gpt"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/22/2026",
        "catatan": "sudah di instal ulang, qc. semua aman tinggal tunggu di ambil"
      }
    ]
  },
  {
    "id": "SRV-211",
    "no": 211,
    "nama_pelanggan": "Khalaq",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Khalaq (Silver)",
    "seri_perangkat": "Laptop Acer Aspire Lite 14 AL14-51M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek SSD",
    "tgl_masuk": "8/21/2026",
    "tgl_update": "8/21/2026",
    "link_fb": "https://www.facebook.com/share/p/1cCj4NjnhT/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/21/2026",
        "catatan": "tes tdk mneyala"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/21/2026",
        "catatan": "Bongkar, Lepas SSD & Cek Kesehatan nya 98% (data ny msih aman)"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/21/2026",
        "catatan": "sudah ambil, biaya 300rb Via TF BNI"
      }
    ]
  },
  {
    "id": "SRV-212",
    "no": 212,
    "nama_pelanggan": "Ahmad Jumain",
    "warna_unit": "HItam",
    "pelanggan_lengkap": "Ahmad Jumain (HItam)",
    "seri_perangkat": "Printer Epson L111",
    "kategori": "Printer",
    "keluhan": "Tinta Bergaris Putus-Putus",
    "tgl_masuk": "8/22/2026",
    "tgl_update": "8/25/2026",
    "link_fb": "https://www.facebook.com/share/p/1BqYt6m4Cu/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Vattar"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/22/2026",
        "catatan": "tes print tinta kuning tdk keluar & tinta hitam bergaris.."
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/22/2026",
        "catatan": "cleaning 1x ahmad jumain tetap tdk keluar tinta kuning ny"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/22/2026",
        "catatan": "tes flush tetap tdk keluar tinta kuning ny ..Tinta aman baru di isi kata orang nya"
      },
      {
        "step": 4,
        "teknisi": "Arif & Vattar",
        "teknisi_utama": "Arif",
        "tanggal": "8/22/2026",
        "catatan": "Bawa Ke Portabel"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/25/2026",
        "catatan": "tes print aman..sdh kaabri biaya 350rb Cleaning & Servis Head"
      }
    ]
  },
  {
    "id": "SRV-213",
    "no": 213,
    "nama_pelanggan": "Fajar",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Fajar ( hitam )",
    "seri_perangkat": "Laptop Lenovo G40-80",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk win",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/23/2026",
    "link_fb": "https://www.facebook.com/share/p/1D3TuPpYc2/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/23/2026",
        "catatan": "QC. Pakai SSD CC. semua aman."
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/23/2026",
        "catatan": "Back UP data c + rename, instal ulang win 10 gpt"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/23/2026",
        "catatan": "Selesai di instal, cek aman"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/23/2026",
        "catatan": "sudah ganti pasta dan clening, tes nyala"
      }
    ]
  },
  {
    "id": "SRV-214",
    "no": 214,
    "nama_pelanggan": "Fiqih",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Fiqih ( hitam )",
    "seri_perangkat": "Laptop Acer Aspire 3 A311",
    "kategori": "Laptop / Notebook",
    "keluhan": "layar tidak menyala",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/24/2026",
    "link_fb": "https://www.facebook.com/share/v/1Df7uupVFs/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/24/2026",
        "catatan": "cek mesin nyala tapi tidak tampil"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/24/2026",
        "catatan": "tes pakai eksternal tetap tidak tampil"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "bongkar, cek ram ( tidak ada ram )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "buka hdd dan bongkar lcd, tes pakai lcd cc"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "tes lcd yang ke 2 tetap tidak tampil"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "bongkar, cabut batrei dan tes pakai lcd cc"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "tetap tidak tampil walau di ekternal"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "sop servis mesin"
      }
    ]
  },
  {
    "id": "SRV-215",
    "no": 215,
    "nama_pelanggan": "hamid",
    "warna_unit": "merah",
    "pelanggan_lengkap": "hamid ( merah )",
    "seri_perangkat": "asus X455L",
    "kategori": "Laptop / Notebook",
    "keluhan": "layar gelap",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "9/2/2026",
    "link_fb": "https://www.facebook.com/share/p/1Bx5hg9q2r/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "tes ekternal. suara kresek, yang lain aman"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "bongkar, buka lcd. 30pin"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "engsel kiri kanan sudah patah ( baut dalam dua duanya )"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/29/2026",
        "catatan": "QC semua aman kecuali tdk tampil di LCD aslinya, lumayan lambat, suara kresek berikut spesifikasi nya..(Tampil Eksternal)"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/29/2026",
        "catatan": "Bongkar, test pke LCD tes tampil (blank putih)"
      },
      {
        "step": 6,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/29/2026",
        "catatan": "rapikan kembali semua (ENGSEL RAWAN)"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/2/2026",
        "catatan": "Sudah ganti lcd, engsel bermasalah ( tp masih aman ) lambat, suara lresek yang lain aman semua sudha tes 3x mati menyala"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/2/2026",
        "catatan": "perbaiki engsel (engsel dalam bgian kanan msih lepas), ganti LCD baru, backup data & instal windows 10 biasa"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/2/2026",
        "catatan": "instal aplikasi dan cek"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/2/2026",
        "catatan": "suara kresek, masih agak lambat sedikit  engsel bermasalah ( tp masih aman )"
      }
    ]
  },
  {
    "id": "SRV-216",
    "no": 216,
    "nama_pelanggan": "samwati",
    "warna_unit": "-",
    "pelanggan_lengkap": "samwati",
    "seri_perangkat": "ASUS X441M",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti lcd dan keyboard tidak jadi",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "8/31/2026",
    "link_fb": "https://www.facebook.com/share/p/1EDXHUndio/",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Tia",
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "layar sempat kedap kedip. skrng masih proses masuk windowa ( sudah 20menit)"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "Setelah di cek, lambat sekali, cepat panas, lcd sempat kedap kedip dan layar gelap, keyboard di cek aman, suara agak kresek yang lain aman semua. Baru tes 1x ( hdd blm di cek )"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "tes ke2x nya. lcd kalau di lepas cas tampilan gelap, kalau di colok tampilan  normal, suara kresek, lambat sekali, hdd 100%, ram 4gb yg lain aman semua"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "tes lcd cc ( layar gelap kalau di cabut cas ) kalau di colok normal"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "tes ke lcd yang ke 2 sama saja. coba coba bersihkan fleksibel lcd nya"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 7,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "8/29/2026",
        "catatan": "Pasang Mainboard"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/31/2026",
        "catatan": "Cancel"
      }
    ]
  },
  {
    "id": "SRV-217",
    "no": 217,
    "nama_pelanggan": "Musar",
    "warna_unit": "-",
    "pelanggan_lengkap": "Musar",
    "seri_perangkat": "Epson L3210",
    "kategori": "Printer",
    "keluhan": "Tidak bisa tarik kertas",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "9/3/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2321642868598438/?mibextid=rS40aB7S9Ucbxw6v",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Ardin",
      "Vattar",
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin & Vattar",
        "teknisi_utama": "Ardin",
        "tanggal": "8/24/2026",
        "catatan": "cek di sini, sama tidak bisa tarik kertas"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/31/2026",
        "catatan": "Cancel"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/3/2026",
        "catatan": "sudah ambil"
      }
    ]
  },
  {
    "id": "SRV-218",
    "no": 218,
    "nama_pelanggan": "Reski",
    "warna_unit": "-",
    "pelanggan_lengkap": "Reski",
    "seri_perangkat": "Asus VivoBook GO14",
    "kategori": "Laptop / Notebook",
    "keluhan": "Pas di cas, nyala lampu cas. tapi tekan tombol power tidakmau nyala",
    "tgl_masuk": "8/14/2026",
    "tgl_update": "9/1/2026",
    "link_fb": "https://www.facebook.com/share/p/1crLDgMgf7/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin",
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/24/2026",
        "catatan": "cek di belakang sempat nyala kemudian mati lagi, pakai cas aslinya cuman lampu cas saja yang nyala"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/24/2026",
        "catatan": "bongkar, buka mainboard"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/31/2026",
        "catatan": "QC semua aman sdh tes putar YT kurang lebih 30mnit hnya hangat2 sja"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/31/2026",
        "catatan": "Install windows 10 biasa 64bit GPT QC semua aman kecuali touchpad tdk bisa & klu kita buka pencarian di google chrome lambat (sdh coba update windows ny juga)"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/31/2026",
        "catatan": "install windows 11 semua aman"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/1/2026",
        "catatan": "Tes ulang an resky PKL semua aman kesehatan SSD 98%"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/1/2026",
        "catatan": "Pasang semua baut ny & QC kembali semua aman"
      }
    ]
  },
  {
    "id": "SRV-219",
    "no": 219,
    "nama_pelanggan": "Ibu Vivi",
    "warna_unit": "-",
    "pelanggan_lengkap": "Ibu Vivi",
    "seri_perangkat": "Asus E203M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Windows Lambat",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "8/26/2026",
    "link_fb": "https://www.facebook.com/share/p/1DN38gVYcV/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/26/2026",
        "catatan": "QC. Semua aman Kecuali lambat windows, suara agak kresek dan tombol key arah bawah tidak berfungsi"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/26/2026",
        "catatan": "sudah izin di oragnnya instal ulang. lanjut back up data c + rename, instal win 10 gpt"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/26/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-220",
    "no": 220,
    "nama_pelanggan": "Ibu Nur Daihatsu",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Ibu Nur Daihatsu (Hitam)",
    "seri_perangkat": "Printer Epson L3110",
    "kategori": "Printer",
    "keluhan": "Indikator Menyala Merah Kedap-Kedip",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "8/26/2026",
    "link_fb": "https://www.facebook.com/share/p/1Jaj1HqCfe/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Vattar"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "test print tdk bisa indikator menyala merah kedap-kedip"
      },
      {
        "step": 2,
        "teknisi": "Arif & Vattar",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "Bawa Ke Portabel"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "tes print aman (hrus pke mode high klu mau bgus hasil ny)"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "sdh di ambil"
      }
    ]
  },
  {
    "id": "SRV-221",
    "no": 221,
    "nama_pelanggan": "Ibu Nur Daihatsu",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Ibu Nur Daihatsu (Hitam)",
    "seri_perangkat": "Printer Canon PIXMA G3010",
    "kategori": "Printer",
    "keluhan": "Tinta Bermasalah",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "8/26/2026",
    "link_fb": "https://www.facebook.com/share/p/1Jaj1HqCfe/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Vattar"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "tes print hnya tinta hitam yg bagus"
      },
      {
        "step": 2,
        "teknisi": "Arif & Vattar",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "Bawa Ke Portabel"
      }
    ]
  },
  {
    "id": "SRV-222",
    "no": 222,
    "nama_pelanggan": "Lukman",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Lukman (Hitam)",
    "seri_perangkat": "Laptop Lenovo Thinkpad T470",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek SSD (tdk masuk win)",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "9/12/2026",
    "link_fb": "https://www.facebook.com/share/p/1BKhB2AmFu/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "tes pke SSD CC QC semua aman.. SSD aslinya tdk terbaca"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "sdh saya rapikan & kembalikn semua nya"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/31/2026",
        "catatan": "bongkar, lepas SSD kemudian tes Pke SSD NVMe M.2  bisa masuk tampilan win"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/31/2026",
        "catatan": "sdh saya rapikan & kembalikn semua nya"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/1/2026",
        "catatan": "Bongkar kembali lepas SSD kemudian tes pake conecctor NVMe M.2 tdk terbaca kemudian tes lagi pake conecctor NVMe terbaca tapi tanda tanya (?)"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/1/2026",
        "catatan": "sdh saya rapikan & kembalikn semua nya"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/12/2026",
        "catatan": "ganti ssd 256gb"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/12/2026",
        "catatan": "instal win 10 lite dan cek, semua aman baru mati 1x"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/12/2026",
        "catatan": "semua aman tes ke 2x"
      }
    ]
  },
  {
    "id": "SRV-223",
    "no": 223,
    "nama_pelanggan": "Ibu Melly",
    "warna_unit": "-",
    "pelanggan_lengkap": "Ibu Melly",
    "seri_perangkat": "Laptop Asus A416J",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cas Rusak",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "8/26/2026",
    "link_fb": "https://www.facebook.com/share/p/1BiYPv7VSY/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "Tes Cas Bekas CC 2,37A aman mengisi & sdh QC semua aman"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/26/2026",
        "catatan": "Sudah Ambil Pembayaran Cash 200rb"
      }
    ]
  },
  {
    "id": "SRV-224",
    "no": 224,
    "nama_pelanggan": "Ferlin",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Ferlin (Hitam)",
    "seri_perangkat": "Laptop MSI 14 C1 1M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Windows Rusak",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "9/10/2026",
    "link_fb": "https://www.facebook.com/share/p/19MRR92V5k/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia",
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/27/2026",
        "catatan": "an ferlin keluhan tdk masuk win..tapi ini kondisi panas sekali jdi kmi matikan paksa dlu karena da bawa kesini kondisi msih menyala hnya di tutup sja tpi blm di matikan"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/27/2026",
        "catatan": "bongkar, cek nvme 88% sudah di backup datanya. lumayan kotor pastanya sudah kering"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/27/2026",
        "catatan": "tes pakai ssd cc  ( lagi minta casnya )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/27/2026",
        "catatan": "win 11 tidak bisa"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "8/27/2026",
        "catatan": "win 10, semua aman hanya cepat panas. masih pakai ssd cc"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/28/2026",
        "catatan": "semua aman (masih pake SSD CC)"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/28/2026",
        "catatan": "Bongkar, Cleaning & ganti pasta"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/28/2026",
        "catatan": "install win 10 & 11 eror"
      },
      {
        "step": 9,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "8/28/2026",
        "catatan": "BACKUP SEMUA DATA KE LAPTOP CC"
      },
      {
        "step": 10,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/28/2026",
        "catatan": "Pindahkan semua data Ferlin Di SSD CC. kemudian pasang di laptopnya untuk di pake sementara, sembari menuggu di pesan SSD nya"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/9/2026",
        "catatan": "ganti ssd 256Gb"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/9/2026",
        "catatan": "instal win 11"
      },
      {
        "step": 13,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/9/2026",
        "catatan": "cek semua aman. dan pindahkan data aslinya ( dari ssd cc ke laptopnya )"
      },
      {
        "step": 14,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/10/2026",
        "catatan": "QC semua aman & sdh pindah kn data yg ada di SSD asli ny ke laptop ny"
      }
    ]
  },
  {
    "id": "SRV-225",
    "no": 225,
    "nama_pelanggan": "Bintang Seluler",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Bintang Seluler (Hitam)",
    "seri_perangkat": "Laptop acer aspire es 14",
    "kategori": "Laptop / Notebook",
    "keluhan": "Windows Lambat",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "8/27/2026",
    "link_fb": "https://www.facebook.com/share/p/1EBsmfdfjG/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/27/2026",
        "catatan": "cek kesehatan hddnya cuman 9%. Qc. pakai ssd cc semua kecuali tombol kanan touchpad kadang jadi kadang tidak"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/27/2026",
        "catatan": "Ganti ssd baru, instal windows 10 gpt"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/27/2026",
        "catatan": "test aman dan matika 3x, orangnya sudah ambiil"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/27/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-226",
    "no": 226,
    "nama_pelanggan": "Ikhlas",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Ikhlas (Silver)",
    "seri_perangkat": "Laptop acer aspire lite 14",
    "kategori": "Laptop / Notebook",
    "keluhan": "Windows Lambat",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "8/28/2026",
    "link_fb": "https://www.facebook.com/share/p/1Ec1Ky43YD/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/28/2026",
        "catatan": "cek, sebelumnya sempat bluescreen, kemudian setelah masuk win stuk/ngefreze"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/28/2026",
        "catatan": "QC. semua aman kecuali awal dinyalakan sempat Bluescreen + ngefreze. kesehatan ssd 99%"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/28/2026",
        "catatan": "back data c + rename, instal win 11 gpt"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "8/28/2026",
        "catatan": "setelah di Instal ulang cek. semua aman, sudah putar YouTube 30 menit & matikan 3X aman"
      }
    ]
  },
  {
    "id": "SRV-227",
    "no": 227,
    "nama_pelanggan": "Dendri",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Dendri (Hitam)",
    "seri_perangkat": "Lenovo Ideapad 100-14|BD",
    "kategori": "Laptop / Notebook",
    "keluhan": "Lambat",
    "tgl_masuk": "9/1/2026",
    "tgl_update": "9/2/2026",
    "link_fb": "https://www.facebook.com/share/p/1QMmdyHxTE/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/1/2026",
        "catatan": "QC semua aman kecuali lambat kesehatan HDD 100%"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/1/2026",
        "catatan": "SOP Inul tapi klu mau bisa di juga di upgarde tambah RAM & ganti SSD..bisa Upgrade dua2 ny atau salah satunya.. tapi lebih bgus upgarde ke SSD dlu.."
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/1/2026",
        "catatan": "install win 8.1 64bit MBR.. QC semua aman & sdh agak ringan ketimbang sebelumnya windows 10"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/2/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-228",
    "no": 228,
    "nama_pelanggan": "Mainawa",
    "warna_unit": "-",
    "pelanggan_lengkap": "Mainawa",
    "seri_perangkat": "Epson L121",
    "kategori": "Printer",
    "keluhan": "Cek Resetter",
    "tgl_masuk": "8/26/2026",
    "tgl_update": "9/2/2026",
    "link_fb": "https://www.facebook.com/share/p/1HTH52AbNr/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/2/2026",
        "catatan": "cek lampu orange kedap kedip bergantian dengan lampu tombol power"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/2/2026",
        "catatan": "Cek resetter sudah full 100%"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/2/2026",
        "catatan": "reset, cleaning & test print (aman)"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/2/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-229",
    "no": 229,
    "nama_pelanggan": "Mariam",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Mariam (Silver)",
    "seri_perangkat": "Laptop Asus A516J",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek",
    "tgl_masuk": "9/2/2026",
    "tgl_update": "9/5/2026",
    "link_fb": "https://www.facebook.com/share/p/18Hb535U8z/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/2/2026",
        "catatan": "Bongkar, buka casing belakang"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/2/2026",
        "catatan": "pasang kembali casing belakang & rapikan"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/2/2026",
        "catatan": "Bongkar kembali lepas mainboard"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/3/2026",
        "catatan": "ganti pasta ( sudah kering ) dan pasang mainboard"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/3/2026",
        "catatan": "buka soket batrei dan casing belakang"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/5/2026",
        "catatan": "pasang kembali dan rapikan ( belum menyala )"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/5/2026",
        "catatan": "bongkar, buka MB"
      }
    ]
  },
  {
    "id": "SRV-230",
    "no": 230,
    "nama_pelanggan": "Attar",
    "warna_unit": "Merah",
    "pelanggan_lengkap": "Attar (Merah)",
    "seri_perangkat": "asus A456U",
    "kategori": "Laptop / Notebook",
    "keluhan": "LCD Blank Putih",
    "tgl_masuk": "9/3/2026",
    "tgl_update": "9/3/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2329843951111663/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/3/2026",
        "catatan": "QC. semua aman kecuali lcd blank putih, sedikit lambat dan suara bunyi pela"
      }
    ]
  },
  {
    "id": "SRV-231",
    "no": 231,
    "nama_pelanggan": "alia",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "alia (hitam)",
    "seri_perangkat": "printer epson L120",
    "kategori": "Printer",
    "keluhan": "cek (dibawa dalam keadaan ciss terbuka)",
    "tgl_masuk": "9/3/2026",
    "tgl_update": "9/8/2026",
    "link_fb": "https://www.facebook.com/share/p/19Nx7sDBcd/",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/3/2026",
        "catatan": "pasang ciss printer & tes priint (tinta tidak keluar)"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/3/2026",
        "catatan": "tes flush 1x & cleaning (masih blum mau keluar tinta nya)"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/8/2026",
        "catatan": "Cancel"
      }
    ]
  },
  {
    "id": "SRV-232",
    "no": 232,
    "nama_pelanggan": "pak chaidir",
    "warna_unit": "-",
    "pelanggan_lengkap": "pak chaidir",
    "seri_perangkat": "Harddisk External Seagate SRD0NF1",
    "kategori": "Storage / Aksesoris",
    "keluhan": "tidak dan kadang kadang terbaca",
    "tgl_masuk": "9/3/2026",
    "tgl_update": "9/5/2026",
    "link_fb": "https://www.facebook.com/share/p/1PFQhRc5jV/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/4/2026",
        "catatan": "100%, terbaca hanya  punya 1 partisi tp muncul tulisan warna kuning dlu baru bisa terbaca"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/4/2026",
        "catatan": "tes ke 2x, terbaca  tp muncul tulisan warna kuning dlu baru bisa terbaca"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/5/2026",
        "catatan": "tes ke 2x, terbaca  tp muncul tulisan warna kuning dlu baru bisa terbaca"
      }
    ]
  },
  {
    "id": "SRV-233",
    "no": 233,
    "nama_pelanggan": "Sawalcrezz",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Sawalcrezz (Silver)",
    "seri_perangkat": "Laptop HP Pavilion 14-dv",
    "kategori": "Laptop / Notebook",
    "keluhan": "suhu cepat naik/Panas & Tidak Tampil",
    "tgl_masuk": "9/7/2026",
    "tgl_update": "9/8/2026",
    "link_fb": "https://www.facebook.com/share/p/18zdL5V6v7/",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Ardin",
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/7/2026",
        "catatan": "cek Tidak tampil. Info dari orangnya, ganti pasta sendri tiba² tidak tampil dan suhu laptop cepat naik/panas."
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/7/2026",
        "catatan": "Tes pakai ekstenal juga tidak tampil"
      },
      {
        "step": 3,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/7/2026",
        "catatan": "Sawal ttp tdk tmpil, sudah tes bersihkan ram, cabut pasang fan, msih sama"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/7/2026",
        "catatan": "repasta, bersihkan ram & tes tmpil eksternal..ttp tdk tmpil, fan hnya berputar 1 + bagian proc ny panas sekali"
      },
      {
        "step": 5,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/7/2026",
        "catatan": "rapikan semula"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/8/2026",
        "catatan": "Bongkar, penutup belakang nya"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/8/2026",
        "catatan": "tes nyalakan tetap tdk tampil rapikan semula & CANCEL"
      }
    ]
  },
  {
    "id": "SRV-234",
    "no": 234,
    "nama_pelanggan": "Abdurahaman",
    "warna_unit": "HITAM",
    "pelanggan_lengkap": "Abdurahaman (HITAM)",
    "seri_perangkat": "Laptop Toshibah Satellite L510",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek",
    "tgl_masuk": "9/9/2026",
    "tgl_update": "9/12/2026",
    "link_fb": "https://www.facebook.com/share/p/197bCBAAXV/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Tia",
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/9/2026",
        "catatan": "Sebelumnya pas di bawah sempat tidak tampil, setelah bersihkan ram SDH bisa, skrng kendala tiba² stuck pas mau QC. SSD Health 100%"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/9/2026",
        "catatan": "QC. pakai SSD CC semua aman kecuali windows agak lambat &. speaker kecil + Bunyi sebelah dan batrei tidak jadi"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/9/2026",
        "catatan": "back up data c + rename, kemudian instal win 7  32 bit MBR"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/9/2026",
        "catatan": "setelah putar YouTube dan matikan 3X stuck sebelum tampil login windows"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/10/2026",
        "catatan": "ganti pasta dan cleaning"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/10/2026",
        "catatan": "cek. toupad tidak jadi, batrei tidak jadi yang lain aman"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/10/2026",
        "catatan": "cek ke 2x nya semua aman kecuali batrei tidak jadi"
      },
      {
        "step": 8,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/10/2026",
        "catatan": "bbrapa aman kcuali suara kcil + kresek, lambat & batrei tidak jadi"
      },
      {
        "step": 9,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/10/2026",
        "catatan": "cek SSD (120gb health 100%), instal win 7 32 bit (di alihkan ke anak PKL)"
      },
      {
        "step": 10,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/10/2026",
        "catatan": "sempet ngefreeze saat dimatikan dan putar yotube 1 jam dan jika dimatikan, tiba2 nyala sendiri"
      },
      {
        "step": 11,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/11/2026",
        "catatan": "freeze lagi setelah selesai instal ulang win 7 32 bit lite"
      },
      {
        "step": 12,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/11/2026",
        "catatan": "setelah instal win 7 32 bit yang lite dilaptop cc pakai ssdnya masuk windowsnya. cek SSD nya ulang  100 health"
      },
      {
        "step": 13,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/11/2026",
        "catatan": "setelah selesai instal windows, belum sempat masuk di win, tiba freeze dan tidak lama muncul ini"
      },
      {
        "step": 14,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/11/2026",
        "catatan": "setelah dinyalakan lagi sudah bisa masuk windows, sementara instal apk nya"
      },
      {
        "step": 15,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/12/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-235",
    "no": 235,
    "nama_pelanggan": "Indarosmita",
    "warna_unit": "-",
    "pelanggan_lengkap": "Indarosmita",
    "seri_perangkat": "Laptop Acer Aspire E1-431",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk windows (format)",
    "tgl_masuk": "9/9/2026",
    "tgl_update": "9/15/2026",
    "link_fb": "https://www.facebook.com/share/p/19RGxQPrXq/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/9/2026",
        "catatan": "tes nyalakan hnya tampil logo Acer & Loading (TDK MASUK WIN)"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/9/2026",
        "catatan": "Bongkar, Lepas HDD kemudian cek kesehatan nya 0% (data sdh tdk bisa di buka)"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/9/2026",
        "catatan": "tes pasang HDD CC kemudian QC semua aman"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/9/2026",
        "catatan": "rapikan semua tapi masih terpasang HDD CC"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/15/2026",
        "catatan": "Bongkar,pasang SSD 128GB"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/15/2026",
        "catatan": "INSTALL WIN 10 LITE GPT"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/15/2026",
        "catatan": "semua aman sdh di pasang SSD 128GB & install win 10lite GPT (tes baru 1x mati)"
      }
    ]
  },
  {
    "id": "SRV-236",
    "no": 236,
    "nama_pelanggan": "Anto  sudah bayar lunas 400rb",
    "warna_unit": "Silver",
    "pelanggan_lengkap": "Anto (Silver) sudah bayar lunas 400rb",
    "seri_perangkat": "Laptop Asus E410M",
    "kategori": "Laptop / Notebook",
    "keluhan": "Ganti Keyboard",
    "tgl_masuk": "9/10/2026",
    "tgl_update": "9/10/2026",
    "link_fb": "https://www.facebook.com/share/p/1951Y1nZxj/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/10/2026",
        "catatan": "semua aman kecuali keyboard tertekan & ada yg tdk jadi..ini touchpad ny kadang kandas2 kemungkinan pengaruh keyboard ny tertekan ada beberapa.."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/10/2026",
        "catatan": "ganti keyboard baru"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/10/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/10/2026",
        "catatan": "semua aman sudah di cek 3x sudah di kabari"
      }
    ]
  },
  {
    "id": "SRV-237",
    "no": 237,
    "nama_pelanggan": "AWA",
    "warna_unit": "BIRU",
    "pelanggan_lengkap": "AWA ( BIRU )",
    "seri_perangkat": "Laptop HP 14-ew0021TU",
    "kategori": "Laptop / Notebook",
    "keluhan": "BERSIHKAN",
    "tgl_masuk": "9/10/2026",
    "tgl_update": "9/11/2026",
    "link_fb": "https://www.facebook.com/share/p/1D8Qdbahyd/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/10/2026",
        "catatan": "di cek semua aman hanya memang agak panas"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/11/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/11/2026",
        "catatan": "sempat muncul tulisan cmos  sementara di cek semua aman tp tgl dan waktu kecuali di atur"
      }
    ]
  },
  {
    "id": "SRV-238",
    "no": 238,
    "nama_pelanggan": "didin",
    "warna_unit": "hitam, silver",
    "pelanggan_lengkap": "didin ( hitam, silver)",
    "seri_perangkat": "Laptop Dell XPS 15 7590",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti batrei",
    "tgl_masuk": "9/10/2026",
    "tgl_update": "9/29/2026",
    "link_fb": "https://www.facebook.com/share/p/1C18e1FkBh/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/12/2026",
        "catatan": "Setelah di cek semua aman kecuali batrei cpt naik dan cpt turun. 8% pas di cas langsung 100% di cabut langsung lobet lagi"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/12/2026",
        "catatan": "semua aman kecuali batrei bermasalah"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/14/2026",
        "catatan": "Bongkar,Foto Baterai nya"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/14/2026",
        "catatan": "Rapikan Kembali kemudian QC kembali Laptop Pak Didin semua aman.. smntara putar YT 10mnit baterai dri 100% turun ke 92%"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/14/2026",
        "catatan": "sy tes ksih mati 88% trus sy nyalakn kembali lnsung drop di 7%"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/28/2026",
        "catatan": "ganti batrei"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/28/2026",
        "catatan": "cek, semua aman batrei naik dari 60 % sekarang sudah 65% baru tes 1x"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/28/2026",
        "catatan": "tes tanpa cas, batrei 88% semua aman"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/29/2026",
        "catatan": "semua aman sudah di tes 3x"
      }
    ]
  },
  {
    "id": "SRV-239",
    "no": 239,
    "nama_pelanggan": "kahar",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "kahar ( hitam )",
    "seri_perangkat": "lenovo idepad 330",
    "kategori": "Laptop / Notebook",
    "keluhan": "TIDAK  MASUK WIN",
    "tgl_masuk": "9/10/2026",
    "tgl_update": "9/17/2026",
    "link_fb": "https://www.facebook.com/share/p/1FCVzVbH2X/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/14/2026",
        "catatan": "tidak masuk windows (sop izin bongkar cek ssd  )"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/14/2026",
        "catatan": "bongkar, ssd 100% dan backup data c"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/14/2026",
        "catatan": "tes pakai ssd cc"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/14/2026",
        "catatan": "Tes pakai ssd cc, keyboard sempat tertekan sendiri, ssd aslinya 100%, yang lain semua aman baru tes 1x mati"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "instal semua aman kecuali keyboard kadang tertekan"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/17/2026",
        "catatan": "ganti keyboard"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/17/2026",
        "catatan": "semua aman sudah tes 2x dan sudah di kabari"
      }
    ]
  },
  {
    "id": "SRV-240",
    "no": 240,
    "nama_pelanggan": "Rian/Utris",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Rian/Utris (Hitam)",
    "seri_perangkat": "Laptop Lenovo Thinkpad T470s",
    "kategori": "Laptop / Notebook",
    "keluhan": "Menyala Kedap-kedip",
    "tgl_masuk": "9/16/2026",
    "tgl_update": "9/16/2026",
    "link_fb": "https://www.facebook.com/share/p/1AqyM3xMEC/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "tes nyalakan hanya indikator kedap-kedip SOP izin bongkar"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "Bongkar, lepas semua baterai & bersihkn RAM tetap sama hnya indikator kedap-kedip"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "lepas SSD & cek 94%"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "tes pasang RAM CC hnya indikator menyala tapi tdk tampil"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "Rapikan kembali Semua"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "tes nyalakan menyala & tampil QC semua aman"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "cek semua aman"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-241",
    "no": 241,
    "nama_pelanggan": "La Mura",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "La Mura (Hitam)",
    "seri_perangkat": "Laptop Acer ES1-132",
    "kategori": "Laptop / Notebook",
    "keluhan": "Lambat (Ganti SSD)",
    "tgl_masuk": "9/16/2026",
    "tgl_update": "9/16/2026",
    "link_fb": "https://www.facebook.com/share/p/1Fj3SdJQxe/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "QC semua aman kecuali Lambat"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "Bongkar, Pasang SSD 256GB"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "Cek HDD 100%"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "install win 10 lite GPT"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "cek semua aman kecuali  hrus sambil cas tapi sebelum nya tdi bisa mnyala tanpa cas"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "INSTAL WIN 8 TETAP TIDAK JADI BATREINYA"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "instal win 7 tidak bisa"
      }
    ]
  },
  {
    "id": "SRV-242",
    "no": 242,
    "nama_pelanggan": "Sidiq",
    "warna_unit": "-",
    "pelanggan_lengkap": "Sidiq",
    "seri_perangkat": "Lenovo G40-30",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk windows",
    "tgl_masuk": "9/16/2026",
    "tgl_update": "9/16/2026",
    "link_fb": "",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "tes nyalakan tdk msuk windows sdh coba setting bios tetap sama"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/16/2026",
        "catatan": "Bongkar, cek HDD 9%("
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "instal win 7 32 bit tidak bisa ( bluecreen )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "instal win 7 64bit tidak jadi"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "tes instal di luar tetap tidak bisa ( blucreen )"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "rapikan kembali ( cancel )"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-243",
    "no": 243,
    "nama_pelanggan": "selmi",
    "warna_unit": "merah",
    "pelanggan_lengkap": "selmi ( merah )",
    "seri_perangkat": "Laptop Acer A314-33",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti batrei, ssd, dan bersihkan",
    "tgl_masuk": "9/16/2026",
    "tgl_update": "9/17/2026",
    "link_fb": "https://www.facebook.com/share/p/1CH9zhfHqS/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/16/2026",
        "catatan": "Setelah di cek lambat sekali, batrei tidak jadi, lumayan panas yg lain aman"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/17/2026",
        "catatan": "cancel"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/17/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-244",
    "no": 244,
    "nama_pelanggan": "riri",
    "warna_unit": "silver",
    "pelanggan_lengkap": "riri ( silver)",
    "seri_perangkat": "Laptop Asus A516K",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti batrei + cek",
    "tgl_masuk": "9/18/2026",
    "tgl_update": "9/18/2026",
    "link_fb": "https://www.facebook.com/share/p/19tPHFNhEJ/",
    "status": "Cancel",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "Riri baru masuk. Keluhan ganti batrei, setelah di cek agak lambat sedikit, harus sambil cas ( batrei 100%) di cabut mati, yang lain aman. Baru tes 1x"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "lambat, batrei tidak jadi yang lain aman sudah cek 2x"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "cancel"
      }
    ]
  },
  {
    "id": "SRV-245",
    "no": 245,
    "nama_pelanggan": "Samin",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Samin (Hitam)",
    "seri_perangkat": "CPU RX7 B75",
    "kategori": "PC / Komputer",
    "keluhan": "tdk menyala",
    "tgl_masuk": "9/18/2026",
    "tgl_update": "9/19/2026",
    "link_fb": "https://www.facebook.com/share/p/19Y2fxQFSp/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/18/2026",
        "catatan": "tes nyalakn tdk mnyala"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/18/2026",
        "catatan": "test gantI PSU menyala QC semua aman sdh mati 2x"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/18/2026",
        "catatan": "test pake SSD CC QC aman semua baru 1x mati"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/18/2026",
        "catatan": "pasang PSU BARU"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/18/2026",
        "catatan": "tes nyalakn mnyala smntara tes putar video pake SSD CC baru 2x mati"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/19/2026",
        "catatan": "sudah ambil pemnbayaran CASH 425rb"
      }
    ]
  },
  {
    "id": "SRV-246",
    "no": 246,
    "nama_pelanggan": "ibu april",
    "warna_unit": "merah",
    "pelanggan_lengkap": "ibu april ( merah )",
    "seri_perangkat": "nb acer ES1-132",
    "kategori": "Laptop / Notebook",
    "keluhan": "lambat",
    "tgl_masuk": "9/18/2026",
    "tgl_update": "9/19/2026",
    "link_fb": "https://www.facebook.com/share/p/1GPGojiaPG/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "lambat sekali tidak bisa di apa apakan"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "sop izin bongkar cek hdd"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "hdd 100% dan sudah di backup data c dan rename"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "instal pakai ssd cc. win 8 tidak jadi toucoad"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "ganti jadi win 10"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "tes pakai ssd cc, lumayan panas, touchpad ( klik kanan dan kiri tidak jadi ) hdd 100% sudah di backup data. Yg lain aman"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/18/2026",
        "catatan": "semua aman, kecuali tombol toucpad klik kana dan kiri tidak jadi, cepat panas sudah cek 2x"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/19/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/19/2026",
        "catatan": "instal dan cek"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/19/2026",
        "catatan": "sedikit lambat, ram 2gb dan masih pakai hdd, masih sedikit panas, tombol klik kanan dan kiri toupad tidak jadi, yang lain aman baru tes 1x"
      }
    ]
  },
  {
    "id": "SRV-247",
    "no": 247,
    "nama_pelanggan": "ilham",
    "warna_unit": "hitam, gold",
    "pelanggan_lengkap": "ilham ( hitam, gold )",
    "seri_perangkat": "asus X441M",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal",
    "tgl_masuk": "9/18/2026",
    "tgl_update": "9/22/2026",
    "link_fb": "https://www.facebook.com/share/p/19h7NdgCus/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/19/2026",
        "catatan": "Setelah di cek lambat, yang lain aman. ram 4gb masih pakai hdd"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/19/2026",
        "catatan": "backup data dan instal"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/19/2026",
        "catatan": "instal dan cek"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/19/2026",
        "catatan": "masih sedikit lambat yang lain aman semua"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "ganti ssd 128gb dan bersihkan"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "instal dan pasang hddcady"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "Sudah di Instal, dan ganti ssd 128, sdh dibersihkan, sdh dipasang hddcady. Sisah cek baru 1x mati"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-248",
    "no": 248,
    "nama_pelanggan": "ahmad jumain",
    "warna_unit": "pink",
    "pelanggan_lengkap": "ahmad jumain ( pink )",
    "seri_perangkat": "acer aspire one 14",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal",
    "tgl_masuk": "9/21/2026",
    "tgl_update": "9/21/2026",
    "link_fb": "https://www.facebook.com/share/p/1EW8VPevP9/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/21/2026",
        "catatan": "tes nyalaakn menyala tapi seperti di control orang tua jdi tdk bisa tampil menu windows"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/21/2026",
        "catatan": "setelah jam 8.00 baru bisa masuk & tampil menu windows QC semua aman & sdh backup data C"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/21/2026",
        "catatan": "Install win 11 64bit GPT"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/21/2026",
        "catatan": "semua aman..sdh tes mati 3x"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/21/2026",
        "catatan": "sdh di bayar via TF BNI..sisa di ambil"
      }
    ]
  },
  {
    "id": "SRV-249",
    "no": 249,
    "nama_pelanggan": "agil",
    "warna_unit": "silfer",
    "pelanggan_lengkap": "agil ( silfer )",
    "seri_perangkat": "Laptop acer aspire A514-54G",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal",
    "tgl_masuk": "9/18/2026",
    "tgl_update": "9/21/2026",
    "link_fb": "https://www.facebook.com/share/p/1M2ykbvcxD/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/21/2026",
        "catatan": "QC semua aman kecuali cepat panas & tdi smntara tes baterai tiba-tiba langsung drop.."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/21/2026",
        "catatan": "Cpt panas, batrei cepat turun, lambat sedikit yg lain aman"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/21/2026",
        "catatan": "backup data c di ssd cc"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/21/2026",
        "catatan": "instal win11 ( ada pasword bios )"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/21/2026",
        "catatan": "cancel, sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-250",
    "no": 250,
    "nama_pelanggan": "Umar maskarae",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "Umar maskarae (hitam)",
    "seri_perangkat": "Laptop lenovo V14G3",
    "kategori": "Laptop / Notebook",
    "keluhan": "tdk masuk win (bluescreen)",
    "tgl_masuk": "9/22/2026",
    "tgl_update": "9/22/2026",
    "link_fb": "https://www.facebook.com/share/p/1Dcc5rZmQj/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/22/2026",
        "catatan": "keluhan tdk msuk win (bluescreen) sy cek touchpad & keyboard tdk jdi.. yg lain blm bisa cek.."
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "semua aman hanya cepat panas tes pakai ssd cc"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "pasta sudah kering"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "instal ulang"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "Umar sudah di cek 3x mati semua aman"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/22/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-251",
    "no": 251,
    "nama_pelanggan": "Dafit",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Dafit (Hitam)",
    "seri_perangkat": "Laptop Acer Aspire E5-475",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek",
    "tgl_masuk": "9/23/2026",
    "tgl_update": "9/23/2026",
    "link_fb": "https://www.facebook.com/share/p/18sCYRyZzL/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/23/2026",
        "catatan": "tes nyalaakn menyala tapi tdk masuk win..setting bios baru masuk win"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/23/2026",
        "catatan": "semua aman kecuali lambat sekali, suara kecil sekali+kresek"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/23/2026",
        "catatan": "cek HDD 100% sdh backup data nya"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/23/2026",
        "catatan": "ganti ssd 256 dan instal"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/23/2026",
        "catatan": "Suara kresek dan kecil, yg lain aman"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/23/2026",
        "catatan": "pindahkan data yg di hardisk ke ssd"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/23/2026",
        "catatan": "Suara kresek dan kecil, yg lain aman. sudah di cek 3x dan sudah di  kabari, sisah di ambil"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/23/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-252",
    "no": 252,
    "nama_pelanggan": "Dafit",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Dafit (Hitam)",
    "seri_perangkat": "Laptop HP ProBook 440 G2",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek",
    "tgl_masuk": "9/23/2026",
    "tgl_update": "9/23/2026",
    "link_fb": "https://www.facebook.com/share/p/19kVm9eQ5S/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/23/2026",
        "catatan": "tes nyalain tdk menyala sdh pake cas asli hnya indikator yg mnyala"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/23/2026",
        "catatan": "tes di belakang ada ampere ny tpi tekan tombol on/off tdk ada respon.."
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/23/2026",
        "catatan": "Casing engsel sebelah kanan pecah..tpi engsel ny aman"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/23/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-253",
    "no": 253,
    "nama_pelanggan": "Viky Aditya Saputra",
    "warna_unit": "-",
    "pelanggan_lengkap": "Viky Aditya Saputra",
    "seri_perangkat": "Kursus Komputer Tingkat SD",
    "kategori": "PC / Komputer",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "9/23/2026",
    "tgl_update": "9/23/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "",
        "catatan": "https://www.facebook.com/share/p/1DTU4XHcba/"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/21/2026",
        "catatan": "Belajar Sitem Komputer &  Mengoperasikan KOmputer"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/22/2026",
        "catatan": "Belajar Mengenal Perangkat Keras (Hardware) Lebih Dalam"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/23/2026",
        "catatan": "Membuat Soal untuk latihan di rumah"
      },
      {
        "step": 5,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "9/23/2026",
        "catatan": "(Tanpa catatan detail)"
      }
    ]
  },
  {
    "id": "SRV-254",
    "no": 254,
    "nama_pelanggan": "risky daihatsu",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "risky daihatsu (Hitam)",
    "seri_perangkat": "printer epson L3110",
    "kategori": "Printer",
    "keluhan": "tidak bisa memprint",
    "tgl_masuk": "9/23/2026",
    "tgl_update": "9/24/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/posts/2348857619210296",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Fazrun"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/24/2026",
        "catatan": "cek indikator kedap-kedip + tidak bisa mempriint"
      },
      {
        "step": 2,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/24/2026",
        "catatan": "tes reset dan sudah jadi"
      }
    ]
  },
  {
    "id": "SRV-255",
    "no": 255,
    "nama_pelanggan": "ASYIFA",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "ASYIFA (Hitam)",
    "seri_perangkat": "printer epson L405",
    "kategori": "Printer",
    "keluhan": "tidak bisa memprint",
    "tgl_masuk": "9/23/2026",
    "tgl_update": "9/25/2026",
    "link_fb": "https://www.facebook.com/share/p/19LrFBTYWX/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Fazrun",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/23/2026",
        "catatan": "TIDAK MENYALA"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/24/2026",
        "catatan": "Lampu indikator kedap kedip, dan tidak bisa memprint"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/25/2026",
        "catatan": "isi tinta, sudah di cleaniing 2x dan belum bisa di flasj"
      },
      {
        "step": 4,
        "teknisi": "Fazrun",
        "teknisi_utama": "Fazrun",
        "tanggal": "9/25/2026",
        "catatan": "reset, flash tetap masih bergaris"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/25/2026",
        "catatan": "bawa printer di portabel"
      }
    ]
  },
  {
    "id": "SRV-256",
    "no": 256,
    "nama_pelanggan": "ust pak darmawan",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "ust pak darmawan (hitam)",
    "seri_perangkat": "printer epson l3210",
    "kategori": "Printer",
    "keluhan": "tidak mau menyala, kedap kedip",
    "tgl_masuk": "9/28/2026",
    "tgl_update": "9/28/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/28/2026",
        "catatan": "bisa memprint, tidak kedap kedip aman. sudah di tes 2x print"
      }
    ]
  },
  {
    "id": "SRV-257",
    "no": 257,
    "nama_pelanggan": "ust pak darmawan",
    "warna_unit": "abu-abu",
    "pelanggan_lengkap": "ust pak darmawan (abu-abu)",
    "seri_perangkat": "Laptop Hp 240G7",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek,Baterai Bermasalah",
    "tgl_masuk": "9/28/2026",
    "tgl_update": "10/9/2026",
    "link_fb": "https://www.facebook.com/share/p/1deKcqqs7w/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/28/2026",
        "catatan": "tes pake cas CC tdk mnyala sdh tes ganti kabel power"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/28/2026",
        "catatan": "test di belakang menyala tapi blm bisa QC ada password nya"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/28/2026",
        "catatan": "tes pake cas asli nya menyala QC semua aman kecuali pas pertama di nyalakan muncul notifikasi baterai CMOS,data C full & baterai tdk mengisi 0%"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/28/2026",
        "catatan": "bongkar, cek batrei lepas soket batrei dan pasang kembali  dan kotor di dalamnya"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/28/2026",
        "catatan": "pasang kembali, tetap batrei tidak jadi panas juga"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "Bongkar,Cleaning & ganti pasta"
      },
      {
        "step": 7,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "pasang baterai baru & tes nyalakan menyala"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "QC aman semua kecuali pas di nyalakan muncul eror baterai CMOS tpi jam & waktu ny msih sesua"
      }
    ]
  },
  {
    "id": "SRV-258",
    "no": 258,
    "nama_pelanggan": "andi/ DPKP busel",
    "warna_unit": "biru",
    "pelanggan_lengkap": "andi/ DPKP busel ( biru )",
    "seri_perangkat": "Laptop lenovo ideapad 120S-141AP",
    "kategori": "Laptop / Notebook",
    "keluhan": "ganti keyboard",
    "tgl_masuk": "9/28/2026",
    "tgl_update": "10/1/2026",
    "link_fb": "https://www.facebook.com/share/p/1HnXsSYGon/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/30/2026",
        "catatan": "Keyboard semua tidak jadi, lambat, touchpad kdng kandas2, yg lain aman"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "9/30/2026",
        "catatan": "Blm sempat tes pakai keyboard eksternal soalnya di cc1 sudah rusak"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/1/2026",
        "catatan": "tidak jadi juga pakai ekternal. sop tes iizin pakai ssd cc"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/1/2026",
        "catatan": "bongkar ulang, instal pakai nvme cc ( tidak terbaca pastisi )"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/1/2026",
        "catatan": "instal pakai m.2 cc"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/1/2026",
        "catatan": "keyboard banyak yang tidak jadi, yang lain aman semua"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/1/2026",
        "catatan": "ganti keyboard"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/1/2026",
        "catatan": "sempat blucreen ( pakai ssd aslinya) 2x tes blucreen"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/1/2026",
        "catatan": "tes ke 3x nya lambat, yang lain aman semua ( kdng tbtb blucreen )"
      },
      {
        "step": 10,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/1/2026",
        "catatan": "Cek SSD 100% sdh backup data & RENAME"
      }
    ]
  },
  {
    "id": "SRV-259",
    "no": 259,
    "nama_pelanggan": "ust pak darmawan",
    "warna_unit": "abu-abu",
    "pelanggan_lengkap": "ust pak darmawan (abu-abu)",
    "seri_perangkat": "Laptop Hp 240GB",
    "kategori": "Laptop / Notebook",
    "keluhan": "saat di nyalakan tiba-tiba mati",
    "tgl_masuk": "9/28/2026",
    "tgl_update": "10/15/2026",
    "link_fb": "https://www.facebook.com/share/p/1JZ4jYqwzt/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/28/2026",
        "catatan": "QC semua aman kecuali pas pertama di nyalakan muncul fan eror & tampilan LCD kiri kanan merah"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "9/28/2026",
        "catatan": "baru putar 5 mnit langsung mati"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/6/2026",
        "catatan": "Bongkar, cek fan/kipas"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/6/2026",
        "catatan": "pasang kembali & rapikn tes nyalakn mnyala hnya beberapa mnit lngsung mati"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/13/2026",
        "catatan": "bongkar, ganti fan"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/13/2026",
        "catatan": "ganti pasta dan cleaning"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/13/2026",
        "catatan": "tes kasih menyala, sempat blucreen"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/13/2026",
        "catatan": "Lcd agak sedikit merah, sempat bluecreen, yang lain aman. Sudah di ganti fan, ganti pasta dan cleaning. Sementara cek,"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/13/2026",
        "catatan": "backup data c dan rename"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/13/2026",
        "catatan": "Sudah di tes 3x hampir seharian. Aman semua ( kecuali lcd, dan windows sempat bluecreen 1kali )"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/14/2026",
        "catatan": "instal win 11 gpt ( tidak terbaca )"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/14/2026",
        "catatan": "instal win 11 mbr ( tidak terbaca )"
      },
      {
        "step": 13,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/14/2026",
        "catatan": "ganti flasidsk coba win 11 gpt mbr tetap tidak terbaca"
      },
      {
        "step": 14,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/14/2026",
        "catatan": "instal win 10 mbr tidak terbaca"
      },
      {
        "step": 15,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/14/2026",
        "catatan": "instal win 10 gpt terbaca"
      },
      {
        "step": 16,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/14/2026",
        "catatan": "semua aman, dan sudah di instalkan semua aplikasi yang di minta di luar aplikasi standar."
      },
      {
        "step": 17,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/14/2026",
        "catatan": "coba restar tbtb minta update sudah mau 1jam belum selesai selesai"
      },
      {
        "step": 18,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/15/2026",
        "catatan": "suara tdak jadi, lcd bermasalah. sop instal ulang win 11"
      },
      {
        "step": 19,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/15/2026",
        "catatan": "instal win 11, semua aman kecuali lcd sementara cek 1x mati"
      }
    ]
  },
  {
    "id": "SRV-260",
    "no": 260,
    "nama_pelanggan": "pak juned",
    "warna_unit": "-",
    "pelanggan_lengkap": "pak juned",
    "seri_perangkat": "Laptop Toshiba dynabook R82",
    "kategori": "Laptop / Notebook",
    "keluhan": "word tdk bisa mengetik",
    "tgl_masuk": "10/2/2026",
    "tgl_update": "10/2/2026",
    "link_fb": "https://www.facebook.com/share/p/1Gmy7tfNLG/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/2/2026",
        "catatan": "QC semua aman kecuali baterai cepat turun & naik karena cuma mengandalkan 1 baterai, data C full & agak sedikit lambat"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/2/2026",
        "catatan": "sdh selesai di aktivasi office nya & tes mengetik sdh aman tapi ada beberapa aplikasi anti virus yg sya hpus"
      }
    ]
  },
  {
    "id": "SRV-261",
    "no": 261,
    "nama_pelanggan": "Alo Mandiri",
    "warna_unit": "-",
    "pelanggan_lengkap": "Alo Mandiri",
    "seri_perangkat": "HP Prodesk 400 G4 MT",
    "kategori": "Laptop / Notebook",
    "keluhan": "Muncul tampilan kipas error",
    "tgl_masuk": "10/2/2026",
    "tgl_update": "10/5/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2356846448411413/?mibextid=rS40aB7S9Ucbxw6v",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "10/2/2026",
        "catatan": "sebelumnya tidak tampil, tapi  tampil pas bersihkan ram, Bagian dalamnya kotor sekali"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "10/2/2026",
        "catatan": "qc. Semua aman kecuali windows sangat lambat dan mesin/ casing berdebu. kesehatan HDD 100%"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "10/2/2026",
        "catatan": "tes pakai SSD cc aman, sudah putar you tube sekitar 1 jam dan matikan 3X"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/3/2026",
        "catatan": "bongkar,Cleaning & Ganti Pasta"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/3/2026",
        "catatan": "pasang kembal tes mati menyala 3x aman"
      },
      {
        "step": 6,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "10/5/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-262",
    "no": 262,
    "nama_pelanggan": "Hanan",
    "warna_unit": "-",
    "pelanggan_lengkap": "Hanan",
    "seri_perangkat": "Lenovo Thinkpad V110-14",
    "kategori": "Laptop / Notebook",
    "keluhan": "windows lambat",
    "tgl_masuk": "10/2/2026",
    "tgl_update": "10/5/2026",
    "link_fb": "https://www.facebook.com/groups/1700120504084014/permalink/2359680491461342/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Ardin"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "10/4/2026",
        "catatan": "DP dan pengerjaan ganti SSD 128 GB + Ram 4 GB + Pembelian casing HDD"
      },
      {
        "step": 2,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "10/4/2026",
        "catatan": "Qc. Semua aman kecuali suara kecil & Windows Lambat (Sebelum Ganti SSD),"
      },
      {
        "step": 3,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "10/4/2026",
        "catatan": "Putar you tube 30 menitan + matikan 3X aman (Setelah Ganti SSD)"
      },
      {
        "step": 4,
        "teknisi": "Ardin",
        "teknisi_utama": "Ardin",
        "tanggal": "10/5/2026",
        "catatan": "sudah diambil"
      }
    ]
  },
  {
    "id": "SRV-263",
    "no": 263,
    "nama_pelanggan": "Alif",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Alif (Hitam)",
    "seri_perangkat": "Laptop Lenovo Thinkpad T495",
    "kategori": "Laptop / Notebook",
    "keluhan": "Ganti Keyboard",
    "tgl_masuk": "10/5/2026",
    "tgl_update": "10/10/2026",
    "link_fb": "https://www.facebook.com/share/p/1HjNJGL9Xb/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/5/2026",
        "catatan": "aman semua kecuali keyboard bermasalah sama hnya 1 partisi ny"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/5/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/5/2026",
        "catatan": "cek, semua aman kecuali keyboard"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/5/2026",
        "catatan": "bongkar, tes pakai nvme cc dan backup data c ( kesehatan 95%)"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "ganti keyboard"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "instal win 11 gpt mbr tidak jadi"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "instal win 10 juga tidak jadi"
      },
      {
        "step": 8,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "tes ganti flasdisk ( berhasil ) dan terbaca"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "instal win 11 dan cek"
      },
      {
        "step": 10,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "Sudah di Instal, cleaning ganti pasta, ganti keyboard sisah di cek dan di kembalikan datanya"
      },
      {
        "step": 11,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "setelah di cek 25 menitan kursornya jalan sendiri, biar pakai mouse ( sudah 2x cek )"
      },
      {
        "step": 12,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "aman semua sudha tes hampir 1jam lebih dan tes tanpa cas"
      },
      {
        "step": 13,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/10/2026",
        "catatan": "bongkar, buka kembali keyboard dan tes kembali"
      },
      {
        "step": 14,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/10/2026",
        "catatan": "semua aman"
      }
    ]
  },
  {
    "id": "SRV-264",
    "no": 264,
    "nama_pelanggan": "Kadar",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Kadar (Hitam)",
    "seri_perangkat": "Printer Epson L1110",
    "kategori": "Printer",
    "keluhan": "Cek",
    "tgl_masuk": "10/5/2026",
    "tgl_update": "10/5/2026",
    "link_fb": "https://www.facebook.com/share/p/1B4UVDAvRa/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/5/2026",
        "catatan": "tes nyalakan indikator menyala kedap-kedip"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/5/2026",
        "catatan": "Bawa di portabel"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/5/2026",
        "catatan": "test print aman"
      }
    ]
  },
  {
    "id": "SRV-265",
    "no": 265,
    "nama_pelanggan": "Mar mar",
    "warna_unit": "Putih",
    "pelanggan_lengkap": "Mar mar (Putih)",
    "seri_perangkat": "Komputer pc msi",
    "kategori": "PC / Komputer",
    "keluhan": "kadang menyala kadang tidak",
    "tgl_masuk": "10/6/2026",
    "tgl_update": "10/6/2026",
    "link_fb": "https://www.facebook.com/share/p/1DioD9vuFs/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/6/2026",
        "catatan": "tes pake kabel power asli & kabel power CC tdk mau menyala"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/6/2026",
        "catatan": "tes ganti power supply CC menyala smntara cek"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/6/2026",
        "catatan": "Sdh tes mati menyala 3x aman  pake power supply CC"
      },
      {
        "step": 4,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/6/2026",
        "catatan": "tes kembali pake power supply asli ny mnyala smntara cek lgi"
      },
      {
        "step": 5,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/6/2026",
        "catatan": "sdh tes mati mnyala 6x aman sdh tes putar yt juga berjam-jam aman"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/6/2026",
        "catatan": "sdh kabari..biaya 150rb"
      }
    ]
  },
  {
    "id": "SRV-266",
    "no": 266,
    "nama_pelanggan": "Arifudin",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Arifudin (Hitam)",
    "seri_perangkat": "Laptop Acer Aspire A314-33",
    "kategori": "Laptop / Notebook",
    "keluhan": "menegetik tdk bisa di simpan",
    "tgl_masuk": "10/7/2026",
    "tgl_update": "10/7/2026",
    "link_fb": "https://www.facebook.com/share/p/19YjjTvicu/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/7/2026",
        "catatan": "QC semua aman kcuali kadang tiba-tiba lambat & pas mengetik tdk bisa di save/simpan"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/7/2026",
        "catatan": "aktivasi win & office ny kemudian tes mnegetik & simpan sdh aman"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/7/2026",
        "catatan": "sdh kabari orang tdk mau install jdi hnya aktivasi 25rb.."
      }
    ]
  },
  {
    "id": "SRV-267",
    "no": 267,
    "nama_pelanggan": "elsa",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "elsa ( hitam )",
    "seri_perangkat": "Laptop Acer EX215-22",
    "kategori": "Laptop / Notebook",
    "keluhan": "wifi tidak bisa conek di hospot hp",
    "tgl_masuk": "10/7/2026",
    "tgl_update": "10/9/2026",
    "link_fb": "https://www.facebook.com/share/p/1VyH7dZdbu/",
    "status": "Sudah Diambil",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "lambat sekali, yang lain semua aman. sementara di backup datanya"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "instal ulang"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "instal win 11 gpt mbr tidak terbaca. dan lcd berbayang puith dan bergaris"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "instal win 10 gpt"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "lcd bergaris dan berbayang putih, yang lain aman semua sudah di instal dan di cek matikan 3x"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-268",
    "no": 268,
    "nama_pelanggan": "Pak Darmawan",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Pak Darmawan (Hitam)",
    "seri_perangkat": "Printer Epson L121",
    "kategori": "Printer",
    "keluhan": "tinta hitam bermaslah",
    "tgl_masuk": "10/9/2026",
    "tgl_update": "10/19/2026",
    "link_fb": "https://www.facebook.com/share/p/1F6TPTW7cW/",
    "status": "Selesai (Siap Diambil)",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "tes print aman kecuali tinta hitam bermaslah"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "cleaning 2x & flush1x tetap sama"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/10/2026",
        "catatan": "bawa ke portabel"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "tes print ( belum maksimal ) tapi sudah di kabari"
      }
    ]
  },
  {
    "id": "SRV-269",
    "no": 269,
    "nama_pelanggan": "Hayat",
    "warna_unit": "HItam",
    "pelanggan_lengkap": "Hayat (HItam)",
    "seri_perangkat": "Laptop ACER Travelmate P214 series",
    "kategori": "Laptop / Notebook",
    "keluhan": "servis mainboard & perbaiki engsel",
    "tgl_masuk": "10/9/2026",
    "tgl_update": "10/10/2026",
    "link_fb": "https://www.facebook.com/share/p/19hpeeR2ze/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "tes pake cas asli tdk menyala"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "tes di belakang menyala.. tapi lama sekali baru tampil."
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/9/2026",
        "catatan": "aman semua kecuali lambat, engsel sebelah kiri bermasalah, suara kresek & wifi tdk jadi..hrus pake USB wifi"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "aman semua kecuali lambat, engsel sebelah kiri bermasalah, suara kresek & wifi tdk jadi..hrus pake USB wifi ( tes nampa cas )"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "tes pakai cas aslinya tidak mengisi"
      },
      {
        "step": 6,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/10/2026",
        "catatan": "cek wifi sdh jadi & coba baut engsel yg bermaslaah aman tpi klu di buka tutup renggang hrus sambil di tahan"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/10/2026",
        "catatan": "bongkar, perbaiki engsel. semua sudah patah kuningan baut luar"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/10/2026",
        "catatan": "solder dan perbaiki engsel"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/10/2026",
        "catatan": "tes, masih sama tapi lumayan kuat"
      }
    ]
  },
  {
    "id": "SRV-270",
    "no": 270,
    "nama_pelanggan": "arifudin",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "arifudin ( hitam )",
    "seri_perangkat": "Laptop acer Aspire A314-33",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak masuk win + cek",
    "tgl_masuk": "10/9/2026",
    "tgl_update": "10/9/2026",
    "link_fb": "https://www.facebook.com/share/p/1BS2vdN5d4/",
    "status": "Cancel (Sudah Diambil)",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "bongkar, cek ssd 58% data masih bisa di buka sudah di backup n rename"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "tes pakai ssd cc aman semua"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "di pasang kembali ( cancel )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/9/2026",
        "catatan": "sudah di ambil"
      }
    ]
  },
  {
    "id": "SRV-271",
    "no": 271,
    "nama_pelanggan": "Yayat",
    "warna_unit": "Hitam",
    "pelanggan_lengkap": "Yayat (Hitam)",
    "seri_perangkat": "Laptop Toshiba Satellite C40-A",
    "kategori": "Laptop / Notebook",
    "keluhan": "tidak menyala",
    "tgl_masuk": "10/14/2026",
    "tgl_update": "10/14/2026",
    "link_fb": "https://www.facebook.com/share/p/1CDm4o5vKh/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Arif",
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/14/2026",
        "catatan": "tes pake cas asli tdk menyala"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/14/2026",
        "catatan": "tes di belakang pake PSU konslet"
      },
      {
        "step": 3,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/14/2026",
        "catatan": "bongkar,lepas HDD"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/14/2026",
        "catatan": "CEK HDD 100% & rapikan kembali seperti semula"
      }
    ]
  },
  {
    "id": "SRV-272",
    "no": 272,
    "nama_pelanggan": "cc",
    "warna_unit": "hitam",
    "pelanggan_lengkap": "cc (hitam )",
    "seri_perangkat": "dell",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal ulang",
    "tgl_masuk": "10/14/2026",
    "tgl_update": "10/17/2026",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia",
      "Arif"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/17/2026",
        "catatan": "instal ulang win 10 semua jadi kecuali batrei dan agak sedikit lambat"
      },
      {
        "step": 2,
        "teknisi": "Arif",
        "teknisi_utama": "Arif",
        "tanggal": "10/17/2026",
        "catatan": "instal ulang win 8"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/17/2026",
        "catatan": "instal aplikasi"
      }
    ]
  },
  {
    "id": "SRV-273",
    "no": 273,
    "nama_pelanggan": "afdal",
    "warna_unit": "silver",
    "pelanggan_lengkap": "afdal ( silver)",
    "seri_perangkat": "Laptop Microsoft Surface Book 2",
    "kategori": "Laptop / Notebook",
    "keluhan": "instal ulang",
    "tgl_masuk": "10/14/2026",
    "tgl_update": "10/17/2026",
    "link_fb": "https://www.facebook.com/share/p/1CXyhHA66p/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/17/2026",
        "catatan": "semua aman"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/17/2026",
        "catatan": "instal office, googlecomre, aktivasi office dan windows dan instal driver"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/17/2026",
        "catatan": "kamrea jadi, kalau dari winodwsnya tidak jadi"
      }
    ]
  },
  {
    "id": "SRV-274",
    "no": 274,
    "nama_pelanggan": "nurmin",
    "warna_unit": "silver",
    "pelanggan_lengkap": "nurmin ( silver)",
    "seri_perangkat": "Laptop Hp 14s-dq31O9TU",
    "kategori": "Laptop / Notebook",
    "keluhan": "lambat",
    "tgl_masuk": "10/14/2026",
    "tgl_update": "10/19/2026",
    "link_fb": "https://www.facebook.com/share/p/1DzB6qTzQB/",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [
      "Tia"
    ],
    "riwayat": [
      {
        "step": 1,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "lambat, data c ful, yang lain aman  sempat cepat panas juga"
      },
      {
        "step": 2,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "tes backup data c ( tidak cukup )"
      },
      {
        "step": 3,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "tes backup di ssd cc(  tidak cukup )"
      },
      {
        "step": 4,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "sop : izin bongkar, backup di luar"
      },
      {
        "step": 5,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "bongkar, cek ssd dan backup data c"
      },
      {
        "step": 6,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "cleaning dan ganti pasta"
      },
      {
        "step": 7,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "instal ulang. win 11. office dari 2013 sampai 2021 tidak bisa di instal"
      },
      {
        "step": 8,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "masih lambat, rencana mau di ganti win 10"
      },
      {
        "step": 9,
        "teknisi": "Tia",
        "teknisi_utama": "Tia",
        "tanggal": "10/19/2026",
        "catatan": "instal ulang win 10"
      }
    ]
  },
  {
    "id": "SRV-275",
    "no": 275,
    "nama_pelanggan": "Tanpa Nama",
    "warna_unit": "-",
    "pelanggan_lengkap": "",
    "seri_perangkat": "tia (pink/ungu)",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "2026-10-19",
    "tgl_update": "2026-10-19",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [],
    "riwayat": []
  },
  {
    "id": "SRV-276",
    "no": 276,
    "nama_pelanggan": "Tanpa Nama",
    "warna_unit": "-",
    "pelanggan_lengkap": "",
    "seri_perangkat": "vatar ( kuning )",
    "kategori": "Laptop / Notebook",
    "keluhan": "Cek / Servis",
    "tgl_masuk": "2026-10-19",
    "tgl_update": "2026-10-19",
    "link_fb": "",
    "status": "Dalam Pengerjaan",
    "teknisi_terlibat": [],
    "riwayat": []
  }
];
