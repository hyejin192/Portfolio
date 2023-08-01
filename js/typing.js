const textElement = document.getElementById('typing-animation');
const text = textElement.innerHTML;
const typingSpeed = 100; // Adjust typing speed (milliseconds per character)

function typeText() {
  let i = 0;
  textElement.innerHTML = '';

  function type() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, typingSpeed);
    } else {
      // Typing completed, reset i and clear the text
      i = 0;
      textElement.innerHTML = '';
      setTimeout(type, typingSpeed);
    }
  }

  // Start the typing animation
  type();
}

// Call the typing function when the page is loaded
typeText();
