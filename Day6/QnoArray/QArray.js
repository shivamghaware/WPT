var ArrQueue=new Array();
var refToCounter=document.getElementById("count");
var countval=0;
function startTimer(){
    var qno=setInterval(counter,1000);
    ArrQueue.push(qno);
    showQueue();
}

function stopTimer(){
    for(var i=0;i<ArrQueue.length;i++){
        clearInterval(ArrQueue[i]);
    }
    ArrQueue=new Array();
}
function counter(){
    refToCounter.innerText=countval;
    countval+=1;
}

function showQueue(){
    console.log(ArrQueue);
}
