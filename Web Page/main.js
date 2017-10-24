function clicked() {

  var user = document.getElementById('username');
  var pass = document.getElementById('password');

  var coruser = "22tony.wilkins";
  var corpass = "Gps202657";

  if(user.value == coruser) {

    if(pass.value == corpass) {

      window.alert("You are logged in as " + user.value);
      window.open("URL")

    } else {

      window.alert("Incorrect username or password!")

    }

  } else {

          window.alert("Incorrect username or password!")

  }


}
