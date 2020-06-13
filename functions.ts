function getSum(num1: number, num2: number): number{
    return num1 + num2;
}

//console.log(getSum(2,3));

let getName = function(firstName: string , lastName?:string): string {
    return `${firstName} ${lastName}`;
}

console.log(getName('Vivek'))

