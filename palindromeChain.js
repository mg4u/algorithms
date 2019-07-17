//how many times required to trasfer number summed with its revered to be palindrome

function palindrome(s){
	s= s.split('')
	var j=0
	for (var i = s.length - 1; i >= 0; i--) {
		if(s[i]!=s[j]){
			return false
		}
		j++
	};
	return true
}

var palindromeChainLength = function(n) {
	//get reversed number
	let length=0
	let rn=n.toString(). split(""). reverse(). join("");
	n = Number(n)
	rn = Number(rn)
	var result=n+rn
	result=result.toString()
	var isPalindrom=palindrome(result)
	console.log(result,isPalindrom)
	if(!isPalindrom){
		return palindromeChainLength(result)+1
	}
	return 1
};
console.log(palindromeChainLength(10)) //1
console.log(palindromeChainLength(87)) //4