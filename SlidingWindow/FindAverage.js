function highestSum(arr) {
    var highestSum = 0;
    var maxIndices = [];
    for (let i = 0; i < arr.length; i++){
        let currSum = arr[i]+arr[i+1]+arr[i+2];
        if (currSum >highestSum) {
            highestSum = currSum  
            maxIndices=[i,i+1,i+2]
        } else {
            currSum=highestSum
        }
     
    }
    console.log(highestSum)
}
let arr = [1, 2, 34, 5, 6, 7, 7]
highestSum(arr)




// function findAverage(nums, k) {
//     const result = [];
//     let Sum = 0;

//     for (let i = 0; i < k; i++) {
//         Sum += nums[i];
//     }
//     for (let i = k; i < nums.length; i++) {
//         result.push(Sum / k);
//         Sum = Sum - nums[i - k];
//         Sum = Sum + nums[i];
//     }

//     result.push(windowSum / k);

//     return result;
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const k = 3;
// const averages = findAverage(nums, k);
// console.log(averages);  // Output: [2, 3, 4, 5, 6, 7.5]


// class FindAverage{


//      Average(arr,target){
//       let avrg=0;

//      for(let i=0;i<arr.length;i++){
//         for(let j=i;j<i+target;j++)
//         avrg+=arr[j]
//         const median= (avrg)/2
//        console.log(median)
        
//      }
//      }
// }
// const arr=[1,23,4,56,7,9,23,45,4132,5645,]
// const target=5;
// const average=new FindAverage()
// const result=average.Average(arr,target);
// console.log(result);