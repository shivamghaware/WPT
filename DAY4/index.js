function validateText(id,errorid,errormsg,welcomeid){
    var refTotextControl=document.getElementById(id);
    var refToErrorControl=document.getElementById(errorid);
    var refWelcomeMessage=document.getElementById(welcomeid);

    if(refTotextControl.value==""){
        refToErrorControl.innerText=errormsg;
    }else{
        refToErrorControl.innerText="";
        refWelcomeMessage.innerText=refWelcomeMessage.innerText+" "+refTotextControl.value;
    }
}

