import italianDict from "./it.json";

/**
 * Converte un testo inserito dall'utente in stegosaurese.
 *
 * @param {string} text
 */
export function translateStringToStego(text) {
  return text.replace(/([a-zA-Z]+)/g, token => tokenToStego(token));
}

/**
 * Operazione inversa di `translateStringToStego`
 * @param {string} text
 */
export function translateStegoToString(text) {
  return text.replace(/([🦕|🦖]{2})/gu, phoneme =>
    stegoToRandomItalian(phoneme)
  );
}

/**
 * Genera una funzione per controllare che il codepoint sia in un range.
 */
function generateRange(start, end) {
  return t => t >= start.codePointAt(0) && t < end.codePointAt(0);
}

const StegoPhonemesDict = {
  "🦕🦕": generateRange("a", "e"),
  "🦖🦖": generateRange("e", "m"),
  "🦕🦖": generateRange("m", "q"),
  "🦖🦕": generateRange("q", "z")
};

/**
 * Genera una funzione che, a partire da un fonema stegosaurese, restituisce
 * una parola casuale italiana che sia traducibile con lo stesso fonema
 */
function generateRandomPickerFromPhoneme(phoneme) {
  const haystack = italianDict.words.filter(w =>
    StegoPhonemesDict[phoneme](w.toLowerCase().codePointAt(0))
  );

  return () => {
    return haystack[Math.floor(Math.random() * haystack.length - 1)];
  };
}

const StegoPhonemeReverse = {
  "🦕🦕": generateRandomPickerFromPhoneme("🦕🦕"),
  "🦖🦖": generateRandomPickerFromPhoneme("🦖🦖"),
  "🦕🦖": generateRandomPickerFromPhoneme("🦕🦖"),
  "🦖🦕": generateRandomPickerFromPhoneme("🦖🦕")
};

/**
 * Converte una stringa in stegosaurese.
 *
 * @param {string} token La stringa da convertire.
 */
function tokenToStego(token) {
  const codePoint = token.toLowerCase().codePointAt(0);
  return Object.keys(StegoPhonemesDict).find(phoneme =>
    StegoPhonemesDict[phoneme](codePoint)
  );
}

/**
 * Converte un fonema stegosaurese in una (improbabile) traduzione italiana.
 */
function stegoToRandomItalian(phoneme) {
  console.log("phoneme is", phoneme, StegoPhonemeReverse[phoneme]);
  return StegoPhonemeReverse[phoneme]();
}
