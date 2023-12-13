class missingNumber{
   findMissingNumber(arr){
    for(let i=0;i<arr.length;i++){
        let correctIndex=arr[i];
        if(arr[i]!==i && arr[i] < arr.length){
            [arr[i],arr[correctIndex]]=[arr[correctIndex],arr[i]]
        }
    }
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==i){
            console.log(i)
        }
    }
   }
}
const arr=[3,0,1,4,7,5,8];
const missedNumber=new missingNumber();
const result=missedNumber.findMissingNumber(arr);

// class MissingNumberFinder {
//     findMissingNumber(nums) {
//       let i = 0;
//       while (i < nums.length) {
//         const correctIndex = nums[i];
  
//         if (nums[i] !== i && nums[i] < nums.length) {
//           [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
//         } else {
//           i++;
//         }
//       }
  
//       console.log("Sorted Array:", nums);
  
//       for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== i) {
//           return i;
//         }
//       }
  
//       return nums.length;
//     }
//   }
  
//   // Example usage:
//   const nums = [3, 0, 1, 4, 5];
//   const missingNumberFinder = new MissingNumberFinder();
//   const missingNumber = missingNumberFinder.findMissingNumber(nums);
  
//   console.log("Missing Number:", missingNumber);
  