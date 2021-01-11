const convertirEnAcronimo = (string) => {
    return string.split('').join('.').toUpperCase()
}

console.log (convertirEnAcronimo('afip')) // 'A.F.I.P.'
console.log (convertirEnAcronimo('nasa')) // 'N.A.S.A.')