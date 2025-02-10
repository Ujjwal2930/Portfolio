// const texts = ["Front-end Developer", "Web Designer", "Product Designer"]; // Texts to display
// const typingElement = document.getElementById("typing");
// let currentTextIndex = 0; // Index of the current text in the array
// let index = 0; // Index of the current character in the text
// let isErasing = false; // Flag to determine if we are typing or erasing

// function typeText() {
//   const currentText = texts[currentTextIndex]; // Get the current text

// if (!isErasing) {
//     // Typing mode
//     typingElement.textContent += currentText[index];
//     index++;

//     if (index === currentText.length) {
//       // If the entire text is typed, start erasing after a delay
//         isErasing = true;
//       setTimeout(typeText, 1000); // Wait for 1 second before erasing
//     } else {
//       setTimeout(typeText, 150); // Adjust typing speed here
//     }
// } else {
//     // Erasing mode
//     typingElement.textContent = currentText.substring(0, index - 1);
//     index--;

//     if (index === 0) {
//       // If the entire text is erased, move to the next text
//         isErasing = false;
//       currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop to the next text
//       setTimeout(typeText, 500); // Wait for 0.5 seconds before typing new text
//     } else {
//       setTimeout(typeText, 100); // Adjust erasing speed here
//     }
// }
// }

// // Start the animation
// typeText();

const texts = ["Front-end Developer", "Web Designer", "Product Designer","Open-Source"]; // Texts to display
const typingElement = document.getElementById("typing");
let currentTextIndex = 0; // Index of the current text in the array
let index = 0; // Index of the current character in the text
let isErasing = false; // Flag to determine if we are typing or erasing

function typeText() {
  const currentText = texts[currentTextIndex]; // Get the current text

if (!isErasing) {
    // Typing mode
    typingElement.textContent += currentText[index];
    index++;

    if (index === currentText.length) {
      // If the entire text is typed, start erasing after a delay
    isErasing = true;
      setTimeout(typeText, 1000); // Wait for 1 second before erasing
    } else {
      setTimeout(typeText, 150); // Adjust typing speed here
    }
} else {
    // Erasing mode
    typingElement.textContent = currentText.substring(0, index - 1);
    index--;

    if (index === 0) {
      // If the entire text is erased, move to the next text
    isErasing = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop to the next text
      setTimeout(typeText, 500); // Wait for 0.5 seconds before typing new text
    } else {
      setTimeout(typeText, 100); // Adjust erasing speed here
    }
}
}

// Start the animation
typeText();


