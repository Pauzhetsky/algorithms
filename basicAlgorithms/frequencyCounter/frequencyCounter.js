//! уровень 1: базовые алгоритмы (basic algorithms)
//* 2. Подсчет частоты элементов (Frequency Counter)

function frequencyCounter(arr) {
	const map = new Map()
	for (const item of arr) {
		map.set(item, (map.get(item) || 0) + 1)
	}
	return map
}
// Тест
console.log(
	'2. Подсчет частоты (Frequency Counter):',
	JSON.stringify([...frequencyCounter(['a', 'b', 'a', 'c'])]) ===
		JSON.stringify([
			['a', 2],
			['b', 1],
			['c', 1],
		])
) // true
