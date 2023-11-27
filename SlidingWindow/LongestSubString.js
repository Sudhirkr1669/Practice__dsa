class longestSubString{
    UniqueValue(strng){
     let distinct= new Set();
     for(let i =0;i<strng.length;i++){
         distinct.add(strng[i]);
        
     }
     console.log(distinct)

    }
}
var Strng="sudhirkdbkdb";
const subStrng=new longestSubString();
const result=subStrng.UniqueValue(Strng);