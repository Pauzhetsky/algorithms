//! уровень 1: базовые алгоритмы (basic algorithms)
//* 1. Линейный поиск (Linear Search)

function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i
	}
	return -1
}
// Тест
console.log(
	'1. Линейный поиск (Linear Search):',
	linearSearch([3, 7, 2, 9], 2) === 2
) // true