import { BigNumber, combinations, ImportObject, permutations } from "mathjs";

export const functions: ImportObject = {
	perm: (n: BigNumber, k: BigNumber) => permutations(n, k),
	comb: (n: BigNumber, k: BigNumber) => combinations(n, k),
	bino: (n: number, k: number, p: number) =>
		combinations(n, k) * Math.pow(p, n) * Math.pow(1 - p, n - k),
	bp: (n: number, k: number) => permutations(n, k) / Math.pow(n, k)
};
