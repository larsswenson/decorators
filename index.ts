import 'reflect-metadata';

import MyTestClass from "./MyTestClass";

const myTestClass = new MyTestClass("Jesus", 33);
myTestClass.greet();
console.log(myTestClass.email);
