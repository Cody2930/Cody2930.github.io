/*
  scripts/main.js
  Global JavaScript for Macha Makings

  This file contains JavaScript code that provides interactivity for the site,
  such as handling the mobile navigation menu.
*/

// --- Mobile Navigation Toggle ---
/*
  This script handles the functionality of the mobile navigation menu.
  When the hamburger icon is clicked, it toggles an 'active' class on both
  the icon and the mobile navigation menu. The CSS then uses this 'active'
  class to show/hide the menu and animate the hamburger icon into an 'X'.
*/

// The 'DOMContentLoaded' event ensures that the script runs only after the
// entire HTML document has been loaded and parsed. This prevents errors
// that can occur if the script tries to access elements that don't exist yet.
document.addEventListener('DOMContentLoaded', () => {

  // Get references to the hamburger button and the mobile navigation menu.
  // Using 'const' is best practice for variables that will not be reassigned.
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  // Check if both elements were found in the document. This is a good
  // defensive programming practice.
  if (hamburger && mobileNav) {

    // Add a 'click' event listener to the hamburger button.
    // When the button is clicked, the arrow function () => {...} is executed.
    hamburger.addEventListener('click', () => {

      // The 'classList.toggle' method adds the 'active' class if it's not
      // present, and removes it if it is. This is a concise way to handle
      // the on/off state.
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }
});

// --- Image Lazy Loading ---
/*
  This script implements lazy loading for images. Images with the class 'lazy'
  will only be loaded when they are about to enter the viewport. This improves
  initial page load performance, as the browser doesn't have to download all
  images at once.
*/
document.addEventListener('DOMContentLoaded', () => {
  // Select all images that have the 'lazy' class.
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

  // Check if the Intersection Observer API is supported by the browser.
  // This is a modern and efficient way to detect when an element enters the viewport.
  if ('IntersectionObserver' in window) {
    // Create a new Intersection Observer.
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      // Loop over the entries (the observed elements).
      entries.forEach((entry) => {
        // 'isIntersecting' is true if the element is currently in the viewport.
        if (entry.isIntersecting) {
          // Get the image element from the entry.
          let lazyImage = entry.target;
          // Replace the 'src' attribute with the value from the 'data-src' attribute.
          // The 'data-src' attribute holds the actual URL of the image.
          lazyImage.src = lazyImage.dataset.src;
          // Remove the 'lazy' class to prevent the observer from processing it again.
          lazyImage.classList.remove('lazy');
          // Stop observing this image, as it has been loaded.
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    // Start observing each lazy image.
    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for older browsers that do not support Intersection Observer.
    // This could be a simpler, event-based lazy loader, but for this
    // project, we will assume modern browser support.
    console.warn('Intersection Observer not supported. Lazy loading disabled.');
  }
});
