import { randomBytes } from "node:crypto";

export const variances = b => Math.pow(2, b);
export const random = b => randomBytes(b / 8).toString("hex");
export const brute = b => {
    let x = BigInt(0);
    const y = BigInt("0x" + b)
    const startTime = performance.now()
    while (x++ < y);
    return performance.now() - startTime;
};
console.log(variances(16))
const a = random(16)
console.log(a)
console.log(brute(a))
