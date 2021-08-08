// task 1 : create a function that takes three numbers as input parameter and returns you the largest number of the three.

function threeNumber(first, second, third) {
  if (first > second && first > third) {
    return first;
  }
  else if (second > first && second > third) {
    return second;
  }
  else {
    return third;
  }
}
const largest = threeNumber(45, 120, 90);
console.log('The largest number is:', largest);



// task 1 : create a function that takes three numbers as input parameter and returns you the smallest number of the three.

function compareNumber(first, second, third) {
  if (first < second && first < third) {
    return first;
  }
  else if (second < first && second < third) {
    return second;
  }
  else {
    return third;
  }
}

const output = compareNumber(900, 1200, 500);
console.log('smallest number is:', output);


// task 3 ; find the lowest element of an array
function lowestElement(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < lowest) {
      lowest = element;
    }

  }
  return lowest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const lowest = lowestElement(ages);

console.log('lowest', lowest)