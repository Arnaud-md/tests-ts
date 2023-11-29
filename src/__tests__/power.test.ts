import { describe, expect, test } from 'vitest'
import { pow } from '../modules/power';

describe("power", () => {
  describe("case : zero", () => {
    const number = 6587333;
    test("first number egal to 0", () => {
      expect(pow(0, number)).toBe(0);
    });
    test("second number egal to 0", () => {
      expect(pow(number, 0)).toBe(1);
    });
    test("both numbers egal to 0", () => {
      expect(pow(0, 0)).toBe(1);
    });
  });
  describe("case : 1", () => {
    const number = 6573923;
    test("first number = 1", () => {
      expect(pow(1, number)).toBe(1);
    });
    test("second number = 1", () => {
      expect(pow(number, 1)).toBe(number);
    });
  });
  describe("case : numbers>=10 and result length>numbers length", () => {
    test("first number >= 10", () => {
      expect(pow(10, 2)).toBe(100);
    });
    test("second number >= 10", () => {
      expect(pow(2,10 )).toBe(1024);
    });
    test("both number >= 10", () => {
      expect(pow(10, 10)).toBe(10000000000);
    });
  });
  describe("case : negative numbers", () => {
    test("first number negative", () => {
      expect(pow(-2, 3)).toBe(-8);
    });
    test("second number negative", () => {
      expect(() => pow(2, -2)).toThrow(Error);
    });
  });
  describe("case : negative numbers and result length>numbers length", () => {
    test("first number negative and result positive", () => {
      expect(pow(-2, 10)).toBe(1024);
    });
    test("first number negative and result negative", () => {
      expect(pow(-2, 11)).toBe(-2048);
    });
  });
});
