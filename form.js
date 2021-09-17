function validateForm() {
    var nom = document.forms["formSaisie"]["nom"].value;
    var mail = document.forms["formSaisie"]["mail"].value;
    var pass = document.forms["formSaisie"]["sujet"].value;
    var commentaire = document.forms["formSaisie"]["commenter"].value;
    if (nom == "") {
      alert("Veuillez Saisir votre Nom SVP");
      return false;
    }else if (mail==""){
        alert("Veuillez Saisir votre Adresse Mail SVP");
        return false;
    }else if (sujet==""){
        alert("Veuillez Saisir votre sujet SVP");
        return false;
    }else if (commentaire==""){
        alert("Veuillez Saisir votre commentaire SVP");
        return false;
    }
}
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_la62trp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});