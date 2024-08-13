//Declaration of inputs
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("emailValue");
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let birthday = document.getElementById("birthday");
let gender = document.getElementById("gender")

//Declaration of labels
let pFirstName = document.getElementById("pFirstName");
let pLastName = document.getElementById("pLastName");
let pEmail = document.getElementById("pEmail");
let pPhoneNumber = document.getElementById("pPhoneNumber");
let pPassword = document.getElementById("pPassword");
let pConfirmPassword = document.getElementById("pConfirmPassword");
let pBirthday = document.getElementById("pBirthday");
let pGender = document.getElementById("pGender");


//function of error detectation  
function popError(pLabel , errormess) {
    document.getElementById(pLabel).innerText = errormess;
    document.getElementById(pLabel).style.color = "red";
}

//function of reset the label
function reset() {
    pFirstName.innerText = "First Name";
    pLastName.innerText = "Last Name";
    pEmail.innerText = "Email";
    pPhoneNumber.innerText = "Phone Number";
    pPassword.innerText = "Password";
    pConfirmPassword.innerText = "Confirm Password";
    pBirthday.innerText = "Birthday";
    pGender.innerText = "Gender";


    let labels = document.querySelectorAll('.label');
    for (let x = 0; x < labels.length; x++) {
        labels[x].style.color = "black";
    }
    
}




//function of submit
function checkValidation() {
    //check first name
    if (firstName.value.trim() === "" || firstName.value[0] != firstName.value[0].toUpperCase() || firstName.value.length < 3 || firstName.value.trim().includes(" ")  ) {
        popError("pFirstName", "enter valid name");
        return false;
    }
    else{
    reset();
    }

    //check last name
    if(lastName.value.trim() === "" || lastName.value[0] != lastName.value[0].toUpperCase() || lastName.value.length < 3 || lastName.value.trim().includes(" ")){
        popError("pLastName", "enter valid name");
        return false;
    }
    else{
        reset();
    }

    //check Email
    if(email.value.trim().endsWith("@gmail.com") == false || email.value.trim() === "" ){
        popError("pEmail", "enter valid Email");
        return false;
    }
    else{
        reset();
    }

    //check phone Number
    if(phoneNumber.value.trim().startsWith("01") == false || phoneNumber.value.trim().length !== 11 || phoneNumber.value.trim() === "" ){
        popError("pPhoneNumber", "enter valid Number");
        return false;
    }
    else{
        reset();
    }

    
    //check password
    if(  password.value.trim() === "" ){
        popError("pPassword", "enter valid password");
        return false;
    }
    else{
        reset();
    }

    //check confirm password
    if(  password.value !== confirmPassword.value){
        popError("pConfirmPassword", "passwords doesn't match");
        return false;
    }
    else{
        reset();
    }
    //check Birthday
    if(  birthday.value == ""){
        popError("pBirthday", "please, enter your Birthday");
        return false;
    }
    else{
        reset();
    }


    //check Gender
    if(  gender.value == ""){
        popError("pGender", "please, enter your Gender");
        return false;
    }

    else{
        reset();
    }
}