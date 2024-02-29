// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  // Get the error modal

  const errorModal = document.getElementById('modal');

  // Add event listener to each heart icon
  document.querySelectorAll('.like-glyph').forEach(heart => {
    heart.addEventListener('click', () => {
      // Check if the heart is  empty or full
      const isFull = heart.classList.contains('activated-heart');

      // Simulate server call
      mimicServerCall()
      .then(() => {
        // If successful response from server
        if (isFull) {
          heart.classList.remove('activated-heart');
          heart.textContent = EMPTY_HEART;
        } else {
          // Change heart to full
          heart.classList.add('activated-heart');
          heart.textContent = FULL_HEART;
        }
      })
      .catch(error => {
        // If error response from server
        errorModal.classList.remove('hidden');
        errorModal.textContent = error;
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
    });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
