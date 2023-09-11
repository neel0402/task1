// let str = "hello world"
// console.log(" str:", str)

// concat()

// let newstr = str.concat("test")
// console.log("🚀 ~ file: string.js:7 ~ newstr:", newstr)

// let index =str.indexOf("111")
// console.log(" ~ index:", index)

// let newstr = str.replace("H","my")
// console.log(" ~ newstr:", newstr)

// 1. print 9th and 10th index of array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(" arr:", arr)

let search = arr.indexOf(9)
console.log("Index of 9th:", search)

let search1 = arr.indexOf(10)
console.log("Index of 10th:", search1)


// 2. print every element of array by map and for loop

let mapmethod = arr.map((e) => {
    return e
})
console.log("mapmethod:", mapmethod)


// forloop method 

let formethod = arr.forEach((e) => {
    console.log(" ~ for arr ~ for:", e)
})




// 3. change a value of 6th index with 100 

arr.splice(6, 1, 100)
console.log(" changevalue:", arr)



// 4. print a array till element value not grater then 100

let lessthan = arr.filter((e) => {
    return e < 100
})
console.log("~ lessthan:", lessthan)


// 5. add 1 in every element of an array 

let addele = arr.map((e) => {
    return e + 1
})
console.log("addele:", addele)


// 6. add 0 in start of array 

arr.unshift(0)
console.log(" arr:", arr)

// 7. add  99 in end of array 

arr.push(99)
console.log("arr:", arr)

// 8. remove 1 element from start of  array 

arr.shift()
console.log("remove ele from starting ", arr)

// 9. remove 1 element from end of array 

arr.pop()
console.log("remove ele from ending :", arr)

// 10. do sum of all value of an array with use of map, reduce and for-loop 

//first method map



// 11. sort a array in acending decending 

let a = (a, b) => a - b
arr.sort(a)
console.log("assending order:", arr)

// decending array

let b = (a, b) => b - a
arr.sort(b)
console.log("assending order:", arr)

// 12. reverce an array with use of method

arr.reverse()
console.log("~ arr:", arr)

// 13. reverce an array with use of for-loop

let reversed_array = []
for (let i = arr.length - 1; i >= 0; i--) {
  reversed_array.push(arr[i]);
}

console.log("~ reversed_array:", reversed_array)

// [1,2,3] => [3,2,1] [2,1]

// =========================================================

// task-2
let Arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]

// 1. give all value which can devided by 2 - not use filter
for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] % 2 == 0) {
    console.log(" ~ i arr:", Arr[i])
  }
}

// 2. give all value above 3 by use of filter

let FillArr = Arr.filter((e) => {
  return e > 3
})
console.log("FillArr:", FillArr)

// 3. give index of 56

let FindArr = Arr.findIndex((e) => {
  return e == 56
})
console.log("FindArr:", FindArr)

// 4. give true/false result when check given value is exists in array or not

let check = arr.map((e) => {
  return e == 7
})
console.log("~ check:", check)

// ========================================================
// task-3

// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i']


let str = ['i', 'am', 'urvish']

//Revres a string by loop

let reversed_String = []
for (let i = str.length - 1; i >= 0; i--) {
  reversed_String.push(str[i]);
}
console.log("🚀 ~ file: task3.js:137 ~ reversed_String:", reversed_String)

// by map
let reversed_String_1 = str.map((str) => {
  return str; // or any logic you want to perform
}).reverse();
console.log("🚀 ~ file: string.js:174 ~ reversed_String_1:", reversed_String_1)


// 2. want "i am urvish" without use join method


let ToString = str.toString().replace(/\,/g, " ")
console.log(" ToString:", ToString)
/*

=========================================================
task-4

['i','am', 'urvish'] ==> want ['hsivru','ma','i']
by use of loop
*/
let Name = ['i', 'am', 'urvish']
for (let i = Name.length - 1; i >= 0; i--) {
  let ame = Name[i].split(" ")
  console.log("🚀 ~ file: task3.js:183 ~ Name:", ame)
}