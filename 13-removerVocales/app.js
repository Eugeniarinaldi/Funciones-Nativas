const removerVocales = str => str.replaceAll(/[aeiou]/ig, ' ');
 
console.log(removerVocales('javascript')); // 'jvscrpt' 
console.log(removerVocales('ada lovelace')); // 'd lvlc'