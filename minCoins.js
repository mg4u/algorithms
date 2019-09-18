/*

Developeed By MAhmoud Gamal

This problem was asked by Google.

Find the minimum number of coins required to make n cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.

*/

function getCoinNum(amount, coin) {
    
    if (amount < coin) {
        return { num: 0, amount}
    }
    let num = Math.floor( amount/coin )
    amount = amount -  num * coin
    return {num, amount}
}

function getCoins(amount) {
    // how many 25
    let coins25= getCoinNum(amount, 25)
    console.log('coins 25', coins25.num );
    
    amount = coins25.amount

    // how many 10
    let coins10= getCoinNum(amount, 10)
    console.log('coins 10', coins10.num );
    
    amount = coins10.amount

    // how many 5
    let coins5= getCoinNum(amount, 5)
    console.log('coins 5', coins5.num );
    
    amount = coins5.amount

    // how many 1
    let coins1= getCoinNum(amount, 1)
    console.log('coins 1', coins1.num );
    
    amount = coins1.amount

    return coins25.num + coins10.num + coins5.num + coins1.num
}

const minCoins = getCoins (550)
console.log('minCoins ', minCoins);
