var temp3=0;
var n="",dot="",opr="";
let str1="";
let temp=0;
let total;
var temp2=0;
var brac="";
var oprtAry=['+','-','/','*'];
function btnNumbr(n)
{
    // n=n.toString();
    str1+=n;
    if(str1=="0")
    {
        str1='0';
        console.log(n);
        document.getElementById('res').innerHTML=str1;
        str1="";
    }
    else
    {
        document.getElementById('res').innerHTML=str1;
    }
    // n=50+n;
    // console.log(str1);
    temp2=0;
    document.getElementById('memry').innerHTML="";
}

function btnDot(dot)
{
    if(document.getElementById('res').innerHTML=='0')
    {
        str1="0.";
        document.getElementById('res').innerHTML=str1;
        temp=1;
    }
    else if(oprtAry.includes(str1.charAt(str1.length-1)))
    {

        str1+="0.";
        document.getElementById('res').innerHTML=str1;
        temp=1;
    }
    
    else if(temp==0)
    {

        str1+=dot;
        document.getElementById('res').innerHTML=str1;
        temp=1;
    }
    temp2=0;
    document.getElementById('memry').innerHTML="";
}
function btnClear()
{
    str1="";
    temp=0;
    temp2=0;
    temp3=0;
    total=0;
    document.getElementById('res').innerHTML="0";
    document.getElementById('memry').innerHTML="";
}
function btnOprter(opr)
{
    

        if((document.getElementById('res').innerHTML).length==1 && opr=='-' && document.getElementById('res').innerHTML==0)
        {
            str1+="-";
            document.getElementById('res').innerHTML=str1;
            temp2=1;
        }
        else if(oprtAry.includes(str1.charAt(str1.length-1)) && temp2===0)
        // if(str1.charAt(str1.length-1)=='*' || str1.charAt(str1.length-1)=='-' || str1.charAt(str1.length-1)=='/' || str1.charAt(str1.length-1)=='+')
        {
            // console.log(2);
            str1=str1.slice(0,str1.length-1);
            str1+=opr;
            document.getElementById('res').innerHTML=str1;
        }
        else if(document.getElementById('res').innerHTML=="0")
        {

        }
        else if (temp2===0)
        {
            console.log(3);
            str1=document.getElementById('res').innerHTML+opr;
            document.getElementById('res').innerHTML=str1;

        }
        temp3=1;
        temp=0;
}

function btnBack()
{
    if(document.getElementById('res').innerHTML=='0' || str1.length==1)
    {
        str1="";
        document.getElementById('res').innerHTML="0";
        console.log("innnnnnnnnnnnnnnn 1");

    }
    if(str1=="")
    {
        var gg=document.getElementById('res').innerHTML;
        if(gg.length==1)
        {
            document.getElementById('res').innerHTML="0"; 
        }
        else
        {

            gg=gg.slice(0,gg.length-1);
            document.getElementById('res').innerHTML=gg;
        }
    }
    else
    {
        console.log("innnnnnnnnnnnnnnn 2");
        console.log("str = ",str1);
        str1=str1.slice(0,str1.length-1);
        document.getElementById('res').innerHTML=str1;
    }
    console.log("innnnnnnnnnnnnnnn 3");
    document.getElementById('memry').innerHTML="";
}

function btnBrac(brac)
{
    str1+=brac;
    document.getElementById('res').innerHTML=str1;
    temp2=0;
    document.getElementById('memry').innerHTML="";
}