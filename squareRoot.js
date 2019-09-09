/*
Developed by Mahmoud Gamal

Given a real number n, find the square root of n. For example, given n = 9, return 3.

*/

function squareRoot (n) {
	let root=0
	for (var i = 1; i < n; i++) {
		if (i * i >=n) {
			break
		}
	}
	if (i * i == n) {
		root = i
	} else {
		root = (i - 1 + n/(i-1))/2
	}
	root = Math.round(root*100)/100
	console.log('root', root);
	return root
}
var num = 654
const jsRoot = Math.round( Math.sqrt( num ) * 100 )/100
const devRoot = squareRoot( num )
console.log('JS root ',jsRoot);
console.log('dev root ',devRoot);

