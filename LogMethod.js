"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMethod = void 0;
function LogMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method ${key} was called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
}
exports.LogMethod = LogMethod;
