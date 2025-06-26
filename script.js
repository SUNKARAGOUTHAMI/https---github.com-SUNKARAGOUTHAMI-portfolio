const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    const navbar = document.getElementById('mainNavbar');
    const aboutSection = document.getElementById('about');
const hrLine = document.getElementById('line'); // for optional direct styling (not needed if CSS handles)


    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');

      navbar.classList.toggle('navbar-dark');
      navbar.classList.toggle('navbar-light');
      navbar.classList.toggle('navbar-dark-mode');
      navbar.classList.toggle('navbar-light-mode');
      

      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');

          if (body.classList.contains('dark-mode')) {
    aboutSection.classList.remove('light-theme');
    aboutSection.classList.add('dark-theme');
     hrLine.style.backgroundColor = 'white';

    
  } else {
    aboutSection.classList.remove('dark-theme');
    aboutSection.classList.add('light-theme');
       hrLine.style.backgroundColor = 'black';


 
  }

    });
    document.addEventListener('click', function (e) {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.width = ripple.style.height = '100px';
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
  function applyClickAnimation(element) {
    element.classList.add('animate-click');
    setTimeout(() => {
      element.classList.remove('animate-click');
    }, 600);
  }

  document.querySelectorAll('.social-circle, .nav-link').forEach(el => {
    el.addEventListener('click', () => applyClickAnimation(el));
  });
// Underline stays briefly on click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    this.classList.add('clicked');
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 500);
  });
});

// Scroll animation: About section fades in when in view
window.addEventListener('scroll', () => {
  const about = document.getElementById('about');
  const rect = about.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    about.classList.add('visible');
  }

});

