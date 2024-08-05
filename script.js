document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.what-i-do-card-wrapper .header');
  const contentCards = document.querySelectorAll('.content-card');

  const options = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('header')) {
          entry.target.classList.add('animate-header');
        } else if (entry.target.classList.contains('content-card')) {
          const image = entry.target.querySelector('.content-card-image');
          const text = entry.target.querySelector('.content-card-text');
          entry.target.classList.add('animate-card');
          image.classList.add('animate-card-image');
          text.classList.add('animate-card-text');
        }
        observer.unobserve(entry.target); // Stop observing once the animation is applied
      }
    });
  }, options);

  if (header) {
    observer.observe(header);
  }

  contentCards.forEach(card => {
    observer.observe(card);
  });
});
// JavaScript to Hide Splash Screen and Show Main Content
document.addEventListener("DOMContentLoaded", function() {
    var splashVideo = document.getElementById("splashVideo");
    var splashScreen = document.getElementById("splashScreen");

    splashVideo.onended = function() {
        splashScreen.style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    };

    // If video is shorter than 2 seconds or fails to load, you can set a fallback timeout
    setTimeout(function() {
        if (!splashVideo.paused) {
            splashVideo.pause();
            splashScreen.style.display = "none";
            document.getElementById("mainContent").style.display = "block";
        }
    }, 2000); // 2 seconds
});

