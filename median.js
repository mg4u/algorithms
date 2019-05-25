	//get median
var MedianFinder = function() {
    this.array= [];
    this.smaller= [];
    this.bigger= [];
};

MedianFinder.prototype.addNum = function(num) {
    if(this.smaller.length==0||this.smaller[this.smaller.length-1]>num){
    	this.smaller.push(num)
    }else{
    	this.bigger.push(num)
    }
    this.array.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian2 = function() {
	console.log('smaller=>',this.smaller)
	console.log('bigger=>',this.bigger)
	console.log('vals',this.smaller[0],this.bigger[0])
}
MedianFinder.prototype.findMedian = function() {
    let array=this.array,
    uniArray=[]
    bigger=[],smaller=[],median=array[0];
    //make uniq aray
    // console.log('array',array)

    for(let i=0;i<array.length;i++){
    	if(uniArray.indexOf(array[i])>=0) continue;
    	uniArray.push(array[i])
    }
    uniArray=uniArray.sort((a,b) =>{ return a-b})
    // console.log('uniArray',uniArray,uniArray.length,(uniArray.length/2),(uniArray.length%2))
    let center=0,center2=0
    console.log('center',center)
    if(uniArray.length==0){
    	return 0
    }else if(uniArray.length==1){
    	return uniArray[0]
    }else if(uniArray.length%2==0){
    	center=parseInt(uniArray.length/2)
    	center2=center-1
    	// console.log('uniArray[uniArray.length/2]+uniArray[(uniArray.length/2)+1]',uniArray[center2],uniArray[center])
    	centerVals=uniArray[center]+uniArray[(center2)]
    	return centerVals/2
    }else if(uniArray.length%2==1){
    	center=parseInt(uniArray.length/2)
    	centerVals=uniArray[center]
    	return centerVals
    }
};
function getRandom () {
	rand=Math.floor(Math.random() * 10) + 1
	console.log('rand',rand)
	return rand
}
var obj = new MedianFinder()
obj.addNum(getRandom())
var param_2 = obj.findMedian()
console.log('param_2',param_2)
obj.addNum(getRandom())
obj.addNum(getRandom())
// obj.addNum(getRandom())
// obj.addNum(getRandom())
var param_2 = obj.findMedian()
console.log('param_2',param_2)
obj.addNum(getRandom())
var param_2 = obj.findMedian()
console.log('param_2',param_2)