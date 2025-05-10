const randomColor = function () {
  const hex = '0123456789ABCDEF'; // Hexadecimal digits
  let color = '#'; // Start with '#' for a valid hex color

  // Loop to pick 6 random characters from hex string
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color; // Return the full hex color code
};

let intervalId;

// Function to start changing the background color every second
const startChangingColor = function () {
  // Only start if no interval is currently running
  if (!intervalId) {   
    intervalId = setInterval(changeBgColor, 1000); // Call changeBgColor every 1 sec.
  }

  // Function to actually change the background color
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

// Function to stop changing the background color
const stopChangingColor = function () {
  clearInterval(intervalId); // Clear the interval
  intervalId = null; // Reset the interval ID
};

// Event listener for "Start" button
document.querySelector('#start').addEventListener('click', startChangingColor);

// Event listener for "Stop" button
document.querySelector('#stop').addEventListener('click', stopChangingColor);