//Mahmoud Gamal
//get anagrams
//2 string have the same strings wih same count in differet orders
//Same approach of a sliding window moving on array
var findAnagrams = function(s, p) {
	let sParts=s.split(''),
	checkP=[],
	originalP=p,
	chars=[],
	indexs=[]
	// console.log(sParts,p)

	for (var i = 0; i < sParts.length; i++) {
		chars=[]
		checkP=p.split("")
		for (var j = 0; j < originalP.length; j++) {
			//console.log(sParts[i+j])
			//move on the pararam bit by bit
			if(checkP.indexOf(sParts[i+j])==-1){
				break;
			}else{
				let deleted=checkP.splice(checkP.indexOf(sParts[i+j]),1)//delete the character after check it is presist in the string
				chars.push(sParts[i+j])
			}
		}
		if(checkP.length==0){
			indexs.push(i)
		}
	};

	return indexs
};

let angramsPoss=findAnagrams("abab","ab")
console.log('angramsPoss',angramsPoss)
angramsPoss=findAnagrams("hello marllo","llo")
console.log('angramsPoss',angramsPoss)