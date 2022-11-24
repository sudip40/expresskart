async function signin(e){
event.preventDefault();
console.log("Yes");
 let email=document.getElementById("email").value;
 let password=document.getElementById("password").value;
 let adminid=document.getElementById("adminid").value;
 
 let response= await fetch('http://localhost:8080/user/login', {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
         useremail: email,
         userpassword: password
        })
    });
    console.log("Yes");
    console.log(response);
}