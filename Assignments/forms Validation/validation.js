function validation() {
    var name = document.getElementById('name').value

    if (name == "") {
        document.getElementById('fname').innerHTML = "!! please fill the Name field first !!"
        return false;
    }
    if ((name.length <= 3) || (name.length > 12)) {
        document.getElementById('fname').innerHTML = "!! Name Should between 3 to 12 characters  !!"
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById('fname').innerHTML = "!! Name Should be in alphabets  !!"
        return false;
    }





    var lastname = document.getElementById('lastname').value

    if (lastname == "") {
        document.getElementById('lname').innerHTML = "!! please fill the Lastname field first !!"
        return false;
    }
    if ((lastname.length <= 3) || (lastname.length > 12)) {
        document.getElementById('lname').innerHTML = "!! Name Should between 3 to 12 characters  !!"
        return false;
    }
    if (!isNaN(lastname)) {
        document.getElementById('lname').innerHTML = "!! Last Name Should be in alphabets  !!"
        return false;
    }



    var monumber = document.getElementById('monumber').value

    if (monumber == "") {
        document.getElementById('mono').innerHTML = "!! mobile number Should not be empty !!"
        return false;
    }
    if ((monumber.length < 10) || (monumber.length > 10)) {
        document.getElementById('mono').innerHTML = "!! mobile number only have 10 digits !!"
        return false;
    }


    var mail = document.getElementById('mail').value

    if (mail == "") {
        document.getElementById('mailid').innerHTML = "!! Email Should not be empty !!"
        return false;
    }
    if (mail.indexOf('@') <= 0) {
        document.getElementById('mailid').innerHTML = "!! Please enter valid Email address !!"
        return false;
    }
    // if ((mail.charAt(mail.length - 4) != '.') || (mail.charAt(mail.length - 3) != '.')) {
    //     document.getElementById('mailid').innerHTML = "!! Please enter valid Email address !!"
    //     return false;
    // }



    var password = document.getElementById('password').value

    if (password == "") {
        document.getElementById('pass').innerHTML = "!! Password Should not be empty !!"
        return false;
    }
    if (length.password < 6) {
        document.getElementById('pass').innerHTML = "!! Password is too Weak !!"
        return false;
    }
    if (length.password >= 15) {
        document.getElementById('pass').innerHTML = "!! Password is too Long !!"
        return false;
    }



    var cpass = document.getElementById('cpass').value

    if (cpass == "") {
        document.getElementById('conpass').innerHTML = "!! please confirm the Password first !!"
        return false;
    }
    if (cpass != password) {
        document.getElementById('conpass').innerHTML = "!! Password is not Matched with above password !!"
        return false;
    }
}