function addToLocalStorage(nmid,adid){
    var refToName=document.getElementById(nmid);
    var refToAddr=document.getElementById(adid);

    localStorage.setItem("name",refToName.value);
    localStorage.setItem("address",refToAddr.value);
}
function addToSessionStorage(nmid,adid){
    var refToName=document.getElementById(nmid);
    var refToAddr=document.getElementById(adid);

    sessionStorage.setItem("name",refToName.value);
    sessionStorage.setItem("address",refToAddr.value);
}

var addToStorage=function(nmid,adid){
    addToLocalStorage(nmid,adid);
    addToSessionStorage(nmid,adid);
}