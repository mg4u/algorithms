// Asked by amazone
// Developed By: Mahmoud Gamal
// get minmum time required to parse streaming files using 2 files per time
// assume file size is 8,4,6,12 the the minmum time required is 58
// where 6+4 produce file with size => [10]
// then the new produced file 10 + 8 produce file with size => [18]
// then the new produced file 18 + 12 produce file with size => [30]
// so the total time required to parse all these files = sum of totoal time required to parse 2 files per time
// 10+18+30=58
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
}
minimumTime(4,[8,4,6,12])
minimumTime(4,[1,2,5,10,35,89])