// Bitte erstelle eine Funktion, welche bei der Eingabe einer Zahl zwischen 1 und 26
// den Buchstaben an der entsprechenden Stelle des Alphabets zurückgibt.Wenn
//  die Zahl nicht in diesem Bereich liegt oder keine gültige Zahl ist,
//  dann gebe „invalid“ zurück.
const leveller = 64;
let letterAtPosition = (num) => {
  if (num < 1 || num > 26 || !Number.isInteger(num)) {
    console.log("invalid");
  } else {
    console.log(String.fromCharCode(num + leveller).toLowerCase());
  }
};
letterAtPosition(1); //➞ "a"
letterAtPosition(26.0); // ➞ "z"
letterAtPosition(0); //➞ "invalid"
letterAtPosition(4.5); // ➞ "invalid"
