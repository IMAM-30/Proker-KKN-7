# Portal Proker KKN Watang Soreang

Landing page statis untuk mengakses lima layanan digital KKN dan dashboard admin masing-masing.

## Menjalankan secara lokal

```bash
python3 -m http.server 4177
```

Kemudian buka `http://127.0.0.1:4177`.

## GitHub Pages

Situs tidak memerlukan proses build. Pilih branch utama dan folder root pada **Settings → Pages → Deploy from a branch**.

## Pemeriksaan

```bash
node --test tests/landing.test.mjs
node --check script.js
```
