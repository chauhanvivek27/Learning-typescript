const person: {
    name: string;
    age: number;
    hobbies: string [];
    travel: [number, string]  //We explicitly defining the travel property as tuple
}=  {
    name: 'Vivek',
    age: 32,
    hobbies: ['Movie', 'Coding'],
    travel: [3, 'four']
}

/*
As per tuple definition it should be fixed size array but push method allow you to add the new item in array.
Typescript not able to catch this exception. 
*/

person.travel.push(2);
/* 
Remove below comment and run this line, it will throw an error 
because tuple say it can exactly have 2 element with sequence number, string
*/

//person.travel[0] = 'nice';
console.log(person);