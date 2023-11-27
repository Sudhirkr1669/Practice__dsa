class FindPair{     // using two pointer
    pairFunction(arr,Target_Sum){    
      let i =0;
      let j =arr.length-1;
      let currentSum=0;
      while(i<j){
        currentSum=arr[i]+arr[j];
       if(currentSum===Target_Sum){
        return true
       }else if(currentSum<Target_Sum){
         i+=1;
       }else if(currentSum>Target_Sum){
         j-=1
       }
       return false
      }
    }

}
const arr=[1,2,3,4,5,6,7]
const Target_Sum=7;
const pair=new FindPair();
const result=pair.pairFunction(arr,Target_Sum);
