//! Уровень 1: базовые алгоритмы (basic algorihtms)
//* 1. Линейный поиск (Linear Search)

function linearSearch(arr, target) {
	// Итерация по всем элементам массива
	for (let i = 0; i < arr.length; i++) {
		// Проверка совпадения текущего элемента с искомым значением
		if (arr[i] === target)
			// Возврат индекса при нахождении совпадения
			return i
	}
	// Возврат -1 если элемент не найден после полного прохода
	return -1
}

// Тестирование функции
console.log(
	'1. Линейный поиск (Linear Search):',
	linearSearch([3, 7, 2, 9], 2) === 2, // true (элемент найден)
	linearSearch([1, 2, 3], 4) === -1, // true (элемент отсутствует)
	linearSearch([], 5) === -1, // true (пустой массив)
	linearSearch([5], 5) === 0, // true (один элемент)
	linearSearch([2, 2, 2], 2) === 0 // true (дубликаты)
)
