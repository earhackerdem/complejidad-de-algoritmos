/**
 * Complejidad Temporal -> O( n + 3 ) -> O( n )
 */
function linearSearch(arreglo, clave) {
  for (let indice = 0; indice < arreglo.length; indice++) { //O(n)
    if (arreglo[indice] === clave) { //O(1)
      return indice;//O(1) 
    }
  }
  return -1;//O(1) 
}


/**
 * Complejidad Espacial -> O(n+1) -> O(n)
 * Espacio Auxiliar -> O(1)
 */
function linearSearch(arreglo, clave) { //O(n)
  for (let indice = 0; indice < arreglo.length; indice++) {//O(1)
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
}
