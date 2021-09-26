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
  var totalConDescuento;
  var totalConDescuentoEImpuesto;
  total = cantidad* precio;
  totalConImpuesto = total+total*impuestoEstado
  var descuentoPrecio = 0;
    if (total >= 1000){
        descuentoPrecio = 0.03;
    }else if(total >= 3000){
        descuentoPrecio = 0.05;
    }else if(total >= 7000){
        descuentoPrecio = 0.07;
    }else if(total >= 10000){
        descuentoPrecio = 0.1;
    }else if(total >= 30000){
        descuentoPrecio = 0.15;
    }
  totalConDescuento = total - total * descuentoPrecio
  totalConDescuentoEImpuesto = totalConDescuento + totalConDescuento*impuestoEstado
  return "El total es: "+total+
          ", el impuesto del estado "+estado+
          " es: "+impuestoEstado+
          ", el precio con impuesto es: "+totalConImpuesto+
          " y usted tiene un descuento de: "+descuentoPrecio+"."+
          " El precio final es: "+totalConDescuentoEImpuesto+".";
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
/*describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(calcularTotal(3, 2,"TX")).toEqual("El total es: 6, el impuesto del estado TX es: 0.0625 y el precio con impuesto es: 6.375");
  });
})*/
//Cuarto commit, calcular el descuento
/*describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(calcularTotal(3, 2,"TX")).toEqual("El total es: 6, el impuesto del estado TX es: 0.0625, el precio con impuesto es: 6.375 y usted tiene un descuento de: 0");
  });
});*/
//Quinto commit, calcular el precio total
describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(calcularTotal(3, 2,"TX")).toEqual("El total es: 6, el impuesto del estado TX es: 0.0625, el precio con impuesto es: 6.375 y usted tiene un descuento de: 0. El precio final es: 6.375.");
  });
});
