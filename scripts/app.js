document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
    });
});

/* Scroll to top re*/
// JavaScript for "Return to Top" button

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const returnToTopBtn = document.getElementById('returnToTop');

    // Show the button when the user scrolls down 300px or more
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            returnToTopBtn.classList.add('show');
        } else {
            returnToTopBtn.classList.remove('show');
        }
    });

    // Scroll smoothly to the top when the button is clicked
    returnToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// FAQ Script
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle("active");

        const answer = faqItem.querySelector(".faq-answer");
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

