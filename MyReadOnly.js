"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReadOnly = void 0;
function MyReadOnly(target, propertyKey, descriptor) {
    const originalGet = descriptor.get;
    if (originalGet && !descriptor.set) {
        descriptor.get = function () {
            return originalGet.call(this);
        };
        delete descriptor.value;
        delete descriptor.writable;
        descriptor.configurable = true;
    }
    else {
        throw new Error('MyReadOnly can only be applied to getters without setters.');
    }
}
exports.MyReadOnly = MyReadOnly;
