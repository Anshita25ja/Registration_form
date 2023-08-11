// let submit=document.getElementById("submit");
let inner=document.getElementById("inner");
let username=document.getElementById("name");
let Email=document.getElementById("Email");
let Phone=document.getElementById("Phone");
let Password=document.getElementById("Password");
let Confirm_Password=document.getElementById("Confirm_Password");
let msg=document.querySelector(".de");
let form=document.getElementById(".form");
inner.addEventListener('submit',get);

function get(e){
e.preventDefault();
Valid();
}

function Valid()
{
    let user=username.value.trim();
    let email=Email.value.trim();
    let phone=Phone.value.trim();
 let password=Password.value.trim();
 let cpassword=Confirm_Password.value.trim();

    if(user===""){
        error(username,"enter a username");
        
    }
    else if(user.length<=2){
        error(username,"enter a character more than 2 char");
        

    }
    else
    {
        success(username);
    }

    if(email===""){
        error(Email,"enter a email");
        }
    else if(email.length<=2){
        error(Email,"enter a character more than 2 char");
         }
      else{
    success(Email)
}

if(phone===""){
    error(Phone,"enter a phone");
    

}
else if(phone.length !=10){
    error(Phone,"Not a valid phone no.");
    

}
else{
    success(Phone);


}


if(password===""){
    error(Password,"enter a password");
    


}
else if(password.length <=3){
    error(Password,"more than 3 digit.");
    

}
else{
    success(Password);


}

 if(cpassword===""){
    error(Confirm_Password,"enter a password");



}

else if(password === cpassword){
    success(Confirm_Password);
    

}
else{
    error(Confirm_Password,"Not a valid password.");
    

}
}

function success(input){
    msg.style.display="none";
    let pa=input.parentElement;
    let message=pa.querySelector(".de");

    //circle icon
    let icon_circle=pa.querySelector(".fa-circle-check");
    icon_circle.style.color="lightgreen";
    icon_circle.style.display="inline-block";
    //border
    let inpu_border=pa.querySelector(".con");
    inpu_border.style.border="2px solid green";
    //message none
    message.style.display="none";
    //exclamation none
    let icon=pa.querySelector(".fa-exclamation");
    icon.style.display="none";


}
function error(input,me){
    let pa=input.parentElement;
    let message=pa.querySelector(".de");
    //display message display
    message.style.display="block";
    message.innerText=me;

//exclamation icon
    let icon=pa.querySelector(".fa-exclamation");
    icon.style.display="inline-block";
    icon.style.color="red";
    //border
let inpu_border=pa.querySelector(".con");
inpu_border.style.border="2px solid red";
//icon none
    let icon_circle=pa.querySelector(".fa-circle-check");
    icon_circle.style.display="none";

}

