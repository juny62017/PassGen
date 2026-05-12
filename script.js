let passwordOutput =
    document.getElementById("passwordOutput");

let generateBtn =
    document.querySelector(".generate-btn");

let lengthSlider =
    document.getElementById("lengthSlider");

let lengthText =
    document.querySelector(".length-text");

let uppercaseCheck =
    document.getElementById("uppercaseCheck");

let lowercaseCheck =
    document.getElementById("lowercaseCheck");

let numbersCheck =
    document.getElementById("numbersCheck");

let symbolsCheck =
    document.getElementById("symbolsCheck");

let strengthInput =
    document.getElementById("strengthInput");

let strengthFill =
    document.querySelector(".strength-fill");

let strengthText =
    document.querySelector(".strength-text");

let uppercaseLetters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lowercaseLetters =
    "abcdefghijklmnopqrstuvwxyz";

let numberCharacters =
    "0123456789";

let symbolCharacters =
    "!@#$%^&*()_+?><";

lengthSlider.oninput = function () {

    lengthText.innerText =
        "Length: " + lengthSlider.value;

};

generateBtn.onclick = function () {

    let finalCharacters = "";

    let generatedPassword = "";

    if (uppercaseCheck.checked === true) {

        finalCharacters += uppercaseLetters;

    }

    if (lowercaseCheck.checked === true) {

        finalCharacters += lowercaseLetters;

    }

    if (numbersCheck.checked === true) {

        finalCharacters += numberCharacters;

    }

    if (symbolsCheck.checked === true) {

        finalCharacters += symbolCharacters;

    }

    if (finalCharacters === "") {

        passwordOutput.value =
            "Select at least one option";

        return;
    }

    for (
        let i = 0;
        i < lengthSlider.value;
        i++
    ) {

        let randomIndex =
            Math.floor(
                Math.random() *
                finalCharacters.length
            );

        generatedPassword +=
            finalCharacters[randomIndex];

    }

    passwordOutput.value =
        generatedPassword;

};

strengthInput.oninput = function () {

    let password =
        strengthInput.value;

    let score = 0;

    if (password.length >= 8) {

        score++;

    }

    if (/[A-Z]/.test(password)) {

        score++;

    }

    if (/[0-9]/.test(password)) {

        score++;

    }

    if (/[^A-Za-z0-9]/.test(password)) {

        score++;

    }

    if (score <= 1) {

        strengthFill.style.width = "25%";

        strengthFill.style.background =
            "#d67b7b";

        strengthText.innerText =
            "Strength: Weak";

    }

    else if (score === 2 || score === 3) {

        strengthFill.style.width = "60%";

        strengthFill.style.background =
            "#d8a657";

        strengthText.innerText =
            "Strength: Medium";

    }

    else {

        strengthFill.style.width = "100%";

        strengthFill.style.background =
            "#7da67d";

        strengthText.innerText =
            "Strength: Strong";

    }

};