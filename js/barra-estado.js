function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function fillSkills() {
    const bars = document.querySelectorAll('#skills-section .bar');
    bars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.style.width = percent + '%';
    });
  }

  let skillsAnimated = false;

  window.addEventListener('scroll', function () {
    const section = document.querySelector('#skills-section');
    if (section && isInViewport(section) && !skillsAnimated) {
      fillSkills();
      skillsAnimated = true;
    }
  });