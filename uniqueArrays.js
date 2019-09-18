/*
Developed By: Mahmoud Gamal
This problem was asked by Facebook.

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.
*/

function getOnces(arr) {
    let onceItems = []
    
    for (const v of arr) {
        if (onceItems.indexOf(v)>=0) {
            onceItems.splice(onceItems.indexOf(v), 1)
        } else {
            onceItems.push(v)
        }
    }

    console.log(onceItems);
    return onceItems
}

getOnces ( [2, 4, 6, 8, 10, 2, 6, 10] )