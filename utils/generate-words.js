/**
 * Per la lista di parole si ringrazia:
 * https://github.com/napolux/paroleitaliane/tree/master/paroleitaliane
 */
const fs = require("fs");
const words = fs
  .readFileSync("./parole_italiane_comuni.txt", "utf8")
  .split("\n");

fs.writeFileSync("../src/translate/it.json", JSON.stringify({ words }));
