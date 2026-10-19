import csv
import json
import os
import webbrowser
from http.server import SimpleHTTPRequestHandler, HTTPServer
from parse_data import TECHNICIAN_COLORS, parse_csv

PORT = 8000
DATA_JSON_FILE = "data_service.json"
DATA_JS_FILE = "data.js"
RAW_CSV_FILE = "raw_data.csv"


def save_all_formats(records, tech_list=None):
    # 1. Simpan ke data_service.json
    with open(DATA_JSON_FILE, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)

    # 2. Simpan ke data.js (agar langsung siap di-push ke GitHub Pages)
    with open(DATA_JS_FILE, "w", encoding="utf-8") as f:
        f.write("const TECHNICIAN_COLORS = " + json.dumps(TECHNICIAN_COLORS, ensure_ascii=False, indent=2) + ";\n\n")
        if tech_list:
            f.write("const INITIAL_TECH_LIST = " + json.dumps(tech_list, ensure_ascii=False, indent=2) + ";\n\n")
        f.write("const INITIAL_SERVICE_DATA = " + json.dumps(records, ensure_ascii=False, indent=2) + ";\n")

    # 3. Simpan kembali ke format Excel 3-baris di raw_data.csv
    with open(RAW_CSV_FILE, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        for item in records:
            logs = item.get("riwayat", [])
            r1 = ["Nama user", "Seri Laptop", "Keluhann", "Link Foto FB"] + [l.get("teknisi", "") for l in logs]
            r2 = ["(warna)", "Lengkap", "(jam dibawa)", item.get("tgl_masuk", "")] + [l.get("tanggal", "") for l in logs]
            r3 = [
                item.get("pelanggan_lengkap") or f"{item.get('nama_pelanggan', '')} ({item.get('warna_unit', '')})",
                item.get("seri_perangkat", ""),
                item.get("keluhan", ""),
                item.get("link_fb", "")
            ] + [l.get("catatan", "") for l in logs]
            writer.writerow(r1)
            writer.writerow(r2)
            writer.writerow(r3)
            writer.writerow([""] * 20)


class ServiceRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        if self.path.startswith("/api/data"):
            if not os.path.exists(DATA_JSON_FILE):
                recs = parse_csv(RAW_CSV_FILE)
                save_all_formats(recs)
            with open(DATA_JSON_FILE, "r", encoding="utf-8") as f:
                data_bytes = f.read().encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(data_bytes)
            return
        return super().do_GET()

    def do_POST(self):
        if self.path.startswith("/api/save"):
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length).decode("utf-8")
            payload = json.loads(body)
            if isinstance(payload, dict) and "records" in payload:
                records = payload.get("records", [])
                tech_list = payload.get("techList")
            else:
                records = payload
                tech_list = None
            save_all_formats(records, tech_list)
            resp = json.dumps({"status": "ok", "count": len(records)}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(resp)
            return
        self.send_response(404)
        self.end_headers()


if __name__ == "__main__":
    if not os.path.exists(DATA_JSON_FILE):
        recs = parse_csv(RAW_CSV_FILE)
        save_all_formats(recs)

    url = f"http://localhost:{PORT}"
    print("=" * 65)
    print("  SISTEM TRACER & AKTIVITAS HARIAN TEKNISI TOKO KOMPUTER (PYTHON)")
    print("=" * 65)
    print(f"  Server berjalan di : {url}")
    print("  Tekan Ctrl+C untuk menghentikan server.")
    print("=" * 65)
    try:
        webbrowser.open(url)
    except Exception:
        pass
    server = HTTPServer(("0.0.0.0", PORT), ServiceRequestHandler)
    server.serve_forever()
