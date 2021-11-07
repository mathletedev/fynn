import { combinations, ImportObject, permutations } from "mathjs";

export const functions: ImportObject = {
	bino: (n: number, k: number, p: number) =>
		combinations(n, k) * Math.pow(p, n) * Math.pow(1 - p, n - k),
	bp: (n: number, k: number) => permutations(n, k) / Math.pow(n, k)
};
