function username()
{
    var va=document.getElementById("intxt").value;
    if(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,12}$/g.test(va))
    {
        window.alert("valid username");
    }
    else
    {
        window.alert("invalid username");
        document.getElementById("intxt").focus();  
    }
}