const container = document.querySelector('.container');
const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
let isAnimating = false;
let touchStartY = 0;

sections[currentSectionIndex].style.opacity = '1';
sections[currentSectionIndex].style.transform = 'scale(1)';

window.addEventListener('wheel', (e) => {
  if (isAnimating) return;

  const direction = e.deltaY > 0 ? 1 : -1;

  const currentSection = sections[currentSectionIndex];
  currentSection.style.zIndex = '1';
  const nextSectionIndex = currentSectionIndex + direction;
  const nextSection = sections[nextSectionIndex];

  nextSection.style.zIndex = '2';
  nextSection.style.opacity = '0';
  nextSection.style.transform = 'scale(0.1)';

  currentSection.style.transition = 'opacity 1s ease, transform 1s ease';
  nextSection.style.transition = 'opacity 1s ease, transform 1s ease';

  setTimeout(() => {
    currentSection.style.opacity = '0';
    currentSection.style.transform = 'scale(0.1)';
    currentSection.style.zIndex = '0';
    isAnimating = false;
  }, 1000);

  setTimeout(() => {
    nextSection.style.opacity = '1';
    nextSection.style.transform = 'scale(1)';
  }, 100);

  setTimeout(() => {
    currentSection.style.opacity = '0';
    currentSection.style.transform = 'scale(2)';
    currentSection.style.zIndex = '0';
  }, 100);

  currentSectionIndex = nextSectionIndex;

  if (currentSectionIndex < 0) {
    currentSectionIndex = sections.length - 1;
  } else if (currentSectionIndex >= sections.length) {
    currentSectionIndex = 0;
  }

  isAnimating = true;
});

// touch events
window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});
window.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const deltaY = touchEndY > touchStartY ? -1 : 1;

  if (isAnimating) return;

  const currentSection = sections[currentSectionIndex];
  currentSection.style.zIndex = '1';
  const nextSectionIndex = currentSectionIndex + deltaY;
  const nextSection = sections[nextSectionIndex];

  nextSection.style.zIndex = '2';
  nextSection.style.opacity = '0';
  nextSection.style.transform = 'scale(0.1)';

  currentSection.style.transition = 'opacity 1s ease, transform 1s ease';
  nextSection.style.transition = 'opacity 1s ease, transform 1s ease';

  setTimeout(() => {
    currentSection.style.opacity = '0';
    currentSection.style.transform = 'scale(0.1)';
    currentSection.style.zIndex = '0';
    isAnimating = false;
  }, 1000);

  setTimeout(() => {
    nextSection.style.opacity = '1';
    nextSection.style.transform = 'scale(1)';
  }, 100);

  setTimeout(() => {
    currentSection.style.opacity = '0';
    currentSection.style.transform = 'scale(2)';
    currentSection.style.zIndex = '0';
  }, 100);

  currentSectionIndex = nextSectionIndex;

  if (currentSectionIndex < 0) {
    currentSectionIndex = sections.length - 1;
  } else if (currentSectionIndex >= sections.length) {
    currentSectionIndex = 0;
  }

  isAnimating = true;
});