const FULL_HEART = '♥'
const EMPTY_HEART = '♡'

// Select all like buttons
const likeBtns = document.querySelectorAll('.like');

// Add a click event listener to each like button
likeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    // Reset the modal message to hide any previous error message
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.innerText = '';
    
    // Change the heart icon to full or empty depending on the current state
    if (btn.querySelector('.like-glyph').innerText === EMPTY_HEART) {
      btn.querySelector('.like-glyph').innerText = FULL_HEART;
      btn.classList.add('activated', 'activated-heart');
      
      // Mimic server call to like the post
      mimicServerCall()
        .then(response => console.log(response))
        .catch(error => {
          // Display error message on the modal
          modal.classList.remove('hidden');
          modalMessage.innerText = error;
          
          // Revert heart icon back to empty and remove activated class
          btn.querySelector('.like-glyph').innerText = EMPTY_HEART;
          btn.classList.remove('activated');
        })
        .finally(() => {
          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    } else {
      btn.querySelector('.like-glyph').innerText = EMPTY_HEART;
      btn.classList.remove('activated', 'activated-heart');
    }
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
