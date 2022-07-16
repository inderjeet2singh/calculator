
// import execution from "./inTOPost.js";
var strng="";
// var total;
function finalResult(strng)
{

    // var a=["2"," ", "4", "5", "+", "7","*","+",")"];
    var a=strng.split(' ');
    a.push(')');
    // console.log(a);
    var ar=new Array();
    // console.log(a.toString(),a.length);
    // console.log(parseInt( a[0])+parseInt( a[2]));
    for(let i=0;i<a.length-1;i++)
    {
        if(a[i]!='+' && a[i]!='-' && a[i]!='/' && a[i]!='*' && a[i]!=' ' )
        {
            ar.push(parseFloat( a[i]));
            // console.log("i= ",i);
        }
        else if(a[i]=='+' || a[i]=='-' || a[i]=='/' || a[i]=='*' || a[i]==')')
        {
            // console.log("i= ",i);
            var a1,b1,res;
            a1= ar.pop();
            b1= ar.pop();
            // console.log("b1 = ",b1," a1 = ",a1);
            if(a[i]=='+')
            {
                res=b1+a1;
            }
            else if(a[i]=="-")
            {
                res=b1-a1;
            }
            else if(a[i]=="*")
            {
                res=b1*a1;
                // console.log("res in * = ",res)
            }
            else if(a[i]=="/")
            {
                res=b1/a1;
            }
            // console.log("push in  = ",res)
            ar.push(res);
        }
        
    }
    // console.log("in the module of the js file in rhe html");
    total=ar.pop();
    // console.log(ar.pop())
    return total;
}
// export default finalResult;
// export function btnEql1()
// {
//     console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
// }

// console.log("result = ",ar.pop());