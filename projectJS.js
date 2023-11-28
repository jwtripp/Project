document.getElementById("myButton").addEventListener('click', validition)// Begins validation

document.getElementById("clearButton").addEventListener('click', function() {
    myForm.reset();// Clears the form
    });

function validition() { // Only allows to send with valid email
    visitorEmail = document.getElementById("myEmail").value;

    if (isValidEmail(visitorEmail)) {
        myWindow();// Runs myWindow is email is good
    } else { // Error Message if email is bad
        alert('Please enter a valid email address.');
    }
    }

  function myWindow(){ // Function opens new window to display results
    visitorName = document.getElementById("myName").value;
    visitorEmail = document.getElementById("myEmail").value;
    visitorGoal = document.getElementById("myGoal").value;

    visitorBreakfast = document.getElementById("myBreakfast").value;
    visitorSnack = document.getElementById("mySnack").value;
    visitorLunch = document.getElementById("myLunch").value;
    visitorSnack2 = document.getElementById("mySnack2").value;
    visitorDinner = document.getElementById("myDinner").value;

    flyWindow = window.open('Perfectly Portioned', '_blank'); // Opens window
    flyWindow.document.write('<style>');
    flyWindow.document.write('</style></head><body>');
    flyWindow.document.write('<h1>Your Meal Plan</h1>');
    flyWindow.document.write('<div class="personal-info">');
    flyWindow.document.write('<h2>Personal Information</h2>');
    flyWindow.document.write('<p><strong>Name:</strong> ' + myName.value.trim() + '</p>');
    flyWindow.document.write('<p><strong>Email:</strong> ' + myEmail.value.trim() + '</p>');
    flyWindow.document.write('<p><strong>Goals:</strong> ' + myGoal.value.trim() + '</p>');
    flyWindow.document.write('</div>');
    flyWindow.document.write('<h2>Meal Plan</h2>');
    flyWindow.document.write('<p><strong>Breakfast:</strong> ' + myBreakfast.value.trim() + '</p>');
    flyWindow.document.write('<p><strong>Snack:</strong> ' + mySnack.value.trim() + '</p>');
    flyWindow.document.write('<p><strong>Lunch:</strong> ' + myLunch.value.trim() + '</p>');
    flyWindow.document.write('<p><strong>Snack:</strong> ' + mySnack2.value.trim() + '</p>');
    flyWindow.document.write('<p><strong>Dinner:</strong> ' + myDinner.value.trim() + '</p>');
    
  }

  function isValidEmail(visitorEmail) {// Validate the email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(visitorEmail);
  }