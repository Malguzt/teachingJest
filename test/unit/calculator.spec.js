const calculator =  require('../../src/calculator');
describe('Probando la calculator', () =>{
  test('Debe devolver 6', () => {
    const resultado = calculator.add(2, 4);

    expect(resultado).toEqual(6);
  });
  test('Debe devolver 8', () => {
    const resultado = calculator.add(2, 6);

    expect(resultado).toEqual(8);
  });
});
