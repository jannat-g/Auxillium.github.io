

(function($) {

	var	$window = $(window),
		$header = $('#header'),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			offset: function() { return $header.height() - 5; }
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
			});

		}

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350,
			baseZIndex: 100000
		});

	// Menu.
		$('<a href="#navPanel" class="navPanelToggle"><span>Menu</span></a>')
			.appendTo($header);

		$( '<div id="navPanel">' +
				'<nav>' +
					$('#nav') .navList() +
				'</nav>' +
				'<a href="#navPanel" class="close"></a>' +
			'</div>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'is-navPanel-visible',
					side: 'right'
				});
 });       
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
  // document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}

window.onload = function() {
   initApp();
};