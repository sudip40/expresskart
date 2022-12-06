window.onload = display();
window.onload = func();
function func() {
  let l = JSON.parse(localStorage.getItem("id"));
  if (l != null) {
    document.getElementById("d").innerHTML = "";
    document.getElementById("d").style.width = "50%";
    let head = (document.createElement("h4").innerText = "Welcome " + l[2]);
    let cart = document.createElement("button");
    cart.setAttribute("class", "crt");
    cart.setAttribute("id", "cart");
    let lo = document.createElement("button");
    lo.setAttribute("id", "logout");
    lo.setAttribute("class", "crt");
    cart.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path></svg>`;
    lo.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>`;
    cart.setAttribute("data-toggle", "modal");
    cart.setAttribute("data-target", "#cartModal");
    cart.addEventListener('click',function(){
     let table=`
     <table id='table'>
     <thead class='thread-light'>
     <tr>
     <th>Item Name</th>
     <th>Price</th>
     <th>Quantity</th>
     <th>Total Price</th>
     <th>Action</th>
     </tr>
     </thead>
     `;
     document.getElementById("body").innerHTML="";
     document.getElementById("body").innerHTML=table;

     let l=JSON.parse(localStorage.getItem("cartdata"));
     let total=0;
     if(l!=null && l.length>0){
        l.forEach(function(elem,index){
           let tr=document.createElement("tr");
           let td1=document.createElement("td");
           let td2=document.createElement("td");
           let td3=document.createElement("td");
           let td4=document.createElement("td");
           let btn=document.createElement("button");
           td1.innerText=elem[0];
           td2.innerText=elem[1];
           td3.innerText=elem[3];
           td4.innerText=(elem[1]-(elem[1]*(elem[2]/100)))*elem[3];
           total=total+(elem[1]-(elem[1]*(elem[2]/100)))*elem[3];
           btn.innerText="Remove";
           btn.addEventListener('click',function(){
            l.splice(index,1);
            localStorage.setItem("cartdata",JSON.stringify(l));
            window.location.reload();
           })
           tr.append(td1,td2,td3,td4,btn);
           document.getElementById("table").append(tr);
        })
        let t=document.createElement("h3");
        t.innerText="Total Cart Price: "+total;
        document.getElementById("body").append(t);
     }
    });
    document.getElementById("d").append(head, cart, lo);
  }
}
function display() {
  document.getElementById("second").innerHTML ="";

  let response = fetch("http://localhost:8080/category/viewallcategory")
    .then((response) => response.json())
    .then((data) => display(data));
  function display(data) {
    data.forEach(function (elem) {
      let btn = document.createElement("button");
      btn.innerText = elem.categorytitle;
      btn.addEventListener("click", function () {
        let response2 = fetch(
          `http://localhost:8080/user/viewbycategory/${elem.categorytitle}`
        )
          .then((response2) => response2.json())
          .then((data) => displayproduct(data));
        function displayproduct(data) {
          document.getElementById("pro").innerHTML = "";
          data.forEach(function (elem) {
            let card = document.createElement("div");
            card.setAttribute("class", "card procard");
            let img = document.createElement("img");
            img.setAttribute("src", elem.pphoto);
            let name = document.createElement("h3");
            name.innerText = elem.pname;
            let par = document.createElement("p");
            par.innerText = elem.pdesc;
            let dis = document.createElement("div");
            dis.innerText = "Discount : " + elem.pdiscount + "% off";
            dis.setAttribute("class", "dis");
            let price = document.createElement("h4");
            price.innerText = "Price: ₹" + elem.pprice;
            let btn = document.createElement("button");
            btn.innerText = "Add to Cart";
            btn.addEventListener("click", function () {
                let l = JSON.parse(localStorage.getItem("id"));
                if (l != null) {
                  let res = fetch(`http://localhost:8080/user/check/${l[1]}`)
                    .then((res) => res.json())
                    .then((d) => check(d));
                  function check(d) {
                    let flag = true;
                    let msg;
                    for (let j in d) {
                      if (j == "error") {
                        flag = false;
                        msg = data["message"];
                      }
                    }
                    if (flag) {
                      let cd = JSON.parse(localStorage.getItem("cartdata"));
                      if (cd != null && cd.length > 0) {
                        let f=false;
                        cd.forEach(function(e){
                          if(e[0]==elem.pname){
                            e[3]++;
                            f=true;
                          }
                        })
                        if(f){
                         localStorage.setItem("cartdata", JSON.stringify(cd));
                        }
                        else{
                            let quality=1;
                        cd.push([
                          elem.pname,
                          elem.pprice,
                          elem.pdiscount,
                          1
                        ]);
                        localStorage.setItem("cartdata", JSON.stringify(cd));
                        }
                        
                        document.getElementById(
                          "msg"
                        ).innerHTML = `<div class="alert alert-success text-center" role="alert">
                         Product Added to Cart Successfully!
                         </div>`;
                      } else {
                        let dd = [
                          [elem.pname, elem.pprice, elem.pdiscount,1],
                        ];
                        localStorage.setItem("cartdata", JSON.stringify(dd));
                        document.getElementById(
                          "msg"
                        ).innerHTML = `<div class="alert alert-success text-center" role="alert">
                        Product Added to Cart Successfully!
                        </div>`;
                      }
                    } else {
                      document.getElementById(
                        "msg"
                      ).innerHTML = `<div class="alert alert-danger text-center" role="alert">
                                      You are Not Logged In, Log in First
                                      </div>`;
                    }
                  }
                }
              });
            btn.setAttribute("class", "add btn btn-outline-success");
            card.append(img, name, par, dis, price, btn);
            document.getElementById("pro").append(card);
          });
        }
      });
      btn.setAttribute("class", "list-group-item list-group-item-action");
      document.getElementById("second").appendChild(btn);
    });
  }

  let response2 = fetch("http://localhost:8080/product/viewallproduct")
    .then((response2) => response2.json())
    .then((data) => displayproduct(data));
  function displayproduct(data) {
    document.getElementById("pro").innerHTML = "";
    data.forEach(function (elem) {
      let card = document.createElement("div");
      card.setAttribute("class", "card procard");
      let img = document.createElement("img");
      img.setAttribute("src", elem.pphoto);
      let name = document.createElement("h3");
      name.innerText = elem.pname;
      let par = document.createElement("p");
      par.innerText = elem.pdesc;
      let dis = document.createElement("div");
      dis.innerText = "Discount : " + elem.pdiscount + "% off";
      dis.setAttribute("class", "dis");
      let price = document.createElement("h4");
      price.innerText = "Price: ₹" + elem.pprice;
      let btn = document.createElement("button");
      btn.innerText = "Add to Cart";
      btn.setAttribute("class", "add btn btn-outline-success");
      btn.addEventListener("click", function () {});
      btn.addEventListener("click", function () {
        let l = JSON.parse(localStorage.getItem("id"));
        if (l != null) {
          let res = fetch(`http://localhost:8080/user/check/${l[1]}`)
            .then((res) => res.json())
            .then((d) => check(d));
          function check(d) {
            let flag = true;
            let msg;
            for (let j in d) {
              if (j == "error") {
                flag = false;
                msg = data["message"];
              }
            }
            if (flag) {
              let cd = JSON.parse(localStorage.getItem("cartdata"));
              if (cd != null && cd.length > 0) {
                let f=false;
                cd.forEach(function(e){
                  if(e[0]==elem.pname){
                    e[3]++;
                    f=true;
                  }
                })
                if(f){
                 localStorage.setItem("cartdata", JSON.stringify(cd));
                }
                else{
                    let quality=1;
                cd.push([
                  elem.pname,
                  elem.pprice,
                  elem.pdiscount,
                  1
                ]);
                localStorage.setItem("cartdata", JSON.stringify(cd));
                }
                
                document.getElementById(
                  "msg"
                ).innerHTML = `<div class="alert alert-success text-center" role="alert">
                 Product Added to Cart Successfully!
                 </div>`;
              } else {
                let dd = [
                  [elem.pname, elem.pprice, elem.pdiscount,1],
                ];
                localStorage.setItem("cartdata", JSON.stringify(dd));
                document.getElementById(
                  "msg"
                ).innerHTML = `<div class="alert alert-success text-center" role="alert">
                Product Added to Cart Successfully!
                </div>`;
              }
            } else {
              document.getElementById(
                "msg"
              ).innerHTML = `<div class="alert alert-danger text-center" role="alert">
                              You are Not Logged In, Log in First
                              </div>`;
            }
          }
        }
      });
      card.append(img, name, par, dis, price, btn);
      document.getElementById("pro").append(card);
    });
  }
}

