const heart = document.getElementById("heart");
const heartIcon = document.getElementById("heart-icon");

heart.addEventListener("click", () => {
  heartIcon.classList.toggle("text-primary");
  heartIcon.classList.toggle("fill-primary");
});

const colorName = document.getElementById("color-name");
const colors = document.querySelectorAll("#colors button");

colors.forEach(function (color) {
  color.addEventListener("click", function () {
    colors.forEach(function (color) {
      color.classList.remove("border-2");
      color.classList.remove("opacity-100");
    });

    color.classList.add("border-2");
    color.classList.add("opacity-100");

    colorName.textContent=color.dataset.name
  });
});
