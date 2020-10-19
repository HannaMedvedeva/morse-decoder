const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let numArray = [];
    let numStr = expr.toString();
    for (let i = 10; i < numStr.length + 1; i += 10) {
        numArray.push(numStr.slice(i - 10, i));
    }

    let morseString = '';
    numArray.forEach(item => {
        let subStr = '';
        if (item.includes('*')) {
            morseString += ' ';
        } else {
            for (i = 2; i < item.length + 1; i += 2) {
                let morseSymbol = item.slice(i -2, i);
    
                if (morseSymbol === '10') {
                    subStr += '.';
                } else if (morseSymbol === '11') {
                    subStr += '-';
                }
            }
            morseString += '' + MORSE_TABLE[subStr];
        }

    });
    return morseString;
}

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))
module.exports = {
    decode
}