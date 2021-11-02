/** 
 * Developed By Mahmoud Gamal
 * 
 * Daily Coding Problem: Problem #896
 * 
 * This question was asked by ContextLogic.
 * 
 * Implement division of two positive integers without using the division, multiplication, or modulus operators.
 * Return the quotient as an integer, ignoring the remainder.
 * 
 */

function divide(a, b) {
    if (b < a) {
        return 0
    } else if( b - a < a ){
        return 1
    }
    
    let result = 0
    for (let i = a; i <= b; i += a) {
        result++
    }
    return result 
}

// Start Test
const numbersToTest=[
    {a: 2, b: 1, expected_r: 0},
    {a: 2, b: 2, expected_r: 1},
    {a: 2, b: 3, expected_r: 1},
    {a: 2, b: 4, expected_r: 2},
    {a: 2, b: 5, expected_r: 2},
    {a: 3, b: 10, expected_r: 3},
]
for (const item of numbersToTest) {
    const {a, b, expected_r} = item
    const r = divide(a,b)
    const success= r == expected_r
    if (success) {
        console.info(a, b, r, success);
    } else {
        console.error(a, b, r, success);
        
    }
    
}