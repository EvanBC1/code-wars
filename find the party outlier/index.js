function findOutlier(integers){
 let evenCounter = 0;
  let oddCounter = 0;
  let even;
  let odd;
  for(let i = 0; i < integers.length; i++) {
   if (integers[i] % 2 === 0) {
     even = integers[i];
     evenCounter++;
   } else {
     odd = integers[i];
     oddCounter++;
   }
   if (evenCounter > 1 && oddCounter === 1) {
     return odd;
   } else if (oddCounter > 1 && evenCounter === 1) {
     return even;
   }
 }
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));