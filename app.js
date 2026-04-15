/* ============================================================
   Baikuntha Rimal Portfolio — app.js
   ============================================================ */

// ===== DATA =====

const JOURNEY_DATA = [
  {
    year: "2024 – Present",
    title: "CEO & Product Lead",
    org: "Addressgraph Nepal",
    desc: "Leading Nepal's most ambitious geo-address infrastructure platform. Building the backbone for logistics, delivery, and civic services across all 77 districts of Nepal. Currently integrating with national postal systems and major e-commerce platforms."
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
    desc: "Founded first tech company at the age of 23. Built Nepal's first localized e-commerce middleware tool and pivoted through multiple iterations — learning product-market fit, fundraising, and team building the hard way."
  },
  {
    year: "2013 – 2015",
    title: "Developer & Product Thinker",
    org: "Freelance & Early Career",
    desc: "Started as a developer obsessed with products. Built client websites, web apps, and early mobile apps — discovering a deep passion for solving problems through technology and design."
  }
];

const PROJECTS_DATA = [
  { id: 1, title: "Addressgraph Nepal", emoji: "📍", category: "tech", desc: "National-scale address infrastructure mapping every location in Nepal with GIS precision.", features: ["GIS Mapping", "API Platform", "Logistics Ready"], year: "2024", status: "live", url: "#", color: "#FF6B35" },
  { id: 2, title: "Kataho", emoji: "🛒", category: "ecommerce", desc: "Nepal's #1 product discovery and price comparison platform. Find the best price for anything.", features: ["Price Compare", "Reviews", "Retailer Network"], year: "2022", status: "live", url: "https://kataho.com", color: "#00D4AA" },
  { id: 3, title: "DeliverNP", emoji: "🚚", category: "tech", desc: "Last-mile logistics SaaS platform connecting couriers with merchants across Nepal's urban centers.", features: ["Route Optimization", "Real-time Tracking", "COD Support"], year: "2021", status: "live", url: "#", color: "#4A9EFF" },
  { id: 4, title: "PaathShala Digital", emoji: "📚", category: "saas", desc: "Digital classroom management and curriculum delivery platform for Nepal's school system.", features: ["LMS", "Video Classes", "Analytics"], year: "2019", status: "acquired", url: "#", color: "#A78BFA" },
  { id: 5, title: "KrishiTech", emoji: "🌾", category: "social", desc: "Smart agriculture advisory app for Nepali farmers — weather, market prices, and crop health alerts.", features: ["Market Prices", "Weather Data", "Crop Guide"], year: "2020", status: "live", url: "#", color: "#34D399" },
  { id: 6, title: "NepalBiz360", emoji: "🏢", category: "saas", desc: "All-in-one business management suite designed for Nepali SMEs — accounting, inventory, and payroll.", features: ["Accounting", "Payroll", "Inventory"], year: "2021", status: "live", url: "#", color: "#F59E0B" },
  { id: 7, title: "DocNepal", emoji: "🏥", category: "social", desc: "Telemedicine bridge connecting rural patients with certified doctors via video consultation.", features: ["Teleconsult", "Prescription", "Specialist Referral"], year: "2019", status: "building", url: "#", color: "#EC4899" },
  { id: 8, title: "GharBhada.com", emoji: "🏠", category: "ecommerce", desc: "Nepal's rental housing marketplace — connecting landlords and tenants with verified listings.", features: ["Verified Listings", "Map Search", "Rent Calculator"], year: "2020", status: "live", url: "#", color: "#6366F1" },
  { id: 9, title: "PaySathi", emoji: "💳", category: "tech", desc: "Unified payment gateway supporting mobile wallets, cards, and bank transfers for Nepali businesses.", features: ["Multi-wallet", "QR Pay", "Settlement API"], year: "2022", status: "building", url: "#", color: "#14B8A6" },
  { id: 10, title: "TravelMandu", emoji: "✈️", category: "ecommerce", desc: "Local experiences and travel booking platform spotlighting Nepal's hidden gems and adventure spots.", features: ["Tour Booking", "Local Guides", "Reviews"], year: "2018", status: "archived", url: "#", color: "#F97316" },
  { id: 11, title: "NepaliNews AI", emoji: "📰", category: "media", desc: "AI-curated Nepali news aggregator with multi-language summaries and sentiment analysis.", features: ["AI Summaries", "Nepali & English", "Sentiment"], year: "2023", status: "building", url: "#", color: "#8B5CF6" },
  { id: 12, title: "JobGarne", emoji: "💼", category: "saas", desc: "Nepal's fastest growing blue-collar and white-collar job matching platform with AI-powered fits.", features: ["AI Matching", "Resume Builder", "Salary Insights"], year: "2023", status: "live", url: "#", color: "#0EA5E9" },
];

