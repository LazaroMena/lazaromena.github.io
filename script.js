document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const darkModeIcon = darkModeToggle.querySelector('i');

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        // Aquí va el codigo para enviar el formulario
        console.log("Nombre: ", name);
        console.log("Correo electrónico: ", email);
        console.log("Mensaje: ", message);
        alert("Gracias por contactarnos, " + name + ". Nos pondremos en contacto contigo pronto.");
        form.reset();
    });

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        } else {
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
        }
    });
});
