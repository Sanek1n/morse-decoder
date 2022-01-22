const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function decodeFromNumber(stringCode) {
        let element = '';
        for (let i = 0; i < stringCode.length; i += 2){
          if (stringCode.substr(i,2) === '10') {
            element += '.';
          } else if (stringCode.substr(i,2) === '11') {
            element += '-';
          }
        }
        return element;
      }
    
      let arrayCode = [];
      let decodeString = '';
      for (let i = 0; i < expr.length; i += 10) {
        arrayCode.push(decodeFromNumber(expr.substr(i, 10)));
      }
    
      arrayCode.forEach((val) => {
        decodeString += (val === '') ? ' ': MORSE_TABLE[val];
      })
    
      return decodeString;
}

module.exports = {
    decode
}