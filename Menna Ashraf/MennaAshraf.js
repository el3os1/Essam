document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("scroll");
  
    button.addEventListener("click", function () {
      const targetSection = document.getElementById("section");
      targetSection.scrollIntoView({ behavior: "smooth" });
    });

  })
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("scroll2");
  
    button.addEventListener("click", function () {
      const targetSection = document.getElementById("feedback");
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
})



document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('#star-widget .star');
    const output = document.getElementById('rating-output');
    let selectedRating = 0;
  
    stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
        highlightStars(index);
      });
  
      star.addEventListener('mouseout', () => {
        highlightStars(selectedRating - 1);
      });
  
      star.addEventListener('click', () => {
        selectedRating = index + 1;
        output.textContent = `You rated: ${selectedRating} star${selectedRating > 1 ? 's' : ''}`;
      });
    });
  
    function highlightStars(index) {
      stars.forEach((star, i) => {
        star.classList.toggle('hover', i <= index);
        star.classList.toggle('selected', i <= index);
      });
    }
  });
  