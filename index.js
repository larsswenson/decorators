"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const MyTestClass_1 = __importDefault(require("./MyTestClass"));
const myTestClass = new MyTestClass_1.default("Jesus", 33);
myTestClass.greet();
console.log(myTestClass.email);
