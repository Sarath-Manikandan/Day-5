//Q No1: Print odd numbers in an array

// Using anonymous function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = function(array) {
  let a = [];
  for (let i=0;i<array.length;i++) {
    if (array[i]%2!==0) {
      a.push(array[i]);
    }
  }
  return a;
}
console.log(odd(arr));

// Using IIFE function:

let odd1 = (function(array) {
  let a = [];
  for (let i=0;i<array.length;i++) {
    if (array[i]%2!==0) {
      a.push(array[i]);
    }
  }
  return a;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(odd1);

// Q No2: Convert all the strings to title caps in a string array

// Using anonymous function
let arr = ["hello guvi"];
let title = function(array) {
  let result = [];
  for (let i=0;i<array.length;i++) {
    let str=array[i].toLowerCase().split(' ');
    for (let j=0;j<str.length;j++) {
      str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
    }
    result.push(str.join(' '));
  }
  return result;
}
console.log(title(arr));

// Using IIFE method

let title = (function(array) {
  let result = [];
  for (let i=0;i<array.length;i++) {
    let str =array[i].toLowerCase().split(' ');
    for (let j=0;j<str.length;j++) {
      str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
    }
    result.push(str.join(' '));
  }
  return result;
})(["hello guvi"]);
console.log(title)


// QNO3: Sum of all numbers in an array

// Using anonymous function
let num = [1, 2, 3, 4, 5];
let sum = function(array) {
  let sum = 0;
  for (let i=0;i<array.length;i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sum(num));

//Using IIFE function

let result = (function(arr) {
  let result = 0;
  for (let i=0;i<arr.length;i++) {
    result = result + arr[i];
  }
  return result;
})([1, 2, 3, 4, 5]);

console.log(result)

// QNO4: Return all the prime numbers in an array

// Using anonymous function

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let prime = arr.filter(function(num) {
    for(let i =2;i<num;i++)
        if(num % i === 0) return false;
    return num !== 1;
});
console.log(prime); 

// Using IIFE function
 
let prime = (function(arr) {
  return arr.filter(function(num) {
      for(let i =2;i<num;i++)
          if(num % i === 0) return false;
      return num !== 1;
  });
})([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log(prime);

// QNo5: Return all the palindromes in an array

// Using anonymous function
let arr = ["amma", "appa", "hello", "akka", "guvi"];
let palin = arr.filter(function(str) {
    return str === str.split('').reverse().join('');
});
console.log(palin);

// Using IIFE function

let palin = (function(arr) {
  return arr.filter(function(str) {
      return str === str.split('').reverse().join('');
  });
})(["appa", "amma", "hello", "akka", "guvi"]);
console.log(palin); // Output: ["level", "noon", "madam"]

// QNO6: Return median of two sorted arrays of the same size

// Using anonymous function
let arr1 = [1, 3, 5, 7, 2];
let arr2 = [2, 4, 6, 8, 10];
let medianArr = function(arr1, arr2) {
  let combined = arr1.concat(arr2).sort((a, b) => a - b);
  let index = Math.floor(combined.length / 2);
  return combined[index];
};
let median = medianArr(arr1, arr2);
console.log(median);

// Using IIFE function
let arr1 = [1, 3, 5, 7, 2];
let arr2 = [2, 4, 6, 8, 10];
let medianArr = (function(arr1, arr2) {
  let combined = arr1.concat(arr2).sort((a, b) => a - b);
  let index = Math.floor(combined.length / 2);
  return combined[index];
})(arr1,arr2);
console.log(medianArr);

// QNO7: Remove duplicates from an array

// Using anonymous function

let arr = [1, 2, 3, 4, 3, 2, 1];
function remove(arr) {
  let unique = [];
  for (let i=0;i<arr.length;i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(remove(arr));

// Using IIFE function
let unique = (function(arr) {
  let arr1 = [];
  for (let i=0;i<arr.length;i++) {
    if (arr1.indexOf(arr[i]) === -1) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
})([1, 2, 3, 4, 3, 2, 1]);

console.log(unique);


// QNO8: Rotate an array by k times

// Using anonymous function
let arr = [1, 2, 3, 4, 5];
let k = 3;

let rotate = function(array, count) {
  for (let i=0;i<count;i++) {
    array.push(array.shift());
  }
  return array;
};
let final = rotate(arr, k);
console.log(final);

// Using IIFE function
let rotate = (function(array, count) {
  for (let i=0;i<count;i++) {
    array.push(array.shift());
  }
  return array;
})([1, 2, 3, 4, 5],3);
console.log(rotate);

