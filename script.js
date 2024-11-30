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



