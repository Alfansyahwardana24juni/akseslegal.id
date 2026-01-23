/**
 * Internationalization (i18n) & Currency Handler
 * Handles English/Indonesian toggling and IDR/USD conversion.
 */

const I18n = {
    currentLang: localStorage.getItem('ali_lang') || 'id', // 'id' or 'en'
    currencyRate: 16000, // 1 USD = 16.000 IDR (Approximate fixed rate)

    // Dictionary for common UI elements
    translations: {
        id: {
            nav_layanan: "Layanan",
            nav_harga: "Harga",
            nav_tentang: "Tentang Kami",
            nav_blog: "Blog",
            nav_dashboard: "Dashboard",
            btn_konsultasi: "Konsultasi Gratis",
            btn_login: "Mulai Sekarang",
            hero_title: "Mulai Bisnis Anda!",
            hero_subtitle: "Mulai Bisnis anda sekarang juga melalui jasa Akseslegal dengan pendirian PT Perorangan. Cepat tanpa ribet.",
            hero_cta: "Mulai Sekarang",
            hero_chat: "Tanya Legal Kami",
            hero_badge: "Solusi Legal #1 Terpercaya",
            footer_desc: "Solusi terdepan untuk legalitas bisnis UMK di Indonesia. Profesional, Transparan, dan Terpercaya.",
            currency_idr: "IDR",
            currency_usd: "USD",
            total_estimasi: "Total Estimasi",
            pesan_sekarang: "Pesan Sekarang",
            hubungi_kami: "Hubungi Kami",
            layanan_populer: "Layanan Populer",
            lihat_semua: "Lihat Semua Layanan",

            // Trust & Stats
            trust_client: "Client yang Puas",
            trust_review: "Google Reviews",
            stat_exp: "Tahun Pengalaman",
            stat_office: "Virtual Office",
            stat_client: "Klien Aktif",
            stat_rating: "Rating Google",

            // Comparison
            comp_title: "Cara Lama vs Cara Kami",
            comp_subtitle: "Buktikan sendiri efisiensi yang akan Anda dapatkan.",
            comp_old_title: "Jasa Konvensional",
            comp_old_1: "Proses 2-4 minggu, penuh dengan tumpukan dokumen fisik.",
            comp_old_2: "Biaya seringkali fluktuatif (ada biaya tambahan di tengah jalan).",
            comp_old_3: "Update status manual melalui telepon atau meeting fisik.",
            comp_new_title: "Akses Legal Indonesia",
            comp_new_1: "Proses Hanya 1 Hari Kerja untuk NIB & Akta.",
            comp_new_2: "Harga Fixed & Transparan sejak awal pendaftaran.",
            comp_new_3: "Dashboard digital & monitoring progress via WhatsApp 24/7.",
            comp_cta: "Hitung Biaya Sekarang",

            // Services Section
            serv_title: "Solusi Legalitas Profesional",
            serv_desc: "Layanan hulu ke hilir untuk membantu bisnis Anda tumbuh secara legal dan aman.",
            serv_link: "Lihat Paket Harga",

            // Service Cards
            card_pt_title: "PT Perorangan",
            card_pt_desc: "Satu orang pendiri, tanggung jawab terbatas. Solusi paling populer untuk pengusaha mandiri.",
            card_cv_title: "Pendirian CV",
            card_cv_desc: "Bermitra dengan kolega Anda secara resmi dengan prosedur yang ringkas dan aman.",
            card_haki_title: "Hak Kekayaan Intelektual",
            card_haki_desc: "Proteksi Merek, Logo, dan Karya Cipta Anda. Aset masa depan bisnis yang wajib dilindungi.",
            investasi: "Investasi",

            // Roadmap Section
            roadmap_title: "Alur Pendirian Legalitas",
            roadmap_subtitle: "Sistem pemantauan progres pendirian legalitas secara real-time.",

            // Roadmap Steps
            roadmap_1_title: "Konsultasi & Analisis",
            roadmap_1_desc: "Tim kami menganalisis kebutuhan bisnis Anda dan memberikan rekomendasi struktur legal terbaik.",
            roadmap_1_detail: "Sistem AI kami membantu mencocokkan jenis usaha dengan regulasi terkini untuk memastikan kepatuhan penuh.",

            roadmap_2_title: "Persiapan Dokumen",
            roadmap_2_desc: "Kami membantu menyiapkan seluruh dokumen yang diperlukan dengan panduan step-by-step.",
            roadmap_2_detail: "Template dokumen otomatis disesuaikan dengan profil bisnis Anda untuk mempercepat proses.",

            roadmap_3_title: "Pengurusan Akta Notaris",
            roadmap_3_desc: "Akta pendirian dibuat oleh notaris bersertifikat dan diproses secara digital.",
            roadmap_3_detail: "Integrasi dengan sistem notaris memungkinkan tracking real-time status pembuatan akta.",

            roadmap_4_title: "SK Kemenkumham",
            roadmap_4_desc: "Pengajuan dan penerbitan Surat Keputusan dari Kementerian Hukum dan HAM.",
            roadmap_4_detail: "Monitoring otomatis status persetujuan dengan notifikasi instant ke dashboard Anda.",

            roadmap_5_title: "NPWP Perusahaan",
            roadmap_5_desc: "Pendaftaran Nomor Pokok Wajib Pajak perusahaan ke Direktorat Jenderal Pajak.",
            roadmap_5_detail: "Sistem terintegrasi dengan DJP untuk proses pendaftaran yang lebih cepat dan akurat.",

            roadmap_6_title: "NIB & Izin Usaha",
            roadmap_6_desc: "Penerbitan Nomor Induk Berusaha melalui sistem OSS RBA.",
            roadmap_6_detail: "Otomasi pengisian form OSS berdasarkan data perusahaan untuk meminimalkan kesalahan.",

            roadmap_7_title: "Verifikasi Final",
            roadmap_7_desc: "Pengecekan kelengkapan dan validitas seluruh dokumen legal perusahaan Anda.",
            roadmap_7_detail: "Quality assurance berlapis untuk memastikan tidak ada dokumen yang terlewat atau salah.",

            roadmap_8_title: "Serah Terima Dokumen",
            roadmap_8_desc: "Penyerahan seluruh dokumen legal dalam format digital dan fisik (opsional).",
            roadmap_8_detail: "Akses selamanya ke dashboard digital untuk menyimpan dan mengunduh dokumen kapan saja.",

            // Bento / Why Choose Us
            bento_title_pre: "Kenapa", bento_title_accent: "Founder Milenial", bento_title_post: "Pilih Kami?",
            bento_subtitle: "Kami paham kecepatan dan transparansi adalah segalanya bagi Anda.",
            bento_1_tag: "Proses 24 Jam", bento_1_title: "Cepat & 100% Digital", bento_1_desc: "Urus PT & CV tanpa harus beranjak dari meja kerja. Semua dokumen diproses via sistem terintegrasi.",
            bento_2_title: "Strategic Partner, Bukan Sekadar Jasa", bento_2_desc: "Tim legal kami adalah konsultan aktif yang mengerti dinamika startup & UMKM modern.", bento_2_badge: "Jaminan Perlindungan Hukum",
            bento_3_title: "Harga Transparan", bento_3_desc: "\"What you see is what you pay.\"", bento_3_fee: "Biaya Tersembunyi",
            bento_4_title: "Secure Privacy Data", bento_4_desc: "Keamanan data Anda adalah prioritas mutlak (absolute) kami. Kami menggunakan enkripsi tingkat tinggi.",

            // Testimonials
            testi_title_pre: "Apa Kata Mereka", testi_title_accent: "Yang Sudah Legal?",
            testi_subtitle: "Lebih dari 5.000 pengusaha telah mempercayakan legalitasnya kepada kami.",

            // FAQ
            faq_title: "Pertanyaan Yang Sering Diajukan",
            faq_subtitle: "Temukan jawaban untuk pertanyaan umum seputar Legalitas Usaha",

            faq_1_q: "Apa perbedaan utama antara PT dan CV?",
            faq_1_a: "PT (Perseroan Terbatas) adalah badan hukum yang memisahkan harta kekayaan pemilik dari perusahaan, sehingga tanggung jawab finansial terbatas hanya pada modal yang disetorkan. Ini cocok untuk usaha skala besar yang berorientasi profit.<br><br>CV adalah persekutuan bisnis yang tidak memiliki badan hukum. Tanggung jawabnya tidak terbatas, artinya harta kekayaan pribadi pemilik dapat ikut dipertanggungjawabkan.",

            faq_2_q: "Berapa lama waktu yang dibutuhkan untuk mendirikan PT?",
            faq_2_a: "Dengan layanan dari Akses Legal Indonesia, proses pendirian PT dapat diselesaikan dengan cepat, biasanya hanya dalam waktu 5-7 hari kerja. Waktu ini sudah termasuk pengurusan Akta Notaris, SK Kemenkumham, NPWP, dan NIB.",

            faq_3_q: "Mengapa saya harus mendaftarkan merek dagang?",
            faq_3_a: "Mendaftarkan merek dagang sangat penting untuk melindungi identitas bisnis Anda dari penggunaan ilegal oleh pihak lain. Dengan sertifikat merek dagang yang sah dari DJKI, Anda memiliki hak eksklusif untuk menggunakan merek tersebut.",

            faq_4_q: "Apa perbedaan mendasar antara Yayasan dan PT?",
            faq_4_a: "Yayasan adalah badan hukum yang didirikan untuk tujuan sosial, kemanusiaan, atau keagamaan, dan tidak memiliki anggota atau pemilik dalam artian profit.<br><br>PT (Perseroan Terbatas) adalah badan usaha yang bertujuan mencari profit.",

            faq_5_q: "Apa itu NIB dan mengapa penting?",
            faq_5_a: "NIB (Nomor Induk Berusaha) adalah identitas pelaku usaha yang diterbitkan oleh sistem OSS. NIB berfungsi sebagai izin usaha, Tanda Daftar Perusahaan (TDP), dan Angka Pengenal Importir (API) sekaligus.",

            faq_6_q: "Apa bedanya NPWP Pribadi dan NPWP Perusahaan?",
            faq_6_a: "NPWP Pribadi adalah Nomor Pokok Wajib Pajak untuk individu (perorangan) yang digunakan untuk membayar pajak penghasilan pribadi.<br><br>NPWP Perusahaan adalah NPWP untuk badan usaha, seperti PT, CV, atau Yayasan.",

            faq_7_q: "Bagaimana cara saya tahu KBLI yang tepat untuk usaha saya?",
            faq_7_a: "Anda dapat mencari KBLI di sistem OSS RBA atau berkonsultasi langsung dengan tim Akses Legal Indonesia. Kami akan membantu mencocokkan jenis usaha Anda dengan KBLI yang paling sesuai.",

            faq_support_text: "Masih punya pertanyaan lain?",
            faq_support_btn: "Hubungi Tim Support Kami",

            // Footer
            footer_links_main: "Layanan Utama", footer_links_company: "Perusahaan", footer_links_contact: "Hubungi Kami",
            footer_copyright: "© 2025 PT Akses Legal Indonesia. Seluruh Hak Cipta Dilindungi."
        },
        en: {
            nav_layanan: "Services",
            nav_harga: "Pricing",
            nav_tentang: "About Us",
            nav_blog: "Blog",
            nav_dashboard: "Dashboard",
            btn_konsultasi: "Free Consultation",
            btn_login: "Start Now",
            hero_title: "Start Your Business!",
            hero_subtitle: "Start your business now through Akseslegal services with Individual PT establishment. Fast and hassle-free.",
            hero_cta: "Start Now",
            hero_chat: "Ask Our Legal Team",
            footer_desc: "Leading solution for MSE business legality in Indonesia. Professional, Transparent, and Trusted.",
            currency_idr: "IDR",
            currency_usd: "USD",
            total_estimasi: "Estimated Total",
            pesan_sekarang: "Order Now",
            hubungi_kami: "Contact Us",
            layanan_populer: "Popular Services",
            lihat_semua: "View All Services",

            // Trust & Stats
            trust_client: "Satisfied Clients",
            trust_review: "Google Reviews",
            stat_exp: "Years Experience",
            stat_office: "Virtual Office",
            stat_client: "Active Clients",
            stat_rating: "Google Rating",

            // Comparison
            comp_title: "The Old Way vs Our Way",
            comp_subtitle: "Prove the efficiency you will get yourself.",
            comp_old_title: "Conventional Services",
            comp_old_1: "2-4 weeks process, full of physical document piles.",
            comp_old_2: "Costs fluctuate (additional hidden fees often appear).",
            comp_old_3: "Manual status updates via phone calls or physical meetings.",
            comp_new_title: "Akses Legal Indonesia",
            comp_new_1: "Process in only 1 Working Day for NIB & Deed.",
            comp_new_2: "Fixed & Transparent Price since registration.",
            comp_new_3: "Digital dashboard & progress monitoring via WhatsApp 24/7.",
            comp_cta: "Calculate Cost Now",

            // Services Section
            serv_title: "Professional Legality Solutions",
            serv_desc: "End-to-end services to help your business grow legally and safely.",
            serv_link: "View Price Packages",

            // Service Cards
            card_pt_title: "Individual PT",
            card_pt_desc: "One founder, limited liability. Most popular solution for independent entrepreneurs.",
            card_cv_title: "CV Establishment",
            card_cv_desc: "Partner with your colleagues officially with concise and safe procedures.",
            card_haki_title: "Intellectual Property Rights",
            card_haki_desc: "Protect your Brand, Logo, and Copyright. Future business assets that must be protected.",
            investasi: "Investment",

            // Roadmap Section
            roadmap_title: "Legality Establishment Flow",
            roadmap_subtitle: "Real-time legality establishment progress monitoring system.",

            // Roadmap Steps
            roadmap_1_title: "Consultation & Analysis",
            roadmap_1_desc: "Our team analyzes your business needs and provides the best legal structure recommendations.",
            roadmap_1_detail: "Our AI system helps match your business type with current regulations to ensure full compliance.",

            roadmap_2_title: "Document Preparation",
            roadmap_2_desc: "We help prepare all required documents with step-by-step guidance.",
            roadmap_2_detail: "Automatic document templates are customized to your business profile to speed up the process.",

            roadmap_3_title: "Notary Deed Processing",
            roadmap_3_desc: "Establishment deed is created by certified notary and processed digitally.",
            roadmap_3_detail: "Integration with notary system enables real-time tracking of deed creation status.",

            roadmap_4_title: "Ministry of Law Decree",
            roadmap_4_desc: "Submission and issuance of Decree from the Ministry of Law and Human Rights.",
            roadmap_4_detail: "Automatic monitoring of approval status with instant notifications to your dashboard.",

            roadmap_5_title: "Company Tax ID",
            roadmap_5_desc: "Registration of company Tax Identification Number with the Directorate General of Taxation.",
            roadmap_5_detail: "Integrated system with DGT for faster and more accurate registration process.",

            roadmap_6_title: "Business License & NIB",
            roadmap_6_desc: "Issuance of Business Identification Number through OSS RBA system.",
            roadmap_6_detail: "Automated OSS form filling based on company data to minimize errors.",

            roadmap_7_title: "Final Verification",
            roadmap_7_desc: "Checking completeness and validity of all your company's legal documents.",
            roadmap_7_detail: "Multi-layered quality assurance to ensure no documents are missed or incorrect.",

            roadmap_8_title: "Document Handover",
            roadmap_8_desc: "Delivery of all legal documents in digital and physical format (optional).",
            roadmap_8_detail: "Lifetime access to digital dashboard to store and download documents anytime.",

            // Bento / Why Choose Us
            bento_title_pre: "Why", bento_title_accent: "Millennial Founders", bento_title_post: "Choose Us?",
            bento_subtitle: "We understand speed and transparency are everything to you.",
            bento_1_tag: "24 Hour Process", bento_1_title: "Fast & 100% Digital", bento_1_desc: "Manage PT & CV without leaving your desk. All documents processed via integrated system.",
            bento_2_title: "Strategic Partner, Not Just a Service", bento_2_desc: "Our legal team are active consultants who understand the dynamics of modern startups and MSMEs.", bento_2_badge: "Legal Protection Guaranteed",
            bento_3_title: "Transparent Pricing", bento_3_desc: "\"What you see is what you pay.\"", bento_3_fee: "Hidden Fees",
            bento_4_title: "Secure Privacy Data", bento_4_desc: "Your data security is our absolute priority. We use high-level encryption.",

            // Testimonials
            testi_title_pre: "What Those Who Have", testi_title_accent: "Gone Legal Say?",
            testi_subtitle: "More than 5,000 entrepreneurs have entrusted their legality to us.",

            // FAQ
            faq_title: "Frequently Asked Questions",
            faq_subtitle: "Find answers to your doubts regarding business legality.",

            faq_1_q: "What is the main difference between PT and CV?",
            faq_1_a: "PT (Limited Liability Company) is a legal entity that separates the owner's assets from the company, so financial liability is limited to the capital paid up. This is suitable for large-scale, profit-oriented businesses.<br><br>CV is a business partnership that is not a legal entity. Liability is unlimited, meaning the owner's personal assets can be held accountable.",

            faq_2_q: "How long does it take to establish a PT?",
            faq_2_a: "With Akses Legal Indonesia, the PT establishment process can be completed quickly, usually within 5-7 working days. This includes the Notary Deed, Kemenkumham Decree, NPWP, and NIB.",

            faq_3_q: "Why should I register a trademark?",
            faq_3_a: "Registering a trademark is crucial to protect your business identity from illegal use by others. With a valid trademark certificate from DJKI, you have the exclusive right to use the brand.",

            faq_4_q: "What is the basic difference between a Foundation (Yayasan) and a PT?",
            faq_4_a: "A Foundation is a legal entity established for social, humanitarian, or religious purposes, and has no members or owners in a profit sense.<br><br>PT (Limited Liability Company) is a business entity aimed at making a profit.",

            faq_5_q: "What is NIB and why is it important?",
            faq_5_a: "NIB (Business Identification Number) is the business identity issued by the OSS system. NIB functions as a business permit, Company Registration Certificate (TDP), and Importer Identification Number (API) all in one.",

            faq_6_q: "What is the difference between Personal NPWP and Corporate NPWP?",
            faq_6_a: "Personal NPWP is for individuals used to pay personal income tax.<br><br>Corporate NPWP is for business entities like PT, CV, or Foundations, used to report and pay taxes related to business activities.",

            faq_7_q: "How do I find the right KBLI for my business?",
            faq_7_a: "You can search for KBLI in the OSS RBA system or consult directly with the Akses Legal Indonesia team. We will help match your business type with the most appropriate KBLI.",

            faq_support_text: "Still have other questions?",
            faq_support_btn: "Contact Our Support Team",

            // Footer
            footer_links_main: "Main Services", footer_links_company: "Company", footer_links_contact: "Contact Us",
            footer_copyright: "© 2025 PT Akses Legal Indonesia. All Rights Reserved."
        }
    },

    // Format Currency
    formatCurrency: function (priceInIdr) {
        if (this.currentLang === 'en') {
            // Convert to USD
            const priceInUsd = priceInIdr / this.currencyRate;
            return `$ ${priceInUsd.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
        } else {
            // Keep IDR
            return `Rp ${priceInIdr.toLocaleString('id-ID')}`;
        }
    },

    // Get Text
    t: function (key) {
        return this.translations[this.currentLang][key] || key;
    },

    // Toggle Language
    toggleLanguage: function () {
        this.currentLang = this.currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('ali_lang', this.currentLang);
        location.reload(); // Reload to apply changes cleanly
    },

    // Initialize
    init: function () {
        console.log('I18n Initialized:', this.currentLang);
        this.renderSwitcher();
        this.translatePage();
    },

    // Render Floating Switcher
    // Render Switcher (Navbar Binding Only)
    renderSwitcher: function () {
        const desktopBtn = document.getElementById('desktop-lang-toggle');
        const mobileBtn = document.getElementById('mobile-lang-toggle');

        // Content: Capsule Design with Emoji
        const content = this.currentLang === 'id'
            ? `<div class="flex items-center gap-2 px-1">
                 <span class="text-xl">🇮🇩</span>
                 <span class="text-xs font-bold font-heading">ID</span>
                 <span class="material-symbols-outlined text-[10px] opacity-50">expand_more</span>
               </div>`
            : `<div class="flex items-center gap-2 px-1">
                 <span class="text-xl">🇺🇸</span>
                 <span class="text-xs font-bold font-heading">EN</span>
                 <span class="material-symbols-outlined text-[10px] opacity-50">expand_more</span>
               </div>`;

        // Bind Desktop
        if (desktopBtn) {
            desktopBtn.innerHTML = content;
            desktopBtn.onclick = () => this.toggleLanguage();
            desktopBtn.classList.remove('hidden');
            desktopBtn.style.display = 'flex';
            // Aesthetic updates
            desktopBtn.className = "hidden md:flex items-center justify-center h-10 px-3 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer min-w-[90px] group";
        }

        // Bind Mobile
        if (mobileBtn) {
            mobileBtn.innerHTML = content;
            mobileBtn.onclick = () => this.toggleLanguage();
            mobileBtn.classList.remove('hidden');
            mobileBtn.style.display = 'flex';
        }
    },

    // Translate Page Elements (if they have data-i18n attribute)
    translatePage: function () {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.dataset.i18n;
            const text = this.t(key);
            if (text) {
                if (el.placeholder) {
                    el.placeholder = text;
                } else {
                    el.innerHTML = text;
                }
            }
        });
    }
};

// Expose to window
window.I18n = I18n;

// Auto Init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => I18n.init());
} else {
    // DOM already ready, run immediately
    I18n.init();
}
