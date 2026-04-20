function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open');
}

function toggleText(button) {
    let box = button.parentElement;
    if (box.classList.contains("expanded")) {
        box.classList.remove("expanded");
        button.textContent = "Ավելին";
    } else {
        box.classList.add("expanded");
        button.textContent = "Փակել ";
    }
}