document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SMOOTH SCROLLING
    ========================================= */

    document.querySelectorAll('.Navbar a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       NAVIGATION ACTIVE SECTION
    ========================================= */

    const sections = document.querySelectorAll(
        "header[id], section[id]"
    );

    const navLinks = document.querySelectorAll(".Navbar a");


    const updateActiveNav = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 100;

            if (window.scrollY >= sectionTop) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();


    /* =========================================
       SLIDESHOW
    ========================================= */

    const slides = [
    {
        image: "images/my_picture.png",
        caption: "I'm available to assist you on your project!"
    },
    {
        image: "images/HTML_CSS_and_JavaScript.jpeg",
        caption: "HTML, CSS, and JavaScript"
    },
    {
        image: "images/SQL_and_Database.jpg",
        caption: "SQL and Database"
    }
];



    let currentSlideIndex = 0;


    const slideImage =
        document.getElementById("Slide_Image");

    const slideCaption =
        document.getElementById("Slide_Caption");

    const previousButton =
        document.getElementById("Previous_Button");

    const nextButton =
        document.getElementById("Next_Button");

    const dotsContainer =
        document.getElementById("Slideshow_Dots");


    /*
     * Build slideshow dots automatically.
     */

    const createDots = () => {

        dotsContainer.innerHTML = "";

        slides.forEach((slide, index) => {

            const dot =
                document.createElement("button");

            dot.classList.add("Dot");

            dot.type = "button";

            dot.setAttribute(
                "aria-label",
                `Go to slide ${index + 1}`
            );

            dot.addEventListener("click", () => {

                currentSlideIndex = index;

                showSlide();

            });

            dotsContainer.appendChild(dot);

        });

    };


    /*
     * Display the current slide.
     */

    const showSlide = () => {

        if (!slideImage || !slideCaption) {
            return;
        }


        const currentSlide =
            slides[currentSlideIndex];


        slideImage.src =
            currentSlide.image;

        slideImage.alt =
            currentSlide.caption;

        slideCaption.textContent =
            currentSlide.caption;


        const dots =
            document.querySelectorAll(".Dot");


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active-dot",
                index === currentSlideIndex
            );

        });


        /*
         * If there is only one slide,
         * disable the navigation buttons.
         */

        if (slides.length <= 1) {
    if (previousButton) previousButton.style.display = "none";
    if (nextButton) nextButton.style.display = "none";
    } else {
    if (previousButton) previousButton.style.display = "block";
    if (nextButton) nextButton.style.display = "block";
    }


    };


    /*
     * Previous slide.
     */

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                currentSlideIndex--;

                if (currentSlideIndex < 0) {

                    currentSlideIndex =
                        slides.length - 1;

                }

                showSlide();

            }
        );

    }


    /*
     * Next slide.
     */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                currentSlideIndex++;

                if (
                    currentSlideIndex >=
                    slides.length
                ) {

                    currentSlideIndex = 0;

                }

                showSlide();

            }
        );

    }


    /*
     * Initialize slideshow.
     */

    createDots();

    showSlide();


    /* =========================================
       BACK TO TOP BUTTON
    ========================================= */

    const backToTop =
        document.createElement("button");

    backToTop.textContent = "↑";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    backToTop.classList.add(
        "back-to-top"
    );

    document.body.appendChild(
        backToTop
    );


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 400) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =========================================
       CONTACT FORM
    ========================================= */

    const form =
        document.querySelector("form");


    if (form) {

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("Name")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("Email")
                        .value
                        .trim();


                const message =
                    document
                        .getElementById("Message")
                        .value
                        .trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    alert(
                        "Please complete all fields before submitting."
                    );

                    return;

                }


                alert(
                    `Thank you, ${name}! Your message has been received.`
                );


                form.reset();

            }
        );

    }


    /* =========================================
       AUTOMATIC COPYRIGHT YEAR
    ========================================= */

    const footer =
        document.querySelector(
            "footer p"
        );


    if (footer) {

        footer.innerHTML =
            `&copy; ${new Date().getFullYear()} Portfolio. All rights reserved.`;

    }

});
