const btn = document.getElementById('button');
var nameBox = document.getElementById('from_name');
var emailBox = document.getElementById('email_id');
var messageBox = document.getElementById('message'); 
var successAlert = document.getElementById('alert-success');
var errorAlert = document.getElementById('alert-error');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_83s07oi';
   const templateID = 'template_ghom1hl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      successAlert.style.display = "block";
    }, (err) => {
      btn.value = 'Send Email';
      errorAlert.style.display = "block";
    });

    nameBox.value = '';
    emailBox.value = '';
    messageBox.value = '';
});

function closeAlert() {
  successAlert.style.display = "none";
  errorAlert.style.display = "none";
}