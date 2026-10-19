import csv
import json
import re

TECHNICIAN_COLORS = {
    "Arif": {"bg": "#ffe4e6", "border": "#f87171", "text": "#9f1239", "badge": "#e11d48", "label": "Merah"},
    "Ardin": {"bg": "#e0f2fe", "border": "#38bdf8", "text": "#075985", "badge": "#0284c7", "label": "Biru Muda"},
    "Tia": {"bg": "#fce7f3", "border": "#f472b6", "text": "#9d174d", "badge": "#db2777", "label": "Pink"},
    "Fazrun": {"bg": "#dbeafe", "border": "#60a5fa", "text": "#1e3a8a", "badge": "#2563eb", "label": "Biru Tua"},
    "Vivi": {"bg": "#ffedd5", "border": "#fb923c", "text": "#9a3412", "badge": "#ea580c", "label": "Cream"},
    "Vattar": {"bg": "#fef9c3", "border": "#eab308", "text": "#854d0e", "badge": "#ca8a04", "label": "Kuning"},
    "Ihwal": {"bg": "#d1fae5", "border": "#34d399", "text": "#065f46", "badge": "#059669", "label": "Hijau"},
    "Hibrian": {"bg": "#f3e8ff", "border": "#a855f7", "text": "#6b21a8", "badge": "#9333ea", "label": "Ungu"},
    "Zam Zam": {"bg": "#ccfbf1", "border": "#2dd4bf", "text": "#115e59", "badge": "#0d9488", "label": "Tosca"},
    "Egi": {"bg": "#e0e7ff", "border": "#818cf8", "text": "#3730a3", "badge": "#4f46e5", "label": "Indigo"},
}

def normalize_tech_name(name):
    if not name:
        return "Teknisi"
    raw = name.strip()
    parts = re.split(r'[&,]|\bdan\b', raw, flags=re.IGNORECASE)
    cleaned_parts = []
    for p in parts:
        p = p.strip()
        if not p:
            continue
        p_low = p.lower()
        if 'arif' in p_low:
            cleaned_parts.append('Arif')
        elif 'ard' in p_low:
            cleaned_parts.append('Ardin')
        elif 'tia' in p_low:
            cleaned_parts.append('Tia')
        elif 'fazrun' in p_low:
            cleaned_parts.append('Fazrun')
        elif 'vivi' in p_low:
            cleaned_parts.append('Vivi')
        elif 'vat' in p_low:
            cleaned_parts.append('Vattar')
        elif 'ihwal' in p_low:
            cleaned_parts.append('Ihwal')
        elif 'hibrian' in p_low:
            cleaned_parts.append('Hibrian')
        elif 'zam' in p_low:
            cleaned_parts.append('Zam Zam')
        elif 'egi' in p_low:
            cleaned_parts.append('Egi')
        elif 'cust name' in p_low:
            cleaned_parts.append('Teknisi')
        else:
            cleaned_parts.append(p.title())
    return " & ".join(cleaned_parts) if cleaned_parts else "Teknisi"

def extract_primary_tech(tech_str):
    first = tech_str.split('&')[0].strip()
    return first

def parse_customer_and_color(cust_raw):
    cust_raw = cust_raw.strip()
    if not cust_raw:
        return "Tanpa Nama", "-"
    m = re.search(r'\(([^)]+)\)', cust_raw)
    if m:
        warna = m.group(1).strip()
        nama = (cust_raw[:m.start()] + cust_raw[m.end():]).strip(' ,.-')
        if not nama:
            nama = cust_raw
        return nama, warna
    if '(' in cust_raw:
        parts = cust_raw.split('(', 1)
        nama = parts[0].strip(' ,.-')
        warna = parts[1].strip(' ,.-)')
        return nama, warna
    return cust_raw, "-"

def detect_device_category(seri):
    s = seri.lower()
    if 'printer' in s or 'epson' in s or 'canon' in s or 'pixma' in s:
        return 'Printer'
    if 'cpu' in s or 'komputer' in s or 'all in one' in s or 'aio' in s or 'thinkcentre' in s or 'ideacentre' in s:
        return 'PC / Komputer'
    if 'harddisk' in s or 'hdd' in s or 'fd' in s:
        return 'Storage / Aksesoris'
    if 'macbook' in s:
        return 'MacBook'
    return 'Laptop / Notebook'

def detect_status(logs, keluhan):
    all_text = " ".join([l['catatan'] for l in logs]).lower()
    last_text = logs[-1]['catatan'].lower() if logs else ""
    
    if 'cancel' in last_text or ('cancel' in all_text and ('ambil' in last_text or 'cancel' in last_text)):
        if 'sudah ambil' in all_text or 'sudah di ambil' in all_text or 'sdh ambil' in all_text or 'dikembalikan' in all_text:
            return 'Cancel (Sudah Diambil)'
        return 'Cancel'
    
    pickup_keywords = ['sudah ambil', 'sudah di ambil', 'sdh ambil', 'sdh di ambil', 'sudah diambil', 'orangnya sudah ambil', 'sudah di kasih', 'sudah, dibeli']
    for kw in pickup_keywords:
        if kw in last_text or kw in all_text:
            if 'belum diambil' not in last_text and 'nnti di bawa lagi' not in last_text:
                return 'Sudah Diambil'
                
    if 'lunas tapi belum diambil' in last_text or 'tinggal ambil' in last_text or 'sisa di ambil' in last_text or 'sisah di ambil' in last_text or 'sudah di kabari' in last_text or 'bisa dihubungi' in last_text or 'selesai' in last_text:
        return 'Selesai (Siap Diambil)'
        
    return 'Dalam Pengerjaan'

