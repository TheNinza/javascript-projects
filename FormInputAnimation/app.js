const animatedForm = () => {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Check For Validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
        changeBackgroundColor("#2d4eaa");
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
        changeBackgroundColor("#74e73f");
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextForm);
        changeBackgroundColor("rgb(87, 189, 130)");
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      // get rid of animation

      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
};

const validateUser = (user) => {
  if (user.value.length < 6) {
    console.log("not enough characters");
    changeBackgroundColor("rgb(189, 87, 87)");
  } else {
    changeBackgroundColor("rgb(87, 189, 130)");
    return true;
  }
};

const validateEmail = (email) => {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    changeBackgroundColor("rgb(87, 189, 130)");
    return true;
  } else {
    changeBackgroundColor("rgb(189, 87, 87)");
  }
};

const nextSlide = (parent, nextForm) => {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
};

const changeBackgroundColor = (color) => {
  document.body.style.backgroundColor = color;
};

animatedForm();
