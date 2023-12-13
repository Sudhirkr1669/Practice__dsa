// class maxHeap{

//   heapify(arr){
//       for(let i =Math.floor((arr.length-1)/2);i>=0;i--){
//         heapiyDown(i);
//       }
//     }
//     heapiyDown(index){
//         largest=arr[index];
//     }

// }
// const arr=[1,4,2,5,26,7,3]
// const result=new maxHeap();
// const result1=result.heapify(arr);
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  buildMaxHeap(arr) {
    this.heap = arr;
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
      largest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      this.heapifyDown(largest);
    }
  }

  getHeap() {
    return this.heap;
  }
}

// Example usage
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const maxHeap = new MaxHeap();
maxHeap.buildMaxHeap(unsortedArray);
console.log("Max Heap:", maxHeap.getHeap());
