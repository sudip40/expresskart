let navbar=()=>{
    return `<nav class="navbar navbar-expand-lg navbar-dark bg-light custom-bg">
    <a href="index.html"><img id="logo" src="./img/ek.png" alt=""></a>
    <div class="container">
    <a class="navbar-brand" href="index.html">ExpressKart</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
        
      <ul class="navbar-nav ml-auto" id="ul">
      <li class="nav-item active">
          <a class="nav-link" href="login.html">Login</a>
      </li>
        <li class="nav-item active">
          <a class="nav-link" href="register.html">Register</a>
      </li>
      </ul>
    </div>
    </div>
  </nav>`
}

let footer=()=>{
  return `   <!-- Remove the container if you want to extend the Footer to full width. -->
  <!-- <div class="container my-5"> -->
    <!-- Footer -->
    <footer class="text-center text-white" style="background-color: #3f51b5">
      <!-- Grid container -->
      <div class="container">
        <!-- Section: Links -->
        <section class="mt-5">
          <!-- Grid row-->
          <div class="row text-center d-flex justify-content-center pt-5">
            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">About us</a>
              </h6>
            </div>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Products</a>
              </h6>
            </div>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Rewards</a>
              </h6>
            </div>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Help</a>
              </h6>
            </div>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <a href="#!" class="text-white">Contact</a>
              </h6>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row-->
        </section>
        <!-- Section: Links -->
  
        <hr class="my-5" />
  
        <!-- Section: Text -->
        <section class="mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <p>
              Expresskart is a well-known e-commerce site where you may get more things for less money. You can browse our product categories and forms. Our quality check team has verified the authenticity of every product on our website. and confirmed delivery of your merchandise will occur within 4-5 days.
              </p>
            </div>
          </div>
        </section>
        <!-- Section: Text -->
  
        <!-- Section: Social -->
        <section class="text-center mb-5">
          <a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
        </section>
        <!-- Section: Social -->
      </div>
      <!-- Grid container -->
  
      <!-- Copyright -->
      <div
           class="text-center p-3"
           style="background-color: rgba(0, 0, 0, 0.2)"
           >
        © 2022 Copyright:
        <a class="text-white" href="#"
           >ExpressKart.com</a
          >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  <!-- </div> -->
  <!-- End of .container -->`;
}
export  {navbar,footer};
