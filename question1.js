// 1. Kontrollera körkortsålder (3p)
// Skriv en funktion canGetDrivingLicense som tar en persons ålder som
// parameter och returnerar en sträng beroende på åldern:

function canGetDrivingLicense(age) {
  if (age < 16) return "För ung för att köra bil";
  if (age <= 17) return "Kan övningsköra";
  if (age >= 18) return "Kan få körkort";
}

// Om personen är under 16: returnera "För ung för att köra bil".
// Om personen är 16 eller 17 år: returnera "Kan övningsköra".
// Om personen är 18 år eller äldre: returnera "Kan få körkort".

console.log(canGetDrivingLicense(15)); // Ska logga: "För ung för att köra bil"
console.log(canGetDrivingLicense(16)); // Ska logga: "Kan övningsköra"
console.log(canGetDrivingLicense(18)); // Ska logga: "Kan få körkort"

module.exports = canGetDrivingLicense
