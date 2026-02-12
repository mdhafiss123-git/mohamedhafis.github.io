const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  // Only set section background colors when no explicit theme class is set
  if (!document.body.classList.contains('light-mode') && !document.body.classList.contains('night-mode')) {
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - sectionHeight / 2) {
        current = section.id;
      }
    });

    switch (current) {
      case "home":
        document.body.style.backgroundColor = "#f5f5f5";
        break;
      case "about":
        document.body.style.backgroundColor = "#e3f2fd";
        break;
      case "skills":
        document.body.style.backgroundColor = "#f3e5f5";
        break;
      case "projects":
        document.body.style.backgroundColor = "#fce4ec";
        break;
      case "contact":
        document.body.style.backgroundColor = "#e8f5e9";
        break;
    }
  }
});
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
});

// Skill circles animation
window.addEventListener("scroll", () => {
  const skillSection = document.querySelector("#skills");
  const circles = document.querySelectorAll(".circle");

  if (skillSection) {
    const sectionTop = skillSection.offsetTop;
    const sectionHeight = skillSection.clientHeight;
    const scrollY = window.scrollY;

    if (scrollY >= sectionTop - window.innerHeight / 2 && scrollY < sectionTop + sectionHeight) {
      circles.forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        circle.style.background = `conic-gradient(#00f7ff ${percent * 3.6}deg, #112240 0deg)`;
      });
    }
  }
});

// Modal functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when clicking outside or on close button
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = "auto";
      }
    });
  }
});

// Add event listeners to close buttons
document.addEventListener('DOMContentLoaded', function() {
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = button.closest('.modal');
      modal.style.display = 'none';
      document.body.style.overflow = "auto";
    });
  });
  
  // THEME TOGGLE
  const themeToggle = document.getElementById('theme-toggle');
  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
      document.body.classList.remove('night-mode');
      if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.setAttribute('aria-checked', 'true');
        themeToggle.title = 'Switch to dark mode';
      }
    } else {
      document.body.classList.add('night-mode');
      document.body.classList.remove('light-mode');
      if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.setAttribute('aria-checked', 'false');
        themeToggle.title = 'Switch to light mode';
      }
    }
    // remove any inline background set by scroll handler so CSS classes take effect
    document.body.style.backgroundColor = '';
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  // initialize theme from localStorage or system preference
  // initialize theme button state but do not force a theme so default remains unchanged
  (function initTheme() {
    const stored = (() => { try { return localStorage.getItem('theme'); } catch (e) { return null; } })();
    if (stored === 'light') {
      document.body.classList.add('light-mode');
      document.body.style.backgroundColor = '';
      if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.setAttribute('aria-checked', 'true');
        themeToggle.title = 'Switch to default';
      }
    } else {
      if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.setAttribute('aria-checked', 'false');
        themeToggle.title = 'Enable light theme';
      }
    }
  })();

  if (themeToggle) {
    // support click, pointer and keyboard (Enter/Space)
    const toggleHandler = function(e) {
      const isLight = document.body.classList.contains('light-mode');
      if (isLight) {
        // remove light mode, return to default
        document.body.classList.remove('light-mode');
        document.body.style.backgroundColor = '';
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.setAttribute('aria-checked', 'false');
        themeToggle.title = 'Enable light theme';
        try { localStorage.removeItem('theme'); } catch (err) {}
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('night-mode');
        document.body.style.backgroundColor = '';
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.setAttribute('aria-checked', 'true');
        themeToggle.title = 'Switch to default';
        try { localStorage.setItem('theme', 'light'); } catch (err) {}
      }
    };
    themeToggle.addEventListener('click', toggleHandler);
    themeToggle.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { toggleHandler(e); } });
  }

  // STAR GENERATION for hero (light-mode effect)
  const starsContainer = document.querySelector('.stars');
  if (starsContainer) {
    const starCount = 14;
    for (let i = 0; i < starCount; i++) {
      const s = document.createElement('span');
      s.className = 'star';
      const size = 4 + Math.random() * 6; // 4-10px
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.left = Math.random() * 100 + '%';
      s.style.bottom = -(Math.random() * 20) + 'vh';
      const dur = 6 + Math.random() * 8; // 6-14s
      s.style.animationDuration = dur + 's';
      s.style.animationDelay = -(Math.random() * dur) + 's';
      s.style.opacity = 0.9 * Math.random();
      starsContainer.appendChild(s);
    }
  }
});
