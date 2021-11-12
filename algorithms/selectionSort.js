/**
 * Complejidad Temporal -> O( n * n + 9 ) -> O( n^2 )
 */
function selectionSort(arreglo) {
  let longitud = arreglo.length;//O(1)

  for (let i = 0; i < longitud; i++) {//O(n)
    let minimo = i; //O(1)
    for (let j = i + 1; j < longitud; j++) {//O(n)
      if (arreglo[j] < arreglo[minimo]) { //O(1)
        minimo = j;//O(1)
      }
    }
    if (minimo != i) {//O(1)
      let temporal = arreglo[i];//O(1)
      arreglo[i] = arreglo[minimo];//O(1)
      arreglo[minimo] = temporal;//O(1)
    }
  }
  return arreglo;//O(1)
}

/**
 * Complejidad Espacial -> O(n+5) -> O(n)
 * Espacio Auxiliar -> O(1)
 */
function selectionSort(arreglo) { //O(n)
  let longitud = arreglo.length; //O(1)

  for (let i = 0; i < longitud; i++) { //O(1)
    let minimo = i; //O(1)
    for (let j = i + 1; j < longitud; j++) {//O(1)
      if (arreglo[j] < arreglo[minimo]) {
        minimo = j;
      }
    }
    if (minimo != i) {
      let temporal = arreglo[i]; //O(1)
      arreglo[i] = arreglo[minimo];
      arreglo[minimo] = temporal;
    }
  }
  return arreglo;
}
