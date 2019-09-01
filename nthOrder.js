/*
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.

Developed By: Mahmoud Gamal
solution based on stack data structure
*/
// var log=[]
class OrderLog{
	constructor(){
		this.log=[]
	}
	record (order_id) {
		//make last orders alwasye in the top
		this.log.unshift(order_id)
	}

	get_last(number){
		return this.log.slice(0,number)
	}
}
var orderObj=new OrderLog
orderObj.record(12)
orderObj.record(13)
orderObj.record(15)
orderObj.record(16)
orderObj.record(17)

var result=orderObj.get_last(3)
console.log(result)