document.getElementById("all").addEventListener("click", function () {
  let response2 = fetch("http://localhost:8080/product/viewallproduct")
    .then((response2) => response2.json())
    .then((data) => displayproduct(data));
  function displayproduct(data) {
    document.getElementById("pro").innerHTML = "";
    data.forEach(function (elem) {
      let card = document.createElement("div");
      card.setAttribute("class", "card procard");
      let img = document.createElement("img");
      img.setAttribute("src", elem.pphoto);
      let name = document.createElement("h3");
      name.innerText = elem.pname;
      let par = document.createElement("p");
      par.innerText = elem.pdesc;
      let dis = document.createElement("div");
      dis.innerText = "Discount : " + elem.pdiscount + "% off";
      dis.setAttribute("class", "dis");
      let price = document.createElement("h4");
      price.innerText = "Price: ₹" + elem.pprice;
      let btn = document.createElement("button");
      btn.innerText = "Add to Cart";
      btn.setAttribute("class", "add btn btn-outline-success");
      btn.addEventListener("click", function () {});
      btn.addEventListener("click", function () {
        let l = JSON.parse(localStorage.getItem("id"));
        if (l != null) {
          let res = fetch(`http://localhost:8080/user/check/${l[1]}`)
            .then((res) => res.json())
            .then((d) => check(d));
          function check(d) {
            let flag = true;
            let msg;
            for (let j in d) {
              if (j == "error") {
                flag = false;
                msg = data["message"];
              }
            }
            if (flag) {
              let cd = JSON.parse(localStorage.getItem("cartdata"));
              if (cd != null && cd.length > 0) {
                let f=false;
                cd.forEach(function(e){
                  if(e[0]==elem.pname){
                    e[3]++;
                    f=true;
                  }
                })
                if(f){
                 localStorage.setItem("cartdata", JSON.stringify(cd));
                }
                else{
                    let quality=1;
                cd.push([
                  elem.pname,
                  elem.pprice,
                  elem.pdiscount,
                  1
                ]);
                localStorage.setItem("cartdata", JSON.stringify(cd));
                }
                
                document.getElementById(
                  "msg"
                ).innerHTML = `<div class="alert alert-success text-center" role="alert">
                 Product Added to Cart Successfully!
                 </div>`;
              } else {
                let dd = [
                  [elem.pname, elem.pprice, elem.pdiscount,1],
                ];
                localStorage.setItem("cartdata", JSON.stringify(dd));
                document.getElementById(
                  "msg"
                ).innerHTML = `<div class="alert alert-success text-center" role="alert">
                Product Added to Cart Successfully!
                </div>`;
              }
            } else {
              document.getElementById(
                "msg"
              ).innerHTML = `<div class="alert alert-danger text-center" role="alert">
                              You are Not Logged In, Log in First
                              </div>`;
            }
          }
        }
      });
      card.append(img, name, par, dis, price, btn);
      document.getElementById("pro").append(card);
    });
  }
});

document.getElementById("logout").addEventListener("click", function () {
  let uuid = JSON.parse(localStorage.getItem("id"))[1];
  let response = fetch(`http://localhost:8080/user/logout/${uuid}`)
    .then((response) => response.json())
    .then((data) => display(data));
  function display(data) {
    let flag = false;
    let msg;
    if (data.uuid != undefined) {
      flag = true;
      msg = data["message"];
    }
    if (flag) {
      document.getElementById(
        "msg"
      ).innerHTML = `<div class="alert alert-success text-center" role="alert">
            Log Out Successfully!
          </div>`;
      localStorage.removeItem("id");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      document.getElementById(
        "msg"
      ).innerHTML = `<div class="alert alert-danger text-center" role="alert">
            ${msg}
          </div>`;
    }
    console.log(data);
  }
});

document.getElementById("check").addEventListener('click',function(){
  
  let p=JSON.parse(localStorage.getItem("cartdata"));
  if(p!=null){
   window.location.href="payment.html";
  }
})
