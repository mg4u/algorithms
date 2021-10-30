/**
 * Developed By Mahmoud Gamal
 * 
 * Daily Coding Problem: Problem #892
 * 
 * This problem was asked by Google.
 * The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.
 * 
 * For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
 * 
 * You may also use a list or array to represent a set.
 */

function getSetOfSets(ls) {
    let output= [[]]
    for (let i = 0; i < ls.length; i++) {
        const e = ls[i].toString();
        output.push([e])
        let s= e
        let push = false
        for (let j = i+1; j < ls.length; j++) {
            const e2 = ls[j].toString();
            output.push([e,e2])
            s += ','+e2
            
            if (j != i + 1) {
                output.push(s.split(','))
            }
        }
    }

    return output
}

const output = getSetOfSets([1,2,3,4])
console.log(output);