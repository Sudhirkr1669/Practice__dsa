class ClosetSum{
    closetNum(nums,target){
        const sortedArray=nums.sort();
        console.log(sortedArray)
        let i=0;
       let currentSum=nums[i]+nums[i+1]+nums[i+2];
       while(currentSum > target){
         currentSum+=nums[i+3]
        console.log(currentSum);
            }
           
        
        let j=0;
        while(currentSum<target){
            currentSum+=nums[j+3]
            if(currentSum>target){
                console.log(currentSum)
            }else{
               j++
            }
        }
    }
    
}
const nums=[1,2,3,4,5,6,7]
const target= 10;
const sum= new ClosetSum();
const result=sum.closetNum(nums,target)
