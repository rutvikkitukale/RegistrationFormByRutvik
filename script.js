/** @format */

let mailbox = document.querySelector("#mailbox");
let passbox = document.querySelector("#passbox");
let button = document.querySelector("#btn");
let mailerror = document.querySelector("#mailerror");
let passerror = document.querySelector("#passerror");


let mailValid = true;
let passvalid = true;
mailbox.addEventListener("input", () => {
    if (mailbox.value.length < 6) {
        mailerror.textContent = "*please enter valid email address";
        mailerror.style.color = "red";
        mailValid = false;
    } else if (mailbox.value.length > 6) {
        mailerror.textContent = "*valid email address";
        mailerror.style.color = "green";
        mailValid = true;
    }
});

passbox.addEventListener("input", () => {
    if (passbox.value.length < 6) {
        passerror.textContent = "*please enter valid passsword address";
        passerror.style.color = "red";
        passvalid = false;
    } else if (passbox.value.length > 6) {
        passerror.textContent = "*valid password";
        passerror.style.color = "green";
        passvalid = true;
    }
});

button.addEventListener("click", () => {
    if (mailValid && passvalid) {
        alert("Form Submitted Successfully!!");
        document.location.reload(true);
        return;
    } else {
        alert("please enter valid input!!");
        return;
    }
});
