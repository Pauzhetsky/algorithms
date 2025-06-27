//! уровень 1: базовые алгоритмы (basic algorithms)
//* 3. Разворот строки (String Reversal)

function reverseString(str) {
	return str.split('').reverse().join('')
}

// Тест
console.log(
	'3. Разворот строки (String Reversal):',
	reverseString('hello') === 'olleh'
) // true
