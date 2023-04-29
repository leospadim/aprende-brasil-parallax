const container = document.querySelector('.container');
const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
let isAnimating = false;

// set up the initial state of the sections
sections[currentSectionIndex].style.opacity = '1';
sections[currentSectionIndex].style.transform = 'scale(1)';

window.addEventListener('wheel', (e) => {
  // prevent listening to the wheel event while animating
  if (isAnimating) return;
  
  // get the direction of the wheel event
  const direction = e.deltaY > 0 ? 1 : -1;

  // get the current section and the next section
  const currentSection = sections[currentSectionIndex];
  currentSection.style.zIndex = '1';
  const nextSectionIndex = currentSectionIndex + direction;
  const nextSection = sections[nextSectionIndex];

  // show the next section
  nextSection.style.zIndex = '2';
  nextSection.style.opacity = '0';
  nextSection.style.transform = 'scale(0.1)';

  // set up the transition
  currentSection.style.transition = 'opacity 1s ease, transform 1s ease';
  nextSection.style.transition = 'opacity 1s ease, transform 1s ease';

  // hide the current section after the transition ends
  setTimeout(() => {
    currentSection.style.opacity = '0';
    currentSection.style.transform = 'scale(0.1)';
    currentSection.style.zIndex = '0';
    isAnimating = false;
  }, 1000);

  // next section zoom in
  setTimeout(() => {
    nextSection.style.opacity = '1';
    nextSection.style.transform = 'scale(1)';
  }, 100);

  // current section zoom in
  setTimeout(() => {
    currentSection.style.opacity = '0';
    currentSection.style.transform = 'scale(2)';
    currentSection.style.zIndex = '0';
  }, 100);

  // update the current section index
  currentSectionIndex = nextSectionIndex;

  // wrap the index if it goes out of bounds
  if (currentSectionIndex < 0) {
    currentSectionIndex = sections.length - 1;
  } else if (currentSectionIndex >= sections.length) {
    currentSectionIndex = 0;
  }

  isAnimating = true;
});