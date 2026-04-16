/* ============================================================
   Baikuntha Rimal Portfolio v2 — app.js
   Light Theme | Dynamic Products with full fields
   ============================================================ */

// ===== DATA =====

const JOURNEY_DATA = [
  {
    year: "2024 – Present",
    title: "CEO & Product Lead",
    org: "Addressgraph Nepal",
    desc: "Leading Nepal's most ambitious geo-address infrastructure platform. Building the backbone for logistics, delivery, and civic services across all 77 districts of Nepal. Integrating with national postal systems and major e-commerce platforms."
  },
  {
    year: "2022 – Present",
    title: "Product Head",
    org: "Kataho",
    desc: "Architected and launched Kataho — Nepal's go-to product discovery and price comparison platform. Growing user base across mobile and web, serving thousands of daily active users making smarter purchase decisions."
  },
  {
    year: "2020 – 2023",
    title: "Co-Founder & Director",
    org: "Multiple Digital Ventures",
    desc: "Launched and scaled 15+ SaaS and digital products for the Nepali market. Focused on bridging the digital gap for SMEs, agriculture sector, and rural communities through accessible tech solutions."
  },
  {
    year: "2018 – 2020",
    title: "Technology Entrepreneur",
    org: "EdTech & HealthTech Startups",
    desc: "Pioneered digital learning and telemedicine solutions in Nepal during early adoption phase. Worked with government bodies and INGOs to bring digital services to underserved populations."
  },
  {
    year: "2015 – 2018",
    title: "Startup Founder",
    org: "First Ventures",
    desc: "Founded first tech company at 23. Built Nepal's first localized e-commerce middleware and pivoted through multiple iterations — learning product-market fit, fundraising, and team building the hard way."
  },
  {
    year: "2013 – 2015",
    title: "Developer & Product Thinker",
    org: "Freelance & Early Career",
    desc: "Started as a developer obsessed with products. Built client websites, web apps, and early mobile apps — discovering a deep passion for solving problems through technology and design."
  }
];

