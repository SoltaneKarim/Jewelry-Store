import React from 'react'

const About = () => {
  return (
    <section className="about_section layout_padding2-top layout_padding-bottom">
    <div className="design-box">
      <img src="images/design-2.png" alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Jewellery Shop
              </h2>
            </div>
            <p>
            Discover timeless elegance at JEWELRY-STORE. Our handpicked collection captures the essence of sophistication and craftsmanship. From stunning classics to modern marvels, we're here to adorn your moments with brilliance.
            </p>
            <div>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/about-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
