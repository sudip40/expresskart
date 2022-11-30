function signin(e){
event.preventDefault();
 let email=document.getElementById("email").value.trim();
 let password=document.getElementById("password").value.trim();
 let adminid=document.getElementById("adminid").value.trim();
 if(adminid==""){
  let response=fetch('http://localhost:8080/user/login', {
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
     useremail: email,
     userpassword: password
    })
}).then((response) => response.json())
.then((data) => display(data));
function display(data){
    let flag=true;
    let msg;
    for(let j in data){
        if(j=="error"){
          flag=false;
          msg=data["message"];
        }
    }
    if(flag){
        document.getElementById("msg").innerHTML=`<div class="alert alert-success text-center" role="alert">
        Sign in Successfull!
      </div>`;
      localStorage.setItem("id",JSON.stringify([data.userid,data.uuid,data.email]));
      setTimeout(() => { window.location.href="index.html"; }, 3000);
    }
    else{
        document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
        ${msg}
      </div>`;
    }
 }
 }


 else{
  let response=fetch('http://localhost:8080/admin/login', {
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password,
      adminid: adminid
    })
}).then((response) => response.json())
.then((data) => display(data));
function display(data){
    let flag=true;
    let msg;
    for(let j in data){
        if(j=="error"){
          flag=false;
          msg=data["message"];
        }
    }
    if(flag){
        document.getElementById("msg").innerHTML=`<div class="alert alert-success text-center" role="alert">
        Admin Sign in Successfull!
      </div>`;
      setTimeout(() => { window.location.href="admin.html"; }, 3000);
    }
    else{
        document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
        ${msg}
      </div>`;
    }
 }
 }

}