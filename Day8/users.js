var helper;

var getData= function(){
    helper=new XMLHttpRequest();
    helper.onreadystatechange=onReadyStateChange;
    helper.open("GET","https://dummyjson.com/users");
    helper.send();
}

var onReadyStateChange=function(){
    if(helper.readyState==4 && helper.status==200){
        //debugger;
        var reftotablebody=document.getElementById("tablebody");
        var response=JSON.parse(helper.responseText);
        var rows="";
        for(var i=0;i<response.users.length;i++){
            var user=response.users[i];
            rows += `<tr>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>
                            <img src="${user.image}" class="img-fluid" style="height:70px; width:70px;">
                        </td>
                     </tr>`;
        }
        if (reftotablebody) {
            reftotablebody.innerHTML = rows;
        } else {
            console.error("Element with id 'tablebody' not found.");
        }
    }
}