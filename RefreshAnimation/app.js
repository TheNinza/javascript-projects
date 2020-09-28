const tl = gsap.timeline({
    defaults: {
        ease: "power1.out",
    },
});

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

window.addEventListener("load", () => {
    tl.to(".slider", {
        y: "-100%",
        duration: 1.5,
        delay: 0.5,
    })
        .to(".intro", { y: "-100%", duration: 1 }, "-=1.5")
        .fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(
            ".big-text",
            { opacity: 0 },
            { opacity: 1, duration: 1 },
            "-=1"
        );
});
