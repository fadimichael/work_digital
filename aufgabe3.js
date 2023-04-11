// Bitte erstelle eine Funktion, welche zwei Zeichenketten( a und b ) annimmt.
//  Ausgegeben werden soll die Anzahl der Zeichenketten, welche die gleichen
//  zwei Buchstaben am gleichen Index enthalten.Die beiden Buchstaben müssen
//  auf aufeinanderfolgenden Indizes erscheinen.;
// Wenn z.B.a = "bbommzz" und b = "bbummz" ist, sollte die Funktion 3;
// zurückgeben, da "bb", "mm" und "mz" in beiden Zeichenketten an der gleichen
//  Stelle vorkommen.;
const strMatchBy2char = (a, b) => {
  let matchingCount = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === b[i] && a[i + 1] === b[i + 1]) {
      matchingCount++;
    }
  }
  return matchingCount;
};

console.log(strMatchBy2char("yytaazz", "yyjaaz")); //➞ 3
console.log(strMatchBy2char("edabit", "ed")); // ➞ 1
console.log(strMatchBy2char("", "")); // ➞ 0
