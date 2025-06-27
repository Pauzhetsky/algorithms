//! УРОВЕНЬ 1: БАЗОВЫЕ АЛГОРИТМЫ (BASIC ALGORITHMS)
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

//* 3. Разворот строки (String Reversal)
function reverseString(str) {
	return str.split('').reverse().join('')
}
// Тест
console.log(
	'3. Разворот строки (String Reversal):',
	reverseString('hello') === 'olleh'
) // true

//! УРОВЕНЬ 2: ПРОСТЫЕ АЛГОРИТМЫ (SIMPLE ALGORITHMS)
//* 4. Проверка на палиндром (Palindrome Check)
function isPalindrome(str) {
	const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')
	return clean === clean.split('').reverse().join('')
}
// Тест
console.log(
	'4. Проверка на палиндром (Palindrome Check):',
	isPalindrome('A man, a plan, a canal: Panama') === true
) // true

//* 5. Поиск анаграмм (Anagram Detection)
function areAnagrams(str1, str2) {
	const normalize = (str) =>
		str.toLowerCase().replace(/\s/g, '').split('').sort().join('')
	return normalize(str1) === normalize(str2)
}
// Тест
console.log(
	'5. Поиск анаграмм (Anagram Detection):',
	areAnagrams('listen', 'silent') === true
) // true

//* 6. Метод двух указателей (Two Pointers Technique)
function twoSumSorted(arr, target) {
	let left = 0
	let right = arr.length - 1

	while (left < right) {
		const sum = arr[left] + arr[right]
		if (sum === target) return [left, right]
		if (sum < target) left++
		else right--
	}
	return []
}
// Тест
console.log(
	'6. Метод двух указателей (Two Pointers):',
	JSON.stringify(twoSumSorted([2, 7, 11, 15], 9)) === JSON.stringify([0, 1])
) // true

//! УРОВЕНЬ 3: СОРТИРОВКИ O(n²) (SORTING)
//* 7. Сортировка пузырьком (Bubble Sort)
function bubbleSort(arr) {
	const result = [...arr]
	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result.length - i - 1; j++) {
			if (result[j] > result[j + 1]) {
				;[result[j], result[j + 1]] = [result[j + 1], result[j]]
			}
		}
	}
	return result
}
// Тест
console.log(
	'7. Сортировка пузырьком (Bubble Sort):',
	JSON.stringify(bubbleSort([5, 3, 8, 1])) === JSON.stringify([1, 3, 5, 8])
) // true

//* 8. Сортировка выбором (Selection Sort)
function selectionSort(arr) {
	const result = [...arr]
	for (let i = 0; i < result.length; i++) {
		let minIdx = i
		for (let j = i + 1; j < result.length; j++) {
			if (result[j] < result[minIdx]) minIdx = j
		}
		;[result[i], result[minIdx]] = [result[minIdx], result[i]]
	}
	return result
}
// Тест
console.log(
	'8. Сортировка выбором (Selection Sort):',
	JSON.stringify(selectionSort([7, 2, 4, 9])) === JSON.stringify([2, 4, 7, 9])
) // true

//* 9. Сортировка вставками (Insertion Sort)
function insertionSort(arr) {
	const result = [...arr]
	for (let i = 1; i < result.length; i++) {
		const current = result[i]
		let j = i - 1
		while (j >= 0 && result[j] > current) {
			result[j + 1] = result[j]
			j--
		}
		result[j + 1] = current
	}
	return result
}
// Тест
console.log(
	'9. Сортировка вставками (Insertion Sort):',
	JSON.stringify(insertionSort([6, 1, 9, 3])) === JSON.stringify([1, 3, 6, 9])
) // true

//! УРОВЕНЬ 4: ЭФФЕКТИВНЫЕ СОРТИРОВКИ (EFFICIENT SORTING)
//* 10. Быстрая сортировка (Quick Sort)
function quickSort(arr) {
	if (arr.length <= 1) return arr
	const pivot = arr[0]
	const left = []
	const right = []

	for (let i = 1; i < arr.length; i++) {
		arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
	}
	return [...quickSort(left), pivot, ...quickSort(right)]
}
// Тест
console.log(
	'10. Быстрая сортировка (Quick Sort):',
	JSON.stringify(quickSort([10, 2, 7, 4])) === JSON.stringify([2, 4, 7, 10])
) // true

//* 11. Сортировка слиянием (Merge Sort)
function mergeSort(arr) {
	if (arr.length <= 1) return arr
	const mid = Math.floor(arr.length / 2)
	const left = mergeSort(arr.slice(0, mid))
	const right = mergeSort(arr.slice(mid))

	return merge(left, right)
}

function merge(left, right) {
	const result = []
	let i = 0,
		j = 0

	while (i < left.length && j < right.length) {
		left[i] < right[j] ? result.push(left[i++]) : result.push(right[j++])
	}
	return [...result, ...left.slice(i), ...right.slice(j)]
}
// Тест
console.log(
	'11. Сортировка слиянием (Merge Sort):',
	JSON.stringify(mergeSort([12, 3, 8, 5])) === JSON.stringify([3, 5, 8, 12])
) // true

