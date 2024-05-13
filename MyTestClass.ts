import { SimpleLogger } from "./SimpleLogger";
import { LogMethod } from "./LogMethod";
import { MyReadOnly } from "./MyReadOnly";

@SimpleLogger
class MyTestClass {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @LogMethod
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    sayGoodbye() {
        console.log("Goodbye!");
    }

    private _email: string = "lars@swenson.com";

    @MyReadOnly
    get email() {
        return this._email;
    }
}

export default MyTestClass;
