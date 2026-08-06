// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = navToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Navbar Shadow on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
  }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
let counted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
}

// Intersection Observer for Counter
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('cfName').value;
  const email = document.getElementById('cfEmail').value;
  const phone = document.getElementById('cfPhone').value;
  const interest = document.getElementById('cfInterest').value;
  const to = 'ashok.narayanan@shipaurashipping.com';
  const subject = encodeURIComponent('SHIPAURA Contact: ' + interest + ' - ' + name);
  const body = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Phone: ' + phone + '\n' +
    'Interest: ' + interest
  );
  window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
});

// Quote Request Form
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const equipment = document.getElementById('qfEquipment').value;
    const port = document.getElementById('qfPort').value;
    const contact = document.getElementById('qfContact').value;
    const note = document.getElementById('quoteNote');
    const to = 'ashok.narayanan@shipaurashipping.com';
    const subject = encodeURIComponent('SHIPAURA Quote Request: ' + equipment);
    const body = encodeURIComponent(
      'Equipment: ' + equipment + '\n' +
      'Origin/Destination: ' + port + '\n' +
      'Contact: ' + contact
    );
    window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    note.textContent = 'Opening your email app — your quote request is ready to send.';
    note.className = 'quote-note ok';
  });
}

// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Hero Rotating Languages
const heroLang = document.getElementById('heroLang');
if (heroLang) {
  const phrases = [
    { t: 'Container Solutions', c: '#ffd76a' },
    { t: '集装箱解决方案', c: '#dbb960' },
    { t: 'Soluciones de Contenedores', c: '#e8c984' },
    { t: 'Solutions de Conteneurs', c: '#f0d694' },
    { t: 'Containerlösungen', c: '#cdb06a' },
    { t: 'Containerlösningar', c: '#e5c574' },
    { t: 'Solusi Kontainer', c: '#f5dda2' },
    { t: 'حلول الحاويات', c: '#dcbc6a' },
    { t: 'Soluções em Contêineres', c: '#eacf8f' }
  ];
  let idx = 0;
  heroLang.textContent = phrases[0].t;
  heroLang.style.opacity = '1';
  setInterval(() => {
    heroLang.style.opacity = '0';
    setTimeout(() => {
      idx = (idx + 1) % phrases.length;
      heroLang.textContent = phrases[idx].t;
      heroLang.style.color = phrases[idx].c;
      heroLang.style.opacity = '1';
    }, 600);
  }, 2600);
}

// Flag Selector
document.querySelectorAll('.flag').forEach(flag => {
  flag.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.flag').forEach(f => f.classList.remove('active'));
    flag.classList.add('active');
  });
});