// UPDATED PRODUCTS DATA — includes name, desc, started, customers, role
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Addressgraph Nepal",
    emoji: "📍",
    category: "tech",
    desc: "National-scale address infrastructure mapping every location in Nepal with GIS precision. The backbone of Nepal's digital delivery economy.",
    started: "2020-03",
    customers: "1M+ addresses",
    role: "Founder & CEO",
    features: ["GIS Mapping", "API Platform", "Logistics Ready"],
    status: "live",
    url: "#",
    color: "#FF6B35"
  },
  {
    id: 2,
    name: "Kataho",
    emoji: "🛒",
    category: "ecommerce",
    desc: "Nepal's #1 product discovery and price comparison platform. Find the best price for anything from any retailer.",
    started: "2022-06",
    customers: "50K+ users",
    role: "Product Head",
    features: ["Price Compare", "Reviews", "Retailer Network"],
    status: "live",
    url: "https://kataho.com",
    color: "#00A86B"
  },
  {
    id: 3,
    name: "DeliverNP",
    emoji: "🚚",
    category: "tech",
    desc: "Last-mile logistics SaaS platform connecting couriers with merchants across Nepal's urban centers with real-time tracking.",
    started: "2021-01",
    customers: "2,400+ merchants",
    role: "Co-Founder",
    features: ["Route Optimization", "Real-time Tracking", "COD Support"],
    status: "live",
    url: "#",
    color: "#4A9EFF"
  },
  {
    id: 4,
    name: "PaathShala Digital",
    emoji: "📚",
    category: "saas",
    desc: "Digital classroom management and curriculum delivery platform built for Nepal's school system. Acquired in 2023.",
    started: "2019-04",
    customers: "300+ schools",
    role: "Founder",
    features: ["LMS", "Video Classes", "Analytics"],
    status: "acquired",
    url: "#",
    color: "#A78BFA"
  },
  {
    id: 5,
    name: "KrishiTech",
    emoji: "🌾",
    category: "social",
    desc: "Smart agriculture advisory app for Nepali farmers — weather alerts, market prices, and crop health monitoring.",
    started: "2020-08",
    customers: "15,000+ farmers",
    role: "Product Lead",
    features: ["Market Prices", "Weather Data", "Crop Guide"],
    status: "live",
    url: "#",
    color: "#34D399"
  },
  {
    id: 6,
    name: "NepalBiz360",
    emoji: "🏢",
    category: "saas",
    desc: "All-in-one business management suite for Nepali SMEs — accounting, inventory, payroll, and tax filing in one dashboard.",
    started: "2021-05",
    customers: "800+ businesses",
    role: "Founder & CEO",
    features: ["Accounting", "Payroll", "Inventory"],
    status: "live",
    url: "#",
    color: "#F59E0B"
  },
  {
    id: 7,
    name: "DocNepal",
    emoji: "🏥",
    category: "social",
    desc: "Telemedicine bridge connecting rural patients with certified doctors via video consultation. Building Nepal's digital health layer.",
    started: "2019-09",
    customers: "5,000+ consultations",
    role: "Co-Founder",
    features: ["Teleconsult", "Prescription", "Specialist Referral"],
    status: "building",
    url: "#",
    color: "#EC4899"
  },
  {
    id: 8,
    name: "GharBhada.com",
    emoji: "🏠",
    category: "ecommerce",
    desc: "Nepal's rental housing marketplace — connecting landlords and tenants with verified listings and map-based search.",
    started: "2020-11",
    customers: "12,000+ listings",
    role: "Founder",
    features: ["Verified Listings", "Map Search", "Rent Calculator"],
    status: "live",
    url: "#",
    color: "#6366F1"
  },
  {
    id: 9,
    name: "PaySathi",
    emoji: "💳",
    category: "tech",
    desc: "Unified payment gateway supporting mobile wallets, cards, and bank transfers for Nepali businesses with instant settlement.",
    started: "2022-02",
    customers: "150+ integrations",
    role: "Co-Founder & CTO",
    features: ["Multi-wallet", "QR Pay", "Settlement API"],
    status: "building",
    url: "#",
    color: "#14B8A6"
  },
  {
    id: 10,
    name: "TravelMandu",
    emoji: "✈️",
    category: "ecommerce",
    desc: "Local experiences and travel booking platform spotlighting Nepal's hidden gems and adventure spots for tourists and locals.",
    started: "2018-06",
    customers: "3,000+ bookings",
    role: "Founder",
    features: ["Tour Booking", "Local Guides", "Reviews"],
    status: "archived",
    url: "#",
    color: "#F97316"
  },
  {
    id: 11,
    name: "NepaliNews AI",
    emoji: "📰",
    category: "media",
    desc: "AI-curated Nepali news aggregator with multi-language summaries, sentiment analysis, and personalized feeds.",
    started: "2023-01",
    customers: "8,000+ readers",
    role: "Founder & Product Lead",
    features: ["AI Summaries", "Nepali & English", "Sentiment"],
    status: "building",
    url: "#",
    color: "#8B5CF6"
  },
  {
    id: 12,
    name: "JobGarne",
    emoji: "💼",
    category: "saas",
    desc: "Nepal's fastest-growing blue-collar and white-collar job matching platform with AI-powered role-candidate fit scoring.",
    started: "2023-03",
    customers: "25,000+ job seekers",
    role: "Founder",
    features: ["AI Matching", "Resume Builder", "Salary Insights"],
    status: "live",
    url: "#",
    color: "#0EA5E9"
  },
];

const ACHIEVEMENTS_DATA = [
  { icon: "🏆", year: "2024", title: "Top 10 Innovators of Nepal",     org: "Digital Nepal Summit" },
  { icon: "🚀", year: "2023", title: "Best Startup Ecosystem Builder", org: "Startup Nepal Awards" },
  { icon: "🌟", year: "2022", title: "30 Under 35 — Nepal Edition",    org: "Forbes Nepal" },
  { icon: "📍", year: "2024", title: "GovTech Innovation Grant",       org: "Government of Nepal, ICT Ministry" },
  { icon: "💡", year: "2021", title: "Impact Entrepreneur Award",      org: "UNDP Nepal" },
  { icon: "🎓", year: "2020", title: "Mentor of the Year",             org: "Nepal Startup Hub" },
  { icon: "🌐", year: "2023", title: "Asia Pacific Digital Pioneer",   org: "APAC Tech Forum" },
  { icon: "🤝", year: "2022", title: "Community Builder Award",        org: "TechMandu Conference" },
];

