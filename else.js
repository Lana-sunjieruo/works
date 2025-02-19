document.addEventListener("scroll", function () {
  const img = document.querySelector(".elsedisplay");
  const rect = img.getBoundingClientRect();
  
  if (rect.top < window.innerHeight - 100) {
    img.classList.add("visible");
  }
});
