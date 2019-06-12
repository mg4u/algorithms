import {getSubSequences} from './getSubSequences.js'
function longestSubsequence(x, y) {
    // Write your code here
    // 1- get subsequence of string x
    let subSequences1 = getSubSequences(x);
    // console.log('subSequences1',subSequences1)
    // 2- get subsequence of string y
    let subSequences2 = getSubSequences(y);
    // console.log('subSequences2',subSequences2)
    // 3- get longestSubsequence common in tow strings x and y
    let longestSubsequence = 0;
    let longestSubsequenceStr
    for (let i = 0; i < subSequences1.length; i++){
        if (subSequences2.indexOf(subSequences1[i]) >= 0 && subSequences1[i].length >= longestSubsequence) {
        	// console.log(subSequences1[i])
            longestSubsequence=subSequences1[i].length
            longestSubsequenceStr=subSequences1[i]
        }
    }
    console.log(longestSubsequenceStr)
    return longestSubsequence
}

var x = 'abc';
var y = 'aedace';
console.log(longestSubsequence(x,y));

var x = 'hackerranks';
var y = 'hackers';
console.log(longestSubsequence(x,y));