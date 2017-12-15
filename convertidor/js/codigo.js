// Funcion convertir a dollar
function convertir_a_dollares(euro) {
  numero = /[0-9\.]$/

  if (!numero.exec(euro)) {
    alert("Esto no es un número");
  }
  else {
    dollar = parseFloat(1.189307);
    resultado = dollar * parseFloat(euro);
    document.getElementById("total").innerHTML = euro + " euros son... " + resultado.toFixed(2) + " dollares";
  }
}

// funcion convertir a euros
function convertir_a_euros(dollar) {
  numero = /[0-9\.]$/

  // 
  if (!numero.exec(dollar)) {
    alert("Esto no es un número");
  }
  {
    euro = parseFloat(0.841164);
    resultado = euro * parseFloat(dollar);
    document.getElementById("total").innerHTML = dollar + " dollares son ... " + resultado.toFixed(2) + " euros";
  }
}