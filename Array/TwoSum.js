class twoSum{
  constructor(){
    this.indices=[] ;
  }

 findIndices=(nums,target)=>{
      for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
               return [i,j]
            }
        }
      }
    }

}

const nums=[1,2,3];
const target=5;
const result= new twoSum()
const result1=result.findIndices(nums,target)
console.log(result1);