/**
 * CESA - Computer Engineering Student Association
 * Godavari College of Engineering, Jalgaon (GF's GCOEJ)
 * Core Application Logic: Rendering, Filtering, Lightbox & Contact
 */

let activeGalleryCategory = 'all';
let currentFilteredEvents = [...GALLERY_EVENTS];
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initDualLogos();
  initMemberFilters();
  initGalleryFilters();
  renderMembers('all');
  renderGallery('all');
  initGalleryLightbox();
  initContactForm();
  initMobileDrawer();
  initScrollSpy();
});

/**
 * 1. Dual Logo Loader with Graceful Fallback
 * Tries loading user-provided PNG files first, falls back to institutional SVG emblems
 */
function initDualLogos() {
  const collegeLogos = document.querySelectorAll('.college-logo-target');
  const cesaLogos = document.querySelectorAll('.cesa-logo-target');

  collegeLogos.forEach(img => {
    testImage('assets/images/logos/college-logo.png', (exists) => {
      if (exists) {
        img.src = 'assets/images/logos/college-logo.png';
      } else {
        img.src = 'assets/images/logos/college-logo.svg';
      }
    });
  });

  cesaLogos.forEach(img => {
    testImage('assets/images/logos/cesa-logo.png', (exists) => {
      if (exists) {
        img.src = 'assets/images/logos/cesa-logo.png';
      } else {
        img.src = 'assets/images/logos/cesa-logo.svg';
      }
    });
  });
}

function testImage(url, callback) {
  const img = new Image();
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
  img.src = url;
}

/**
 * 2. Member Filters Initialization
 */
function initMemberFilters() {
  const filterButtons = document.querySelectorAll('.member-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter') || 'all';
      renderMembers(category);
    });
  });
}

/**
 * 3. Render 25 Council Members in the EXACT Specified Hierarchy:
 * Sequence:
 * 1. President
 * 2-4. Vice Presidents (3)
 * 5. Secretary
 * 6. Joint Secretary
 * 7. Chief Advisor
 * 8. Advisor
 * 9. Cultural Secretary
 * 10. Joint Cultural Secretary
 * 11. Treasurer
 * 12. Joint Treasurer
 * 13-14. Discipline Heads (2)
 * 15-25. SY Coordinators (10+ Coordinators)
 */
function renderMembers(filterCategory = 'all') {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = CESA_MEMBERS.filter(member => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'executive') return member.sequence <= 4; // President & 3 VPs
    if (filterCategory === 'secretariat-advisory') return ['secretariat', 'advisory'].includes(member.category);
    if (filterCategory === 'wings-and-heads' || filterCategory === 'cultural-finance-discipline') {
      return ['cultural', 'finance', 'sports', 'discipline'].includes(member.category);
    }
    if (filterCategory === 'sy-coordinators') return member.category === 'sy-coordinator';
    return true;
  });

  filtered.forEach(member => {
    const isPresident = member.sequence === 1;
    const card = document.createElement('article');
    card.className = `member-card ${isPresident ? 'is-president' : ''}`;
    card.setAttribute('data-id', member.id);

    card.innerHTML = `
      <div class="member-seq-pip" title="Hierarchy Position #${member.sequence}">
        #${member.sequence}
      </div>

      <div class="member-avatar-wrap">
        <img 
          src="${member.image}" 
          alt="${member.name} - ${member.designation}" 
          class="member-photo"
          onerror="this.style.display='none'; const fb = this.nextElementSibling; if(fb) fb.style.display='flex';"
        />
        <div class="member-initials-avatar" style="display: none;">
          ${member.initials}
        </div>
      </div>

      <h3 class="member-name">${member.name}</h3>

      <div class="member-designation-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        ${member.designation}
      </div>

      <div class="member-academic-year">${member.year}</div>

      <p class="member-bio">${member.bio}</p>

      <div class="member-socials">
        <a href="mailto:${member.email}" class="member-social-btn" title="Send Email: ${member.email}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
        <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="member-social-btn" title="LinkedIn Profile">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * 4. Gallery Filters Initialization
 */
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-wrap .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGalleryCategory = btn.getAttribute('data-filter') || 'all';
      renderGallery(activeGalleryCategory);
    });
  });
}

/**
 * 5. Render Photo Gallery
 */
function renderGallery(category = 'all') {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = '';

  currentFilteredEvents = GALLERY_EVENTS.filter(event => {
    if (category === 'all') return true;
    return event.category === category;
  });

  currentFilteredEvents.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.setAttribute('data-index', index);
    card.setAttribute('data-id', item.id);

    card.innerHTML = `
      <div class="gallery-media">
        <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy" />
        <span class="gallery-badge">${item.badge}</span>
        <div class="gallery-zoom-overlay">
          <div class="zoom-icon-btn" title="Click to view photo in lightbox">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="gallery-body">
        <div class="gallery-meta">
          <span class="gallery-date">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${item.date}
          </span>
          <span class="gallery-location" title="${item.location}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            ${item.location}
          </span>
        </div>
        <h3 class="gallery-title">${item.title}</h3>
        <p class="gallery-desc">${item.description}</p>
        <div class="gallery-footer">
          <span class="gallery-stats">${item.stats}</span>
          <span class="gallery-view-more">
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openLightbox(index);
    });

    grid.appendChild(card);
  });
}

/**
 * 6. Lightbox Interactive Modal
 */
function initGalleryLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!modal) return;

  closeBtn?.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentFilteredEvents.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredEvents.length) % currentFilteredEvents.length;
    updateLightboxContent(currentFilteredEvents[currentLightboxIndex]);
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentFilteredEvents.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredEvents.length;
    updateLightboxContent(currentFilteredEvents[currentLightboxIndex]);
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevBtn?.click();
    if (e.key === 'ArrowRight') nextBtn?.click();
  });
}

function openLightbox(index) {
  const modal = document.getElementById('lightboxModal');
  if (!modal || currentFilteredEvents.length === 0) return;

  currentLightboxIndex = index;
  const eventItem = currentFilteredEvents[currentLightboxIndex];

  updateLightboxContent(eventItem);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightboxContent(item) {
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');
  const meta = document.getElementById('lightboxMeta');

  if (img) img.src = item.image;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.description;
  if (meta) {
    meta.innerHTML = `
      <span>📅 ${item.date}</span>
      <span>📍 ${item.location}</span>
      <span>🏆 ${item.stats}</span>
    `;
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * 7. Interactive Contact Form with Validation & Feedback Toast
 */
function initContactForm() {
  const form = document.getElementById('cesaContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const subject = form.elements['subject']?.value.trim();
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill in all required fields.', false);
      return;
    }

    showToast(`✓ Thank you ${name}! Your message regarding "${subject || 'General Inquiry'}" has been forwarded to the CESA Council.`, true);
    form.reset();
  });
}

function showToast(message, isSuccess = true) {
  let toast = document.getElementById('contactToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'contactToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.style.borderLeftColor = isSuccess ? '#2E7D32' : '#C62828';
  toast.innerHTML = `
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/**
 * 8. Mobile Drawer Navigation
 */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('drawerClose');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-nav a');

  function open() {
    drawer?.classList.add('open');
    backdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);

  drawerLinks.forEach(link => {
    link.addEventListener('click', close);
  });
}

/**
 * 9. Active ScrollSpy for Header Links
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
