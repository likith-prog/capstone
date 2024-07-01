// signup.js
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error: ', errorCode, errorMessage);
      });
  });
  