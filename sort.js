const numbers = [6, 3, 7, 90];
// console.log(numbers);
numbers.sort();
// console.log(numbers);


const friends = ['moga', 'toga', 'pagols', 'sagols'];
friends.sort();
// console.log(friends);


const ages = [ 2, 5, 6, 78, 78, 89, 100];
// console.log(ages);
// ages.sort();
// console.log(ages);

// accending
const sorted_ages = ages.sort(function(a, b) { return a - b })
// console.log(sorted_ages)



// decending
const sorted_ages_desc = ages.sort(function(a, b) { return b - a })
console.log(sorted_ages_desc)