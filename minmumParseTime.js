// Asked by amazone
// get minmum time required to parse streaming files using 2 files per time
// 
function minimumTime(numOfSubFiles, files){
    files=files.sort(function(a, b){return a-b});
    var minimumTime=0,
    lastVal=files[0],
    sums=[]
    for(var i=1;i<files.length;i++){
      lastVal+=files[i]
      sums.push(lastVal);//+files[i])
    }
    // console.log(sums)
    for (var i = sums.length - 1; i >= 0; i--) {
      minimumTime+=sums[i]
    };
    console.log(minimumTime)
    // WRITE YOUR CODE HERE
  }
minimumTime(4,[8,4,6,12])
minimumTime(4,[1,2,5,10,35,89])