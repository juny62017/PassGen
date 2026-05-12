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