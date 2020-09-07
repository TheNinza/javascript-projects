const imageGallery = () => {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".room-preview img");

  previews.forEach((preview) => {
    preview.addEventListener("click", () => {
      const smallSrc = preview.src;
      const bigSrc = smallSrc.replace("-small", "");
      // console.log(bigSrc);
      highlight.src = bigSrc;
      previews.forEach((preview) => preview.classList.remove("room-active"));
      preview.classList.add("room-active");
    });
  });
};

imageGallery();
