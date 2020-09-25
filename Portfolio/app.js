const init = () => {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    const backgrounds = [
        `radial-gradient(#2b3760, #0b1023)`,
        `radial-gradient(#4e3022, #161616)`,
        `radial-gradient(#4e4342, #161616)`,
    ];

    // Tracker

    let current = 0;
    let scrollSlide = 0;

    slides.forEach((slide, index) => {
        slide.addEventListener("click", function () {
            changeDots(this);
            nextSlide(index);
            scrollSlide = index;
        });
    });

    const changeDots = (dot) => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        dot.classList.add("active");
    };

    const nextSlide = (pageNumber) => {
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextLeft = nextPage.querySelector(".hero .model-left");
        const nextRight = nextPage.querySelector(".hero .model-right");
        const currentLeft = currentPage.querySelector(".hero .model-left");
        const currentRight = currentPage.querySelector(".hero .model-right");
        const nextText = nextPage.querySelector(".details");
        const portofolio = document.querySelector(".portofolio");
        const tl = gsap.timeline({
            onStart: () => {
                slides.forEach((slide) => {
                    slide.style.pointerEvents = "none";
                });
            },
            onComplete: () => {
                slides.forEach((slide) => {
                    slide.style.pointerEvents = "all";
                });
            },
        });

        tl.fromTo(currentLeft, 0.3, { y: "-10%" }, { y: "-100%" })
            .fromTo(currentRight, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2")
            .to(portofolio, 0.3, { backgroundImage: backgrounds[pageNumber] })
            .fromTo(
                currentPage,
                0.3,
                { opacity: 1, pointerEvents: "all" },
                { opacity: 0, pointerEvents: "none" }
            )
            .fromTo(
                nextPage,
                0.3,
                { opacity: 0, pointerEvents: "none" },
                { opacity: 1, pointerEvents: "all" },
                "-=0.6"
            )
            .fromTo(nextLeft, 0.3, { y: "-100%" }, { y: "-10%" }, "-=0.6")
            .fromTo(nextRight, 0.3, { y: "-100%" }, { y: "10%" }, "-=0.4")
            .fromTo(nextText, 0.3, { opacity: 0, x: 50 }, { opacity: 1, x: 0 })
            .set(nextLeft, { clearProps: "all" })
            .set(nextRight, { clearProps: "all" });
        current = pageNumber;
    };

    // optional
    document.addEventListener("wheel", throttle(scrollChange, 1500));
    document.addEventListener("touchmove", throttle(scrollChange, 1500));

    function switchDots(dotNumber) {
        const activeDot = document.querySelectorAll(".slide")[dotNumber];
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        activeDot.classList.add("active");
    }

    function scrollChange(e) {
        if (e.deltaY > 0) {
            scrollSlide += 1;
        } else {
            scrollSlide--;
        }
        if (scrollSlide > 2) {
            scrollSlide = 0;
        }
        if (scrollSlide < 0) {
            scrollSlide = 2;
        }
        switchDots(scrollSlide);
        nextSlide(scrollSlide);
        current = scrollSlide;
    }

    const hamburger = document.querySelector(".menu");
    const hamburgerLines = document.querySelectorAll(".menu line");
    const navOpen = document.querySelector(".nav-open");
    const contact = document.querySelector(".contact");
    const social = document.querySelector(".social");
    const logo = document.querySelector(".logo");

    const line1 = hamburgerLines[0];
    const line2 = hamburgerLines[1];
    const line3 = hamburgerLines[2];

    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.to(navOpen, 0.5, { y: 0 })
        .to(line3, 0.1, { opacity: 0 })
        .to(line2, 0.1, { y: 10, strokeDasharray: "0" }, "-=0.1")
        .to(line1, 0.2, { rotation: "45" })
        .to(line2, 0.2, { rotation: "-45" }, "-=0.2")
        .fromTo(
            contact,
            0.5,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0 },
            "-=0.1"
        )

        .fromTo(
            social,
            0.5,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0 },
            "-=0.5"
        )
        .fromTo(logo, 0.2, { color: "white" }, { color: "black" }, "-=0.8")
        .fromTo(
            hamburgerLines,
            0.2,
            { stroke: "white" },
            { stroke: "black" },
            "-=1"
        );

    hamburger.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });
};

init();

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
