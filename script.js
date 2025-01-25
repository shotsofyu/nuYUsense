const portfolioContainer = document.querySelector(".portfolio-items");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let scrollAmount = 0;
const itemWidth = 320; // Width of each card including margin

// Auto-scroll on hover
let autoScroll;
portfolioContainer.addEventListener("mouseenter", () => {
  autoScroll = setInterval(() => {
    scrollAmount += itemWidth;
    if (scrollAmount >= portfolioContainer.scrollWidth) {
      scrollAmount = 0;
    }
    portfolioContainer.style.transform = `translateX(-${scrollAmount}px)`;
  }, 2000);
});

portfolioContainer.addEventListener("mouseleave", () => {
  clearInterval(autoScroll);
});

// Manual scrolling with arrows
leftArrow.addEventListener("click", () => {
  scrollAmount -= itemWidth;
  if (scrollAmount < 0) {
    scrollAmount = portfolioContainer.scrollWidth - portfolioContainer.clientWidth;
  }
  portfolioContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

rightArrow.addEventListener("click", () => {
  scrollAmount += itemWidth;
  if (scrollAmount >= portfolioContainer.scrollWidth) {
    scrollAmount = 0;
  }
  portfolioContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

document.getElementById('book-now-btn').addEventListener('click', function () {
  const formContainer = document.getElementById('booking-form-container');
  formContainer.classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  const buttons = [];
  let currentIndex = 0;

  // Create navigation buttons
  const navContainer = document.createElement("div");
  navContainer.classList.add("carousel-nav");

  items.forEach((item, index) => {
    const button = document.createElement("button");
    if (index === 0) button.classList.add("active");
    button.addEventListener("click", () => {
      showSlide(index);
    });
    navContainer.appendChild(button);
    buttons.push(button);
  });

  document.querySelector("#testimonials").appendChild(navContainer);

  // Show the current slide
  function showSlide(index) {
    items[currentIndex].classList.remove("active");
    buttons[currentIndex].classList.remove("active");
    currentIndex = index;
    items[currentIndex].classList.add("active");
    buttons[currentIndex].classList.add("active");
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    showSlide((currentIndex + 1) % items.length);
  }, 5000);

  // Initialize the first slide
  showSlide(currentIndex);
});

document.getElementById("join-us-btn").addEventListener("click", () => {
  const form = document.getElementById("join-us-form");
  form.style.display = form.style.display === "none" ? "block" : "none";
});





