function getLocation(lat,long,extid){
    var refToLat=document.getElementById(lat);
    var refToLong=document.getElementById(long);
    var refToExtid=document.getElementById(extid);
   
    var curlat;
    var curlong;

    navigator.geolocation.getCurrentPosition(success,failure);

    function success(res){
        curlat=res.coords.latitude;
        curlong=res.coords.longitude;
        refToLat.innerText=curlat;
        refToLong.innerText=curlong;

        var url=`https://www.latlong.net/c/?lat=`+curlat+`&long=`+curlong;
        refToExtid.href=url;
    }
    function failure(err){
        console.log("error");
        console.log(err)
    }
}