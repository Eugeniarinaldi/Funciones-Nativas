const obtenerDuracionEnSegundos = (str) => {
    const minutos = Number(str.split(':')[0]);
    const segundos = parseInt(str.split(':')[1]);
    return (minutos * 60) + segundos;
  }
  
  console.log(obtenerDuracionEnSegundos('10:42')); // 642
  