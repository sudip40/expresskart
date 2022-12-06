document.getElementById("submit").addEventListener('click',function(e){
event.preventDefault();
console.log("Pi");
let user= JSON.parse(localStorage.getItem("id"));
let products= JSON.parse(localStorage.getItem("cartdata"));
for(let i=0;i<products.length;i++){
    let key=user[1];
    let tc=products[i][1]*(products[i][2]/100)*products[i][3];
    let response=fetch(`http://localhost:8080/order/create/${key}/${tc}`, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
         name:products[i][0],
         quantity:products[i][3]
        })
    }).then((response) => response.json())
    .then((data) => display(data));
    function display(data){
        console.log(data);
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
            Order Placed Successfully!
          </div>`;
         setTimeout(() => { window.location.href="index.html"; }, 3000);
        }
        else{
            document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
            ${msg}
          </div>`;
        }
     }
}
}
);