const TESTIMONIALS_DATA = [
  { name: "Rajan Shrestha",     role: "CTO, Daraz Nepal",                   stars: 5, text: "Baikuntha's vision for digital Nepal is unmatched. Addressgraph is the infrastructure we didn't know we desperately needed. His execution speed and attention to real-world problems sets him apart from every entrepreneur I've worked with." },
  { name: "Priya Sharma",       role: "Head of Ventures, Antarprerana Fund", stars: 5, text: "In a decade of funding Nepali startups, Baikuntha stands out for his rare combination of technical depth and business acumen. Kataho is proof that you can build globally competitive products right here in Kathmandu." },
  { name: "Prakash Thapa",      role: "Director, FinTech Nepal Association", stars: 5, text: "He doesn't just build products — he builds ecosystems. Each of his ventures creates ripple effects across the Nepali economy. Baikuntha is arguably the most productive entrepreneur this country has produced." },
  { name: "Sunita Karmacharya", role: "Founder, WomenTech Nepal",           stars: 5, text: "What makes Baikuntha exceptional is his commitment to inclusive technology. His platforms consistently reach underserved populations — farmers, rural communities, first-time internet users. That's rare ambition." },
  { name: "Abhishek Jha",       role: "Tech Lead, NMB Bank",                stars: 5, text: "We integrated with three of Baikuntha's API products and each one was production-ready, well-documented, and genuinely innovative. He understands the full stack — from code to customer to country-wide impact." },
];

// ===== STATE =====
let productsShown = 6;
let allProducts    = [...PRODUCTS_DATA];
let filteredProds  = [...PRODUCTS_DATA];
let activeFilter   = 'all';
let currentView    = 'grid';
let currentTestimonial = 0;

// ===== PRELOADER =====
function runPreloader() {
  const fill = document.getElementById('preloaderFill');
  const preloader = document.getElementById('preloader');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('hidden');
        animateHeroBadges();
        initCanvas();
        checkPhotoStatus();
      }, 300);
    }
    fill.style.width = progress + '%';
  }, 90);
}

// ===== CHECK PHOTO =====
function checkPhotoStatus() {
  const img = document.getElementById('profilePhoto');
  const hint = document.getElementById('photoHint');
  const initials = document.getElementById('initialsPlaceholder');
  if (img) {
    if (img.complete && img.naturalWidth > 0) {
      // Photo loaded fine
      if (hint) hint.style.display = 'none';
      if (initials) initials.style.display = 'none';
    } else {
      // No photo found — show initials + hint
      img.style.display = 'none';
      if (initials) initials.style.display = 'flex';
      if (hint) hint.style.display = 'flex';
    }
  }
}

// ===== CURSOR =====
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursorTrail');
  let mx = 0, my = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateTrail() {
    tx += (mx - tx) * 0.12;
    ty += (my - ty) * 0.12;
    trail.style.left = tx + 'px';
    trail.style.top  = ty + 'px';
    requestAnimationFrame(animateTrail);
  })();

  document.querySelectorAll('a, button, .product-card, .venture-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '18px'; cursor.style.height = '18px';
      trail.style.width = '52px'; trail.style.height = '52px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '10px'; cursor.style.height = '10px';
      trail.style.width = '32px'; trail.style.height = '32px';
    });
  });
}

// ===== NAV =====
function initNav() {
  const nav    = document.getElementById('nav');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 80;
    nav.classList.toggle('scrolled', scrolled);
    backTop.classList.toggle('visible', scrolled);
  });
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}
function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('open'); }
function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ===== HERO CANVAS =====
function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r:  Math.random() * 1.8 + 0.5
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(184,134,11,0.4)';
      ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(184,134,11,${0.12 * (1 - d / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
}

// ===== HERO BADGE ANIMATION =====
function animateHeroBadges() {
  document.querySelectorAll('.badge-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 55;
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) clearInterval(iv);
    }, 25);
  });
}

// ===== REVEAL ON SCROLL =====
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
}

// ===== TIMELINE =====
function renderTimeline() {
  const el = document.getElementById('timeline');
  el.innerHTML = JOURNEY_DATA.map((item, i) => `
    <div class="timeline-item" style="transition-delay:${i * 0.1}s">
      <div class="timeline-dot"></div>
      <div class="timeline-year">${item.year}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <div class="timeline-org">${item.org}</div>
      <p class="timeline-desc">${item.desc}</p>
    </div>
  `).join('');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.timeline-item').forEach(el => obs.observe(el));
}

