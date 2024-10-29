const images = [
    "images/istockphoto-1344939844-612x612.jpg",
    "images/pitch_comp.jpg",
    "images/president_meeting.jpg"
  ];
  
  let currentIndex = 0;
  const slider = document.getElementById("slider");
  
  // Function to update the slider position
  function updateSlider() {
    // Calculate the translateX position based on the current index
    const offset = -currentIndex * 1500; // Move by the width of each image
    slider.style.transform = `translateX(${offset}px)`;
  
    // Move to the next image index
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Start the auto-scrolling every 3 seconds
  setInterval(updateSlider, 3000);