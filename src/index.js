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
    //разбивам строку на части по 10 символов
    let arrFromExpr = expr.match(/.{1,10}/g);
    console.log(arrFromExpr);
  
    let result = [];
    //расшифровываем каждую букву
    arrFromExpr.forEach((element) => {
      let morseCode = letterDecoder(element);
  
      if (morseCode === " ") {
        result.push(" ");
      } else {
        result.push(MORSE_TABLE[morseCode]);
      }
    });
    result = result.join("");
    //console.log(result);
    return result;
  }
  
  function letterDecoder(letterCode) {
    if (letterCode === "**********") {
      return " ";
    }
    //разбиваем строку на части по 2 символа
    let arrFromLetterCode = letterCode.match(/.{1,2}/g);
  
    let arrMorse = [];
    arrFromLetterCode.forEach((el) => {
      if (el === "10") {
        arrMorse.push(".");
      } else if (el === "11") {
        arrMorse.push("-");
      }
    });
  
    return arrMorse.join("");
  }
  

module.exports = {
    decode
}