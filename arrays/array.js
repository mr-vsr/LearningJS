//Here we have dsicussed in detail about arrays and its declaration and various options and some important concepts and methods

// => Declaration of Arrays

// let myArr = [1, true, "hello"]
// console.log(typeof myArr)//Output => object
// console.log(myArr)

// let myArr1 = new Array(4)//Declares an array of size 4
// console.log(myArr1.length)

// let myArr2 = new Array(1, true, "Hello")//Declares an array with these elements
// console.log(myArr2)


// let myArr = [1, 2, 3, 4, 5]
// console.log(myArr.length)//Output => 5
// console.log(myArr)

// myArr[10] = 7 //This simply adds 7 at 10th index position and increases the array size
// console.log(myArr.length)//Output => 11
// console.log(myArr)

//Functions on array

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.includes(6))//Output => false because that element is not present in the array
// console.log(arr.indexOf(7))//Output => -1 because that element doesn't exists in the array

//difference between slice and splice

// let arr1 = arr.slice(1, 3)//This takes out a part of the array starting from given index and one less than the end value. Doesn't affect the original array
// console.log(arr)
// console.log(arr1)

// let arr2 = arr.splice(1, 3)//This actually takes out the array starting from given start index and including the end index. Rest of the elements remain in the original array
// console.log(arr)
// console.log(arr2)

// let arr = [1, 2, 3, 4]
// let arr1 = [5, 6, 7, 8]

// let arr2 = [...arr, ...arr1] //Spreading two arrays in another array
// console.log(arr2)

// let newArr = arr.concat(arr1) //This is another way how we can merge two arrays together
// console.log(newArr)

// let a = arr.join()//Converts the array into a specified separtor separated string
// console.log(arr)
// console.log(a)
// console.log(typeof a)//Output => string


// console.log(Array.from("Vikas"))//Converts the given parameter into array
// console.log(Array.from([1, 2, 3], (x) => x + x))

console.log(Array.of('aaa', 1, 2, true))//Converts all the parameter passed in it into array