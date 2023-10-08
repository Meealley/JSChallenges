const sensoredWord = "Fuck you stupid Ass motherfucking idiot";

const correctWord = (word) => {
  const vowel = /[aeiouAEIOU]/g;
  return word.replace(vowel, "*");
};
console.log(correctWord(sensoredWord));

const fruits = "Banana,Orange,Apple,Mango";
console.log(fruits.slice(",").toString());
