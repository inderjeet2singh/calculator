        // import finalResult from "./evelPost.js";
var stk=new Array();
var str="",str10="",result="",fetch;
function execution(str10)
{
    // console.log(str.length);
    if(str10[0]=="-")
    {
        str='0'+str10;
    }
    else{
        str+=str10;
    }
    result="";
    str=str+')';
    stk.push('(');
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!="(" && str[i]!=")" && str[i]!="+" && str[i]!="-" && str[i]!="*" && str[i]!="/" && str[i]!=" ")
        {
            result+=str[i];
            // result+=" ";
        }
        if(str[i]=="(")
        {
            stk.push("(");
        }
        else if(str[i]==")")
        {
            fetch=stk.pop();
            while(fetch!='(')
            {
                result=result.trimEnd();
                result+=" ";
                result+=fetch;
                // result+=" ";
                fetch=stk.pop();
            }

        }
        
        if(str[i]=="+" || str[i]=="-")
        {


            // console.log(result,"i=",i);
            fetch=stk.pop();
            while(fetch!="(")
            {
                
                result=result.trimEnd();
                result+=" ";
                result+=fetch;
                // console.log(result)
                // result+=" ";
                fetch=stk.pop();
            }
            stk.push('(');
            result+=" ";
            stk.push(str[i]);
        }
        if(str[i]=="*" || str[i]=="/")
        {
            fetch=stk.pop();
            while(fetch!="+" && fetch!="-" && fetch!="(")
            {
                result=result.trimEnd();
                result+=" ";
                result+=fetch;
                fetch=stk.pop();
            }
            if(fetch=="+" || fetch=="-" || fetch=="(")
            {
                stk.push(fetch);
            }
            result+=" ";
            stk.push(str[i]);
        }
    }
    str="";
    return result;
    
    // var total=finalResult(result);
    // return total
}
// var ss=execution("10 + 50 + 20 ");
// var ss=execution("10+50+20");
// console.log(execution("10+50+20"));
// var ss=execution("(a+b*c-d)/(e*f)");
// console.log("at the end = ",ss.split(' '));
// var ss="     jkj         "
// ss=ss.trim()
// console.log(ss,"sjs")




// export default execution;
