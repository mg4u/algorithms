/**
 * Developed By Mahmoud Gamal
 * 
 * Daily Coding Problem: Problem #888
 * 
 * This problem was asked by LinkedIn.
 * 
 * Given a list of points, a central point, and an integer k, find the nearest k points from the central point.
 * 
 * For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, 
 *  return [(0, 0), (3, 1)].
 */

 /**
  * The key for this problem is getting the distance between points using this formula
  * d = √[(x2 − x1)2 + (y2 − y1)2]
  * 
  */

 function nearestPoints(arr, center, k) {
    if (!k || k > arr.length || arr[0].length != 2 || center.length != 2  ) {
        return null
    }
    
    let output= []
    let pointsDistances= []
    for (let i = 0; i < arr.length; i++) {
        const point = arr[i];
        // ditsance = √[(x2 − x1)2 + (y2 − y1)2]
        const ditsance = Math.sqrt(Math.pow( (center[0] - point[0]), 2 ) + Math.pow( (center[1] - point[1]), 2 ))
        pointsDistances.push({
            point,
            ditsance
        })
    }
    // Sort ASC
    pointsDistances.sort((a, b) => parseFloat(a.ditsance) - parseFloat(b.ditsance));
    
    // Return the Nearest K points
    for (let i = 0; i < k; i++) {
        output.push(pointsDistances[i].point);
        
    }
    return output
}
const points = [[0, 0], [5, 4], [3, 1]]
const center = [1, 2]
const k = 2
const nearest= nearestPoints(points, center, k)

console.log(nearest);
