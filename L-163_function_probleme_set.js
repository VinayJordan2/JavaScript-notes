/*
21/11/2017
printReverse()
Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't actually revese the array itself
 */

//printReverse([1,2,3,4]);
//4
//3
//2
//1



function  printReverse (arr) {
    for (var i = arr.length - 1; i >= 0 ; i--) {
        console.log(arr[i]);
    }
}

printReverse([5,4,3,2,1]);

/*
Write a function isUniform() which takes an array as an argument
and return true if all elements in the array are identical
 */

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false
        }
    }
    return true;
}

isUniform([1,1,1]);
isUniform([2,1,2]);

/*
Write a function sumArray() that accept an array of numbers and return the sum of
all numbers in the array
 */

function sumArray (arr) {
    var total = 0;
    arr.forEach(function (t) {
        total += t;
    });
    return total;
}

/*
Write a function max() that accepts an array of numbers and returns the maximum
number in the array
 */

function max (arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;

}
