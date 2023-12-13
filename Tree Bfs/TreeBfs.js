class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  }
  
  function bfsTree(root) {
    const queue = [];
    console.log(queue);

    const visited = [];
  
    queue.push(root);
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
    console.log(currentNode);

      visited.push(currentNode.value);
  
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
  
    console.log(visited);
  }
  
  // Example usage:
  const rootNode = new TreeNode(1);
  
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  
  rootNode.addChild(node2);
  rootNode.addChild(node3);
  node2.addChild(new TreeNode(5));
  node3.addChild(node4);
  
  console.log(bfsTree(rootNode));
  