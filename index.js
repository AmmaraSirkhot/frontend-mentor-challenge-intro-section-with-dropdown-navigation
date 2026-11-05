// 1. Mobile Drawer Toggle Logic
const menuBtn = document.getElementById('menu-toggle-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('menu-area');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// 2. Unified Dropdown Toggle Logic (Independent on mobile, accordion on desktop)
const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.stopPropagation();
    
    const parentLi = this.parentElement;
    const isAlreadyOpen = parentLi.classList.contains('open');
    const isMobile = window.innerWidth < 768;

    // On desktop, close all other open dropdowns first (accordion behavior)
    if (!isMobile) {
      closeAllDropdowns();
    }

    // If the clicked dropdown was already open, close it. Otherwise, open it.
    if (isAlreadyOpen) {
      parentLi.classList.remove('open');
      this.setAttribute('aria-expanded', 'false');
    } else {
      parentLi.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

// Helper function to close all dropdown menus
function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.classList.remove('open');
    const btn = item.querySelector('.dropdown-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
}

// 3. Global click listener to close menus when clicking outside
window.addEventListener('click', (event) => {
  // Close dropdowns if clicking outside
  if (!event.target.closest('.dropdown-item')) {
    closeAllDropdowns();
  }

  // Close mobile drawer if clicking outside the sidebar on mobile
  if (window.innerWidth < 768) {
    if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
      mobileMenu.classList.remove('open');
    }
  }
});