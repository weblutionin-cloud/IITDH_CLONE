const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}


setInterval(nextSlide, 3000);
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200;
      
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    
    updateCount();
  });
});
