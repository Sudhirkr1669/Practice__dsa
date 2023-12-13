// class sortArray{
//     sortingArray(arr){
//      for(let i=0;i<arr.length;i++){
//         const correctIndex=arr[i];
//         if(arr[i]!==i){
//             [arr[i],arr[correctIndex]]=[arr[correctIndex],arr[i]]
//             console.log(i)
//         }
//      }
//     console.log(arr);

//     }
// };
// const arr=[3,4,5,6,7,1,0];
// const sortedArray=new sortArray();
// var result=sortedArray.sortingArray(arr);
// const test=()=>{
//     try{
//         throw new error("thus is error");
//     }catch(error){
//         return "inside catch"
//     }finally{
//         return "inside finally"
//     }
// }
// let res=test();
// console.log(res);
function cyclicSort(arr) {
    let i = 0;
    while (i < arr.length) {
      const correctIndex = arr[i] - 1; // Elements are assumed to be in the range 1 to n
      if (arr[i] !== arr[correctIndex]) {
        // Swap the elements
        [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
      } else {
        i++;
      }
    }
  }
  
  // Example usage:
  const arrayToSort = [3, 5, 2, 1, 4,1];
  cyclicSort(arrayToSort);
  console.log(arrayToSort);
  