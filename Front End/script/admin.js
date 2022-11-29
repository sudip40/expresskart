function addcategory(e){
    event.preventDefault();
    let title=document.getElementById("cattitle").value.trim().toUpperCase();
    let desc=document.getElementById("catdesc").value.trim();
    
    
   let response=fetch('http://localhost:8080/category/addcategory', {
               method:'POST',
               headers:{
                   'Accept':'application/json',
                   'Content-Type':'application/json'
               },
               body: JSON.stringify({
                categorytitle: title,
                categorydescription: desc
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
                   New Category Added Successfully!
                 </div>`;
                //  setTimeout(() => { window.location.href="index.html"; }, 3000);
               }
               else{
                   document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
                   ${msg}
                 </div>`;
               }
            }
    }

    document.getElementById("ap").addEventListener('click',function(){
      document.getElementById("sc").innerHTML="";
      let response=fetch('http://localhost:8080/category/viewallcategory').then((response) => response.json())
             .then((data) => display(data));
             function display(data){
              data.forEach( function ( elem ) {
                let op = document.createElement( "option" );
                op.text=elem.categorydescription;
                op.value=elem.categoryid;
                op.label=elem.categorytitle;
               document.getElementById("sc").appendChild(op);
                } )
              }
    })

function addproduct(e){
      event.preventDefault();
      console.log("YES");
      let title=document.getElementById("protitle").value.trim().toUpperCase();
      let categoryid=document.getElementById("sc").value;
      let ctitle=document.getElementById("sc").label;
      let cdesc=document.getElementById("sc").text;
      let photo=document.getElementById("prophoto").value.trim();
      let price=document.getElementById("proprice").value;
      let discount=document.getElementById("prodiscount").value;
      let proquantity=document.getElementById("proquantity").value;
      let desc=document.getElementById("prodesc").value.trim();

    
    
   let response=fetch(`http://localhost:8080/product/addproduct/${categoryid}`, {
               method:'POST',
               headers:{
                   'Accept':'application/json',
                   'Content-Type':'application/json'
               },
               body: JSON.stringify({
                pname: title,
                pdesc: desc,
                pphoto: photo,
                pprice: price,
                pdiscount: discount,
                pquantity: proquantity,
                categoryid:categoryid
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
                   New Product Added Successfully!
                 </div>`;
                //  setTimeout(() => { window.location.href="index.html"; }, 3000);
               }
               else{
                   document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
                   ${msg}
                 </div>`;
               }
            }
      }

      document.getElementById("viewusers").addEventListener('click',function(){
        let response=fetch('http://localhost:8080/user/viewallusers').then((response) => response.json())
           .then((data) => display(data));
           function display(data){
            document.getElementById("table").innerHTML="";
              let trh = document.createElement("tr");
              let th1=document.createElement("th");
              let th2=document.createElement("th");
              let th3=document.createElement("th");
              let th4=document.createElement("th");
              let th5=document.createElement("th");
              let th6=document.createElement("th");
              th1.innerText="User Id";
              th2.innerText="User Name";
              th3.innerText="User Email";
              th4.innerText="User Phone";
              th5.innerText="User Address";
              th6.innerText="Remove";
              trh.append(th1,th2,th3,th4,th5,th6);
              document.getElementById("table").append(trh);

            data.forEach( function ( elem ) {
              let tr = document.createElement("tr");
              let td1=document.createElement("td");
              let td2=document.createElement("td");
              let td3=document.createElement("td");
              let td4=document.createElement("td");
              let td5=document.createElement("td");
              // let td6=document.createElement("td");
              let btn=document.createElement("button");
              btn.innerText="Remove";
              btn.setAttribute("class","remove");
              btn.addEventListener('click',function(){
                let response2=fetch(`http://localhost:8080/user/remove/${elem.userid}`,{ method: 'DELETE' }).then((response2) => response2.json())
                .then((data2) => removeproduct(data2));
                function removeproduct(data2){
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
                       User Removed Successfully!
                     </div>`;
                    setTimeout(() => { window.location.reload(); }, 3000);
                   }
                   else{
                       document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
                       ${msg}
                     </div>`;
                   }
                }
               });
              td1.innerText=elem.userid;
              td2.innerText=elem.username;
              td3.innerText=elem.useremail;
              td4.innerText=elem.userphone;
              td5.innerText=elem.useraddress;
              // td6.innerHTML=btn;
              tr.append(td1,td2,td3,td4,td5,btn);
              document.getElementById("table").append(tr);
              } )
               }
      });

      document.getElementById("viewcategory").addEventListener('click',function(){
        let response=fetch('http://localhost:8080/category/viewallcategory').then((response) => response.json())
        .then((data) => display(data));
        function display(data){
          console.log(data);
         document.getElementById("table2").innerHTML="";
           let trh = document.createElement("tr");
           let th1=document.createElement("th");
           let th2=document.createElement("th");
           let th3=document.createElement("th");
           let th4=document.createElement("th");
           th1.innerText="Category Id";
           th2.innerText="Category Title";
           th3.innerText="Category Description";
           th4.innerText="Remove";
           trh.append(th1,th2,th3,th4);
           document.getElementById("table2").append(trh);

         data.forEach( function ( elem ) {
           let tr = document.createElement("tr");
           let td1=document.createElement("td");
           let td2=document.createElement("td");
           let td3=document.createElement("td");
           let btn=document.createElement("button");
           btn.innerText="Remove";
           btn.setAttribute("class","remove");
           btn.addEventListener('click',function(){
            let response2=fetch(`http://localhost:8080/category/deletecategory/${elem.categoryid}`,{ method: 'DELETE' }).then((response2) => response2.json())
            .then((data2) => removeproduct(data2));
            function removeproduct(data2){
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
                   Category Removed Successfully!
                 </div>`;
                setTimeout(() => { window.location.reload(); }, 3000);
               }
               else{
                   document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
                   ${msg}
                 </div>`;
               }
            }
           });
           td1.innerText=elem.categoryid;
           td2.innerText=elem.categorytitle;
           td3.innerText=elem.categorydescription;

           tr.append(td1,td2,td3,btn);
           document.getElementById("table2").append(tr);
           })
            }
      });


      document.getElementById("viewproduct").addEventListener('click',function(){
        let response=fetch('http://localhost:8080/product/viewallproduct').then((response) => response.json())
        .then((data) => display(data));
        function display(data){
         document.getElementById("table3").innerHTML="";
           let trh = document.createElement("tr");
           let th1=document.createElement("th");
           let th2=document.createElement("th");
           let th3=document.createElement("th");
           let th4=document.createElement("th");
           let th5=document.createElement("th");
           let th6=document.createElement("th");
           let th7=document.createElement("th");
           let th8=document.createElement("th");
           let th9=document.createElement("th");
           let th10=document.createElement("th");
           th1.innerText="Id";
           th2.innerText="Title";
           th3.innerText="Photo";
           th4.innerText="Description";
           th5.innerText="Price";
           th6.innerText="Discount";
           th7.innerText="Quantity";
           th8.innerText="Category ID";
           th9.innerText="Category Name";
           th10.innerText="Remove";
           trh.append(th1,th2,th3,th4,th5,th6,th7,th8,th9,th10);
           document.getElementById("table3").append(trh);

         data.forEach( function ( elem ) {
           let tr = document.createElement("tr");
           let td1=document.createElement("td");
           let td2=document.createElement("td");
           let td3=document.createElement("td");
           let td4=document.createElement("td");
           let td5=document.createElement("td");
           let td6=document.createElement("td");
           let td7=document.createElement("td");
           let td8=document.createElement("td");
           let td9=document.createElement("td");
           let btn=document.createElement("button");
           btn.innerText="Remove";
           btn.setAttribute("class","remove");
           btn.addEventListener('click',function(){
            let response2=fetch(`http://localhost:8080/product/deleteproduct/${elem.pid}`,{ method: 'DELETE' }).then((response2) => response2.json())
            .then((data2) => removeproduct(data2));
            function removeproduct(data2){
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
                   Product Removed Successfully!
                 </div>`;
                setTimeout(() => { window.location.reload(); }, 3000);
               }
               else{
                   document.getElementById("msg").innerHTML=`<div class="alert alert-danger text-center" role="alert">
                   ${msg}
                 </div>`;
               }
            }
           });
           td1.innerText=elem.pid;
           td2.innerText=elem.pname;
           td3.innerText=elem.pphoto;
           td4.innerText=elem.pdesc;
           td5.innerText=elem.pprice;
           td6.innerText=elem.pdiscount;
           td7.innerText=elem.pquantity;
           td8.innerText=elem.category.categoryid;
           td9.innerText=elem.category.categorytitle;
           tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,btn);
           document.getElementById("table3").append(tr);
           } )
            }
      });

      function nums(){
        let response=fetch('http://localhost:8080/user/viewallusers').then((response) => response.json())
           .then((data) => displayuser(data));
           function displayuser(data){
            if(data.length==undefined){
              document.getElementById("un").innerText=0;
            }
            else{
              let n=data.length;
              document.getElementById("un").innerText=n;
            }
            
           }
           let response2=fetch('http://localhost:8080/category/viewallcategory').then((response2) => response2.json())
           .then((data) => displaycategory(data));
          function displaycategory(data){
            if(data.length==undefined){
            document.getElementById("cn").innerText=0;
            }
            else{
              let n=data.length;
              document.getElementById("cn").innerText=n;
            }
            
          }
          let response3=fetch('http://localhost:8080/product/viewallproduct').then((response3) => response3.json())
        .then((data) => displayproduct(data));
        function displayproduct(data){
          if(data.length==undefined){
            document.getElementById("pn").innerText=0;
          }
          else{
            let n=data.length;
            document.getElementById("pn").innerText=n;
          }
        }
      }
      window.onload=nums();