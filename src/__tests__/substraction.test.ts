import { describe, expect, test } from 'vitest'
import { sumSmallNumbers } from '../modules/addition';
import { smallNumberSubstraction, substraction } from '../modules/substraction';

describe("Substraction", () => {
describe("Substraction only for small numbers", () => {
  describe("errors on parameters", () => {
    test("Too big first number ", () => {
      expect(() => smallNumberSubstraction(10, 2)).toThrow(Error);
    });

    test("Too small numbers ", () => {
      expect(() => smallNumberSubstraction(-10, 2)).toThrow(Error);
    });

    test("b>a ", () => {
      expect(() => smallNumberSubstraction(0, 1)).toThrow(Error);
    });
    test("a>b", () => {
        expect(() => smallNumberSubstraction(1, 0)).not.toThrow(Error);
      });
  });

  describe("Small substraction of valid numbers", () => {
    test("positives", () => {
      expect(smallNumberSubstraction(0, 0)).toBe(0);
      expect(smallNumberSubstraction(9, 0)).toBe(9);
      expect(smallNumberSubstraction(9, 1)).toBe(8);
      expect(smallNumberSubstraction(9, 9)).toBe(0);
    });
  });
});
describe("Substraction for all numbers", () => {
  const number = 564353757;
  describe("Case 0", () => {
    test("first number equals to zero", () =>  {
      expect(substraction(0, 2)).toBe(-2);
    })
    test("second number equals to zero", () =>  {
      expect(substraction(number, 0)).toBe(number);
    })
    test("both numbers equal to zero", () =>  {
      expect(substraction(0, 0)).toBe(0);
    })
  })
  describe("Simple substraction", () => {
    test("a>b", () => {
      expect(substraction(3, 2)).toBe(1);
    })
    test("a<b", () => {
      expect(substraction(2, 3)).toBe(-1);
    })
  })
  describe("Different length", () => {
    test("a>=10", () => {
      expect(substraction(10, 2)).toBe(8);
    })
    test("b>=10", () => {
      expect(substraction(2, 10)).toBe(-8);
    })
    test("positive result and result length to 2 digits", () => {
      expect(substraction(20, 2)).toBe(18);
    })
    test("negative result and result length to 2 digits", () => {
      expect(substraction(2, 20)).toBe(-18);
    })
  })
  describe("negative values", () => {
    test("a<0", () => {
      expect(substraction(-2, 2)).toBe(-4);
    })
    test("b<0", () => {
      expect(substraction(2, -2)).toBe(4);
    })
    test("a<0 and b<0", () => {
      expect(substraction(-2, -3)).toBe(1);
    })
  })
  describe("0 negative", () => {
    test("a=-0", () => {
      expect(substraction(-0, number)).toBe(-number);
    })
    test("b=-0", () => {
      expect(substraction(number, -0)).toBe(number);
    })
    test("a=-0 and b=-0", () => {
      expect(substraction(-0, -0)).toBe(0);
    })
  })
})
});