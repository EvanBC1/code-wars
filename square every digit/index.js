function squareDigits(num){
  let currentNum;
  let finalNum = '';
  let reversedNum = '';
  // reversing number
  while (num > 0) {
    reversedNum = reversedNum + num % 10;
    num = Math.floor(num / 10);
  }
  // squaring numbers
  while (reversedNum > 0) {
    currentNum = (reversedNum % 10) * (reversedNum % 10);
    reversedNum = Math.floor(reversedNum / 10);
    console.log(currentNum, ' ', reversedNum);
    finalNum = finalNum + currentNum;
  }
  return parseInt(finalNum);
}

console.log(squareDigits(4321));