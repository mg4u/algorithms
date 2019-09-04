/*
Developed by Mahmoud Gamal

This problem was asked by Facebook.

Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. 
How many swap or move operations do you need?
*/

function swap (arr,k) {
	for (var i = 0; i< k; i++) {
		arr.push(arr.shift())
	}
	return arr
}

swap ([1, 2, 3, 4, 5, 6] , 2)