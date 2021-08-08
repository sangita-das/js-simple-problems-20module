const business = 450;
const minister = 350;
const army = 600;

/* // compare 2 

if (business > minister) {
  console.log('Business person er pola is bigger');
}
else {
  console.log('minister er pola is bigger');
}
 */



// compare 3 

/* if (business > minister && business > army) {
  console.log('business is bigger');
}
else if (minister > business && minister > army) {
  console.log('minister is bigger');
}
else {
  console.log('army is bigger');
}
 */



var max = Math.max(business, minister, army);
console.log('largest is', max);


// compare value using function
function findLargest(first, second) {
  if (first > second) {
    return first;
  }
  else {
    return second;
  }
}

const largest = findLargest(354, 822);
console.log('largest is', largest);