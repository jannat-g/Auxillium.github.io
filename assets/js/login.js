//sign in
function toggleSignIn() {

  if (firebase.auth().currentUser) {
 
    firebase.auth().signOut();
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
    });
  }
  document.getElementById('quickstart-sign-in').disabled = true;
}

function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
}

function sendEmailVerification() {
     
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        alert('Email Verification Sent!');
      });
    }

function sendPasswordReset() {
    var email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email).then(function() {
      alert('Password Reset Email Sent!');
    }).catch(function(error) {
  // Handle Errors
  var errorCode = error.code;
  var errorMessage = error.message;

  if (errorCode == 'auth/invalid-email') {
    alert(errorMessage);
  } else if (errorCode == 'auth/user-not-found') {
    alert(errorMessage);
  }
    console.log(error);
  });
}

function initApp() {

// Listening for auth state changes.
firebase.auth().onAuthStateChanged(function(user) {
  // document.getElementById('test123').style.display = "none";
 
    document.getElementById('quickstart-verify-email').disabled = true;

    if (user && firebase.auth().currentUser.uid == "ppgydGSuzEOJkLJzN0BfXNhgrAj2") {
      

      window.location = 'seller.html';
      
    } else if (user && firebase.auth().currentUser.uid == "m5Po2BMPEzLehFvX7Pa9pS1USjW2") {
      window.location = 'adminhome.html';
    } else {
      console.log('You are not an admin or a seller');
    }
    document.getElementById('quickstart-sign-in').disabled = false;

  });

  document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
  document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
  document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
  document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}

window.onload = function() {
   initApp();
};
