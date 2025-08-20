# Belajar LinkedIn - Landing Page Interaktif 🚀

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Proyek ini dibangun oleh aplikasi React yang modern, dinamis, dan sepenuhnya responsif menggunakan Vite dan Tailwind

---

## ✨ Fitur Utama

-   **Desain Responsif**: Tampilan yang dioptimalkan untuk semua ukuran layar, dari mobile hingga desktop.
-   **Arsitektur Berbasis Komponen**: Kode dipecah menjadi komponen React yang logis dan dapat digunakan kembali (`Header`, `FAQ`, `Contact`, dll.).
-   **Navigasi Sticky & Scroll Spy**: Navbar tetap terlihat saat di-scroll dan secara otomatis menyorot link dari section yang sedang aktif di layar.
-   **Menu Hamburger Fungsional**: Menu navigasi yang berfungsi penuh di perangkat mobile.
-   **Animasi Saat Scroll**: Efek *fade-in* yang halus pada setiap section menggunakan pustaka `AOS` (Animate on Scroll).
-   **Accordion Interaktif**: Komponen FAQ yang dapat dibuka-tutup dengan animasi yang dinamis dan aksesibel.
-   **Formulir Kontak**: Formulir kontak interaktif dengan state management dasar.

---

## 🛠️ Teknologi yang Digunakan

-   **Vite**: Sebagai *build tool* dan *development server* yang super cepat.
-   **React.js**: Untuk membangun antarmuka pengguna yang interaktif dan berbasis komponen.
-   **Tailwind CSS**: Untuk *styling* yang cepat dan efisien langsung di dalam JSX.
-   **React Icons**: Untuk ikon yang bersih dan konsisten di seluruh aplikasi.
-   **AOS (Animate on Scroll)**: Untuk memberikan efek animasi saat pengguna melakukan scroll.

---

## 🚀 Memulai Proyek Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di mesin lokal Anda.

### Prasyarat

Pastikan Anda telah menginstal:
-   Node.js (versi 16 atau lebih tinggi)
-   npm atau yarn

### Instalasi & Menjalankan

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/nama-anda/belajar-linkedin-react.git](https://github.com/nama-anda/belajar-linkedin-react.git)
    ```

2.  **Masuk ke direktori proyek:**
    ```bash
    cd belajar-linkedin-react
    ```

3.  **Install semua *dependency* yang dibutuhkan:**
    ```bash
    npm install
    ```

4.  **Jalankan *development server*:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan dan bisa diakses di `http://localhost:5173` (atau port lain yang tersedia).

5.  **Untuk membangun versi produksi:**
    ```bash
    npm run build
    ```
    Hasil build akan tersedia di dalam folder `dist/`.

---

## 📁 Struktur Proyek
```bash
belajar-linkedin-react/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Classes.jsx
│   │   ├── Contact.jsx
│   │   ├── Curriculum.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

---
