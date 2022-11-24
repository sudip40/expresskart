async function signin(e){
event.preventDefault();
 let email=document.getElementById("email").value;
 let password=document.getElementById("password").value;
 let adminid=document.getElementById("adminid").value;
 if(adminid==""){
    console.log(0);
 }
 else{
    console.log(adminid);
 }
}