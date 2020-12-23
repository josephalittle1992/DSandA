//Solution 1
function reverse(str) {
    ans = [];
    for (i = str.length - 1; i >= 0; i--) {
        ans.push(str[i]);
    }
    return ans.join('');
}

//Solution 2
function reverse2(str) {
    str.split('').reverse().join('');
}

//Solution 3
const reverse3 = str => [...str].reverse().join('');

//Test Case
test1 = 'hello';

console.log(reverse(test1));
console.log(reverse3(test1));