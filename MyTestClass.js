"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleLogger_1 = require("./SimpleLogger");
const LogMethod_1 = require("./LogMethod");
const MyReadOnly_1 = require("./MyReadOnly");
let MyTestClass = class MyTestClass {
    constructor(name, age) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "lars@swenson.com"
        });
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    sayGoodbye() {
        console.log("Goodbye!");
    }
    get email() {
        return this._email;
    }
};
__decorate([
    LogMethod_1.LogMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyTestClass.prototype, "greet", null);
__decorate([
    MyReadOnly_1.MyReadOnly,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MyTestClass.prototype, "email", null);
MyTestClass = __decorate([
    SimpleLogger_1.SimpleLogger,
    __metadata("design:paramtypes", [String, Number])
], MyTestClass);
exports.default = MyTestClass;
