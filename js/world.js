function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open');
}
