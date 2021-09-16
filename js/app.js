// Grapping All Major Elements
const characterRange = document.getElementById('characterRange');
const characterNumber = document.getElementById('characterNumber');
const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');

// Grapping All Check Box Elements
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');

// Getting Array From A Function
const UPPER_CHAR_CODE = arrFromLowToHigh(65, 90);
const LOWER_CHAR_CODE = arrFromLowToHigh(97, 122);
const NUMBER_CHAR_CODE = arrFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODE = arrFromLowToHigh(33, 47).concat(arrFromLowToHigh(58, 64)).concat(arrFromLowToHigh(91, 96)).concat(arrFromLowToHigh(123, 126))

// console.log(SYMBOL_CHAR_CODE)

// Events For Input Range and Nnumber
characterNumber.addEventListener('input', syncCharacterAmount);
characterRange.addEventListener('input', syncCharacterAmount);

// Synchronise The Value of Range and Numbers
function syncCharacterAmount(e) {
    const value = e.target.value;

    characterRange.value = value
    characterNumber.value = value
}

// Password Generator Event
form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterNumber.value;

    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);

    passwordDisplay.innerText = password
})

// Password Generator Function
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    let charCode = LOWER_CHAR_CODE;

    if(includeUppercase) {charCode = charCode.concat(UPPER_CHAR_CODE)};
    if(includeNumbers) {charCode = charCode.concat(NUMBER_CHAR_CODE)};
    if(includeSymbols) {charCode = charCode.concat(SYMBOL_CHAR_CODE)};

    const passChar = [];
    for(let i = 0; i < characterAmount; i++) {
        const characterCodes = charCode[Math.floor(Math.random() * charCode.length)]
        passChar.push(String.fromCharCode(characterCodes))
    }
    return passChar.join('');
}

// Character and Symbols Array Creator Function
function arrFromLowToHigh(low, high) {
    const arr = [];
    for(let i = low; i <= high; i++) {
        arr.push(i)
    }
    return arr
}

// ========== DARK THEME ==========
let icon = document.getElementById('moon__icon');
let sun = document.createElement('i');
let moon = document.createElement('i');

sun.classList.add('uil', 'uil-sun')
moon.classList.add('fas', 'uil-moonset')
icon.appendChild(moon)


icon.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        icon.appendChild(sun)
        icon.removeChild(moon)
    } else {
        icon.appendChild(moon)
        icon.removeChild(sun)
    }
})


