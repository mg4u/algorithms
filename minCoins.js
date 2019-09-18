/*

Developeed By MAhmoud Gamal

This problem was asked by Google.

Find the minimum number of coins required to make n cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.

*/

function getCoinNum(amount, coin) {
    console.log('start ', coin , amount);
    
    if (amount < coin) {
        return 0
    }
    let num = amount/coin
    let mod = amount%coin

    // console.log('num', num);
    // console.log('num', Math.floor(num));
    // console.log('mod', mod);
    return Math.floor(num)
}

function getCoins(amount) {
    // how many 25
    let coins25= getCoinNum(amount, 25)
    console.log('coins 25', coins25);
    
    amount = amount - (coins25 * 25)

    // how many 10
    let coins10= getCoinNum(amount, 10)
    console.log('coins 10', coins10);
    
    amount = amount - (coins10 * 10)

    // how many 5
    let coins5= getCoinNum(amount, 5)
    console.log('coins 5', coins5);
    
    amount = amount - (coins5 * 5)

    // how many 1
    let coins1= getCoinNum(amount, 1)
    console.log('coins 1', coins1);
    
    amount = amount - (coins1 * 1)

}

getCoins (16)