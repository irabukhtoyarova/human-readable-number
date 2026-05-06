module.exports = function toReadable(number) {
  const result = [];
  let num = number;
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  if (number === 0) return 'zero';
  if (num >= 100) {
    const hundredCount = Math.floor(num / 100);
    result.push(`${ones[hundredCount]} hundred`);
    num %= 100;
  }
  if (num >= 10 && num <= 19) {
    result.push(teens[num]);
    num = 0;
  }
  if (num >= 20 && num <= 99) {
    const tensCount = Math.floor(num / 10);
    result.push(tens[tensCount]);
    num %= 10;
  }
  if (num > 0 && num <= 9) {
    result.push(ones[num]);
  }
  return result.join(' ');
};
