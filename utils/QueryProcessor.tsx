export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "alexcheu";
  }

  if (query.toLowerCase().includes("name")) {
    return "alexcheu";
  }

  if (query.toLowerCase().includes("api")) {
    return "alexcheu";
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers && numbers.length >= 2) {
      const sum = numbers
        .slice(0, 2)
        .map((num) => parseInt(num, 10))
        .reduce((a, b) => a + b, 0);
      return sum.toString();
    } else {
      return "Please provide at least two numbers to add.";
    }
  }

  // implement times and divide and minus
  if (query.toLowerCase().includes("multiplied by") || query.toLowerCase().includes("times")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers && numbers.length >= 2) {
      const product = numbers
        .slice(0, 2)
        .map((num) => parseInt(num, 10))
        .reduce((a, b) => a * b, 1);
      return product.toString();
    } else {
      return "Please provide at least two numbers to multiply.";
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers && numbers.length >= 2) {
      const difference = parseInt(numbers[0], 10) - parseInt(numbers[1], 10);
      return difference.toString();
    } else {
      return "Please provide at least two numbers to subtract.";
    }
  }

  if (query.toLowerCase().includes("divided by")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers && numbers.length >= 2) {
      if (parseInt(numbers[1], 10) === 0) {
        return "Cannot divide by zero.";
      }
      const quotient = parseInt(numbers[0], 10) / parseInt(numbers[1], 10);
      return quotient.toString();
    } else {
      return "Please provide at least two numbers to divide.";
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers && numbers.length >= 2) {
      const largest = Math.max(...numbers.map((num) => parseInt(num, 10)));
      return largest.toString();
    } else {
      return "Please provide at least two numbers to compare.";
    }
  }

  return "";
}
