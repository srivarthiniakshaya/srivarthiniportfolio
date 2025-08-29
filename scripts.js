document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle nav on small screens
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60;
      const sectionHeight = section.clientHeight;
      if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Contact form submission (simulate)
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    if(form.name.value && form.email.value && form.message.value) {
      formMessage.textContent = 'Thank you for contacting me! I will get back to you soon.';
      formMessage.style.color = 'green';
      form.reset();
    } else {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = 'red';
    }
  });
});
