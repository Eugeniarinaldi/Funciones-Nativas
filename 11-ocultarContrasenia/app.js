const ocultarPassword = (password) => 
password.toString().replace(/[0-9]/g, '*');


console.log(ocultarPassword(123456));
console.log(ocultarPassword(111222333));