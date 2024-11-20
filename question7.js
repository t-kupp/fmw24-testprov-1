//7. Random Numbers (3p)
// Skriv en funktion, generateRandomNumbers, som genererar en array med 10
// slumpmässiga heltal mellan två angivna gränser.

generateRandomNumbers(10, 90);
// Returnerar exempelvis: [5, 67, 34, 12, 89, 45, 23, 78, 56, 90]

function generateRandomNumbers(min, max) {
  let randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return randomNumbers;
}

module.exports = generateRandomNumbers;
