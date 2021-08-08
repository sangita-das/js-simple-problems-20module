// sum arry value by using for loop
let sum = 0;
const numbers = [44, 23, 534, 32, 54, 5, 78];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  // console.log(element);
  sum = sum + element;
  // console.log(sum);
}


//  Sum all value by using function
function arrayTotal(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
const total = arrayTotal([32, 45, 67])
console.log(total);