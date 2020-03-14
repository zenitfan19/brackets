module.exports = function check(str, bracketsConfig) {
  let currentStrLength;
  let regexArr = createRegexes(bracketsConfig);
  do {
    currentStrLength = str.length;
    for (let regexItem of regexArr) {
      str = str.replace(regexItem, '');      
    }   
  } while (str.length !== currentStrLength);
  return str.length === 0 ? true : false; 
}

function createRegexes(bracketsConfig) {
  let regexArr = [];  
  for (let configItem of bracketsConfig) {
    let regexStr = '';
    if(!configItem[0].match(/\d/)) {
      regexStr += '\\';
    }
    regexStr += configItem[0];
    if(!configItem[1].match(/\d/)) {
      regexStr += '\\';
    }
    regexStr += configItem[1];
    let regex = new RegExp(regexStr, 'g');    
    regexArr.push(regex);    
  }
  return regexArr;
}