import React from 'react'

const Contact = () => {
  return (
    <section class="contact_section layout_padding">
    <div class="design-box">
      <img src="images/design-2.png" alt="" />
    </div>
    <div class="container ">
      <div class="">
        <h2 class="">
          Contact Us
        </h2>
      </div>

    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" class="message-box" placeholder="Message" />
            </div>
            <div class="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div class="map_container">
            <div class="map-responsive">
            <iframe
        title="Eiffel Tower Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.53548098762!2d2.294481515630491!3d48.85837097718938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c7e9bc752b21a87!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1566912480685!5m2!1sen!2sfr"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
