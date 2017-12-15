/** Todas las funciones de la calculadora */


// funcion agregar numero
function agregarNumero(input, character) {
  if (input.value == null || input.value == "0")
    input.value = character
  else
    input.value += character
}

// funcion eliminar numero
function eliminarNumero(input) {
  input.value = input.value.substring(0, input.value.length - 1)
}


// funcion cambiar signo
function cambiarSigno(input) {
  // could use input.value = 0 - input.value, but let's show off substring
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length)
  else
    input.value = "-" + input.value
}

// funcion calcular
function calcular(form) {
  form.display.value = eval(form.display.value)
}

// funcion cuadro
function cuadro(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value)
}


// funcion chequear numero
function chequearNumero(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.substring(i, i + 1)
    if (ch < "0" || ch > "9") {
      if (ch != "/" && ch != "*" && ch != "+" && ch != "-"
        && ch != "(" && ch != ")") {
        alert("invalid entry!")
        return false
      }
    }
  }
  return true
}