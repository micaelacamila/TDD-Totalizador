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
  var totalConImpuesto;
  total = cantidad* precio;
  totalConImpuesto = total+total*impuestoEstado
  return "El total es: "+total+", el impuesto del estado "+estado+" es: "+impuestoEstado+" y el precio con impuesto es: "+totalConImpuesto;
}
//Primer commit, mandamos un precio y una cantidad y calcula el total
/*describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(calcularTotal(3, 2)).toEqual(6);
  });
})*/
//Segundo commit, incorporando el estado
/*describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(calcularTotal(3, 2,"TX")).toEqual("El total es: 6 y el impuesto del estado TX es: 0.0625");
  });
})*/
//Tercer commit, calcular el precio con impuesto
describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(calcularTotal(3, 2,"TX")).toEqual("El total es: 6, el impuesto del estado TX es: 0.0625 y el precio con impuesto es: 6.375");
  });
})

  
