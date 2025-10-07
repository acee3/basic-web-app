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

  return "";
}
