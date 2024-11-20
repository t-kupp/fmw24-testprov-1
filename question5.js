// 5. Funktioner och Scope (3p)
// Skriv en funktion, calculateSum, som tar en array av nummer och returnerar summan av alla tal.
// Funktionen ska använda en lokal variabel för att lagra summan.

calculateSum([1, 2, 3, 4]); // Returnerar 10

function calculateSum(numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(calculateSum([5,55, 234, 11, 1, 0]));
