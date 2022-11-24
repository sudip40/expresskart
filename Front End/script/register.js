async function register(e){
   event.preventDefault();
    console.log("Yes");
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let phone=document.getElementById("phone").value;
    let address=document.getElementById("address").value;

    let response= await fetch('http://localhost:8080/user/register', {
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
    });
    console.log("Yes");
    console.log(response);
}

// document.getElementById("reg").addEventListener("click",register());
// function func(e){
// event.preventDefault();
// console.log("Yes");
// }