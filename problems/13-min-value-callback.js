/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
let minvalue = function(arr){
    let min = arr[0];
    arr.filter(function(ele){
        if(ele < min){
            min = ele
        }
    })
    // for(i=1; i<arr.length; i++){
    //     let ele = arr[i];
    //     if(ele < min){
    //         min = ele
    //     }
    // }
    return min
};

let minValueCallback = function(array, cb) {
    if(cb !== undefined){
        let newArray = [];
        for(j=0; j<array.length; j++){
            let el = array[j];
            newArray.push(cb(el))
        }
        return (minvalue(newArray))

    }else{
        return minvalue(array)
    }

};


console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
