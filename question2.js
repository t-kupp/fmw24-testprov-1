// 2. Variabler och Strängar (3p)
// Skriv en funktion, capitalizeFirstLetters, som tar en sträng som input
// och returnerar en ny sträng där första bokstaven i varje ord är stor bokstav.

capitalizeFirstLetters("webbutveckling är kul"); // Returnerar "Webbutveckling Är Kul"

function capitalizeFirstLetters(string) {
  let words = string.split(" ");
  let result = [];
  words.forEach((word) => {
    result.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return result.join(" ");
}

module.exports = capitalizeFirstLetters;
