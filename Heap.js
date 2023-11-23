class MinHeap {
    constructor() {
      this.heap = [];
    }
  

    addElement(element) {
      this.heap.push(element);
      this.heapifyUp();
    }
  
    
    deleteMin() {
      if (this.heap.length === 0) {
        return null; 
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return min;
    }
  
    printMin() {
      if (this.heap.length === 0) {
        return null; 
      }
  
      return this.heap[0];
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          [this.heap[currentIndex], this.heap[parentIndex]] = [
            this.heap[parentIndex],
            this.heap[currentIndex],
          ];
          currentIndex = parentIndex;
        } else {
          break; 
        }
      }
    }
  
    heapifyDown() {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let smallestIndex = currentIndex;
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] < this.heap[smallestIndex]
        ) {
          smallestIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[smallestIndex]
        ) {
          smallestIndex = rightChildIndex;
        }
  
        if (smallestIndex !== currentIndex) {
          [this.heap[currentIndex], this.heap[smallestIndex]] = [
            this.heap[smallestIndex],
            this.heap[currentIndex],
          ];
          currentIndex = smallestIndex;
        } else {
          break; 
        }
      }
    }
  }
  
  const heap = new MinHeap();
  
  heap.addElement(4);
  heap.addElement(2);
  heap.addElement(8);
  heap.addElement(8);
  heap.addElement(9);


  
  console.log(heap.printMin()); 
  console.log(heap.deleteMin()); 
  
  console.log(heap.printMin()); 
  