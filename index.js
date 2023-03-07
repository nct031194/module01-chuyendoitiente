function showMessage(){
    var giatri = document.getElementById('giatriid').value;
    var donvi1 = document.getElementById('donvi1').value;
    var donvi2 = document.getElementById('donvi2').value;
    if(donvi1 == "vnd" && donvi2 == "$") {

    document.getElementById('result').innerHTML="Result : " + giatri / 22000 + " $";   
}
    else if(donvi1 == "vnd" && donvi2 == "vnd") {
        document.getElementById('result').innerHTML="Result : " + giatri + " VND"; 
    }
    else if(donvi1 == "$" && donvi2 == "vnd") {
        document.getElementById('result').innerHTML="Result : " + giatri * 22000 + " VND"; 
    }
    else {
        document.getElementById('result').innerHTML="Result : " + giatri  + " $"; 
    }
}