import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import slider from '../assets/slider-img.png'



const NavBar = () => {
  return (
    <div>
      <div className="hero_area">
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt=""/>
            <span>
              Lodge
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="jewellery.html">jewelry </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
              </ul>

            </div>
            <div className="quote_btn-container ">
              <a href="">
                <img src={cart} alt=""/>
                <div className="cart_number">
                  0
                </div>
              </a>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <section className=" slider_section position-relative">
      <div className="design-box">
        <img src="images/design-1.png" alt=""/>
      </div>
      <div className="slider_number-container d-none d-md-block">
        <div className="number-box">
          <span>
            01
          </span>
          <hr/>
          <span className="jwel">
            J <br/>
            e <br/>
            w <br/>
            e <br/>
            l <br/>
            r <br/>
            y
          </span>
          <hr/>
          <span>
            02
          </span>
        </div>
      </div>
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail_box">
                    <h2>
                      <span> New Collection</span>
                      <hr/>
                    </h2>
                    <h1>
                    Jewelry
                    </h1>
                    <p>
                    Elevate Your Style with JEWELRY-STORE. Immerse yourself in a world of exquisite beauty and unparalleled craftsmanship. Explore our curated selection of stunning jewelry, each piece a testament to elegance and artistry. Redefine your allure with every shimmering detail.
                    </p>
                    <div>
                      <a href="">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={slider} alt=""/>
                  </div>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>

    </section>
  </div>
    </div>
  )
}

export default NavBar
