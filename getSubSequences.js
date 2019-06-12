function getSubSequences(s) {
    //get sub strigs
    let arrayOfStrings = []
    let i = 0, j = 0;
    for (i = 0; i < s.length; i++){
        for (j = i+1; j < s.length+1; j++) {
        	if(arrayOfStrings.indexOf(s.slice(i,j))==-1){
	            arrayOfStrings.push(s.slice(i,j))
        	}
        }
    }

    //get the other combinations
    let finalArray=arrayOfStrings
    let len=arrayOfStrings.length
    for(var k=0;k<len;k++){
    	var startIndex=(s.indexOf(arrayOfStrings[k])+arrayOfStrings[k].length)
	    for(var z=startIndex;z<s.length;z++){
	    	finalString=arrayOfStrings[k]+s[z]
	    	if(arrayOfStrings[k]&&finalArray.indexOf(finalString)==-1){
		    	finalArray.push(finalString)
	    	}
	    }
    }
    return finalArray;
}
