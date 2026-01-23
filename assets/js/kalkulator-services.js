// Kalkulator Services - All 77 services for calculator
const kalkulatorServices = [
    { id: "ptp", name: "PT Perorangan", price: 999000, category: "usaha", icon: "person", color: "primary" },
    { id: "upgrade-pt", name: "Upgrade ke PT Umum", price: 4500000, category: "usaha", icon: "upgrade", color: "primary" },
    { id: "cv", name: "CV", price: 1999000, category: "usaha", icon: "groups", color: "secondary" },
    { id: "rups-cv", name: "RUPS CV (Perubahan)", price: 1999000, category: "usaha", icon: "edit_document", color: "secondary" },
    { id: "pt-umum", name: "PT Umum", price: 3999000, category: "usaha", icon: "corporate_fare", color: "primary" },
    { id: "cv-to-pt", name: "CV to PT Umum", price: 3999000, category: "usaha", icon: "swap_horiz", color: "secondary" },
    { id: "bundling-pt", name: "Bundling PT dan VO", price: 6250000, category: "usaha", icon: "package", color: "primary" },
    { id: "rups-pt-1", name: "RUPS PT (Pengurus/Oper Saham)", price: 3499000, category: "usaha", icon: "swap_horizontal_circle", color: "primary" },
    { id: "rups-pt-2", name: "RUPS PT (KBLI/Kedudukan/Nama PT/Modal)", price: 4499000, category: "usaha", icon: "edit_note", color: "primary" },
    { id: "pt-pma", name: "PT PMA (PT Asing)", price: 8999000, category: "usaha", icon: "public", color: "primary" },
    { id: "pt-pma-nib", name: "PT PMA + NIB dan PKKPR", price: 5000000, category: "usaha", icon: "add_business", color: "primary" },
    { id: "rups-pma", name: "RUPS PT PMA (PT Asing)", price: 8999000, category: "usaha", icon: "language", color: "primary" },
    { id: "koperasi", name: "Koperasi", price: 7499000, category: "usaha", icon: "handshake", color: "green" },
    { id: "ud", name: "UD (Usaha Dagang)", price: 1999000, category: "usaha", icon: "store", color: "orange" },
    { id: "yayasan", name: "Yayasan", price: 3499000, category: "usaha", icon: "volunteer_activism", color: "blue" },
    { id: "yayasan-ubah", name: "Perubahan Yayasan", price: 4000000, category: "usaha", icon: "edit", color: "blue" },
    { id: "tutup-ptp", name: "Penutupan PT Perorangan", price: 999000, category: "usaha", icon: "close", color: "red" },
    { id: "cabang-pt", name: "Akta Cabang PT", price: 2500000, category: "usaha", icon: "account_tree", color: "primary" },
    { id: "cabang-cv", name: "Akta Cabang CV", price: 1500000, category: "usaha", icon: "account_tree", color: "secondary" },
    { id: "nib-pma", name: "NIB PT PMA", price: 2500000, category: "usaha", icon: "badge", color: "primary" },
    { id: "koran", name: "Pengumuman Koran", price: 800000, category: "usaha", icon: "newspaper", color: "gray" },
    { id: "merek", name: "Merek", price: 1899000, category: "haki", icon: "verified_user", color: "green" },
    { id: "merek-sanggah", name: "Merek (+ Surat Sanggahan)", price: 2999000, category: "haki", icon: "gavel", color: "green" },
    { id: "merek-refund", name: "Merek (+ Sanggahan & Refund 100%)", price: 4500000, category: "haki", icon: "verified", color: "green" },
    { id: "merek-banding", name: "Merek (+ Sanggahan, Banding & Refund)", price: 7500000, category: "haki", icon: "shield", color: "green" },
    { id: "merek-sub", name: "Tambahan Sub Kelas Merek", price: 1500000, category: "haki", icon: "add_circle", color: "green" },
    { id: "pirt", name: "PIRT", price: 399000, category: "sektoral", icon: "restaurant", color: "orange" },
    { id: "halal", name: "Halal - PIRT", price: 999000, category: "sektoral", icon: "verified", color: "red" },
    { id: "nib-badan", name: "NIB Badan (Perusahaan)", price: 500000, category: "usaha", icon: "business_center", color: "purple" },
    { id: "nib-pribadi", name: "NIB Pribadi", price: 300000, category: "usaha", icon: "badge", color: "purple" },
    { id: "bpom", name: "BPOM", price: 9499000, category: "sektoral", icon: "health_and_safety", color: "blue" },
    { id: "sbu", name: "SBU Konstruksi + KTA Asosiasi", price: 2999000, category: "sektoral", icon: "construction", color: "yellow" },
    { id: "ecatalogue", name: "E-Catalogue", price: 2500000, category: "sektoral", icon: "shopping_cart", color: "indigo" },
    { id: "sewa-s1", name: "Sewa Tenaga S1 Teknik Sipil", price: 9000000, category: "sektoral", icon: "engineering", color: "gray" },
    { id: "sewa-sma", name: "Sewa Tenaga SMA", price: 7500000, category: "sektoral", icon: "school", color: "gray" },
    { id: "ujian-s1", name: "Biaya Ujian Tenaga Ahli S1", price: 4000000, category: "sektoral", icon: "quiz", color: "blue" },
    { id: "ujian-sma", name: "Biaya Ujian Tenaga Terampil SMA", price: 2500000, category: "sektoral", icon: "assignment", color: "blue" },
    { id: "iso9001", name: "ISO 9001", price: 12000000, category: "sektoral", icon: "workspace_premium", color: "gold" },
    { id: "iso14001", name: "ISO 14001", price: 12000000, category: "sektoral", icon: "eco", color: "green" },
    { id: "iso45001", name: "ISO 45001", price: 12000000, category: "sektoral", icon: "health_and_safety", color: "red" },
    { id: "tkdn", name: "TKDN", price: 7500000, category: "sektoral", icon: "flag", color: "red" },
    { id: "sni", name: "SNI", price: 15000000, category: "sektoral", icon: "verified", color: "blue" },
    { id: "slf", name: "Sertifikat Laik Fungsi (SLF)", price: 5000000, category: "sektoral", icon: "apartment", color: "gray" },
    { id: "pbg", name: "PBG (Persetujuan Bangunan Gedung)", price: 3500000, category: "sektoral", icon: "domain", color: "brown" },
    { id: "ipal", name: "IPAL", price: 8000000, category: "sektoral", icon: "water_drop", color: "blue" },
    { id: "amdal", name: "AMDAL", price: 25000000, category: "sektoral", icon: "nature", color: "green" },
    { id: "ukl-upl", name: "UKL-UPL", price: 7500000, category: "sektoral", icon: "eco", color: "green" },
    { id: "sppl", name: "SPPL", price: 2500000, category: "sektoral", icon: "description", color: "green" },
    { id: "izin-lingkungan", name: "Izin Lingkungan", price: 10000000, category: "sektoral", icon: "park", color: "green" },
    { id: "iup", name: "Izin Usaha Pertambangan (IUP)", price: 50000000, category: "sektoral", icon: "landscape", color: "brown" },
    { id: "siup-mb", name: "SIUP-MB", price: 5000000, category: "sektoral", icon: "inventory", color: "orange" },
    { id: "api", name: "API (Angka Pengenal Impor)", price: 7500000, category: "sektoral", icon: "local_shipping", color: "blue" },
    { id: "npik", name: "NPIK (Nomor Pokok Importir Khusus)", price: 5000000, category: "sektoral", icon: "import_export", color: "indigo" },
    { id: "kosmetik", name: "Izin Edar Kosmetik", price: 5500000, category: "sektoral", icon: "face", color: "pink" },
    { id: "alkes", name: "Izin Edar Alat Kesehatan", price: 8000000, category: "sektoral", icon: "medical_services", color: "red" },
    { id: "obat-tradisional", name: "Izin Edar Obat Tradisional", price: 6500000, category: "sektoral", icon: "medication", color: "green" },
    { id: "suplemen", name: "Izin Edar Suplemen", price: 5000000, category: "sektoral", icon: "vaccines", color: "blue" },
    { id: "iumk", name: "IUMK (Izin Usaha Mikro Kecil)", price: 500000, category: "usaha", icon: "storefront", color: "orange" },
    { id: "tdp", name: "TDP (Tanda Daftar Perusahaan)", price: 1500000, category: "usaha", icon: "app_registration", color: "gray" },
    { id: "siup", name: "SIUP (Surat Izin Usaha Perdagangan)", price: 2000000, category: "usaha", icon: "receipt_long", color: "blue" },
    { id: "izin-industri", name: "Izin Usaha Industri", price: 3500000, category: "sektoral", icon: "factory", color: "gray" },
    { id: "izin-konstruksi", name: "Izin Usaha Jasa Konstruksi", price: 4000000, category: "sektoral", icon: "construction", color: "yellow" },
    { id: "situ", name: "SITU (Surat Izin Tempat Usaha)", price: 1500000, category: "usaha", icon: "location_on", color: "red" },
    { id: "ho", name: "HO (Izin Gangguan)", price: 2000000, category: "usaha", icon: "warning", color: "orange" },
    { id: "reklame", name: "Izin Reklame", price: 1000000, category: "sektoral", icon: "campaign", color: "purple" },
    { id: "pariwisata", name: "Izin Usaha Pariwisata", price: 5000000, category: "sektoral", icon: "travel_explore", color: "blue" },
    { id: "hotel", name: "Izin Usaha Perhotelan", price: 7500000, category: "sektoral", icon: "hotel", color: "gold" },
    { id: "restoran", name: "Izin Usaha Restoran", price: 3000000, category: "sektoral", icon: "restaurant_menu", color: "red" },
    { id: "kafe", name: "Izin Usaha Kafe", price: 2500000, category: "sektoral", icon: "local_cafe", color: "brown" },
    { id: "retail", name: "Izin Usaha Toko Retail", price: 2000000, category: "usaha", icon: "shopping_bag", color: "green" },
    { id: "apotek", name: "Izin Usaha Apotek", price: 10000000, category: "sektoral", icon: "local_pharmacy", color: "green" },
    { id: "klinik", name: "Izin Usaha Klinik", price: 15000000, category: "sektoral", icon: "local_hospital", color: "red" },
    { id: "lab", name: "Izin Usaha Laboratorium", price: 12000000, category: "sektoral", icon: "science", color: "blue" },
    { id: "pkp", name: "PKP (Pengukuhan Pengusaha Kena Pajak)", price: 1499000, category: "pajak", icon: "receipt_long", color: "blue" },
    { id: "efin", name: "EFIN Pribadi", price: 150000, category: "pajak", icon: "fingerprint", color: "indigo" },
    { id: "coretax-pribadi", name: "CORETax Pribadi", price: 350000, category: "pajak", icon: "account_balance_wallet", color: "indigo" },
    { id: "coretax-badan", name: "CORETax Badan", price: 500000, category: "pajak", icon: "corporate_fare", color: "indigo" }
];

