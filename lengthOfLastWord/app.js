let words = "Hey Oyewale you are a favourite";

const lengthOfLastWord = (wor) => {
  let trimmed = wor.trim();
  return trimmed.length - trimmed.lastIndexOf(" ") - 1;
};

console.log(lengthOfLastWord(words));
