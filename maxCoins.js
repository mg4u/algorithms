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

function getMaxSumToBottomRight (mat, x, y) {
	var val=0
	if (x >= mat.length || y >= mat[0].length){
		return 0
	} else{
	    val= mat[x][y] +   
	            Math.max( getMaxSumToBottomRight(mat, x + 1, y + 1), 
	            getMaxSumToBottomRight(mat, x + 1, y),  
	            getMaxSumToBottomRight(mat, x, y + 1) )
	}

	return val
}

function getMaxSumToTopLeft (mat, x, y) {
	var val=0
	if (x < 0 || y < 0){
		return 0
	} else{
	    val= mat[x][y] +   
	            Math.max( getMaxSumToTopLeft(mat, x - 1, y - 1), 
	            getMaxSumToTopLeft(mat, x - 1, y),  
	            getMaxSumToTopLeft(mat, x, y - 1) )
	}

	return val
}

console.log(getMaxSumToBottomRight(matrix,0,0)) // allowed directions are right and bottom
let sX=matrix.length-1
let sY=matrix[0].length-1
console.log(getMaxSumToTopLeft(matrix,sX,sY)) // allowed directions are right and bottom