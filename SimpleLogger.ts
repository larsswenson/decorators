export function SimpleLogger<T extends Function>(constructor: T): void {
    console.log(`A class was created: ${constructor.name}`);
}




