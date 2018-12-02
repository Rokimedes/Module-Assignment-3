//Use RegEx to validate form

document.getElementById("submit").addEventListener("click",  function() {
    var firstName = document.getElementById("fname").value;
    var firstNameRGEX = /^[a-zA-Z ]+$/;
    var firstNameResult = firstNameRGEX.test(firstName);
    console.log("First Name is: " + firstNameResult);
    
    var lastName = document.getElementById("lname").value;
    var lastNameRGEX = /^[a-zA-Z ]+$/;
    var lastNameResult = lastNameRGEX.test(lastName);
    console.log("Last Name is: " + lastNameResult);

    var phoneNumber = document.getElementById("phone").value;
    var phoneNumberRGEX = /\d{8,12}/;
    var phoneNumberResult = phoneNumberRGEX.test(phoneNumber);
    console.log("Phone number is: " + phoneNumberResult);

    var email = document.getElementById("email").value;
    var emailRGEX = /[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}/;
    var emailResult = emailRGEX.test(email);
    console.log("E-mail is: " + emailResult);

});




// The code that is commented below is one option on how to do it with the pattern tag 
// in HTML, but was unsure on how we should use so i went with the "hard way"
// of doing it, with coding out everything.




// document.getElementById("submit").addEventListener("click", function(){

//     var inputField = document.getElementsByTagName("input");

//     for (var index = 0; index < inputField.length; index++) {
//         var singleInput = inputField[index].value;
//         var inputPattern = new RegExp(inputField[index].pattern);
//         var testing = inputPattern.test(singleInput);

//         if(testing === false) {
//             console.log(inputField[index].name + " is incorrect");
//         }
        
//     }
// });

