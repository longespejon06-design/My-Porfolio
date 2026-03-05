// Smooth scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Active navigation highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Project slide toggle
function toggleProject(card) {

    document.querySelectorAll(".project-card").forEach(item => {
        if (item !== card) {
            item.classList.remove("active");
        }
    });

    card.classList.toggle("active");
}

const hobbies = document.querySelectorAll("#about .hobby");

hobbies.forEach(hobby => {
    hobby.addEventListener("click", () => {
        hobby.classList.toggle("active");
    });
});

const aboutSection = document.getElementById("about");

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutSection.classList.add("show");
        }
    });
}, { threshold: 0.2 });

aboutObserver.observe(aboutSection);

const contactItems = document.querySelectorAll("#contact .contact-info p");

contactItems.forEach(item => {
    item.addEventListener("click", () => {
        item.style.transform = "scale(0.95)";
        setTimeout(() => {
            item.style.transform = "scale(1)";
        }, 150);
    });
});

const contactSection = document.getElementById("contact");

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactSection.classList.add("show");
        }
    });
}, { threshold: 0.2 });

contactObserver.observe(contactSection);