// Product photo heart 
const heart = document.getElementById("heart");
const heartIcon = document.getElementById("heart-icon");

heart.addEventListener("click", () => {
  heartIcon.classList.toggle("text-primary");
  heartIcon.classList.toggle("fill-primary");
});

// Color section
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

    colorName.textContent = color.dataset.name;
  });
});

// Size section 
const sizeBtns = document.querySelectorAll("#sizes button");
const showSize = document.getElementById("show-size");
const addCartBtn = document.getElementById("add-cart");

sizeBtns.forEach(function (sizeBtn) {
  if (!sizeBtn.className.includes("cursor-not-allowed")) {
    sizeBtn.addEventListener("click", function () {
      sizeBtns.forEach(function (sizeBtn) {
        sizeBtn.classList.add("border");
        sizeBtn.classList.remove("bg-primary");
      });

      showSize.textContent = `US ${sizeBtn.textContent}`;
      sizeBtn.classList.remove("border");
      sizeBtn.classList.add("bg-primary");

      addCartBtn.textContent = "add to bag";
      addCartBtn.classList.remove("cursor-not-allowed");
      addCartBtn.classList.remove("bg-muted");
      addCartBtn.classList.remove("text-muted-text");
      addCartBtn.classList.add("bg-primary");
      addCartBtn.classList.add("hover:bg-red-600");
      addCartBtn.classList.add("text-white");
      addCartBtn.classList.add("active:scale-95");

      if (addCartBtn.className.includes("bg-primary")) {
        addCartBtn.addEventListener("click", function () {
          addCartBtn.textContent = "✓ ADDED";
          addCartBtn.classList.add("bg-green-600");
          addCartBtn.classList.remove("bg-primary");
          addCartBtn.classList.remove("hover:bg-red-600");
          addCartBtn.classList.remove("active:scale-95");

          setTimeout(function () {
            addCartBtn.textContent = "add to bag";
            addCartBtn.classList.remove("bg-green-600");
            addCartBtn.classList.add("bg-primary");
            addCartBtn.classList.add("hover:bg-red-600");
            addCartBtn.classList.add("active:scale-95");
          }, 3000);
        });
      }
    });
  }
});
