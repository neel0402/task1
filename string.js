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
    console.log("🚀 ~ file: string.js:40 ~ for ~ for:", e)
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
