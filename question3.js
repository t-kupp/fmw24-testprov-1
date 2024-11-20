// 3. JavaScript - Arrayer (3p)
// Skriv en funktion, filterEvenNumbers, som tar en array av tal och returnerar
// en ny array med bara jämna tal.

filterEvenNumbers([1, 2, 3, 4, 5]); // Returnerar [2, 4]

function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 == 0)
}

module.exports = filterEvenNumbers;
