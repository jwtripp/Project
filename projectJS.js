document.getElementById("myButton").addEventListener('click',myWindow)
function myWindow(){
    visitorName = document.getElementById("myName").value;
    visitorEmail = document.getElementById("myEmail").value;
    visitorGoal = document.getElementById("myGoal").value;

    visitorBreakfast = document.getElementById("myBreakfast").value;
    visitorSnack = document.getElementById("mySnack").value;
    visitorLunch = document.getElementById("myLunch").value;
    visitorSnack2 = document.getElementById("mySnack2").value;
    visitorDinner = document.getElementById("myDinner").value;

    flyWindow = window.open('Perfectly Portioned', '_blank');
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