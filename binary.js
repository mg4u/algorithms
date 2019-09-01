/*
Developed By: Mahmoud Gamal
This problem was asked by Cisco.

Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

For example, 10101010 should be 01010101. 11100010 should be 11010001

*/

function swap (integerVal) {
	integerVal=integerVal.toString()
	let swapped='';
	for (var i = 0; i < integerVal.length; i+=2) {
		swapped+=integerVal[i+1]+integerVal[i]
	}
	console.log(swapped)
	return swapped
}

swap(10101010)
swap(11100010)