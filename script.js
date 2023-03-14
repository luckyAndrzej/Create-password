const input = document.querySelector('.input')
const copyPas = document.querySelector('.copy')
const genBtn = document.querySelector('.generate')


genBtn.addEventListener('click', function() {
    let password = generatePassword(12);
    input.value = password;
});

copyPas.addEventListener('click', function() {
    input.select();
    input.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input.value);
});

function generatePassword(passwordLength) {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "£¢€§#<%?!@#$%^&*";

    const allChars = capitalLetters + smallLetters + number + symbol;

    let randomString = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomPassword];
    }

    return randomString;
}