const ACHIEVEMENTS_DATA = [
  { icon: "🏆", year: "2024", title: "Top 10 Innovators of Nepal", org: "Digital Nepal Summit" },
  { icon: "🚀", year: "2023", title: "Best Startup Ecosystem Builder", org: "Startup Nepal Awards" },
  { icon: "🌟", year: "2022", title: "30 Under 35 — Nepal Edition", org: "Forbes Nepal" },
  { icon: "📍", year: "2024", title: "GovTech Innovation Grant", org: "Government of Nepal, ICT Ministry" },
  { icon: "💡", year: "2021", title: "Impact Entrepreneur Award", org: "UNDP Nepal" },
  { icon: "🎓", year: "2020", title: "Mentor of the Year", org: "Nepal Startup Hub" },
  { icon: "🌐", year: "2023", title: "Asia Pacific Digital Pioneer", org: "APAC Tech Forum" },
  { icon: "🤝", year: "2022", title: "Community Builder Award", org: "TechMandu Conference" },
];

const TESTIMONIALS_DATA = [
  { name: "Rajan Shrestha", role: "CTO, Daraz Nepal", stars: 5, text: "Baikuntha's vision for digital Nepal is unmatched. Addressgraph is the infrastructure we didn't know we desperately needed. His execution speed and attention to real-world problems sets him apart from every entrepreneur I've worked with." },
  { name: "Priya Sharma", role: "Head of Ventures, Antarprerana Fund", stars: 5, text: "In a decade of funding Nepali startups, Baikuntha stands out for his rare combination of technical depth and business acumen. Kataho is proof that you can build globally competitive products right here in Kathmandu." },
  { name: "Prakash Thapa", role: "Director, FinTech Nepal Association", stars: 5, text: "He doesn't just build products — he builds ecosystems. Each of his ventures creates ripple effects across the Nepali economy. Baikuntha is arguably the most productive entrepreneur this country has produced." },
  { name: "Sunita Karmacharya", role: "Founder, WomenTech Nepal", stars: 5, text: "What makes Baikuntha exceptional is his commitment to inclusive technology. His platforms consistently reach underserved populations — farmers, rural communities, first-time internet users. That's rare ambition." },
  { name: "Abhishek Jha", role: "Tech Lead, NMB Bank", stars: 5, text: "We integrated with three of Baikuntha's API products and each one was production-ready, well-documented, and genuinely innovative. He understands the full stack — from code to customer to country-wide impact." },
];

// ===== STATE =====
let projectsShown = 6;
let currentTestimonial = 0;
let allProjects = [...PROJECTS_DATA];
let filteredProjects = [...PROJECTS_DATA];
let activeFilter = 'all';

// ===== PRELOADER =====
function runPreloader() {
  const fill = document.getElementById('preloaderFill');
  const preloader = document.getElementById('preloader');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('hidden');
        animateHeroBadges();
        initCanvas();
      }, 300);
    }
    fill.style.width = progress + '%';
  }, 100);
}

// ===== CURSOR =====
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursorTrail');
  let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    trail.style.left = trailX + 'px';
    trail.style.top = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  document.querySelectorAll('a, button, .project-card, .venture-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px';
      trail.style.width = '60px'; trail.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px';
      trail.style.width = '36px'; trail.style.height = '36px';
    });
  });
}

// ===== NAVIGATION =====
function initNav() {
  const nav = document.getElementById('nav');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
      backTop.classList.add('visible');
    } else {
      nav.classList.remove('scrolled');
      backTop.classList.remove('visible');
    }
  });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== HERO CANVAS (Particle Network) =====
function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r: Math.random() * 2 + 0.5
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(212,168,83,0.5)';
      ctx.fill();
    });
    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212,168,83,${0.15 * (1 - dist/120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
}

// ===== HERO COUNTER ANIMATION =====
function animateHeroBadges() {
  document.querySelectorAll('.badge-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) clearInterval(interval);
    }, 25);
  });
}

// ===== REVEAL ON SCROLL =====
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

