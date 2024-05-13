export function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Method ${key} was called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    }
}
