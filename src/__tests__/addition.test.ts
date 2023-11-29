import { describe, expect, test } from 'vitest'
import { sum, sumSmallNumbers } from '../modules/addition';
describe("Sum for small numbers and sum for great numbers", () => {

describe("Sum only for small numbers", () => {
  describe("errors on parameters", () => {
    test("Too big numbers ", () => {
      expect(() => sumSmallNumbers(10, 2)).toThrow(Error);
    });

    test("Too small numbers ", () => {
      expect(() => sumSmallNumbers(-10, 2)).toThrow(Error);
    });

    test("zero ", () => {
      expect(() => sumSmallNumbers(0, 1)).not.toThrow(Error);
    });
  });

  describe("Small sum of valid numbers", () => {
    test("positives", () => {
      expect(sumSmallNumbers(0, 0)).toBe(0);
      expect(sumSmallNumbers(0, 9)).toBe(9);
      expect(sumSmallNumbers(1, 9)).toBe(10);
      expect(sumSmallNumbers(9, 9)).toBe(18);
    });
  });
});

test("Sum for great numbers", () => {
  expect(sum(0, 0)).toBe(0);
  expect(sum(10, 2)).toBe(12);
  expect(sum(-10, 2)).toBe(-8);
  expect(sum(0, 1)).toBe(1);
  expect(sum(0, 0)).toBe(0);
  expect(sum(0, 9)).toBe(9);
  expect(sum(1, 9)).toBe(10);
  expect(sum(9, 9)).toBe(18);
});
});