var plusBtn = document.querySelector(".plus");


var crossBtn = document.querySelector(".cross")

// Functions 
function plusBtnClick() {
    document
        .querySelector(".dialog")
        .style
        .display = "flex"
}

function closeDialog() {
    document
        .querySelector(".dialog")
        .style
        .display = "none"
}    //dialog box close ho jeyga

function addDelTktLogic() {
    var closeBtnArr = document
        .querySelectorAll(".icon.color-3")
    var minimizeIcons = document
        .querySelectorAll(".icon.color-1")

    function closeTicket(e) {
        var box = e.target.closest(".box");
        console.log(box)
        box.style.display = "none"
    }

    function minimize(e) {
        var box = e.target.closest(".box");
        console.log(box)
        if (box.querySelector("main").style.display !== "none") {
            // console.log("dlkashdiuha")
            box.querySelector("main").style.display = "none"

        } else {
            box.querySelector("main").style.display = "block"
        }
    }

    for (let index = 0; index < closeBtnArr.length; index++) {
        const closeBtn = closeBtnArr[index];
        closeBtn.addEventListener("click", closeTicket)
    }
    for (let index = 0; index < minimizeIcons.length; index++) {
        const closeBtn = minimizeIcons[index];
        closeBtn.addEventListener("click", minimize)
    }

}

function addTicket() {  // addTicket wale function ko call krta h
    closeDialog()    // closeDialog ko call krta h aur addtext krne ke baad sabse phle dialog box close ho jeygea 
    var boxes = document.querySelector(".wrapper main"); //.rwapper class ke anndr main h usko select kr  liya
    var puranaHTML = boxes.innerHTML; //koi bi text ko add krne ke liye ye count ki tarh kaam karta h
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    //main me by defult ye wali thi par usko purnaHtml phle khali tha ussme ye nya html add kr diya kyoki jis tarh counter badhta h usii tarh ye bi chlta h aur usme nye addticket hote chle jate h
    boxes.innerHTML = puranaHTML + `   
    <div class="box">      
        <header>
            <div class="box-heading">${title.value}</div>
            <div class="icon color-1">-</div>
            <div class="icon color-2">E</div>
            <div class="icon color-3">X</div>
        </header>
        <main>
            <textarea rows="15">${boxContent.value}</textarea>
        </main>
    </div>`;
    title.value = ""//ye eslyee  lgaya h jab apn ticket add krte h wo add tho ho jata usko phir khali krne ke liye use kiya h
    boxContent.value = ""
    addDelTktLogic();
}



plusBtn.addEventListener("click", plusBtnClick)
crossBtn.addEventListener("click", closeDialog)

//DOM manuplution
//sabse phle ye decide kro ke kis par action krna h auur kis type ka krna h -->jase muje sabse phle PLUS button par krna h
//aur ek popup khulna chaiye -->sabse phle tumara jo html code h usko deko konsa tag me class ka name kya h phir ek variable lege
//plus ko select krna ka tarika ek variable lena h 
// let plus =document.queryselector('.plus');
//console.log(plus)//dkene ke liye console par deknne ke leye
//let dialogbox=document.queryselector('.dialog');    dialog box ko select kr lete kyoki usko flex krna css file me none kr raka h
//plus.addeventlistner('click',openpopup) es openpopup ko peform krne ke leye function banna padega
//function openpopup(){   
    // dialogbox.style.display='flex';       hume jo dialog box h uska display none h usko flex kna h
//}
//me jab plus ke button par click kru kuch event peform hota h
//javascript ek evendriven language h me koi action hota h uksko event bolte h


//ab dialog box ka jo cross button us par click krte hi dialogbox close ho jeye uske leye ssbase phle -->cross button ko sleect krna padega aur usse display none krna padega addeventlister se
//let crossbtn=document.queryselector('.cross');
//crossbtn.addeventlistner('click',closepopup);//ek function banya closepopup
//function closepopup(){
//     dialogbox.style.display='none';
// }


//jab apn ek se jadya addticket krte h tab hume queryselectorall krna hoga
//ab me ke function banata hu jiska ka kaam hoga crossAndminmize
//agra me queryselectorall krta hu tho muje ek array milgi
// function crossAndmimize(){ //me ek function banya h uskme crossbtn aur minize btn ki functionlaity likuga hum es function addtoicket me call krta hu
//  let crossbtnArr=document.queryselectorall('.icon .color-3')
// for(let i=0;i<crossbtnArr.length;i++){
  //   crossbtnArr(i).addeventlistner('click',closeTicket)  ek ek ith button par ek crossbtnarr leguga jis par ki array call hoga    
//} 
//function closeTicket(e){  jab addeventlistner function ka refernce dete  tho ek event call hota jese ki  
//let box=e.target.closest(.box);
//box.style.display='none';
//}

//event kya hota h??
//ans.-->function ke referance me jo e (is an event) att h wo ek bhut bada object hota h e ke andar ek target(e.target ek html element lake deta h) hota h
//e.target(target ek object hota h jha par bi click kre wo html lake deta h)