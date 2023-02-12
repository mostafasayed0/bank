let step1=document.getElementById("demo1");
let step2=document.getElementById("demo2");
let step3=document.getElementById("demo3");
function getinfo(x,y,z) {
    x=step1.value ;
    y=step2.value /100;
    z=step3.value;
    finalll = x*y*z;
    
    T=parseInt(finalll) + parseInt(x);
    month=T/(z*12);
    document.getElementById("finallll").innerHTML=finalll;
    document.getElementById("total").innerHTML=T;
    document.getElementById("month").innerHTML=month;
}

$('.btn').click(function() {
    getinfo();
    $('.result').slideDown(1500);
    clear();
})

function clear()
{
    step1.value="";
    step2.value="";
    step3.value="";
}
