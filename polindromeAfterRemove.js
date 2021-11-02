/** 
 * Developed By Mahmoud Gamal
 * 
 * Daily Coding Problem: Problem #895
 * 
 * This problem was asked by Google.
 * 
 * Given a string which we can delete at most k, return whether you can make a palindrome.
 * For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.
 */

function getPalindromeWord(str, k) {
    const n = str.length
    let removeChars= []
    let removeIndeses= []
    let returnWord= ''
    let y = 0 // to know how many iteration run to check the whole process
    for (let i = 0; i < n; i++) {
        y++
        const c = str[i];
        const p1= n-1-i-removeChars.length
        const c1 = str[p1];
        if (c == c1) {
            continue
        }
        for (let j = 1; j <= k; j++) {
            y++
            const p2 =p1-j
            const c2 = str[p2];
            if (c == c2 ) {
                for (let x = 0; x < j; x++) {
                    y++
                    const p3 =p1-x
                    const c3 = str[p3];
                    removeChars.push({p3, c3})
                    removeIndeses.push(p3)
                }
                continue
            }
        }
    }
    // console.log( removeChars, removeIndeses, y);

    for (const i in str) {
        y++
        if (removeIndeses.indexOf(parseInt(i)) == -1) {
            returnWord+=str[i]
        }
    }
    
    // check after all if the word is Palindrome or not
    let isPolindrome= true
    for (let i = 0; i < returnWord.length; i++) {
        y++
        const c = returnWord[i];
        const c2 = returnWord[returnWord.length-1-i];
        if (c != c2) {
            isPolindrome = false
            break
        }
    }
    return {returnWord, removeIndeses, removeChars, success: isPolindrome && removeIndeses.length <= k, y}
}

// Start Test
const test=[
    {str: 'waterretfaxwx', k: 3, success: false},
    {str: 'waterretfaxwx', k: 2, success: false},
    {str: 'abcdxecba', k: 2, success: true},
    {str: 'hi man', k: 3, success: false},
]
for (const item of test) {
    const {str, k, success} = item
    const r = getPalindromeWord(str, k)
    if (r.success) {
        console.info(r);
    } else {
        console.error(r);
        
    }
}
    