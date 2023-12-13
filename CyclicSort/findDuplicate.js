class findDuplicateNumbers{
    findingDuplicateNumber(arr){
        for(let i=0;i<arr.length;i++){
            let correctIndex=arr[i]-1;
            if(arr[i]!==i+1 && arr[i] < arr.length){
                [arr[i],arr[correctIndex]]=[arr[correctIndex],arr[i]]
            }
        }
        console.log(arr);
        const newArr=arr ;
        let i=0;
        let j=newArr.length-1;
        while(i<j){
          if(newArr[i]>newArr[j]){
            let temp=newArr[j];
          newArr[j]=newArr[i]
          newArr[i]=temp
           i++;
           j--;
        }}
        console.log(newArr);
        // const result=[];
        // for(let i=0;i<arr.length;i++){
        //     if(arr[i]===i+1){
        //        result.push(arr[i])
        //     }
        // }
        // console.log(result);
    }

}
const arr=[4,3,2,5,1,6,2,3];
const duplicateNumbers=new findDuplicateNumbers();
const result=duplicateNumbers.findingDuplicateNumber(arr);
