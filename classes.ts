class User {
    name: string;
    age: number;
    constructor(name: string, age: number){
          this.name = name;
          this.age  = age;
    }
    getfullDetail(name: string, age: number): void {
        console.log(`${name} have age ${age}`);
    } 

    getdetail(): void {
        console.log(`${this.name} have age ${this.age}`);
    }
}

let user = new User('vivek', 23);
user.getfullDetail('vivek', 23);
user.getdetail();