import esBisiesto from "./esBisiesto.js";

describe("Es anio Bisiesto", () => {
  it("el año 4 deberia considerarse como año Bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("el año 5 no deberia considerarse como año Bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });
  it("debería mostrar todos los años divisibles entre 400 - BISIESTO", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });
  it("debería mostrar todos los años divisibles entre 100 pero no por 400", () => {
    expect(esBisiesto(1800)).toEqual(false);
  });
  it("todos los años divisibles por 4 pero no por 100 SON años bisiestos", () => {
    expect(esBisiesto(2012)).toEqual(true);
  });

});