// ===== FORMAT HELPERS =====
function formatDate(monthStr) {
  if (!monthStr) return '—';
  const [y, m] = monthStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(m) - 1]} ${y}`;
}

// ===== PRODUCTS RENDER =====
function renderProducts() {
  const toShow = filteredProds.slice(0, productsShown);

  // Grid View
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = toShow.map((p, i) => `
    <div class="product-card reveal-up" style="--clr:${p.color}; transition-delay:${(i % 3) * 0.07}s">
      <div class="product-card-header">
        <div class="product-emoji">${p.emoji || '🔥'}</div>
        <span class="product-status-badge status-${p.status}">${statusLabel(p.status)}</span>
      </div>
      <h4>${p.name}</h4>
      <p class="product-desc">${p.desc}</p>
      <div class="product-meta">
        <div class="product-meta-item">
          <span class="meta-label">📅 Started</span>
          <span class="meta-value">${formatDate(p.started)}</span>
        </div>
        <div class="product-meta-item">
          <span class="meta-label">👥 Customers</span>
          <span class="meta-value">${p.customers || '—'}</span>
        </div>
        <div class="product-meta-item" style="grid-column:1/-1">
          <span class="meta-label">🎯 My Role</span>
          <span class="meta-value">${p.role || '—'}</span>
        </div>
      </div>
      ${p.features && p.features.length ? `
      <div class="product-features">
        ${p.features.map(f => `<span class="product-feature-tag">${f}</span>`).join('')}
      </div>` : ''}
      <div class="product-card-footer">
        <span class="product-year">${p.started ? p.started.split('-')[0] : ''}</span>
        ${p.url && p.url !== '#' ? `<a href="${p.url}" class="product-url" target="_blank">Visit ↗</a>` : ''}
      </div>
    </div>
  `).join('');

  // Table View
  const tbody = document.getElementById('productsTableBody');
  tbody.innerHTML = toShow.map((p, i) => `
    <tr>
      <td class="table-num">${i + 1}</td>
      <td><div class="table-product-name"><span>${p.emoji || '🔥'}</span>${p.name}</div></td>
      <td class="table-desc">${p.desc}</td>
      <td style="white-space:nowrap">${formatDate(p.started)}</td>
      <td class="table-customers">${p.customers || '—'}</td>
      <td class="table-role">${p.role || '—'}</td>
      <td><span class="product-status-badge status-${p.status}">${statusLabel(p.status)}</span></td>
      <td>${p.url && p.url !== '#' ? `<a href="${p.url}" class="table-link" target="_blank">↗</a>` : '—'}</td>
    </tr>
  `).join('');

  // Re-observe new reveal cards
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05 });
  document.querySelectorAll('.product-card.reveal-up').forEach(el => obs.observe(el));

  const loadBtn = document.getElementById('loadMoreBtn');
  const loadWrap = document.getElementById('loadMoreWrap');
  if (loadBtn) {
    const hasMore = productsShown < filteredProds.length;
    loadWrap.style.display = hasMore ? 'block' : 'none';
    loadBtn.textContent = `Load More Products (${filteredProds.length - productsShown} remaining)`;
  }
}

function statusLabel(s) {
  return { live: '● Live', building: '◎ Building', acquired: '◆ Acquired', archived: '○ Archived' }[s] || s;
}

function loadMoreProducts() {
  productsShown += 6;
  renderProducts();
}

function switchView(view) {
  currentView = view;
  document.getElementById('productsGrid').style.display       = view === 'grid' ? 'grid' : 'none';
  document.getElementById('productsTableWrap').style.display  = view === 'list' ? 'block' : 'none';
  document.getElementById('btnViewGrid').classList.toggle('active', view === 'grid');
  document.getElementById('btnViewList').classList.toggle('active', view === 'list');
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter  = btn.dataset.filter;
      filteredProds = activeFilter === 'all' ? [...allProducts] : allProducts.filter(p => p.category === activeFilter);
      productsShown = 6;
      renderProducts();
    });
  });
}

// ===== ADD PRODUCT =====
function toggleAdmin() {
  const panel = document.getElementById('adminPanel');
  const isHidden = panel.style.display === 'none' || panel.style.display === '';
  panel.style.display = isHidden ? 'block' : 'none';
  if (isHidden) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addProduct() {
  const name = document.getElementById('prodName').value.trim();
  const desc = document.getElementById('prodDesc').value.trim();
  if (!name || !desc) { alert('Product Name and Description are required.'); return; }

  const started   = document.getElementById('prodStarted').value;
  const customers = document.getElementById('prodCustomers').value.trim();
  const role      = document.getElementById('prodRole').value.trim();

  const newProd = {
    id:        Date.now(),
    name,
    emoji:     document.getElementById('prodEmoji').value.trim() || '🚀',
    category:  document.getElementById('prodCategory').value,
    desc,
    started,
    customers,
    role,
    features: [
      document.getElementById('prodF1').value.trim(),
      document.getElementById('prodF2').value.trim(),
      document.getElementById('prodF3').value.trim(),
    ].filter(Boolean),
    status: document.getElementById('prodStatus').value,
    url:    document.getElementById('prodUrl').value.trim() || '#',
    color:  '#' + Math.floor(Math.random() * 0xAAAAAA + 0x555555).toString(16),
  };

  allProducts.unshift(newProd);
  filteredProds = activeFilter === 'all' ? [...allProducts] : allProducts.filter(p => p.category === activeFilter);
  productsShown = Math.max(productsShown, 1); // show at least the new one
  renderProducts();
  toggleAdmin();
  clearProductForm();
  saveProductToServer(newProd);

  // Flash success
  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:80px;right:24px;background:#007A5E;color:#fff;padding:1rem 1.5rem;border-radius:10px;z-index:9999;font-size:0.9rem;box-shadow:0 4px 20px rgba(0,0,0,0.2)';
  msg.textContent = `✅ "${newProd.name}" added successfully!`;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

function clearProductForm() {
  ['prodName','prodDesc','prodStarted','prodCustomers','prodRole','prodUrl','prodEmoji','prodF1','prodF2','prodF3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const cat = document.getElementById('prodCategory');
  if (cat) cat.selectedIndex = 0;
  const st = document.getElementById('prodStatus');
  if (st) st.selectedIndex = 0;
}

async function saveProductToServer(product) {
  try {
    await fetch('api/save_product.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
  } catch (e) { /* PHP not available in static mode — that's fine */ }
}

// ===== STATS COUNTERS =====
function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.target);
      let current  = 0;
      const step   = target / (2000 / 16);
      const iv     = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = target >= 1000 ? fmtNum(Math.floor(current)) : Math.floor(current);
        if (current >= target) clearInterval(iv);
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(el => obs.observe(el));
}
function fmtNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000)    return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

// ===== ACHIEVEMENTS =====
function renderAchievements() {
  document.getElementById('achievementsGrid').innerHTML = ACHIEVEMENTS_DATA.map((a, i) => `
    <div class="achievement-card reveal-up" style="transition-delay:${(i % 4) * 0.1}s">
      <div class="achievement-icon">${a.icon}</div>
      <div>
        <div class="achievement-year">${a.year}</div>
        <div class="achievement-title">${a.title}</div>
        <div class="achievement-org">${a.org}</div>
      </div>
    </div>
  `).join('');
}

// ===== TESTIMONIALS =====
function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dots  = document.getElementById('testimonialDots');

  track.innerHTML = TESTIMONIALS_DATA.map((t, i) => `
    <div class="testimonial-card ${i === 0 ? 'active' : ''}">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');

  dots.innerHTML = TESTIMONIALS_DATA.map((_, i) => `
    <div class="testimonial-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})"></div>
  `).join('');

  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % TESTIMONIALS_DATA.length;
    goToTestimonial(currentTestimonial);
  }, 5000);
}

