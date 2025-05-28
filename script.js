function openProject(link) {
  window.open(link, '_blank');
}

// Smooth scroll sidebar links
document.querySelectorAll('.sidebar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
