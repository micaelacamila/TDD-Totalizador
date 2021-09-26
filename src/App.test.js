import multiplicar from "./App.js";
function calcularTotal(cantidad, precio, estado=""){
  var impuestoEstado=0.01;
  switch (estado){
    case "UT":
      impuestoEstado = 0.0665;
      break;
    case "NV":
        impuestoEstado = 0.08;
        break;
    case "TX":
        impuestoEstado = 0.0625;
        break;
    case "AL":
      impuestoEstado = 0.04;
      break;
    default :
      break;
  }
  var total;
  total = cantidad* precio;
  return "El total es: "+total+" y el impuesto del estado "+estado+" es: "+impuestoEstado;
}
//Primer commit, mandamos un precio y una cantidad y calcula el total
/*describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(calcularTotal(3, 2)).toEqual(6);
  });
})*/
//Segundo commit, incorporando el estado
describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(calcularTotal(3, 2,"TX")).toEqual("El total es: 6 y el impuesto del estado TX es: 0.0625");
  });
})

  
