export function sumSmallNumbers(a: number, b: number){
    if(a > 9 || a < 0 || b > 9 || b < 0){
        throw new Error("Your are cheating !")
    }
    return a + b;  
};

export function sum(numA: number, numB: number){
    if(numA===0) {
        return numB
    }
    else if (numB===0) {
        return numA
    }
    // if(numA>=10 && numB<10) {
    //     const mySum = sumSmallNumbers(numA%10,numB);
    //     return sum(Math.floor(numA/10)
    // }
    else {
        return numA+ numB;
    }
};