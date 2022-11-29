async function register(e){
   event.preventDefault();
    console.log("Yes");
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let phone=document.getElementById("phone").value;
    let address=document.getElementById("address").value;

    let response= fetch('http://localhost:8080/user/register', {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            username: name,
            useremail: email,
            userpassword: password,
            userphone: phone,
            useraddress: address
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
            Sign up Successfull!
          </div>`;
          setTimeout(() => { window.location.href="login.html"; }, 3000);
          ;
        }
        else{
            document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
            ${msg}
          </div>`;
        }
}
}