let countBits = function(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      n = (n - 1) / 2;
      count++;
      console.log(n);
    } else {
      n = n / 2;
      console.log(n);
    }
  }
  return count;
};

console.log(countBits(1234));