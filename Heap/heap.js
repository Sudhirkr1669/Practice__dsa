// find k-th smallest number
class smallestNumber{
    findSmallestNumber(arr,k){
        let newArr=[];
      for(let i =0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
         [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }else{
            newArr.push(arr[i]);
        }
      }
return newArr[2];
    }
}
const arr=[2,4,3,6,4,7,3]
const k=3;
let result=new smallestNumber();
const finalResult=result.findSmallestNumber(arr,k)
console.log(finalResult)