//* 12. Сортировка подсчетом (Counting Sort)
function countingSort(arr) {
	const max = Math.max(...arr)
	const count = Array(max + 1).fill(0)
	const result = []

	for (const num of arr) count[num]++
	for (let i = 0; i < count.length; i++) {
		while (count[i]--) result.push(i)
	}
	return result
}
// Тест
console.log(
	'12. Сортировка подсчетом (Counting Sort):',
	JSON.stringify(countingSort([4, 2, 2, 8, 3])) ===
		JSON.stringify([2, 2, 3, 4, 8])
) // true

//! УРОВЕНЬ 5: ПОИСК И СТРУКТУРЫ ДАННЫХ (SEARCH AND DATA STRUCTURES)
//* 13. Бинарный поиск (Binary Search)
function binarySearch(arr, target) {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (arr[mid] === target) return mid
		arr[mid] < target ? (left = mid + 1) : (right = mid - 1)
	}
	return -1
}
// Тест
console.log(
	'13. Бинарный поиск (Binary Search):',
	binarySearch([1, 3, 5, 7, 9], 5) === 2
) // true

//* 14. Реализация стека (Stack Implementation)
class Stack {
	constructor() {
		this.items = []
	}
	push(item) {
		this.items.push(item)
	}
	pop() {
		return this.items.pop()
	}
	peek() {
		return this.items[this.items.length - 1]
	}
}
// Тест
const stack = new Stack()
stack.push(1)
stack.push(2)
console.log(
	'14. Реализация стека (Stack Implementation):',
	stack.pop() === 2 && stack.peek() === 1
) // true

//* 15. Реализация очереди (Queue Implementation)
class Queue {
	constructor() {
		this.items = []
	}
	enqueue(item) {
		this.items.push(item)
	}
	dequeue() {
		return this.items.shift()
	}
	front() {
		return this.items[0]
	}
}
// Тест
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
console.log(
	'15. Реализация очереди (Queue Implementation):',
	queue.dequeue() === 1 && queue.front() === 2
) // true

//! УРОВЕНЬ 6: ДЕРЕВЬЯ И ГРАФЫ (TREES AND GRAPHS)
//* 16. Поиск в глубину (Depth-First Search)
class TreeNode {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

function dfsPreOrder(root) {
	const result = []
	function traverse(node) {
		if (!node) return
		result.push(node.value)
		traverse(node.left)
		traverse(node.right)
	}
	traverse(root)
	return result
}
// Тест
const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
console.log(
	'16. Поиск в глубину (Depth-First Search):',
	JSON.stringify(dfsPreOrder(tree)) === JSON.stringify([1, 2, 4, 3])
) // true

//* 17. Поиск в ширину (Breadth-First Search)
function bfs(root) {
	const result = []
	const queue = [root]

	while (queue.length) {
		const node = queue.shift()
		result.push(node.value)
		if (node.left) queue.push(node.left)
		if (node.right) queue.push(node.right)
	}
	return result
}
// Тест
console.log(
	'17. Поиск в ширину (Breadth-First Search):',
	JSON.stringify(bfs(tree)) === JSON.stringify([1, 2, 3, 4])
) // true

//! УРОВЕНЬ 7: СЛОЖНЫЕ АЛГОРИТМЫ (ADVANCED ALGORITHMS)
//* 18. Алгоритм Кадана (Kadane's Algorithm)
function maxSubarraySum(nums) {
	let max = nums[0]
	let current = nums[0]

	for (let i = 1; i < nums.length; i++) {
		current = Math.max(nums[i], current + nums[i])
		max = Math.max(max, current)
	}
	return max
}
// Тест
console.log(
	"18. Алгоритм Кадана (Kadane's Algorithm):",
	maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6
) // true

//* 19. Числа Фибоначчи (Fibonacci with Memoization)
function fibonacci(n, memo = {}) {
	if (n <= 2) return 1
	if (memo[n]) return memo[n]
	memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
	return memo[n]
}
// Тест
console.log('19. Числа Фибоначчи (Fibonacci):', fibonacci(10) === 55) // true

//* 20. Задача о рюкзаке (Knapsack Problem)
function knapSack(maxWeight, weights, values) {
	const n = weights.length
	const dp = Array(n + 1)
		.fill()
		.map(() => Array(maxWeight + 1).fill(0))

	for (let i = 1; i <= n; i++) {
		for (let w = 1; w <= maxWeight; w++) {
			if (weights[i - 1] <= w) {
				dp[i][w] = Math.max(
					values[i - 1] + dp[i - 1][w - weights[i - 1]],
					dp[i - 1][w]
				)
			} else {
				dp[i][w] = dp[i - 1][w]
			}
		}
	}
	return dp[n][maxWeight]
}
// Тест
console.log(
	'20. Задача о рюкзаке (Knapsack Problem):',
	knapSack(50, [10, 20, 30], [60, 100, 120]) === 220
) // true
