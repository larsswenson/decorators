export function MyReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get; 
    if (originalGet && !descriptor.set) { 
        descriptor.get = function() {
            return originalGet.call(this);
        };
        delete descriptor.value; 
        delete descriptor.writable; 
        descriptor.configurable = true;
    } else {
        throw new Error('MyReadOnly can only be applied to getters without setters.');
    }
}






