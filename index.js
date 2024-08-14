//Declaration of inputs
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("emailValue");
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let birthday = document.getElementById("birthday");
let male = document.getElementById("male");
let female = document.getElementById("female");


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

    //check last name
    else if (lastName.value.trim() === "" || lastName.value[0] != lastName.value[0].toUpperCase() || lastName.value.length < 3 || lastName.value.trim().includes(" ")){
    reset();
    popError("pLastName", "enter valid name");
    return false;
    }

    //check Email
    else if(email.value.trim().endsWith("@gmail.com") == false || email.value.trim() === "" ){
        reset();
        popError("pEmail", "enter valid Email");
        return false;
    }

    //check phone Number
    else if(phoneNumber.value.trim().startsWith("01") == false || phoneNumber.value.trim().length !== 11 || phoneNumber.value.trim() === "" ){
        reset();
        popError("pPhoneNumber", "enter valid Number");
        return false;
    }
   
    //check password
    else if(  password.value.trim() === "" ){
        reset();
        popError("pPassword", "enter valid password");
        return false;
    }
    

    //check confirm password
    else if(  password.value !== confirmPassword.value){
        reset();
        popError("pConfirmPassword", "passwords doesn't match");
        return false;
    }
   
    //check Birthday
    else if(  birthday.value == ""){
        reset();
        popError("pBirthday", "please, enter your Birthday");
        return false;
    }

    //check Gender
    else if( male.checked == false && female.checked == false){
        reset();
        popError("pGender", "please, enter your Gender");
        return false;
    }

    else{
        return true;
    }
}