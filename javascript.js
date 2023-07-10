jQuery(document).ready(function ($) {

window.onload = function initiate_load_anim() {
  setInterval(function(){
    document.getElementById("loaderanim1").style.marginTop="-150vh";
    document.getElementById("loaderanim2").style.marginTop="-150vh";
}, 250);
}

const modal = document.querySelector("#modal-main")
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const cancel = document.querySelector(".cancel")

openModal.addEventListener("click", () => {
  modal.showModal();
  document.getElementById("modal-main").style.visibility="visible";
  document.getElementById("modal-main").style.opacity="1";
  document.getElementById("modal-main").style.transform="translate3d(0, 0, 0)";
  document.body.style.overflowY = "hidden";
});

closeModal.addEventListener("click", () => {
  modal.close();
  document.getElementById("modal-main").style.visibility="hidden";
  document.getElementById("modal-main").style.opacity="0";
  document.getElementById("modal-main").style.transform="translate3d(0, 30%, 0)";
  document.body.style.overflowY = "auto"
});

cancel.addEventListener("click", () => {
  modal.close();
  document.getElementById("modal-main").style.visibility="hidden";
  document.getElementById("modal-main").style.opacity="0";
  document.getElementById("modal-main").style.transform="translate3d(0, 30%, 0)";
  document.body.style.overflowY = "auto"
});


// Get the modal
var modalUI = document.getElementById('#modal-main');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.close()
    document.body.style.overflowY = "auto"
    document.getElementById("modal-main").style.visibility="hidden";
    document.getElementById("modal-main").style.opacity="0";
    document.getElementById("modal-main").style.transform="translate3d(0, 30%, 0)";
  }
}


function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "lendondev@gmail.com",
    Password : "password",
    To : 'lendondev@gmail.com',
    From : document.getElementById("InputEmail").value,
    Subject : "Feedback Received - Personal Portfolio",
    Body : "Name: " + document.getElementById("InputName").value
        + "<br> Country: " + document.getElementById("InputCountry").value
        + "<br> Subject/Message: " + document.getElementById("InputMessage").value
}).then(
  message => alert(message)
)
}







});