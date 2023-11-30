var tracker=0;
function call(){
    tracker++
if(tracker===3){
    console.log(3)
}
return call("anytime!")
}
call();