/**
 * Developed By Mahmoud Gamal
 * 
 * Daily Coding Problem: Problem #893
 * 
 * This problem was asked by Facebook.
 * 
 * A builder is looking to build a row of N houses that can be of K different colors.
 * He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
 * 
 * Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color,
 * return the minimum cost which achieves this goal.
 */


function getMinimumCost(cost, N, K) {

    // Get Intial Cost for each color
    let min_costs = [[]]
    for (let i = 0; i < K; i++) {
        min_costs[0][i] = cost[0][i]
    }
    // Loop over all houses to get min cost for prev colors and current color
    for (let i = 1; i < N; i++) {
        min_costs[i] = []
        for (let x = 0; x < K; x++) {
            let minPrevCost = Number.MAX_VALUE // Give it intial value as biggest value
            for (let y = 0; y < K; y++) {
                if (x == y ) {
                    continue
                }
                minPrevCost = Math.min(minPrevCost, min_costs[i-1][y])
            }
            min_costs[i][x]= minPrevCost + cost[i][x]

        }
    }
    // Get Final Minum Value
    let minimumCost = Number.MAX_VALUE
    for (let i = 0; i < K; i++) {
        minimumCost = Math.min(minimumCost, min_costs[N-1][i])
    }
    return minimumCost
}
const K = 3 // 3 colors
const N = 3, cost = [[14, 2, 11], [11, 14, 5], [14, 3, 10]]
// const N = 2, cost = [[1, 2, 3], [1, 4, 6]]
const minimumCost = getMinimumCost(cost, N, K)
console.log(minimumCost);