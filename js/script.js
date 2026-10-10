/**
 * Sukarobot Academy - Main Script (Fixed Search & Filter)
 */

// ==========================================
// 1. Data Catalogue & Datasets
// ==========================================
const programsData = [
    {
        id: 'beginner-1',
        title: 'BEGINNER 1',
        category: 'robotik',
        categoryName: 'Robotik',
        description: 'Mengenal komponen dasar robot, melatih kreativitas dan logika sederhana melalui perakitan robot awal dengan menggunakan metode fun learning.',
        duration: '16 Pertemuan (4 Bulan)',
        age: '4+ Tahun',
        image: 'images/coverbg1.jpg',
        icon: '🤖',
        level: 'Pemula',
        price: 'Rp 850.000',
        syllabus: ['Pengenalan Komponen', 'Mekanika Dasar', 'Perakitan Sederhana', 'Proyek Kreatif']
    },
    {
        id: 'beginner-2',
        title: 'BEGINNER 2',
        category: 'robotik',
        categoryName: 'Robotik',
        description: 'Belajar merakit robot dengan struktur lebih kompleks, mengasah problem solving sederhana, serta melatih kerja mandiri maupun kolaboratif.',
        duration: '16 Pertemuan (4 Bulan)',
        age: '6+ Tahun',
        image: 'images/coverbg2.jpg',
        icon: '⚙️',
        level: 'Pemula Lanjutan',
        price: 'Rp 900.000',
        syllabus: ['Struktur Kompleks', 'Problem Solving', 'Kerja Tim', 'Mini Kompetisi']
    },
    {
        id: 'basic-1',
        title: 'BASIC 1',
        category: 'robotik',
        categoryName: 'Robotik',
        description: 'Memperkenalkan komponen part robot dasar, belajar perakitan sederhana, serta melatih logika berpikir sistematis dalam menyelesaikan tantangan robotik.',
        duration: '16 Pertemuan (4 Bulan)',
        age: '8+ Tahun',
        image: 'images/coverbs1.jpg',
        icon: '🔧',
        level: 'Menengah Dasar',
        price: 'Rp 1.000.000',
        syllabus: ['Part Elektronika', 'Sistem Motor', 'Konstruksi Kuat', 'Pengujian Robot']
    },
    {
        id: 'basic-2',
        title: 'BASIC 2',
        category: 'robotik',
        categoryName: 'Robotik',
        description: 'Mengembangkan keterampilan merakit dengan struktur lebih kompleks, mempelajari mekanika dasar, serta mengasah kreativitas dalam membuat desain robot.',
        duration: '16 Pertemuan (4 Bulan)',
        age: '10+ Tahun',
        image: 'images/coverbs2.jpg',
        icon: '🛠️',
        level: 'Menengah',
        price: 'Rp 1.100.000',
        syllabus: ['Mekanika Lanjut', 'Desain Kustom', 'Gaya & Beban', 'Proyek Bebas']
    },
    {
        id: 'basic-3',
        title: 'BASIC 3',
        category: 'robotik',
        categoryName: 'Robotik',
        description: 'Mengenal dasar pemrograman robot, menguasai teknik perakitan tingkat lanjut, serta melatih ketelitian dan konsistensi melalui eksperimen robotik.',
        duration: '24 Pertemuan (6 Bulan)',
        age: '12+ Tahun',
        image: 'images/coverbs3.jpg',
        icon: '💻',
        level: 'Menengah Lanjut',
        price: 'Rp 1.350.000',
        syllabus: ['Algoritma Pemrograman', 'Pengontrol Mikrokontroler', 'Kalibrasi', 'Eksperimen Interaktif']
    },
    {
        id: 'intermediate-sensor',
        title: 'INTERMEDIATE (SENSOR)',
        category: 'robotik',
        categoryName: 'Robotik',
        description: 'Mengenal dan menggunakan berbagai sensor elektronika, mengintegrasikannya pada robot, serta mengembangkan logika pemrograman agar robot lebih interaktif dan responsif.',
        duration: '24 Pertemuan (6 Bulan)',
        age: '16+ Tahun',
        image: 'images/coveriterm.jpg',
        icon: '📡',
        level: 'Lanjutan',
        price: 'Rp 1.500.000',
        syllabus: ['Sensor Ultrasonik & IR', 'Logic Feedback', 'Pembacaan Analog/Digital', 'Robot Otonom']
    },
    {
        id: 'advance-iot',
        title: 'ADVANCE (IOT)',
        category: 'robotik',
        categoryName: 'Robotik',
        description: 'Mempelajaran konsep Internet of Things (IoT) dan penerapannya pada robot, merancang sistem robot, serta mengembangkan keterampilan pemrograman untuk inovasi dan kompetisi.',
        duration: '24 Pertemuan (6 Bulan)',
        age: '18+ Tahun',
        image: 'images/coveradv.jpg',
        icon: '🌐',
        level: 'Mahir',
        price: 'Rp 1.800.000',
        syllabus: ['Protokol Komunikasi IoT', 'MQTT & Cloud Data', 'Aplikasi Android Robot', 'Proyek Industri']
    },
    {
        id: 'coding-jr',
        title: 'CODING JR',
        category: 'coding',
        categoryName: 'Coding',
        description: 'Memahami konsep dasar algoritma dan logika pemrograman, serta membuat proyek coding sederhana yang melatih kreativitas dan keterampilan komputasional sejak dini.',
        duration: '16 Pertemuan (4 Bulan)',
        age: '4+ Tahun',
        image: 'images/covercjr.jpg',
        icon: '🧩',
        level: 'Pemula',
        price: 'Rp 800.000',
        syllabus: ['Logika Urutan (Sequence)', 'Pola Berpikir', 'Game Blok Sederhana', 'Visual Storytelling']
    },
    {
        id: 'coding-for-kids',
        title: 'CODING FOR KIDS',
        category: 'coding',
        categoryName: 'Coding',
        description: 'Belajar logika pemrograman dasar melalui aplikasi Scratch dengan cara yang seru dan interaktif, sambil membuat animasi, game, dan proyek kreatif lainnya.',
        duration: '24 Pertemuan (6 Bulan)',
        age: '7+ Tahun',
        image: 'images/covercfk.png',
        icon: '🎮',
        level: 'Pemula Lanjutan',
        price: 'Rp 950.000',
        syllabus: ['Scratch Blocks', 'Variabel & Perulangan', 'Desain Karakter', 'Pembuatan Game 2D']
    }
];

