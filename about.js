document.addEventListener("DOMContentLoaded", function() {
  const bars = document.querySelectorAll(".bar");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.height = entry.target.dataset.height + "px"; 
          } else {
              entry.target.style.height = "0px"; 
          }
      });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
});