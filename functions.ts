function getSum(num1: number, num2: number): number{
    return num1 + num2;
}

//console.log(getSum(2,3));

let getName = function(firstname: string , lastname?:string): string {
    return `${firstname} ${lastname}`;
}

console.log(getName('Vivek'))