function goToTestimonial(index) {
  currentTestimonial = index;
  const track = document.getElementById('testimonialsTrack');
  const cards = track.querySelectorAll('.testimonial-card');
  const dots  = document.querySelectorAll('.testimonial-dot');

  const gap        = 24; // 1.5rem
  const cardWidth  = cards[0]?.offsetWidth + gap || 0;
  const visible    = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
  const maxScroll  = Math.max(0, TESTIMONIALS_DATA.length - visible);
  const scrollIdx  = Math.min(index, maxScroll);

  track.style.transform = `translateX(-${scrollIdx * cardWidth}px)`;
  cards.forEach((c, i) => c.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

// ===== CONTACT FORM =====
function submitForm(e) {
  e.preventDefault();
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  btn.innerHTML = '<span>Sending...</span>';
  btn.disabled  = true;

  const data = Object.fromEntries(new FormData(e.target));
  fetch('api/contact.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).catch(() => {}).finally(() => {
    setTimeout(() => {
      btn.style.display = 'none';
      success.style.display = 'block';
      e.target.reset();
    }, 800);
  });
}

// ===== SMOOTH LINKS =====
function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

// ===== ACTIVE NAV HIGHLIGHT =====
function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--gold)' : '';
        });
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => obs.observe(s));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  runPreloader();
  initCursor();
  initNav();
  initReveal();
  initSmoothLinks();
  initActiveNav();
  renderTimeline();
  renderProducts();
  initFilters();
  initCounters();
  renderAchievements();
  renderTestimonials();
});
