 const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');

  menuBtn.addEventListener('click', () => {
    const icon = menuBtn.querySelector('i');

    // toggle visible menu
    navMenu.classList.toggle('active');

    // toggle 'open' class for optional CSS animation
    menuBtn.classList.toggle('open');

    // swap FontAwesome icon: bars <-> xmark
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark'); // use fa-times or fa-xmark depending on FA version
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking outside or pressing Escape
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuBtn.classList.remove('open');
      const icon = menuBtn.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuBtn.classList.remove('open');
      const icon = menuBtn.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Optional: close nav when link clicked (mobile)
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuBtn.classList.remove('open');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  