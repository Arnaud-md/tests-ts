export function pow(numA: number, numB: number){
    if(numB<0){
        throw new Error("Your are cheating !")
    }
    return Math.pow(numA,numB);
};