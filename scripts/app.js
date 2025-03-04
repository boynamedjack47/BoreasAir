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



// document.addEventListener("DOMContentLoaded", function () {
//     // Select all service links
//     document.querySelectorAll(".services a").forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent default anchor behavior

//             const targetId = this.getAttribute("href").substring(1); // Get ID without #
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 // Smooth scroll to the section
//                 targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

//                 // Use IntersectionObserver to detect when the element is in view
//                 const observer = new IntersectionObserver(
//                     (entries, observer) => {
//                         entries.forEach(entry => {
//                             if (entry.isIntersecting) {
//                                 setTimeout(() => {
//                                     const answer = targetElement.querySelector(".faq-answer");
//                                     if (answer) {
//                                         answer.style.display = "block"; // Show the content
//                                     }
//                                     observer.disconnect(); // Stop observing after opening
//                                 }, 300); // Adjust delay in milliseconds (300ms = 0.3 seconds)
//                             }
//                         });
//                     },
//                     { threshold: 0.5 } // Trigger when 50% of the section is visible
//                 );

//                 observer.observe(targetElement);
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    // Select all service links
    document.querySelectorAll(".services a").forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = this.getAttribute("href").substring(1); // Get ID without #
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Smooth scroll to the section
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  
          // Use IntersectionObserver to detect when the element is in view
          const observer = new IntersectionObserver(
            (entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  setTimeout(() => {
                    const answer = targetElement.querySelector(".faq-answer");
                    if (answer) {
                      answer.style.display = "block"; // Show the content
                      // Add active class to update the symbol via CSS
                      targetElement.classList.add("active");
                    }
                    observer.disconnect(); // Stop observing after opening
                  }, 300); // Adjust delay in milliseconds
                }
              });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
          );
  
          observer.observe(targetElement);
        }
      });
    });
  });
  

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const reviewWidget = document.querySelector('.reviewwidget');
  
    const observerOptions = {
      threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Remove observer after animation fires
        }
      });
    }, observerOptions);
  
    if(reviewWidget) {
      observer.observe(reviewWidget);
    }
  });
  

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-links li a');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navLinks.forEach(link => link.classList.add('active')); // Add active style on scroll
    } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach(link => link.classList.remove('active')); // Remove active style
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const popup = document.getElementById("promoPopup");
//   const closeBtn = document.querySelector(".close");

//   // Show the popup when the page loads
//   setTimeout(() => {
//       popup.style.display = "flex";
//   }, 1000); // Show after 1 second

//   // Close the popup when clicking the close button
//   closeBtn.addEventListener("click", () => {
//       popup.style.display = "none";
//   });

//   // Close when clicking outside the popup
//   window.addEventListener("click", (e) => {
//       if (e.target === popup) {
//           popup.style.display = "none";
//       }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const promoPopup = document.getElementById("promoPopup");
  const closeBtn = document.querySelector(".close-btn");

  // Show the promo popup after 1 second delay
  setTimeout(() => {
      promoPopup.classList.add("show");
  }, 1000);

  // Close the popup when clicking the X button
  closeBtn.addEventListener("click", function () {
      promoPopup.classList.remove("show");
  });

  // Close when clicking outside the modal
  window.addEventListener("click", function (e) {
      if (e.target === promoPopup) {
          promoPopup.classList.remove("show");
      }
  });
});
