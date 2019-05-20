function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    // return this
}
var deleteNode = function(root, key) {
    if(root==null){
        return null
    }
    if(root.val>key){
    	console.log('deleteleft')
        root.left=deleteNode(root.left,key)
        return root
    }
    if(root.val<key){
        root.right=deleteNode(root.right,key)
        return root
    }
    if(root.left==null&&root.right==null){
        return null
    }
    if(root.left==null){
        root=root.right
        return root
    }    
    if(root.right==null){
        root=root.left
        return root
    }
    
    let minRightNode=findMinNode(root.right)
    root.val=minRightNode.val
    root.right=deleteNode(root.right,root.val)
    return root
};

var findMinNode=function(node){
    if(node.left){
        return findMinNode(node.left)
    }else{
        return node
    }
}

var root = new TreeNode(5)
root=deleteNode(root,3)
console.log(root)