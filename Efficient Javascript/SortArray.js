class SortArray{
  sorting(arry){
    const seen={}
   const result=[]
  for(let i=0;i<arry.length;i++){
    if(seen[arry[i]]){
        arry.splice(i)
    }else{
        result.push(arry[i])
        seen[arry[i]]=true;
    }
    // if(!seen[arry[i]]){
    //     result.push(arry[i]);
    //     seen[arry[i]]=true ;
    // }
  }
  console.log(result.sort((a,b)=>a-b))
  } 
}
const arry=[1,5,6,8,7,9,4,8,5]
const Arry= new SortArray();
const result= Arry.sorting(arry)
// const cache={}
 
// function memo(n,num){
// if(cache[n]) {
//   console.log(cache[n]);
// }else {
//   cache[n]=n*num;
//   console.log(cache[n])
// }
// }
// const num=2;
// memo(9,num);
// memo(9,num);
