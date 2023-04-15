// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//adding a click event to all elements with class "like"
const likeBtn = document.querySelectorAll('.like');

likeBtn.forEach(btn => {
  //each like btn will behave this awy if clicked
  btn.addEventListener('click', ()=>{

    //changing the modal message
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');

    const modalMeso = document.getElementById('modal-message');
    modalMeso.innerText = "";

    //changing the heart based on the current state
    if(btn.querySelector('.like-glyph').innerText === EMPTY_HEART)
    {
      btn.querySelector('.like-glyph').innerText = FULL_HEART;
      btn.classList.add('activated');

      //mimic server call to like the post
      //calling the function
      mimicServerCall()

        .then(response => console.log(response))
        //the callback function to execute when the promise is rejected
        .catch(error =>{

          //display the error message
          modal.classList.remove('hidden');
          modalMeso.innerText = error;

          //revert heart icon 
          btn.querySelector('.like-glyph').innerText = EMPTY_HEART;
          btn.classList.remove('activated');
        } 
       

 }
 else {
  btn.querySelector('.like-glyph').innerText = EMPTY_HEART;
  btn.classList.remove('activated');


  })
})





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
