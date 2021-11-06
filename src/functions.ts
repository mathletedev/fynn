import { BigNumber, combinations, ImportObject, permutations } from "mathjs";

export const functions: ImportObject = {
	perm: (n: BigNumber, k: BigNumber) => permutations(n, k),
	comb: (n: BigNumber, k: BigNumber) => combinations(n, k)
};
