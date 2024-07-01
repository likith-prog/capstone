// login.js
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error: ', errorCode, errorMessage);
      });
  });
  