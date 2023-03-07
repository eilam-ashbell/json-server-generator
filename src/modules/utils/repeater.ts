export default function repeater(
    callback: Function,
    amount: number,
    options?: {
        separator?: string,
        asArray?: boolean
    }
): string | string[] {
    const repeated = [];
    for (let i = 0; i < amount; i++) {
        repeated.push(callback());
    }
    if (options?.asArray) return repeated;
    return repeated.join(options?.separator);
}
