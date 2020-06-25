function myfun(){
    var u=document.getElementById("usertxt").value;
    var p=document.getElementById("pwd").value;
    var user=/^[A-Z][A-Za-z]{3,7}$/;
    var pwd=/^[A-Z][a-z]{1,10}[@_-][0-9]{1,3}$/;
    if(user.test(u)&&pwd.test(p))
    {
        window.alert("valid");
    }
    else{
        window.alert("not valid");
    }
}