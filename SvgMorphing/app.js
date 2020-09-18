const moonPath =
  "M17.5 30C17.5 46.5685 30 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C30 0 17.5 13.4315 17.5 30Z";

const sunPath =
  "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

//We need to click on sun

darkMode.addEventListener("click", () => {
  // using anime.js
  //   Setting up Timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });

  //Adding diff animation to the timeline
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? 0 : 320,
      },
      "-= 350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
        color: toggle ? "rgb(22, 22, 22)" : "rgb(255, 255, 255)",
      },
      "-= 700"
    );
  // Everytime we click on the sun make the toggle switch
  //   console.log(toggle);
  toggle = !toggle;
});
