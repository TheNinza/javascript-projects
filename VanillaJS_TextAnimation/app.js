const text = document.querySelector(".fancy");
const strText = text.textContent;

const splitText = strText.split("");

text.textContent = "";

splitText.forEach((c) => {
    text.innerHTML += "<span>" + c + "</span>";
});

const onTick = () => {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
};

const complete = () => {
    clearInterval(timer);
    timer = null;
};

let char = 0;
let timer = setInterval(onTick, 50);
