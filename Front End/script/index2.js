window.onload=display();
function display(){
    document.getElementById("second").innerHTML="";
    
    let response=fetch('http://localhost:8080/category/viewallcategory').then((response) => response.json()).then((data) => display(data));
           function display(data){
            data.forEach( function ( elem ) {
              let btn = document.createElement( "button" );
              btn.innerText=elem.categorytitle;
              btn.addEventListener('click',function(){
                let response2=fetch(`http://localhost:8080/user/viewbycategory/${elem.categorytitle}`).then((response2) => response2.json())
                .then((data) => displayproduct(data));
                function displayproduct(data){
                 document.getElementById("pro").innerHTML="";
                 data.forEach( function ( elem ) {
                   let card = document.createElement("div");
                    card.setAttribute("class","card procard");
                   let img=document.createElement("img");
                   img.setAttribute("src",elem.pphoto);
                   let name=document.createElement("h3");
                   name.innerText=elem.pname;
                   let par=document.createElement("p");
                   par.innerText=elem.pdesc;
                   let dis=document.createElement("div");
                   dis.innerText="Discount : " +elem.pdiscount+"% off";
                   dis.setAttribute("class","dis");
                   let price=document.createElement("h4");
                   price.innerText="Price: ₹"+elem.pprice;
                   let btn=document.createElement("button");
                   btn.innerText="Add to Cart";
                   btn.setAttribute("class","add btn btn-outline-success");
                   btn.addEventListener('click',function(){
                   });
                   
                   card.append(img,name,par,dis,price,btn);
                   document.getElementById("pro").append(card);
                   } )
                    }
              });
              btn.setAttribute("class","list-group-item list-group-item-action");
              document.getElementById("second").appendChild(btn);
              })
            }

            let response2=fetch('http://localhost:8080/product/viewallproduct').then((response2) => response2.json())
            .then((data) => displayproduct(data));
            function displayproduct(data){
             document.getElementById("pro").innerHTML="";
             data.forEach( function ( elem ) {
               let card = document.createElement("div");
                card.setAttribute("class","card procard");
               let img=document.createElement("img");
               img.setAttribute("src",elem.pphoto);
               let name=document.createElement("h3");
               name.innerText=elem.pname;
               let par=document.createElement("p");
               par.innerText=elem.pdesc;
               let dis=document.createElement("div");
               dis.innerText="Discount : " +elem.pdiscount+"% off";
               dis.setAttribute("class","dis");
               let price=document.createElement("h4");
               price.innerText="Price: ₹"+elem.pprice;
               let btn=document.createElement("button");
               btn.innerText="Add to Cart";
               btn.setAttribute("class","add btn btn-outline-success");
               btn.addEventListener('click',function(){
               });
               
               card.append(img,name,par,dis,price,btn);
               document.getElementById("pro").append(card);
               } )
                }
}

document.getElementById("all").addEventListener('click',function(){
    let response2=fetch('http://localhost:8080/product/viewallproduct').then((response2) => response2.json())
            .then((data) => displayproduct(data));
            function displayproduct(data){
             document.getElementById("pro").innerHTML="";
             data.forEach( function ( elem ) {
               let card = document.createElement("div");
                card.setAttribute("class","card procard");
               let img=document.createElement("img");
               img.setAttribute("src",elem.pphoto);
               let name=document.createElement("h3");
               name.innerText=elem.pname;
               let par=document.createElement("p");
               par.innerText=elem.pdesc;
               let dis=document.createElement("div");
               dis.innerText="Discount : " +elem.pdiscount+"% off";
               dis.setAttribute("class","dis");
               let price=document.createElement("h4");
               price.innerText="Price: ₹"+elem.pprice;
               let btn=document.createElement("button");
               btn.innerText="Add to Cart";
               btn.setAttribute("class","add btn btn-outline-success");
               btn.addEventListener('click',function(){
               });
               
               card.append(img,name,par,dis,price,btn);
               document.getElementById("pro").append(card);
               } )
                }
});