# 💻 Sistem Tracer & Aktivitas Harian Teknisi Toko Komputer

Aplikasi pelacakan servis laptop, PC/komputer, dan printer serta laporan aktivitas harian teknisi dengan tampilan **Format Tabel Excel 3-Baris** dan **Mode Kartu Tracer**.

## 🎨 Kode Warna Teknisi
Setiap teknisi memiliki warna identitas otomatis pada kolom pengerjaan:
- 🔴 **Arif**: Merah
- 🔵 **Ardin**: Biru Muda / Biru Langit
- 🟣 **Tia**: Pink / Ungu
- 🔷 **Fazrun**: Biru Tua
- 🍦 **Vivi**: Cream
- 🟡 **Vattar**: Kuning
- 🟢 **Ihwal**: Hijau
- 🟠 **Hibrian**: Oranye

---

## 🚀 Cara Menjalankan dengan Python (Lokal di Toko)
1. Buka terminal / Command Prompt di folder ini.
2. Jalankan server Python:
   ```bash
   python app.py
   ```
3. Browser akan otomatis terbuka di `http://localhost:8000`.
4. Setiap perubahan data (tambah unit baru / tambah progres harian teknisi) otomatis tersimpan ke:
   - `data_service.json`
   - `data.js`
   - `raw_data.csv` (Format Excel asli toko)

Jika Anda memperbarui file `raw_data.csv` langsung dari Excel, jalankan:
```bash
python parse_data.py
```

---

## 🌐 Cara Meng-online-kan Gratis di GitHub Pages
1. Buat repository baru di GitHub (contoh: `aktivitas-harian-toko`).
2. Upload semua file di folder ini (`index.html`, `style.css`, `app.js`, `data.js`, `app.py`, `parse_data.py`, `raw_data.csv`, `data_service.json`).
3. Masuk ke menu **Settings** ➔ **Pages** di repository GitHub Anda.
4. Pada bagian **Build and deployment (Source)**, pilih **Deploy from a branch**, lalu pilih branch **`main`** dan folder **`/ (root)`**, kemudian klik **Save**.
5. Tunggu sekitar 1 menit, website Anda langsung aktif dan bisa diakses dari HP/Laptop mana saja!
