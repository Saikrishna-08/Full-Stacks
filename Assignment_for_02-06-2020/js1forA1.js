function dateofbirth()
{
    var va=document.getElementById("intxt").value;
    if(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/g.test(va))
    {
        window.alert("valid date");
        var d1 = new Date(); //"now"
        var year=va.substring(6,10);
        var month=va.substring(0,2);
        var days=va.substring(3,5);
        var d2 = new Date(year+"/"+month+"/"+days); 
        var diff =Math.abs(d2-d1)/(1000*60*60*24);
        var et=18*365+4;
        if(diff>=et)
        window.alert("18+");
        else
        window.alert("less than 18 years");
    }
    else
    {
        window.alert("invalid date");
        document.getElementById("intxt").focus();  
    }
}