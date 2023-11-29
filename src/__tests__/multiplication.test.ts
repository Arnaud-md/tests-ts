import { describe, expect, test } from 'vitest'
import { mult } from '../modules/multiplication';

describe("multiplication", () => {
  describe("case : zero", () => {
    const number = 6587333;
    test("first number egal to 0", () => {
      expect(mult(0, number)).toBe(0);
    });
    test("second number egal to 0", () => {
      expect(mult(number, 0)).toBe(0);
    });
    test("both numbers egal to 0", () => {
      expect(mult(0, 0)).toBe(0);
    });
  });
  describe("case : 1", () => {
    const number = 6573923;
    test("first number = 1", () => {
      expect(mult(1, number)).toBe(number);
    });
    test("second number = 1", () => {
      expect(mult(number, 1)).toBe(number);
    });
  });
  describe("case : numbers>=10 and result length>numbers length", () => {
    test("first number >= 10", () => {
      expect(mult(50, 2)).toBe(100);
    });
    test("second number >= 10", () => {
      expect(mult(2, 50)).toBe(100);
    });
    test("both number >= 10", () => {
      expect(mult(20, 50)).toBe(1000);
    });
  });
  describe("case : negative numbers", () => {
    test("first number negative", () => {
      expect(mult(-2, 5)).toBe(-10);
    });
    test("second number negative", () => {
      expect(mult(2, -5)).toBe(-10);
    });
    test("both number negative", () => {
      expect(mult(-2, -5)).toBe(10);
    });
  });
  describe("case : negative numbers and result length>numbers length", () => {
    test("first number negative", () => {
      expect(mult(-20, 50)).toBe(-1000);
    });
    test("second number negative", () => {
      expect(mult(20, -50)).toBe(-1000);
    });
    test("both number negative", () => {
      expect(mult(-20, -50)).toBe(1000);
    });
  });
});
