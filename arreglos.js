function calcularPuntajePares(arreglo) {
    let puntaje = 0;
    arreglo.forEach(numero => {
      if (numero % 2 === 0) {
        puntaje += 2;
      }
    });
    return puntaje;
  }
  
  function calcularPuntajeImpares(arreglo) {
    let puntaje = 0;
    arreglo.forEach(numero => {
      if (numero % 2 === 1 && numero !== 7) {
        puntaje += 1;
      }
    });
    return puntaje;
  }
  
  function calcularPuntajeCincos(arreglo) {
    let puntaje = 0;
    arreglo.forEach(numero => {
      if (numero === 5) {
        puntaje += 3;
      }
    });
    return puntaje;
  }
  
  function calcularPuntajeTotal(arreglo) {
    const puntajePares = calcularPuntajePares(arreglo);
    const puntajeImpares = calcularPuntajeImpares(arreglo);
    const puntajeCincos = calcularPuntajeCincos(arreglo);
    return puntajePares + puntajeImpares + puntajeCincos;
  }
  