function calcularValores() {
  let v1 = parseFloat(document.getElementById("txtValor1").value);
  let v2 = parseFloat(document.getElementById("txtValor2").value);
  let operation = document.getElementById("slctOperacao").value;
  let resultado;

  switch (operation) {
    case "+":
      resultado = v1 + v2;
      break;

    case "-":
      resultado = v1 - v2;
      break;

    case "/":
      resultado = v1 / v2;
      break;

    case "*":
      resultado = v1 * v2;
      break;

    default:
      console.log("ERROR");
      break;
  }

  document.getElementById("txtResultado").innerHTML = resultado;
}
