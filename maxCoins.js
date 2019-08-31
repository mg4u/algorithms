/*
This question was asked by Zillow.

You are given a 2-d matrix where each cell represents number of coins in that cell. Assuming we start at matrix[0][0], and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.

For example, in this matrix

0 3 1 1
2 0 0 4
1 5 3 1
The most we can collect is 0 + 2 + 1 + 5 + 3 + 1 = 12 coins.

*/

// TODO: IN PROGRESS

let matrix=[
	[0, 3, 1, 1],
	[2, 0, 0, 4],
	[1, 5, 3, 1]
]
let sum=0
function getMaxSum (mat, x, y) {
	for (var i = x; i < mat.length ; i++) {
		for (var j = y; j < mat[0].length ; j++) {
			sum+=mat[i][j]
			//console.log('mat',mat[i][j])
		}
	}

	return sum
}

function getMax (mat) {
	let finalSum = 0
	for (var i = 0; i < mat.length ; i++) {
		for (var j = 0; j < mat[0].length ; j++) {
			sum=0

			finalSum = getMaxSum(mat, i, j)
			console.log('finalSum',i,j,mat[i][j],finalSum)
		}
	}
}
getMax(matrix)