def parse_csv(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = list(csv.reader(f))
    
    blocks = []
    current_block = []
    for row in reader:
        if all(cell.strip() == '' for cell in row):
            if current_block:
                blocks.append(current_block)
                current_block = []
        else:
            current_block.append(row)
    if current_block:
        blocks.append(current_block)
        
    records = []
    idx = 1
    for b in blocks:
        if len(b) < 3:
            continue
        r1, r2, r3 = b[0], b[1], b[2]
        
        max_len = max(len(r1), len(r2), len(r3))
        r1 += [''] * (max_len - len(r1))
        r2 += [''] * (max_len - len(r2))
        r3 += [''] * (max_len - len(r3))
        
        cust_raw = r3[0].strip()
        seri_raw = r3[1].strip()
        if not cust_raw and not seri_raw:
            continue
            
        nama_pelanggan, warna_unit = parse_customer_and_color(cust_raw)
        
        has_fb_col = 'link' in r1[3].lower() or 'fb' in r1[3].lower() or 'http' in r3[3].lower()
        
        fb_link = ""
        tgl_masuk = ""
        
        r1_c2_low = r1[2].strip().lower()
        col2_is_tech = r1_c2_low not in ['keluhan', 'keluhan orgnya', 'keluhann', '']
        
        if col2_is_tech:
            keluhan = "Cek / Servis"
            start_col = 2
        elif has_fb_col:
            keluhan = r3[2].strip()
            fb_link = r3[3].strip()
            tgl_masuk = r2[3].strip()
            start_col = 4
        else:
            keluhan = r3[2].strip()
            start_col = 3
            
        if not fb_link and 'http' in keluhan:
            m_url = re.search(r'(https?://\S+)', keluhan)
            if m_url:
                fb_link = m_url.group(1)
                keluhan = keluhan.replace(fb_link, '').strip()
                
        logs = []
        for c in range(start_col, max_len):
            tech_raw = r1[c].strip()
            date_raw = r2[c].strip()
            note_raw = r3[c].strip()
            if not tech_raw and not date_raw and not note_raw:
                continue
            if not note_raw and not tech_raw:
                continue
            if date_raw == '5/1/1026':
                date_raw = '2026-05-01'
            tech_norm = normalize_tech_name(tech_raw)
            logs.append({
                'step': len(logs) + 1,
                'teknisi': tech_norm,
                'teknisi_utama': extract_primary_tech(tech_norm),
                'tanggal': date_raw if date_raw else (logs[-1]['tanggal'] if logs else tgl_masuk),
                'catatan': note_raw if note_raw else '(Tanpa catatan detail)'
            })
            
        if not tgl_masuk:
            if r2[0].strip() and re.match(r'^\d{4}-\d{2}-\d{2}$', r2[0].strip()):
                tgl_masuk = r2[0].strip()
            elif logs and logs[0]['tanggal']:
                tgl_masuk = logs[0]['tanggal']
            else:
                tgl_masuk = "2026-05-01"
                
        tgl_update_terakhir = logs[-1]['tanggal'] if logs and logs[-1]['tanggal'] else tgl_masuk
        status = detect_status(logs, keluhan)
        kategori = detect_device_category(seri_raw)
        
        teknisi_terlibat = []
        for l in logs:
            for t in l['teknisi'].split('&'):
                t_clean = t.strip()
                if t_clean and t_clean not in teknisi_terlibat:
                    teknisi_terlibat.append(t_clean)
                    
        records.append({
            'id': f"SRV-{idx:03d}",
            'no': idx,
            'nama_pelanggan': nama_pelanggan,
            'warna_unit': warna_unit,
            'pelanggan_lengkap': cust_raw,
            'seri_perangkat': seri_raw if seri_raw else "-",
            'kategori': kategori,
            'keluhan': keluhan if keluhan else "Cek / Servis",
            'tgl_masuk': tgl_masuk,
            'tgl_update': tgl_update_terakhir,
            'link_fb': fb_link,
            'status': status,
            'teknisi_terlibat': teknisi_terlibat,
            'riwayat': logs
        })
        idx += 1
        
    return records

if __name__ == '__main__':
    recs = parse_csv('raw_data.csv')
    print(f"Total parsed records: {len(recs)}")
    with open('data_service.json', 'w', encoding='utf-8') as f:
        json.dump(recs, f, ensure_ascii=False, indent=2)
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write("const TECHNICIAN_COLORS = " + json.dumps(TECHNICIAN_COLORS, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("const INITIAL_SERVICE_DATA = " + json.dumps(recs, ensure_ascii=False, indent=2) + ";\n")
    print("Saved data_service.json and data.js successfully!")
