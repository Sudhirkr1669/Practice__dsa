// var middleNode = function(head) {
//     let twice = head;
//     let once = head;
//     while(twice && twice.next){
//         twice = twice.next.next;
//         once = once.next
//     }
//     console.log(once);
// };
class middleNode{
   findMiddleNode(arr){
    let twice = 0;
    let once = 0;
    while(arr[twice]&&arr[twice]!=null){
        twice = twice+2;
        once=once+1 ;
    }
    if(arr.length%2===0){
      console.log(arr[once]); 

    }else{
        console.log(arr[once-1])
    }
   }
}
const arr=[1,23,4,5]
const result=new middleNode();
const FinalResult=result.findMiddleNode(arr);