// ===== TIMELINE =====
function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = JOURNEY_DATA.map((item, i) => `
    <div class="timeline-item" style="transition-delay:${i * 0.1}s">
      <div class="timeline-dot"></div>
      <div class="timeline-year">${item.year}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <div class="timeline-org">${item.org}</div>
      <p class="timeline-desc">${item.desc}</p>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

// ===== PROJECTS =====
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const toShow = filteredProjects.slice(0, projectsShown);
  grid.innerHTML = toShow.map((p, i) => `
    <div class="project-card reveal-up" style="--clr:${p.color}; transition-delay:${(i % 3) * 0.08}s"
         data-category="${p.category}" onclick="${p.url !== '#' ? `window.open('${p.url}','_blank')` : ''}">
      <div class="project-card-header">
        <div class="project-emoji">${p.emoji}</div>
        <span class="project-status-badge status-${p.status}">${p.status}</span>
      </div>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      <div class="project-features">
        ${p.features.map(f => `<span class="project-feature-tag">${f}</span>`).join('')}
      </div>
      <div class="project-footer">
        <span class="project-year">📅 ${p.year}</span>
        ${p.url !== '#' ? `<a href="${p.url}" class="project-url" target="_blank" onclick="event.stopPropagation()">Visit ↗</a>` : ''}
      </div>
    </div>
  `).join('');

  // Re-observe new cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.05 });
  document.querySelectorAll('.project-card.reveal-up').forEach(el => observer.observe(el));

  const loadBtn = document.getElementById('loadMoreBtn');
  if (loadBtn) {
    loadBtn.style.display = projectsShown >= filteredProjects.length ? 'none' : 'inline-flex';
  }
}

function loadMoreProjects() {
  projectsShown += 6;
  renderProjects();
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      filteredProjects = activeFilter === 'all' ? [...allProjects] : allProjects.filter(p => p.category === activeFilter);
      projectsShown = 6;
      renderProjects();
    });
  });
}

// ===== ADD PROJECT (Admin) =====
function toggleAdmin() {
  const panel = document.getElementById('adminPanel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function addProject() {
  const title = document.getElementById('projTitle').value.trim();
  const desc = document.getElementById('projDesc').value.trim();
  if (!title || !desc) { alert('Title and description required.'); return; }

  const newProject = {
    id: allProjects.length + 1,
    title,
    emoji: document.getElementById('projEmoji').value || '🔥',
    category: document.getElementById('projCategory').value || 'tech',
    desc,
    features: [
      document.getElementById('projFeature1').value,
      document.getElementById('projFeature2').value,
      document.getElementById('projFeature3').value
    ].filter(Boolean),
    year: document.getElementById('projYear').value || '2025',
    status: document.getElementById('projStatus').value,
    url: document.getElementById('projUrl').value || '#',
    color: document.getElementById('projColor').value || '#D4A853'
  };

  allProjects.unshift(newProject);
  filteredProjects = activeFilter === 'all' ? [...allProjects] : allProjects.filter(p => p.category === activeFilter);
  renderProjects();
  toggleAdmin();

  // Clear form
  ['projTitle','projDesc','projCategory','projFeature1','projFeature2','projFeature3','projYear','projUrl','projEmoji','projColor'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  // Also try PHP save
  saveProjectToServer(newProject);
}

async function saveProjectToServer(project) {
  try {
    await fetch('api/save_project.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
  } catch (e) {
    // PHP backend not available in static mode — that's fine
  }
}

// ===== STATS COUNTERS =====
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const duration = 2000;
      const step = target / (duration / 16);
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = target >= 1000 ? formatNumber(Math.floor(current)) : Math.floor(current);
        if (current >= target) clearInterval(interval);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(el => observer.observe(el));
}

function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

// ===== ACHIEVEMENTS =====
function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  grid.innerHTML = ACHIEVEMENTS_DATA.map((a, i) => `
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
  const dots = document.getElementById('testimonialDots');

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
  const dots = document.querySelectorAll('.testimonial-dot');
  
  const cardWidth = cards[0].offsetWidth + 32; // gap
  const visibleCount = window.innerWidth > 768 ? (window.innerWidth > 1024 ? 3 : 2) : 1;
  const maxScroll = Math.max(0, TESTIMONIALS_DATA.length - visibleCount);
  const scrollIndex = Math.min(index, maxScroll);
  
  track.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
  cards.forEach((c, i) => c.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

// ===== CONTACT FORM =====
function submitForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate / attempt PHP submit
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  fetch('api/contact.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).catch(() => {}).finally(() => {
    setTimeout(() => {
      btn.style.display = 'none';
      success.style.display = 'block';
      form.reset();
    }, 800);
  });
}

// ===== SMOOTH ANCHOR LINKS =====
function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== ACTIVE NAV HIGHLIGHT =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--gold)' : '';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
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
  renderProjects();
  initFilters();
  initCounters();
  renderAchievements();
  renderTestimonials();
});