// Render all services to kalkulator grid
function renderKalkulatorServices() {
    const grid = document.getElementById('calculator-grid');
    if (!grid) return;

    const colorMap = {
        primary: 'primary', secondary: '#f3b444', green: 'green-600', red: 'red-600',
        blue: 'blue-600', orange: 'orange-600', purple: 'purple-600', indigo: 'indigo-600',
        yellow: 'yellow-600', gray: 'gray-600', pink: 'pink-600', brown: 'amber-700', gold: 'yellow-700'
    };

    grid.innerHTML = kalkulatorServices.map(service => {
        const color = colorMap[service.color] || 'primary';
        return `
            <div data-id="${service.id}" data-name="${service.name}" data-price="${service.price}" data-category="${service.category}"
                class="calc-card group relative bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-transparent hover:border-primary/50 transition-all cursor-pointer shadow-sm">
                <div class="absolute top-4 right-4">
                    <div class="check-box w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-primary flex items-center justify-center transition-colors">
                        <span class="material-symbols-outlined text-xs text-white group-hover:text-primary font-bold">check</span>
                    </div>
                </div>
                <div class="mb-5 bg-${color}/10 w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                    <span class="material-symbols-outlined text-${color} text-2xl">${service.icon}</span>
                </div>
                <h3 class="text-lg font-black mb-1 dark:text-white">${service.name}</h3>
                <p class="text-sm text-[#57748e] dark:text-gray-400 mb-5 font-medium leading-relaxed">Layanan profesional & terpercaya.</p>
                <div class="flex items-center justify-between mt-auto">
                    <span class="text-${color} font-black text-lg">${window.I18n ? window.I18n.formatCurrency(service.price) : 'Rp ' + service.price.toLocaleString('id-ID')}</span>
                    <span class="text-[10px] uppercase tracking-widest font-black bg-${color}/10 px-2.5 py-1 rounded-lg text-${color}">All-in</span>
                </div>
            </div>
        `;
    }).join('');
}

// Call on page load
if (document.getElementById('calculator-grid')) {
    renderKalkulatorServices();
}
