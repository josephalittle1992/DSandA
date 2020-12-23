var arr = [2, 5, 5, 2, 3, 5, 1, 2, 4];
var arr2 = [2, 3, 4, 5, 6];

function firstChar(arr) {    //Using built in Map //O(1) time, O(n) space
    var map = new Map();
    if (arr.length > 2) {
        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                return arr[i];
            } else map.set(arr[i], null);
            
        }

    }
    return undefined;
}

function firstChar2(arr) {        //Using JS object //O(1) time, O(n) space
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[arr[i]] !== undefined) {
            return input[i];
        } else {
            map[arr[i] = i];
        }
    }
}

function expensiveFirstChar(arr) {   //O(n^2) -Returns wrong answer 2 because of the way it loops
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
}

console.log(expensiveFirstChar(arr));
