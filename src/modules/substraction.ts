import { sumSmallNumbers, sum } from "./addition";

export function smallNumberSubstraction(a: number, b: number) {
  if (a < b) {
    throw new Error("sorry you can't substract to get a negative result");
  }

  if (a<0 || b<0 || a>=10 || b>=10) {
    throw new Error("sorry here is the substraction for small numbers")
  }
  const result = a - b;

  if (result < 0 || result > 9) {
    throw new Error("you are cheating tring to substract big numbers here");
  }

  return result;
}

export function substraction(a: number, b: number) {
  if (b===0||b===-0) {
    if(a===-0) {
      return 0;
    }
    return a;
  }
  return sum(a,-b);
}
