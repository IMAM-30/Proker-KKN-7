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

<!-- FRIDAY:PROJECT-RESOURCE:START -->
<!-- Maintained for FRIDAY system readers. Keep the fenced JSON valid. -->
```json
{
  "schema": "friday.project.resource.v1",
  "owner": "FRIDAY",
  "audience": "system",
  "purpose": "Machine-readable project context anchor for FRIDAY startup onboarding and resource brain.",
  "createdAt": "2026-08-17T08:22:28.687Z",
  "rules": [
    "Use existing project files and resources when they are present.",
    "Create missing files or resources conservatively when no suitable existing target exists.",
    "When adding or revising content inside an existing file, keep FRIDAY-owned content inside a clearly marked FRIDAY block or section.",
    "Do not overwrite human-authored content outside the FRIDAY marker unless Imam explicitly asks."
  ],
  "notes": [
    {
      "id": "md-20260817070527-jetouz",
      "ts": "2026-08-17T07:05:27.108Z",
      "root": "/Users/imamhudzaifah/Documents/Proker KKN 7",
      "project": "Proker KKN 7",
      "type": "work-note",
      "source": "template",
      "status": "completed",
      "prompt": "jadi kita akan buat tampilan biasa untuk sebuah landing page biasa untuk mengakses semua website proker kkn yang sudah saya buat tapi ini akan di pasang di github pages, berikut linknya : https://kilat-watsor.vercel.app/ https://simpel-watsor.vercel.app/ https://suarakami-watsor.vercel.app/ https://pantaskeren-watsor.vercel.app/ https://pastibisa-watsor.vercel.app/ dan buatkan juga untuk ke halaman admin, untuk ke admin itu cukup kita tambahkan /admin di ujungnya misal https://pastibisa-watsor.vercel.app/admin jadi kamu buatkan saja halaman ada 5 icon untuk kelima website, kemudian buat navbar untuk ke admin untuk 5 icon untuk kelima admin webstie , buat saja dulu nanti saya lihat hasilnya …",
      "summary": "Saya akan bangun landing page GitHub Pages yang ringan dan responsif: 5 kartu ikon untuk website publik, lalu navbar/area Admin berisi 5 akses /admin. Pertama saya cek isi project dan aset yang tersedia, setelah itu saya buat versi awal lengkap lalu jalankan pengecekan lokal.Project ini masih kosong selain catatan konteks, jadi saya akan menyiapkan situs statis tanpa framework agar langsung kompatibel dengan GitHub Pages. Untuk ikon, saya akan memeriksa kelima website dan mengambil identitas visual/aset resminya bila tersedia—bukan membuat ikon generik yang tidak sesuai.Kontrol browser interaktif tidak tersedia di sesi ini, jadi saya lanjutkan pemeriksaan secara read-only melalui halaman pu…",
      "changes": [
        "Saya tetap menuntaskan QA melalui server lokal, respons aset, struktur responsif, dan pengecekan semua endpoint admin; sekaligus saya rapikan ketahanan theme storage untuk kondisi browser yang membatasi penyimpanan.Landing page awal sudah …"
      ],
      "files": [
        "index.html",
        "styles.css",
        "script.js"
      ],
      "verification": [],
      "avoid": [
        "Sekarang saya mulai dari pemeriksaan struktur tautan, lalu membangun UI dua tampilan: Layanan dan Admin.Pemeriksaan awal sudah sengaja gagal karena halaman belum ada—ini memastikan tautan publik/admin menjadi kontrak yang teruji.",
        "Saya masuk tahap QA tampilan: mengecek rendering desktop/mobile, pergantian Layanan–Admin, serta memastikan tidak ada error browser sebelum saya serahkan.QA visual otomatis tidak bisa dijalankan karena mesin browser render belum terpasang,…"
      ],
      "durationMs": 428168
    },
    {
      "id": "md-20260817071429-x5sbk6",
      "ts": "2026-08-17T07:14:29.698Z",
      "root": "/Users/imamhudzaifah/Documents/Proker KKN 7",
      "project": "Proker KKN 7",
      "type": "work-note",
      "source": "prompt",
      "status": "completed",
      "prompt": "'/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_RwaC25/Screenshot 2026-08-17 at 15.13.28.png' ini bagaimana yah kok tidak bisa",
      "summary": "Dari screenshot, pengaturan GitHub Pages sebenarnya sudah tersimpan dan sedang membangun dari branch main folder /root. Saya cek kondisi repository lokal dan commit yang sudah terkirim, karena penyebab paling umum adalah file landing page belum ikut ter-push atau proses Actions belum selesai.Repository dan deploy-nya ternyata sehat: commit 02a6ca7 sudah sama persis antara lokal dan origin/main, dan URL Pages sudah merespons 200. Saya cek status deployment terakhir serta judul halaman untuk memastikan yang tampil benar-benar versi landing page terbaru.Sebenarnya sudah berhasil, Imam. Tombol Save abu-abu karena pengaturan main + /root sudah tersimpan—terlihat dari notifikasi “GitHub Pages sou…",
      "changes": [
        "Saya cek kondisi repository lokal dan commit yang sudah terkirim, karena penyebab paling umum adalah file landing page belum ikut ter-push atau proses Actions belum selesai.Repository dan deploy-nya ternyata sehat: commit 02a6ca7 sudah sam…",
        "Sekarang sudah selesai dan dapat dibuka."
      ],
      "files": [
        "/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_RwaC25/Screenshot 2026-08-17 at 15.13.28.png"
      ],
      "verification": [
        "Saat screenshot diambil, proses build memang masih berjalan beberapa detik."
      ],
      "avoid": [],
      "durationMs": 47075
    },
    {
      "id": "md-20260817073054-p61yja",
      "ts": "2026-08-17T07:30:54.404Z",
      "root": "/Users/imamhudzaifah/Documents/Proker KKN 7",
      "project": "Proker KKN 7",
      "type": "work-note",
      "source": "prompt",
      "status": "completed",
      "prompt": "'/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_uCSqg4/Screenshot 2026-08-17 at 15.28.12.png' proker ke 2 crash, perbaiki",
      "summary": "Saya lihat masalahnya: ikon SIMPEL gagal dimuat sehingga teks alt menimpa fallback “S”. Saya akan ubah strategi ikon menjadi aset lokal di repository GitHub Pages, lalu tambahkan pengujian agar kelima ikon tidak lagi bergantung pada hotlink website lain.Penyebabnya sudah jelas: server SIMPEL mengirim kebijakan Cross-Origin-Resource-Policy: same-origin, jadi gambarnya boleh dibuka langsung tetapi ditolak saat dipasang dari GitHub Pages. Saya akan melokalkan semua ikon—bukan hanya SIMPEL—agar kartu lain tidak mengalami crash serupa di kemudian hari.Tes regresi sekarang gagal tepat pada ketergantungan ikon eksternal, jadi titik masalah sudah terlindungi. Saya lanjut mengganti 10 penggunaan gam…",
      "changes": [
        "Saya akan ubah strategi ikon menjadi aset lokal di repository GitHub Pages, lalu tambahkan pengujian agar kelima ikon tidak lagi bergantung pada hotlink website lain.Penyebabnya sudah jelas: server SIMPEL mengirim kebijakan Cross-Origin-Re…",
        "GitHub Pages belum membuat deployment baru pada pemeriksaan pertama, jadi saya tunggu proses otomatisnya muncul lalu verifikasi ikon SIMPEL langsung dari URL publik—bukan berhenti hanya di status push.Ikon proker ke-2 SIMPEL sudah diperbai…"
      ],
      "files": [
        "/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_uCSqg4/Screenshot 2026-08-17 at 15.28.12.png"
      ],
      "verification": [
        "Verification: 5/5 tes lolos, deployment a374b96 sukses, ikon SIMPEL publik merespons HTTP 200."
      ],
      "avoid": [
        "Saya lihat masalahnya: ikon SIMPEL gagal dimuat sehingga teks alt menimpa fallback “S”.",
        "Saya akan melokalkan semua ikon—bukan hanya SIMPEL—agar kartu lain tidak mengalami crash serupa di kemudian hari.Tes regresi sekarang gagal tepat pada ketergantungan ikon eksternal, jadi titik masalah sudah terlindungi."
      ],
      "durationMs": 148615
    },
    {
      "id": "md-20260817073159-6phm5v",
      "ts": "2026-08-17T07:31:59.415Z",
      "root": "/Users/imamhudzaifah/Documents/Proker KKN 7",
      "project": "Proker KKN 7",
      "type": "work-note",
      "source": "force-work",
      "status": "completed",
      "prompt": "kalau mau iconnya, cari di folder local kkn saya Proker KKN, Proker KKN 2, Proker KKN 3, Proker KKN 4, Proker KKN 5, disana ada semua",
      "summary": "Hasil hash menunjukkan ikon yang sudah terpasang identik dengan aset lokal. KILAT hanya dioptimalkan ke 512×512 agar lebih ringan. Semua 5/5 tes lolos dan repository tetap bersih karena tidak ada perbedaan file baru.",
      "changes": [],
      "files": [],
      "verification": [],
      "avoid": [],
      "durationMs": 64900
    },
    {
      "id": "md-20260817074245-ihyvas",
      "ts": "2026-08-17T07:42:45.936Z",
      "root": "/Users/imamhudzaifah/Documents/Proker KKN 7",
      "project": "Proker KKN 7",
      "type": "work-note",
      "source": "prompt",
      "status": "completed",
      "prompt": "'/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_JAW8D3/Screenshot 2026-08-17 at 15.32.23.png' iconnya masih sedikit salah '/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_TnvQHI/Screenshot 2026-08-17 at 15.32.39.png' coba perbaiki itu",
      "summary": "Saya melihat cacatnya: ada bentuk putih/abu seperti panah kecil di sambungan tengah logo SIMPEL. Ini tampaknya sudah tertanam pada file PNG sumber, bukan masalah CSS. Saya akan memakai panduan pengeditan gambar untuk membersihkan area itu sambil mempertahankan bentuk, warna, transparansi, dan ketajaman ikon lainnya.Konfirmasi visualnya jelas: cacat berada pada pertemuan huruf di tengah—ujung putih/abu menjorok seperti panah. Saya akan mengedit hanya bagian kecil itu; bentuk monogram, rounded square, palet, margin, dan ketebalan garis luar harus tetap identik. Hasilnya saya simpan sebagai versi baru dulu agar ikon lama tidak tertimpa sebelum lolos pemeriksaan.Percobaan generatif pertama saya…",
      "changes": [
        "Hasilnya saya simpan sebagai versi baru dulu agar ikon lama tidak tertimpa sebelum lolos pemeriksaan.Percobaan generatif pertama saya tolak karena terlalu banyak mengubah karakter logo—hasilnya tidak cukup presisi untuk identitas visual.",
        "Jika hasilnya bergeser sedikit pun, saya tidak akan memasangnya.Edit generatif kedua juga saya tolak karena mengubah proporsi monogram dan menambahkan shading.",
        "Saya beralih ke koreksi geometris deterministik pada file asli: hanya area beberapa piksel di sambungan tengah yang akan disentuh, lalu saya bandingkan perubahan piksel sebelum dipasang.Koreksi geometris kedua sudah bersih: panah kecil hil…",
        "Saya akan memasangnya sebagai simpel-fixed.png (ikon lama tetap disimpan untuk rollback), lalu menambahkan regresi yang memastikan landing page selalu memakai versi terkoreksi.Hasil final sudah lolos 6/6 tes dan memakai nama file baru, jad…",
        "Saya juga menemukan logokkn.png baru yang bukan bagian perubahan ini; saya biarkan utuh dan hanya akan commit tiga target perbaikan SIMPEL.Versi baru sudah terlayani dari URL publik dan referensi HTML-nya sudah menunjuk simpel-fixed.png; p…",
        "File final: simpel-fixed.png.",
        "Built-in image editor sempat digunakan dengan prompt “hapus hanya notch/panah kecil dan pertahankan seluruh logo”, tetapi kandidatnya ditolak karena terlalu banyak berubah.",
        "File logokkn.png milik Imam tidak ikut saya ubah atau commit."
      ],
      "files": [
        "/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_JAW8D3/Screenshot 2026-08-17 at 15.32.23.png",
        "/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_TnvQHI/Screenshot 2026-08-17 at 15.32.39.png",
        "logo-kelurahan-symbol.png",
        "app-icon.png",
        "simpel-fixed.png",
        "logokkn.png"
      ],
      "verification": [
        "Verification: 6/6 tes lolos, PNG 512×512 valid, deployment GitHub Pages sukses."
      ],
      "avoid": [],
      "durationMs": 600156
    },
    {
      "id": "md-20260817075210-3lb11x",
      "ts": "2026-08-17T07:52:10.797Z",
      "root": "/Users/imamhudzaifah/Documents/Proker KKN 7",
      "project": "Proker KKN 7",
      "type": "work-note",
      "source": "force-work",
      "status": "completed",
      "prompt": "pasang juga logo KKN saya tapi tidak usah ambil bagian tulisannya",
      "summary": "Hasilnya sudah live di Portal Proker KKN.",
      "changes": [
        "Aset sumber 3500×3500 tetap tidak saya ubah.Crop kedua sudah tepat: simbol lengkap, komposisi persegi, dan tidak ada satu pun bagian tulisan.",
        "Saya sekarang menerbitkan hanya aset simbol dan perubahan tampilan ke GitHub Pages.Deployment sempat masih berjalan dan aset publik belum tersedia pada cek pertama."
      ],
      "files": [
        "logokkn.png",
        "kkn-symbol.png"
      ],
      "verification": [
        "Verification: 7/7 tes lolos, deployment 487b474 sukses, aset publik merespons 200 image/png."
      ],
      "avoid": [],
      "durationMs": 564694
    },
    {
      "id": "md-20260817081452-wy0y28",
      "ts": "2026-08-17T08:14:52.492Z",
      "root": "/Users/imamhudzaifah/Documents/Proker KKN 7",
      "project": "Proker KKN 7",
      "type": "work-note",
      "source": "prompt",
      "status": "completed",
      "prompt": "'/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_RgEZtI/Screenshot 2026-08-17 at 16.03.10.png' '/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_RAzwjx/Screenshot 2026-08-17 at 16.03.20.png' perbaiki kilat dan simpel, semestiunya siluet logonya smaa seperti pastibisa dan pantas keren",
      "summary": "Saya paham: masalahnya bukan sekadar warna. KILAT masih tampil sebagai simbol hijau transparan, sedangkan SIMPEL memakai bentuk monogram yang berbeda; keduanya harus memakai siluet putih yang konsisten seperti ikon PASTI BISA dan PANTAS KEREN. Saya akan bandingkan empat aset tersebut, lalu menyeragamkan bentuk tanpa mengubah warna identitas tiap program.Perbandingan aset mengonfirmasi dua penyebabnya:",
      "changes": [
        "Saya akan bandingkan empat aset tersebut, lalu menyeragamkan bentuk tanpa mengubah warna identitas tiap program.Perbandingan aset mengonfirmasi dua penyebabnya:",
        "SIMPEL memakai versi koreksi sebelumnya yang justru mengubah siluet standar.",
        "Saya sekarang menerapkan perubahan paling kecil pada dua kartu publik dan dua kartu admin.Sekarang bentuknya konsisten:",
        "Saya lanjut commit dan deploy; logokkn.png tetap tidak saya sertakan.KILAT dan SIMPEL sudah diperbaiki dan konsisten dengan PASTI BISA serta PANTAS KEREN."
      ],
      "files": [
        "/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_RgEZtI/Screenshot 2026-08-17 at 16.03.10.png",
        "/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_RAzwjx/Screenshot 2026-08-17 at 16.03.20.png",
        "logokkn.png",
        "kilat.png",
        "simpel.png"
      ],
      "verification": [
        "Verification: 7/7 tes lolos dan deployment 872b031 sukses."
      ],
      "avoid": [],
      "durationMs": 655268
    },
    {
      "id": "md-20260817081910-2c1qzr",
      "ts": "2026-08-17T08:19:10.708Z",
      "root": "/Users/imamhudzaifah/Documents/Proker KKN 7",
      "project": "Proker KKN 7",
      "type": "work-note",
      "source": "prompt",
      "status": "completed",
      "prompt": "'/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_VlWrD7/Screenshot 2026-08-17 at 16.16.12.png' kilat pakai itu ,",
      "summary": "Hasilnya sudah live di Portal Proker KKN.",
      "changes": [
        "Karena aset siluetnya sudah ada, perbaikannya cukup pada styling kartu publik dan admin tanpa mengubah file gambar.Tes sudah merah karena KILAT masih memakai inverse putih–hijau.",
        "Saya terbitkan perubahan styling serta regresinya saja; aset dan logokkn.png tidak disentuh.CSS baru sudah aktif di halaman publik: KILAT kini putih–hijau persis sesuai contoh."
      ],
      "files": [
        "/var/folders/dc/k5lxbylj5v1gjgnlmrwr8r4m0000gn/T/TemporaryItems/NSIRD_screencaptureui_VlWrD7/Screenshot 2026-08-17 at 16.16.12.png",
        "logokkn.png"
      ],
      "verification": [],
      "avoid": [],
      "durationMs": 135773
    }
  ],
  "updatedAt": "2026-08-17T08:22:28.695Z",
  "lastFlush": {
    "at": "2026-08-17T08:22:28.695Z",
    "reason": "shutdown:ctrl-c",
    "count": 8
  }
}
```
<!-- FRIDAY:PROJECT-RESOURCE:END -->
