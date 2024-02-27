import esBisisesto from "./esBisiesto.js";

describe("Es anio Bisiesto", () => {
  it("el año 4 deberia considerarse como año Bisiesto", () => {
    expect(esBisisesto(4)).toEqual(true);
  });
  it("el año 5 no deberia considerarse como año Bisiesto", () => {
    expect(esBisisesto(5)).toEqual(false);
  });
  it("Debería mostrar todos los años divisibles entre 400 - BISIESTO", () => {
    expect(esBisisesto(2000)).toEqual(true);
  });

});

