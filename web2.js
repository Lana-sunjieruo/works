document.addEventListener("scroll", function () {
  const img = document.querySelector(".web2display");
  const rect = img.getBoundingClientRect();
  
  if (rect.top < window.innerHeight - 100) {
    img.classList.add("visible");
  }
});
