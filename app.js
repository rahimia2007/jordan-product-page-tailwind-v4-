const heart = document.getElementById("heart");
const heartIcon = document.getElementById("heart-icon");

heart.addEventListener("click", () => {
  heartIcon.classList.toggle("text-primary");   
  heartIcon.classList.toggle("fill-primary");
});
