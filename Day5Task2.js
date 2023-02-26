// QNo1: Print odd numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd =(array)=>{
  let a = [];
  for (let i=0;i<array.length;i++) {
    if (array[i] % 2 !== 0) {
      a.push(array[i]);
    }
  }
  return a;
}
console.log(odd(arr));

// QNO2: Convert all the strings to title caps in a string array

let arr = ["hello guvi"];

let title =(array)=>{
  let result = [];
  for (let i=0;i<array.length;i++) {
    let str = array[i].toLowerCase().split(' ');
    for (let j = 0; j < str.length; j++) {
      str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
    }
    result.push(str.join(' '));
  }
  return result;
}
console.log(title(arr));

// QNo3:Sum of all numbers in an array

let num = [1, 2, 3, 4, 5];

let sum =(array)=>{
  let sum = 0;
  for (let i=0;i<array.length;i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sum(num));

// QNo4:Return all the prime numbers in an array

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let prime =arr.filter(num =>{
  for (let i=2;i<num;i++)
    if (num % i === 0) return false;
  return num !== 1;
});

console.log(prime);

// QNo5: Return all the palindromes in an array

let arr = ["amma", "appa", "hello", "akka", "guvi"];

let palin =arr.filter(str=>{
  return str === str.split('').reverse().join('');
});

console.log(palin);



