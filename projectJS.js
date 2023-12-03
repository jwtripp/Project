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
    flyWindow.document.write('<html>');//new
    flyWindow.document.write('<head>');//new
    flyWindow.document.write('<title>Your Meal Plan</title>');//new
    flyWindow.document.write('<link rel="stylesheet" type="text/css" href="styles.css"></link>')
    flyWindow.document.write('</head>');//new
    flyWindow.document.write('<body>');
    flyWindow.document.write('<header>');
    flyWindow.document.write('<div class="banner">');
    flyWindow.document.write('<img src="Logo.png" alt="Banner Photo">');
    flyWindow.document.write('<h1>Build Your Meal Plan</h1>');
    flyWindow.document.write('<h2>Name: Jason Tripp</h2>');
    flyWindow.document.write('<h2>Course: WEB 115</h2>');
    flyWindow.document.write('<h2>Section: 0002</h2>');
    flyWindow.document.write('</div>');
    flyWindow.document.write('</header>');
    flyWindow.document.write('<main>');
    flyWindow.document.write('<div class="title">');
    flyWindow.document.write('<h1><center>Your Meal Plan</center></h1>');
    flyWindow.document.write('</div>');
    flyWindow.document.write('<br>');
    flyWindow.document.write('<div class="personal-info">');
    flyWindow.document.write('<h2>Personal Information</h2>');
    flyWindow.document.write('<p><strong>Name:</strong> ' + myName.value.trim() + '</p>');
    flyWindow.document.write('<p><strong>Email:</strong> ' + myEmail.value.trim() + '</p>');
    flyWindow.document.write('<p><strong>Goals:</strong> ' + myGoal.value.trim() + '</p>');
    flyWindow.document.write('</div>');
    flyWindow.document.write('<h2>Meal Plan</h2>');
    flyWindow.document.write('<table style="width:100%">');//new
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td></td>');
    flyWindow.document.write('<th>Monday</th>');
    flyWindow.document.write('<th>Tuesday</th>');
    flyWindow.document.write('<th>Wednesday</th>');
    flyWindow.document.write('<th>Thursday</th>');
    flyWindow.document.write('<th>Friday</th>');
    flyWindow.document.write('<th>Saturday</th>');
    flyWindow.document.write('<th>Sunday</th>');
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Breakfast</strong></td>');
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Snack</strong></td>');
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Lunch</strong></td>');
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Snack</strong></td>');
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Dinner</strong></td>');
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');
    flyWindow.document.write('</tr>');
    flyWindow.document.write('</table>');//new
    flyWindow.document.write('</main>');
    flyWindow.document.write('</body>');//new
    flyWindow.document.write('</html>');
    flyWindow.document.close();//new
    
  }

  function isValidEmail(visitorEmail) {// Validate the email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(visitorEmail);
  }