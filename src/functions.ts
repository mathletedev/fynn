import { combinations, ImportObject, permutations } from "mathjs";

export const functions: ImportObject = {
	p: permutations,
	c: combinations,
	bn: (n: number, k: number, p: number) =>
		combinations(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k),
	bp: (n: number, k: number) => permutations(n, k) / Math.pow(n, k),
	z: (z: number) => {
		if (z < -6.5) return 0;
		if (z > 6.5) return 1;

		let f = 1;
		let s = 0;
		let t = 1;
		let k = 0;
		let l = Math.exp(-23);

		while (Math.abs(t) > l) {
			t =
				(((0.3989422804 * Math.pow(-1, k) * Math.pow(z, k)) /
					(2 * k + 1) /
					Math.pow(2, k)) *
					Math.pow(z, k + 1)) /
				f;
			s += t;
			k++;
			f *= k;
		}

		return s + 0.5;
	}
};
