var phoneNumber = document.getElementById('phoneNumber');

var FullnameError = document.getElementById('fn-err');
var addressError = document.getElementById('address-err');
var phonenoError = document.getElementById('ph-err');
var emailError = document.getElementById('email-err');
var passwordError = document.getElementById('password-err');




var fullname = /^[\w ]{5,29}$/;
var fullnameInput = document.getElementById('FullName');
fullnameInput.addEventListener('keyup', fullnameFunc);

function fullnameFunc() {
    var inputer = fullnameInput.value
    var valid = fullname.test(inputer)
        if (valid) {
            FullnameError.style.display = 'none'
        } else {
            FullnameError.style.display = 'block'
        };
};

var address = /^[\w ]{5,11}$/;
var addressInput = document.getElementById('address');
addressInput.addEventListener('keyup', addressFunc);

function addressFunc() {
    var inputer = addressInput.value
    var valid = address.test(inputer)
        if (valid) {
            addressError.style.display = 'none'
        } else {
            addressError.style.display = 'block'
        };
};

var phoneNumber = /^[0-9]{11}$/;
var phoneNumberInput = document.getElementById('phonenum');
phoneNumberInput.addEventListener('keyup', phoneNumberFunc);

function phoneNumberFunc() {
    var inputer = phoneNumberInput.value
    var valid = phoneNumber.test(inputer)
        if (valid) {
            phonenoError.style.display = 'none'
        } else {
            phonenoError.style.display = 'block'
        };
};

var email = /^[\w]+@[a-z]+(\.[com|co|org]+)*$/;
var emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', emailFunc);

function emailFunc() {
    var inputer = emailInput.value
    var valid = email.test(inputer)
        if (valid) {
            emailError.style.display = 'none'
        } else {
            emailError.style.display = 'block'
        };
};


var password = /[\w]{5,9}$/;
var passwordInput = document.getElementById('password');
passwordInput.addEventListener('keyup', passwordFunc);

function passwordFunc() {
    var inputer = passwordInput.value
    var valid = password.test(inputer)
        if (valid) {
            passwordError.style.display = 'none'
        } else {
            passwordError.style.display = 'block'
        };
};