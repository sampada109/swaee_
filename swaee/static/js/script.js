document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.parallax-section');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function toggleAnimation() {
      sections.forEach(function(section) {
        if (isInViewport(section)) {
          section.classList.add('animated');
        } else {
          section.classList.remove('animated');
        }
      });
  
      // Change navbar background color and add shadow when scrolling
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('opaque');
      } else {
        navbar.classList.remove('opaque');
      }
    }
  
    toggleAnimation();
  
    document.addEventListener('scroll', toggleAnimation);
  });

  //form section
  const travelerInfo = document.getElementById("traveler-info");
  const destinationInput = document.getElementById("destination");
  const dateInput = document.getElementById("date");
  const groupSizeInput = document.getElementById("group-size");

  const getTravelerInfo = () => {
    const destination = destinationInput.value;
    const date = dateInput.value;
    const groupSize = groupSizeInput.value;

    console.log(`Destination: ${destination}, Date: ${date}, Group size: ${groupSize}`);
  };

  travelerInfo.addEventListener("submit", getTravelerInfo);
  


  