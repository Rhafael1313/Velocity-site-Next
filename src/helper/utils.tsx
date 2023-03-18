export const REAL = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
});

export function chunk<T>(arr: T[], num: number): T[][] {
	const newList: T[][] = [];
	for (const item of arr) {
		if (newList.length === 0)
			newList.push([item]);
		else if (newList[newList.length - 1].length < num)
			newList[newList.length - 1].push(item);
		else
			newList.push([item]);
	}
	return newList;
}