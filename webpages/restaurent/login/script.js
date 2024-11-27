let username=document.getElementById("email");
let password=document.getElementById("pswd");
let login=document.getElementById('button1');
let create=document.getElementById('button2');
let para1=document.getElementsByClassName("para")[0];
let para2=document.getElementsByClassName("para")[1];

function hideError(){
    para1.style.cssText="display:none";
para2.style.cssText="display:none";

}
hideError()
function showError(){
    para1.style.cssText="color:red;font-size:12px;dispaly:block";
para2.style.cssText="color:red;font-size:12px;display:block";
}


login.addEventListener("click",()=>{
    if(username.value=="" || password.value==""){
       showError();
    }else{
       hideError();
       
    }
})
let eye=document.getElementById("eye");

eye.style.cssText="display:inline-block;position:absolute;margin-top:-26px;margin-left:130px;font-size:16px;";
eye.addEventListener("click",()=>{
    if(password.type=="password"){
        password.type="text";
    }else{
        password.type="password";
    }
})
create.addEventListener("click",()=>{
    window.location.href="";
})