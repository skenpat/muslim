# Modul Qur'an - Fitur & Perubahan

Ini adalah catatan ringkas tentang perubahan besar pada modul Qur'an sesuai permintaan perancangan ulang.

## Fitur Utama yang Ditambahkan

- Kontrol ukuran huruf Arab (4 level)
- Pengatur jarak baris (rapat → luas)
- Tema pembacaan: Terang, Gelap, Sepia (toggle global di header)
- Sistem bookmark ayat, panel bookmark di halaman utama
- Pencarian dalam surah (terjemahan/transliterasi)
- Pencarian surah di halaman indeks
- Statistik pembacaan (jumlah bookmark / surah dibaca)
- Tajwid: toggle, legend, dan highlight sederhana
- Last read card yang menampilkan ayat terakhir dibaca
- Audio built-in dengan pengaturan satu-saat
- Preferensi pengguna persist di localStorage melalui zustand

## Perbaikan Desain & Alur

- Tema global diterapkan pada `<div>` root Layout
- Header kini memiliki tombol tema untuk beralih
- FontSizeController, search bar, dan legend ditempatkan di halaman surah
- Responsif, sticky controls, dan animasi transisi
- Indeks surah dilengkapi search input dan tombol bookmark toggle
- Komponen dan utilitas tersusun rapi di `components/quran` dan `utils`

## Struktur Tambahan
```
contexts/ReadingPreferences.js
components/quran/{FontSizeController,VerseCard,BookmarksPanel,SurahSearchBar,ReadingStats}.jsx
utils/tajweed.js
```

## Tips Penggunaan
1. Gunakan tombol Sun/Moon/Book di header untuk tema
2. Injek `FontSizeController` dan `SearchBar` untuk menyesuaikan bacaan
3. Aktifkan Tajwid jika ingin penyorotan aturan bacaan
4. Bookmark dan pencarian mempercepat navigasi ayat

---
*Dokumentasi ini dibuat otomatis selama perancangan ulang Februari 2026.*
