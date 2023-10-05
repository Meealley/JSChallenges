const maskDebitCard = (cardNumber, visibleDigits = 4) => {
  // Check if the cardNumber is a valid string
  if (typeof cardNumber !== "string") {
    return "Invalid card number";
  }

  // Extract the last 'visibleDigits' characters
  const lastDigits = cardNumber.slice(-visibleDigits);

  // Replace all but the last 'visibleDigits' characters with asterisks
  const maskedPart = "$".repeat(cardNumber.length - visibleDigits) + lastDigits;
  return maskedPart;
};

// Example usage:
const debitCardNumber = "12345678901234"; // Replace with your debit card number
const maskedCardNumber = maskDebitCard(debitCardNumber);

console.log(maskedCardNumber); // Output: "************3456"
