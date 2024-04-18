// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("geography");

function onClickButton(event) {
    modal.style.display = "block";
  }

btn.addEventListener('click', onClickButton)
btn.addEventListener('keydown', event => {
  if (event.keyCode === 13 || event.keyCode === 32) {
    onClickButton(event)
  }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
