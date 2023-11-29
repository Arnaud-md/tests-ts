import { sum } from "./addition";

export function mult(numA: number, numB: number){
        let result = 0;
        for(let i=0;i<Math.abs(numB);i++) {
                result=sum(result,numA);
        }
        if(numB<0) {
                return -result;
        }
        else {
                return result;
        }

};