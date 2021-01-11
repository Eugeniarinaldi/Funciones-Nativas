const esAnioNuevo = (fecha) => {
    console.log(fecha.split('/')[0])
    const dia = fecha.split ('/')[0];
    const mes = fecha.split ('/')[1];
    return `${dia}/${mes}`=== '01/01';
}


console.log(esAnioNuevo('03/05/2015'))
console.log(esAnioNuevo('22/01/1987'))
console.log(esAnioNuevo('01/01/2020'))