function lightMode()
{

                        // image color toggle 
    document.getElementById("nightId").classList.add("invrtDrk");

                        // background color
    document.getElementById("containId").classList.add("back");
    document.body.classList.add("back");
    document.getElementById("modeId").classList.add("back");
                        

                        // inner background color
    document.getElementById("inner_modeId").classList.add("innerBack");
    document.getElementById("calId").classList.add("innerBack");

                        // number color
    let nos=document.getElementsByClassName("no");
    for(let i=0;i<nos.length;i++)
    {
        nos[i].classList.add("noColor");
    }
    document.getElementById("res").classList.add("noColor");

                        // memry label color
    document.getElementById("memry").classList.add("prev");

                        // btn background color
    let btns=document.getElementsByClassName("btns");
    for(let i=0;i<btns.length;i++)
    {
        btns[i].classList.add("btnBgColor");
    }

                        // ac btn color

    document.getElementById("nightId").classList.remove("nightTo");
    document.getElementById("inner_modeId").classList.remove("lop");
    document.getElementById("calId").classList.remove("looo");

    document.getElementById("containId").classList.remove("oop");
    document.body.classList.remove("oop");
    document.getElementById("modeId").classList.remove("lio");

    document.getElementById("memry").classList.remove("rtop");

    for(let i=0;i<btns.length;i++)
    {
        btns[i].classList.remove("mkl");
    }

    for(let i=0;i<nos.length;i++)
    {
        nos[i].classList.remove("iko");
    }
    document.getElementById("res").classList.remove("noBgColorRes");


    document.getElementById('acId').style.color="rgb(214, 170, 170)";

}
function darkMode()
{


    document.getElementById("nightId").classList.remove("invrtDrk");

    document.getElementById("nightId").classList.add("nightTo");

                         // background color
    document.getElementById("containId").classList.remove("back");
    document.body.classList.remove("back");
    document.getElementById("modeId").classList.remove("back");

    document.getElementById("containId").classList.add("oop");
    document.body.classList.add("oop");
    document.getElementById("modeId").classList.add("lio");
                        
    
                        // inner background color
    document.getElementById("inner_modeId").classList.remove("innerBack");
    document.getElementById("calId").classList.remove("innerBack");

    document.getElementById("inner_modeId").classList.add("lop");
    document.getElementById("calId").classList.add("looo");
    
                        // number color
    let nos=document.getElementsByClassName("no");
    for(let i=0;i<nos.length;i++)
    {
        nos[i].classList.remove("noColor");
        nos[i].classList.add("iko");
    }
    document.getElementById("res").classList.remove("noColor");

    document.getElementById("res").classList.add("noBgColorRes");
    

    
                        // memry label color
    document.getElementById("memry").classList.remove("prev");

    document.getElementById("memry").classList.add("rtop");
    
                        // btn background color
    let btns=document.getElementsByClassName("btns");
    for(let i=0;i<btns.length;i++)
    {
        btns[i].classList.remove("btnBgColor");
        btns[i].classList.add("mkl");
    }

    
    
                        // ac btn color
    document.getElementById('acId').style.color="rgba(255, 255, 255, 0.911)";
   
}


function pres(event)
{
    if(event.keyCode=="8")
    {
        btnBack()
    }
    if(event.key=="Enter")
    {
        btnEql1();
    }
    if(event.key=="0")
    {
        btnNumbr(0);
    }
    if(event.key=="1")
    {
        btnNumbr(1)
    }
    if(event.key=="2")
    {
        btnNumbr(2)
    }
    if(event.key=="3")
    {
        btnNumbr(3)
    }
    if(event.key=="4")
    {
        btnNumbr(4)
    }
    if(event.key=="5")
    {
        btnNumbr(5)
    }
    if(event.key=="6")
    {
        btnNumbr(6)
    }
    if(event.key=="7")
    {
        btnNumbr(7)
    }
    if(event.key=="8")
    {
        btnNumbr(8)
    }
    if(event.key=="9")
    {
        btnNumbr(9)
    }
    if(event.key=="(")
    {
        btnBrac('(');
    }
    if(event.key==")")
    {
        btnBrac(')')
    }
    if(event.key=="/")
    {
        btnOprter('/')
    }
    if(event.key=="-")
    {
        btnOprter('-')
    }
    if(event.key=="+")
    {
        btnOprter('+')
    }
    if(event.key=="*")
    {
        btnOprter('*')
    }
    if(event.key==".")
    {
        btnDot('.')
    }
    
}