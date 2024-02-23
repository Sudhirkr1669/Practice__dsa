// // class sortArray{
// //     sortingArray(arr){
// //      for(let i=0;i<arr.length;i++){
// //         const correctIndex=arr[i];
// //         if(arr[i]!==i){
// //             [arr[i],arr[correctIndex]]=[arr[correctIndex],arr[i]]
// //             console.log(i)
// //         }
// //      }
// //     console.log(arr);

// //     }
// // };
// // const arr=[3,4,5,6,7,1,0];
// // const sortedArray=new sortArray();
// // var result=sortedArray.sortingArray(arr);
// // const test=()=>{
// //     try{
// //         throw new error("thus is error");
// //     }catch(error){
// //         return "inside catch"
// //     }finally{
// //         return "inside finally"
// //     }
// // }
// // let res=test();
// // console.log(res);
// function cyclicSort(arr) {
//     let i = 0;
//     while (i < arr.length) {
//       const correctIndex = arr[i] - 1; // Elements are assumed to be in the range 1 to n
//       if (arr[i] !== arr[correctIndex]) {
//         // Swap the elements
//         [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
//       } else {
//         i++;
//       }
//     }
//   }

//   // Example usage:
//   const arrayToSort = [3, 5, 2, 1, 4,1];
//   cyclicSort(arrayToSort);
//   console.log(arrayToSort);
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr; // Base case: an array with 0 or 1 elements is already sorted
//   }

//   // Split the array into two halves
//   const middle = Math.floor(arr.length / 2);
//   const leftHalf = arr.slice(0, middle);
//   const rightHalf = arr.slice(middle);

//   // Recursively sort each half
//   const sortedLeft = mergeSort(leftHalf);
//   console.log(sortedLeft);
//   const sortedRight = mergeSort(rightHalf);
//   console.log(sortedRight);

//   // Merge the sorted halves
//   return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // Compare elements from left and right arrays and merge them
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Add remaining elements from left and right arrays
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// Example usage:
// const unsortedArray = [8,1, 4, 2, 7, 1, 5, 3, 6];
// const sortedArray = mergeSort(unsortedArray);
// console.log(sortedArray);
// class sortArray{
//    sortingArray(arr) {
//      for (let i = 0; i < arr.length; i++){
//        const correctIndex = arr[i] - 1;
//        if (arr[i] !== i) {
//          [arr[i],arr[correctIndex]]=[arr[correctIndex],arr[i]]
//        }
//      }
//      console.log(arr)
//   }
// }
// const arr=[3,2,4,5,6]
// const result=new sortArray(arr)
function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i]; // Correct index for nums[i]
    if (nums[i] != nums[correctIndex]) {
      // Swap nums[i] with nums[correctIndex]
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++; // Move to the next element
    }
  }
  return nums;
}

// Example usage:
const arr = [3, 5, 4, 2];
console.log("Original array:", arr);
const sortedArr = cyclicSort(arr);
console.log("Sorted array:", sortedArr);
