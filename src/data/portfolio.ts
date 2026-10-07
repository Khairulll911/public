// =============================================================
// SEMUA ISI WEBSITE ADA DI FILE INI.
// Ubah teks, tambah pengalaman, atau tambah proyek cukup di sini.
// =============================================================

export type LinkItem = { label: string; url: string };
export type SubSection = { title: string; text: string };
export type Project = {
  label: string;
  title: string;
  description: string;
  details: { term: string; value: string }[];
  subsections: SubSection[];
  links: LinkItem[];
  /** Placeholder gambar/file. null = tidak ada tempat gambar. */
  mediaPlaceholder: string | null;
  /** Foto/screenshot proyek. Isi path gambar di sini nanti. */
  image?: string;
};

// ---------- HERO ----------
export const hero = {
  name: "Khairul Sudrajat",
  role: "Mahasiswa Sistem Informasi",
  summary:
    "Tertarik pada business process, system analysis, dan ERP. Saya belajar membantu perusahaan menjalankan proses bisnis dengan lebih efektif lewat teknologi.",
  photo: "/public/images/facee.webp", // [ISI NANTI] path foto profil, contoh: "/images/foto.jpg"
};

// ---------- TENTANG ----------
export const about = [
  "Saya mahasiswa Sistem Informasi yang tertarik pada cara teknologi membantu perusahaan menjalankan proses bisnis dengan lebih efektif.",
  "Saat ini saya mengembangkan kemampuan analisis proses bisnis, pembuatan flowchart, perancangan sistem, dan penggunaan Figma. Saya juga ingin mendalami Enterprise Resource Planning (ERP) dan bagaimana sistem informasi mendukung kebutuhan bisnis.",
  "Saya terbuka untuk belajar, menerima feedback, dan berkembang lewat pengalaman magang.",
];

// ---------- KEAHLIAN ----------
// UBAH GAMBAR: isi image dengan path gambar Anda, misal "/images/keahlian-erp.jpg"
// (taruh file gambarnya di folder public/images/). Kosongkan ("") untuk placeholder.
export const skills = [
  { name: "Analisis proses bisnis", desc: "memetakan alur kerja dan mencari bagian yang bisa diperbaiki.", image: "/public/images/img.png" },
  { name: "Flowchart dan BPMN", desc: "menggambarkan proses antar departemen supaya mudah dipahami tim.", image: "/public/images/img1.png" },
  { name: "Perancangan sistem", desc: "menerjemahkan kebutuhan bisnis menjadi rancangan sistem.", image: "/public/images/img2.webp" },
  { name: "ERP Odoo", desc: "konfigurasi modul Manufacturing dan Inventory, dan simulasi alur end-to-end.", image: "/public/images/img3.webp" },
  { name: "Analisis bisnis", desc: "analisis pesaing, model pendapatan, struktur biaya, dan break even point.", image: "/public/images/img4.webp" },
  { name: "Analisis data di Excel", desc: "Power Pivot, DAX, Pivot Table, dan dashboard interaktif.", image: "/public/images/img5.png" },
  { name: "UI/UX dan Figma", desc: "persona, customer journey map, dan prototype aplikasi mobile.", image: "/public/images/img6.webp" },
];

// ---------- PENDIDIKAN (terbaru di atas) ----------
export const education = [
  { school: "Binus University", detail: "S1 Sistem Informasi. Mahasiswa aktif, semester 5.", period: "2024 sampai sekarang" },
  { school: "SMK Kesehatan Bhakti Kencana Subang", detail: "Jurusan Keperawatan.", period: "2020 sampai 2023" },
  { school: "SMP NU Terpadu Mulyasari", detail: "", period: "2017 sampai 2020" },
  { school: "SDN Pitaloka", detail: "", period: "2011 sampai 2017" },
  { school: "DTA Nurul Asror", detail: "", period: "2014 sampai 2017" },
];

// ---------- PENGALAMAN (terbaru di atas) ----------
export const experience = [
  { title: "Anggota UKM Futsal Binus University", period: "2024" },
  { title: "Praktik Kerja Lapangan (PKL), asisten perawat di Klinik Mahardika Center Pagaden, selama 4 bulan", period: "2022" },
  { title: "Panitia peringatan 17 Agustus, Desa Kediri, Kecamatan Binong, Kabupaten Subang", period: "2020" },
  { title: "Vokalis Hadroh Nurul Amin", period: "2019 sampai 2020" },
  { title: "Anggota Gema Pramuka", period: "2016 dan 2019" },
  { title: "Vokalis Marawis El Fadumuni", period: "2015 sampai 2018" },
];

