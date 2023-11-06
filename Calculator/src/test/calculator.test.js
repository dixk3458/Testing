const Calculator = require('../calculator.js');

// describe는 연관된 test를 하나로 묶어준다.
describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(2);

    expect(cal.value).toBe(2);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();

    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(9);
    cal.add(1);

    expect(cal.value).toBe(10);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('substract', () => {
    cal.set(10);
    cal.subtract(5);

    expect(cal.value).toBe(5);
  });

  it('multiply', () => {
    cal.set(5);
    cal.multiply(2);

    expect(cal.value).toBe(10);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);

      expect(cal.value).toBe(1);
    });
  });
});
