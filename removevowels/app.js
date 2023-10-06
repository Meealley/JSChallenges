const sensoredWord = "Fuck you stupid Ass motherfucking idiot";

const correctWord = (word) => {
  const vowel = /[aeiouAEIOU]/g;
  return word.replace(vowel, "*");
};
console.log(correctWord(sensoredWord));
