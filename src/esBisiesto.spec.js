import esBisisesto from "./esBisiesto.js";

describe("Es anio Bisiesto", () => {
  it("el año 4 deberia considerarse como año Bisiesto.", () => {
    const result = esBisisesto(4);
    expect(result).toEqual(true);
  });
});

