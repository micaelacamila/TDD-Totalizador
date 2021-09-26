import multiplicar from "./App.js";
function calcularTotal(cantidad, precio, estado=""){
  var total;
  total = cantidad* precio;
  return total;
}
describe("calcular", () => {
  it("deberia calcular ", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
})
  