// ---------- PROYEK ----------
// Untuk menambah proyek: salin satu objek { ... } di bawah, tempel, lalu ubah isinya.
export const projects: Project[] = [
  {
    label: "Proyek kuliah: Implementasi ERP",
    title: "Implementasi ERP Odoo pada perusahaan manufaktur mobil",
    description:
      "Averon Motor adalah perusahaan fiktif produsen mobil premium kelas Gran Turismo. Proyek ini mensimulasikan penerapan ERP Odoo untuk menyatukan pembelian, produksi, inventori, penjualan, keuangan, dan SDM dalam satu sistem.",
    details: [
      { term: "Peran saya", value: "Membuat bisnis proses dan bertanggung jawab atas konfigurasi modul Manufacturing dan Inventory di Odoo." },
      { term: "Tools", value: "Odoo (versi Education), diagram BPMN." },
      { term: "Hasil", value: "Alur end-to-end berhasil disimulasikan: CRM, Sales Order, pengiriman, invoice, jurnal otomatis, sampai laporan Profit & Loss." },
    ],
    subsections: [
      { title: "Alur yang disimulasikan di Odoo", text: "Opportunity di CRM berstatus Won, lalu Sales Order dikonfirmasi, barang dikirim dari gudang showroom, invoice dibuat dan dibayar, jurnal tercatat otomatis, dan hasilnya terlihat di laporan Profit & Loss serta dashboard." },
      { title: "Tantangan dan pelajaran", text: "Versi Odoo Education membatasi fitur Physical Inventory, sehingga penyesuaian stok fisik tidak bisa disimulasikan penuh. Pembuatan Manufacturing Order otomatis dari demand atau reordering rules juga belum bisa diaktifkan, jadi produksi masih perlu dipicu manual. Dari sini saya belajar membedakan proses yang ideal dengan yang bisa dijalankan sistem, dan mencatat batasannya dengan jelas." },
    ],
    links: [
      { label: "Lihat video demo", url: "https://drive.google.com/drive/folders/1sVFWSBQ8suMhCTKrnLJaZ4pHeTi5qbqz?usp=sharing" },
      { label: "Lihat dokumentasi konfigurasi", url: "https://docs.google.com/document/d/1kyivYmlv1wDH4euTwPqvWdtihZZguVhz1r-WQiUNZLw/edit?hl=ID&tab=t.0#heading=h.65o896jtk3nc" },
      {label:"Lihat Prototype", url:"https://edu-averon-motor.odoo.com/en/vechicle-models"}
    ],
    mediaPlaceholder: "Tempat diagram BPMN [ISI NANTI]",
    image:"/public/images/odoo.webp"
  },
  {
    label: "Proyek kelompok 2: Creative Innovation",
    title: "Hand2Hand: platform lelang barang preloved",
    description:
      "Hand2Hand (#BarangBekasNilaiBerkelas) adalah rancangan platform jual beli barang bekas yang menekankan kepercayaan. Barang dievaluasi lebih dulu, lalu dijual lewat sistem lelang yang transparan. Proyek ini lengkap dari riset pengguna, validasi ke dua expert, model bisnis, sampai prototype aplikasi.",
    details: [
      { term: "Peran saya", value: "Chief Operational Officer (COO) dalam tim lima orang." },
      { term: "Tools", value: "Figma, analisis bisnis (competitor analysis, perceptual map, break even point)." },
      { term: "Hasil", value: "Konsep bisnis, prototype aplikasi di Figma, dan perhitungan bahwa bisnis balik modal di sekitar 195 transaksi per bulan." },
    ],
    subsections: [
      { title: "Masalah dan solusi", text: "Penjual barang bekas sulit menemukan pembeli serius dan tidak tahu harga yang wajar, sedangkan pembeli ragu pada kondisi barang dan takut penipuan. Hand2Hand menjawabnya dengan Evaluator Barang (online lewat foto atau detail lewat pengiriman barang), Titip Lelang, informasi kondisi lengkap dengan sertifikat evaluasi, serta chat dengan staff dan customer service." },
      { title: "Riset dan analisis", text: "Kami menyusun persona, empathy map, perceptual map (kepercayaan lawan kemudahan akses), dan tabel analisis pesaing seperti Carousell, OLX, media sosial, dan platform lelang resmi." },
      { title: "Validasi dan perubahan model bisnis", text: "Setelah masukan dari dua expert (Maret dan Juni 2026), kami mengganti fitur Jual Putus menjadi Evaluator Barang supaya platform tidak menanggung stok dan risiko penurunan nilai barang. Kategori barang dibatasi pada elektronik, fashion branded, serta koleksi dan hobi. Menu utama dirapikan menjadi lima, dan pembeda dari Carousell dipertegas." },
      { title: "Model bisnis", text: "Pendapatan berasal dari fee evaluator, komisi titip lelang (3% sampai 8% sesuai harga barang), sertifikat evaluasi, dan premium listing. Dengan asumsi barang Rp500.000, margin kontribusi sekitar Rp33.500 per transaksi dan biaya tetap Rp6.500.000 per bulan, titik impas dicapai di sekitar 195 transaksi per bulan." },
      { title: "Prototype", text: "Prototype mencakup halaman Home, Sell (ajukan evaluasi dan titip lelang), Buy (lelang dan pasang bid), detail kualitas barang, Chat, dan Profile." },
    ],
    links: [
      { label: "Coba prototype", url: "https://claw-baggy-79062739.figma.site/" },
      { label: "Buka desain di Figma", url: "https://www.figma.com/design/pGPFW2lUkOzMy6a7fM1ktR/Hand2Hand-Design?node-id=0-1" },
    ],
    mediaPlaceholder: "Tempat gambar proyek [ISI NANTI]",
    image:"/public/images/hand2hand.webp"
  },
  {
    label: "Proyek kuliah: Venture",
    title: "TitipYuk: Marketplace Jasa Titip berbasis Website",
    description:
      "TitipYuk adalah ide bisnis website marketplace yang mempertemukan penyedia jasa titip (jastip) dengan customer yang ingin membeli barang dari kota atau negara lain. Penyedia jasa membuat profil, mengunggah jadwal perjalanan, menentukan biaya, dan mencantumkan jenis barang. Customer mencari, membandingkan, lalu memesan lewat website.",
    details: [
      { term: "Peran saya", value: "Pengguna kesulitan mencari lomba yang cocok, harus membuka banyak situs, dan proses pendaftarannya panjang." },
      { term: "Peran saya", value: "Anggota tim pengusul ide bisnis (lima orang)." },
      { term: "Tools", value: "Riset pasar, analisis peluang bisnis" },
      { term: "Hasil", value: "Konsep bisnis lengkap: peluang pasar, riset awal, fitur utama, pembeda dari media sosial, dan rencana jangka panjang." },
    ],
    subsections: [
      { title: "Peluang pasar", text: "Informasi biaya, jadwal, lokasi, dan jenis barang jastip tersebar di Instagram dan WhatsApp, sehingga customer sulit membandingkan penyedia dan penyedia sulit mempromosikan layanannya. TitipYuk memusatkan pencarian, perbandingan, pemesanan, dan review dalam satu website." },
      { title: "Riset dan feedback pengguna", text: "Kami meneliti perilaku konsumen jastip dan penggunaan marketplace digital di Indonesia, termasuk data BPS tentang e-commerce. Temuannya: pengguna tidak hanya mencari harga murah, tetapi juga keamanan, kejelasan informasi, dan penyedia yang dapat dipercaya. Prioritas fitur yang kami tetapkan adalah kepercayaan (verifikasi, rating, review, komplain), transparansi (biaya, harga, jadwal, estimasi), dan kemudahan. Aplikasi mobile dan fitur rumit di tahap awal kami anggap kurang penting." },
      {title:"Model bisnis dan pembeda", text:"Pendapatan berasal dari komisi transaksi, biaya admin, dan akun premium penyedia jastip. Dibanding media sosial, TitipYuk menawarkan pencarian terpusat, profil dan rating penyedia, serta order dan status yang lebih rapi. Rencana jangka panjang bertahap selama empat tahun: MVP website dengan 50 penyedia aktif, ekspansi ke kota besar, marketplace nasional dan internasional, serta escrow, verifikasi, kurir, dan payment gateway."}
    ],
    links: [
      {label:"Link DOCS Project", url:"https://docs.google.com/document/d/1uPef6kRQYJkZvPbi_oEJLZZdxjxPiZNBMxUUCYDIjRU/edit?usp=sharing"},
      {label:"Project TitipYuk (Canva)", url:"https://canva.link/qgcq3241lv6c7b8"}
    ], // [ISI NANTI: tombol unduh PDF atau link Google Drive]
    mediaPlaceholder: "Dokumen proyek PDF [ISI NANTI: tombol unduh atau link Google Drive]",
    image:"/public/images/titipyuk.webp"
  },
  {
    label: "Proyek kelompok: Data Modeling",
    title: "Dashboard analisis penjualan video game di Excel",
    description:
      "Proyek akhir mata kuliah Data Modeling (kelompok 8, tiga anggota). Kami mengolah dataset penjualan video game global menjadi dashboard interaktif yang bisa difilter berdasarkan genre, tahun rilis, dan platform.",
    details: [
      { term: "Masalah", value: "Data penjualan lebih dari 16.000 game belum rapi dan sulit dianalisis langsung." },
      { term: "Tools", value: "Excel: Power Pivot, DAX, Cube Functions, Pivot Table, Slicer, Data Table (What-If)." },
      { term: "Hasil", value: "Dashboard interaktif dengan slicer dan beberapa jenis chart (bar, line, doughnut, scatter)." },
    ],
    subsections: [
      { title: "Yang dikerjakan", text: "Membersihkan data dengan PROPER dan TRIM, lalu membuat kolom Decade dan Sales_Category. Dataset diubah menjadi Excel Table dengan Named Range. Analisis memakai SUMIFS dan AVERAGEIFS, simulasi pertumbuhan penjualan dengan What-If Data Table, serta Data Model di Power Pivot dengan measure DAX seperti Total Global Sales dan Average Critic Score." },
      { title: "Temuan utama", text: "Action adalah genre terlaris dengan sekitar 158.876 ribu unit. Penjualan industri memuncak pada 2008, lalu menurun. North America menguasai hampir 50% pangsa pasar global." },
    ],
    links: [
      { label: "Lihat file proyek di Google Drive", url: "https://drive.google.com/drive/folders/1EbXFXkNbBI3n0BoAks2CtVw2fMSdK5s1?usp=sharing" },
    ],
    mediaPlaceholder: "Tempat screenshot dashboard [ISI NANTI]",
    image:"/public/images/datamodeling.webp"
  },
  {
    label: "Proyek kelompok: artikel ilmiah dan video",
    title: "Memperkuat persatuan melalui toleransi di kalangan siswa",
    description:
      "Artikel ilmiah dan video kelompok tentang bagaimana toleransi di antara siswa dapat memperkuat persatuan, dikaitkan dengan nilai SDGs 16 (perdamaian, keadilan, dan kelembagaan yang kuat).",
    details: [
      { term: "Peran saya", value: "Penulis artikel bersama kelompok (nama saya tercantum sebagai penulis pertama)." },
      { term: "Bentuk karya", value: "Artikel ilmiah dan video." },
    ],
    subsections: [],
    links: [
      { label: "Baca artikel", url: "https://docs.google.com/document/d/1OHmfnDUW42H2J1I9dG8gLy7xOK--XC40/edit?usp=sharing" },
      { label: "Tonton video", url: "https://drive.google.com/file/d/1TiONHEg7KqfoocNp3dG5cLu4xONrMwhX/view?usp=drivesdk" },
    ],
    mediaPlaceholder: "Tempat gambar proyek [ISI NANTI]",
    image:"/public/images/ping.webp"
  },
  {
    label: "Proyek kelompok 11: desain UI di Figma",
    title: "Segarin: aplikasi mobile belanja kebutuhan harian",
    description:
      "Segarin adalah rancangan aplikasi belanja kebutuhan sehari-hari yang diantar ke rumah. Pengguna bisa mencari produk, memesan, membayar, dan melacak pengiriman dalam satu aplikasi. Desain ini saya kerjakan bersama kelompok 11 (lima anggota).",
    details: [
      { term: "Peran saya", value: "Anggota tim desain UI di Figma." },
      { term: "Tools", value: "Figma." },
      { term: "Hasil", value: "Puluhan layar yang mencakup alur lengkap dari daftar akun sampai pesanan selesai dan diberi rating." },
    ],
    subsections: [
      { title: "Alur belanja", text: "Pengguna membuka beranda, mencari produk atau memilih kategori, melihat detail produk, lalu menambahkannya ke keranjang. Di keranjang, pengguna memilih tanggal dan jam antar, alamat, serta metode pembayaran." },
      { title: "Daftar akun dan keranjang", text: "Pendaftaran memakai nomor handphone, kode verifikasi (OTP), dan password. Layar pesanan menampilkan pesanan yang sedang berjalan dan riwayat, dan keranjang menyediakan pilihan jadwal antar." },
      { title: "Pelacakan dan layanan pelanggan", text: "Setelah memesan, pengguna melacak status pesanan dan lokasi pengiriman, melihat detail kurir dan isi paket, lalu memberi rating. Ada juga chat dengan layanan pelanggan, pengelolaan alamat dan profil, serta daftar wishlist untuk produk yang belum tersedia." },
    ],
    links: [
      { label: "Buka desain di Figma", url: "https://www.figma.com/design/7RBlYKVnLJ9f9ckhqqN2xv/Segarin?node-id=0-1" },
    ],
    mediaPlaceholder: "Tempat gambar proyek [ISI NANTI]",
    image:"/public/images/uiux.webp"
  },
  {
    label: "Proyek kelompok: Enterprise Architecture",
    title: "Enterprise Architecture untuk SeaBank",
    description:
      "Kajian Enterprise Architecture pada SeaBank, bank digital di Indonesia. Kami memetakan proses bisnis, budaya organisasi, nilai EA bagi bank, risiko penerapannya, dan langkah implementasinya.",
    details: [
      { term: "Peran saya", value: "Koordinasi pengerjaan proyek bersama tim lima orang." },
      { term: "Tools", value: "Process map, metode implementasi EA6." },
      { term: "Hasil", value: "Presentasi analisis EA SeaBank dari peta proses sampai rencana implementasi empat fase." },
    ],
    subsections: [
      { title: "Peta proses dan budaya organisasi", text: "Proses SeaBank dikelompokkan menjadi proses manajemen, proses inti (deposit, pembiayaan, pembayaran, transfer), dan proses pendukung. Dari sisi budaya, kami menganalisis nilai perusahaan (We Serve, We Adapt, We Run, We Stay Humble, We Commit) dan menyimpulkan budayanya merupakan kombinasi Adhocracy, Market, dan Hierarchy." },
      { title: "Nilai EA dan risikonya", text: "Nilai EA bagi SeaBank kami rumuskan dalam empat hal: penyelarasan strategi, tata kelola dan kepatuhan TI, efisiensi operasional, serta integrasi data dan analitik. Kami juga memetakan risiko seperti penolakan perubahan, arsitektur yang terlalu kompleks, dan biaya implementasi, lengkap dengan langkah mitigasinya." },
      { title: "Penyelarasan strategi dan implementasi", text: "Tujuan strategis SeaBank dihubungkan dengan aktivitas bisnis dan teknologi pendukungnya, misalnya e-KYC untuk akuisisi nasabah dan deteksi fraud berbasis AI. Implementasinya disusun dengan metode EA6 dalam empat fase, mulai dari pembentukan program sampai penggunaan dan pemeliharaan EA." },
    ],
    links: [
      {label:"Link Pengerjaan Project (Canva)", url:"https://canva.link/sjxq8psnwwzb2st"}
    ], // [ISI NANTI: tombol unduh PowerPoint atau link Google Drive]
    mediaPlaceholder: "Presentasi PowerPoint [ISI NANTI: tombol unduh atau link Google Drive]",
    image:"/public/images/seabank.webp"
  },
];

// ---------- KONTAK ----------
export const contact = {
  intro: "Saya sedang mencari kesempatan magang di bidang sistem informasi, analisis bisnis, atau ERP.",
  items: [
    { label: "Email", text: "sudrajatkhairul51@gmail.com", url: "mailto:sudrajatkhairul51@gmail.com" },
    { label: "WhatsApp", text: "0821 3047 0933", url: "https://wa.me/6282130470933" },
    { label: "LinkedIn", text: "Khairul Sudrajat", url: "https://www.linkedin.com/in/khairul-sudrajat-9a77253ba?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  ],
};

// ---------- FOOTER ----------
export const footer = "Khairul Sudrajat, Mahasiswa Sistem Informasi";