// ==========================================
// 2. Global State Management
// ==========================================
let currentFilter = 'all';
let currentSearch = '';

// ==========================================
// 3. Core Functions (Render & Filter)
// ==========================================

// Render Kartu Katalog dengan Warna Dinamis Sesuai Badge Kategori
function renderPrograms(programs) {
    const container = document.getElementById('program-cards-container');
    if (!container) return;

    if (!programs || programs.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">
                <div class="no-results-icon" style="font-size: 3rem; margin-bottom: 10px;">🔍</div>
                <p>Tidak ada program yang sesuai dengan pencarian Anda.</p>
            </div>`;
        return;
    }

    container.innerHTML = programs.map(item => `
        <div class="program-card card-category-${item.category}">
            <div class="program-img-wrapper">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="program-card-body">
                <span class="program-badge badge-${item.category}">${item.categoryName}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="program-meta">
                    <span class="program-duration category-text-${item.category}">${item.duration}</span>
                    <span class="program-age">Usia ${item.age}</span>
                </div>
                <a href="pages/${item.id}.html" class="btn-card-detail category-btn-${item.category}" style="display: block; text-decoration: none;">Detail Program</a>
            </div>
        </div>
    `).join('');
}

// Filter & Search Handler Utama
function applyFilterAndSearch() {
    const filtered = programsData.filter(item => {
        const cat = item.category.toLowerCase().trim();
        const catName = item.categoryName.toLowerCase().trim();
        const cur = currentFilter.toLowerCase().trim();

        // Match Category
        const matchCategory = cur === 'all' || 
                              cat === cur || 
                              catName === cur;

        // Match Search Query
        const matchSearch = !currentSearch ||
                            item.title.toLowerCase().includes(currentSearch) ||
                            item.description.toLowerCase().includes(currentSearch) ||
                            catName.includes(currentSearch) ||
                            cat.includes(currentSearch);

        return matchCategory && matchSearch;
    });

    renderPrograms(filtered);
}

// Modal View Handler
function openProgramModal(id) {
    const programModal = document.getElementById('program-modal');
    const modalDetailContent = document.getElementById('modal-detail-content');
    const prog = programsData.find(p => p.id === id);

    if (!prog || !programModal || !modalDetailContent) {
        alert('Detail program tidak ditemukan.');
        return;
    }

    modalDetailContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <span style="font-size: 3rem;">${prog.icon || '🎓'}</span>
            <h2 style="margin-top: 10px;">${prog.title}</h2>
            <span class="badge-tag badge-blue">${prog.categoryName}</span>
        </div>
        <p style="color: #64748B; margin-bottom: 20px;">${prog.description}</p>
        <div style="background: #F8FAFC; padding: 15px; border-radius: 12px; margin-bottom: 20px;">
            <p><strong>Target Usia:</strong> ${prog.age}</p>
            <p><strong>Tingkat:</strong> ${prog.level || '-'}</p>
            <p><strong>Durasi:</strong> ${prog.duration}</p>
            <p><strong>Biaya:</strong> <span style="color: #2563EB; font-weight:700;">${prog.price || 'Hubungi Admin'}</span></p>
        </div>
        <h4>Materi Pembelajaran:</h4>
        <ul style="margin-bottom: 25px; padding-left: 20px;">
            ${(prog.syllabus || []).map(item => `<li style="margin-bottom: 6px;">${item}</li>`).join('')}
        </ul>
        <button class="btn btn-primary btn-block" onclick="selectProgramAndRegister('${prog.title}')">Daftar Kelas Ini Now 🚀</button>
    `;

    programModal.classList.add('active');
}

function selectProgramAndRegister(programTitle) {
    const programModal = document.getElementById('program-modal');
    const registerModal = document.getElementById('register-modal');
    const programSelect = document.getElementById('program-select');

    if (programModal) programModal.classList.remove('active');
    if (programSelect) programSelect.value = programTitle;
    if (registerModal) registerModal.classList.add('active');
}

// ==========================================
// 4. DOM Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Load
    renderPrograms(programsData);

    // 2. Element Selectors
    const searchInput = document.getElementById('program-search') || document.querySelector('.search-box-wrapper input');
    
    // 3. Search Event Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            applyFilterAndSearch();
        });
        searchInput.addEventListener('keyup', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            applyFilterAndSearch();
        });
    }

    // 4. Filter Button Event Delegation
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.dataset.filter || btn.getAttribute('data-filter') || 'all';
            applyFilterAndSearch();
        }
    });

    // 5. Navigation & Navbar Handlers
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
});