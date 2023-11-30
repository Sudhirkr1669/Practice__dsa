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
    for(let i = 0;i<arr.length;i+2){
        twice = i+2;
        once= i+1 ;
    }
    console.log(arr[once]);
   }
}
const arr=[1,23,4,5,6,7,8,8]
const result=new middleNode();
const FinalResult=result.findMiddleNode(arr);