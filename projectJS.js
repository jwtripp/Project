document.getElementById("myButton").addEventListener('click', validition)// Begins validation

document.getElementById("clearButton").addEventListener('click', function() {
    myForm2.reset();// Clears the meal form
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
    visitorName = document.getElementById("myName").value;// Entered name
    visitorEmail = document.getElementById("myEmail").value;// Entered email
    visitorGoal = document.getElementById("myGoal").value;// Entered goals

    visitorBreakfast = document.getElementById("myBreakfast").value;// Entered breakfast
    visitorSnack = document.getElementById("mySnack").value;// Entered snack
    visitorLunch = document.getElementById("myLunch").value;// Entered lunch
    visitorSnack2 = document.getElementById("mySnack2").value;// Entered snack
    visitorDinner = document.getElementById("myDinner").value;// Entered dinner

    flyWindow = window.open('Perfectly Portioned', '_blank'); // Opens new window
    flyWindow.document.write('<html>');
    flyWindow.document.write('<head>');
    flyWindow.document.write('<title>Your Meal Plan</title>');// Tab title
    flyWindow.document.write('<link rel="stylesheet" type="text/css" href="styles.css"></link>')// Loads Styule Sheet
    flyWindow.document.write('</head>');
    flyWindow.document.write('<body>');
    
    flyWindow.document.write('<header>');// Header 
    flyWindow.document.write('<div class="banner">');
    flyWindow.document.write('<img src="Logo.png" alt="Banner Photo">');// Logo
    flyWindow.document.write('<h1>Build Your Meal Plan</h1>');// Header title
    flyWindow.document.write('<h2>Name: Jason Tripp</h2>');// Header name
    flyWindow.document.write('<h2>Course: WEB 115</h2>');// Header course
    flyWindow.document.write('<h2>Section: 0002</h2>');// Header section number
    flyWindow.document.write('</div>');
    flyWindow.document.write('</header>');
    
    flyWindow.document.write('<main>');
    flyWindow.document.write('<div class="title">');
    flyWindow.document.write('<h1><center>Your Meal Plan</center></h1>');// Page title
    flyWindow.document.write('</div>');
    flyWindow.document.write('<br>');
    flyWindow.document.write('<div class="personal-info">');
    flyWindow.document.write('<h2>Personal Information</h2>');
    flyWindow.document.write('<p><strong>Name:</strong> ' + myName.value.trim() + '</p>');// Customer name
    flyWindow.document.write('<p><strong>Email:</strong> ' + myEmail.value.trim() + '</p>');// Customer email
    flyWindow.document.write('<p><strong>Goals:</strong> ' + myGoal.value.trim() + '</p>');// Customer goals
    flyWindow.document.write('</div>');
    flyWindow.document.write('<h2>Meal Plan</h2>');
    flyWindow.document.write('<table style="width:100%">');// Table
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td></td>');
    flyWindow.document.write('<th>Monday</th>');// Day of the week Monday column
    flyWindow.document.write('<th>Tuesday</th>');// Day of the week Tuesday column
    flyWindow.document.write('<th>Wednesday</th>');// Day of the week Wednesday column
    flyWindow.document.write('<th>Thursday</th>');// Day of the week Thursday column
    flyWindow.document.write('<th>Friday</th>');// Day of the week Friday column
    flyWindow.document.write('<th>Saturday</th>');// Day of the week Saturday column
    flyWindow.document.write('<th>Sunday</th>');// Day of the week Sunday column
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Breakfast</strong></td>');// Breafast row
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');//Customer entered breakfast item
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');//Customer entered breakfast item
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');//Customer entered breakfast item
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');//Customer entered breakfast item
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');//Customer entered breakfast item
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');//Customer entered breakfast item
    flyWindow.document.write('<td><tt>' + myBreakfast.value.trim() + '</tt></td>');//Customer entered breakfast item
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Snack</strong></td>');// Snack row
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Lunch</strong></td>');// Lunch row
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');//Customer entered lunch item
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myLunch.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Snack</strong></td>');// Snack row
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('<td><tt>' + mySnack2.value.trim() + '</tt></td>');//Customer entered snack item
    flyWindow.document.write('</tr>');
    flyWindow.document.write('<tr>');
    flyWindow.document.write('<td><strong>Dinner</strong></td>');// Dinner row
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('<td><tt>' + myDinner.value.trim() + '</tt></td>');//Customer entered dinner item
    flyWindow.document.write('</tr>');
    flyWindow.document.write('</table>');//new
    
    flyWindow.document.write('<p>Click the button to print your meal planner.</p>');
    flyWindow.document.write('<button onclick="window.print()">Print</button>');// Prints the page
    
    flyWindow.document.write('</main>');
    flyWindow.document.write('</body>');
    flyWindow.document.write('</html>');
    flyWindow.document.close();
    
  }

  function isValidEmail(visitorEmail) {// Validates the email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(visitorEmail);
  }