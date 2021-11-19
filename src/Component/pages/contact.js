import React from 'react'
import Header from './header'
import Footer from './footer'
export default function Contact() {
    return (
        <div>
            <Header />
            {/* <!-- Breadcrumb Section Begin --> */}
            <section class="breadcrumb-section set-bg" style={{backgroundImage: `url("img/breadcrumb.jpg")`}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb__text">
                                <h2>Contact Us</h2>
                                <div class="breadcrumb__option">
                                    <a href="./">Home</a>
                                    <span>Contact Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End --> */}

            {/* <!-- Contact Section Begin --> */}
            <section class="contact spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_phone"></span>
                                <h4>Phone</h4>
                                <p>+01-3-8888-6868</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_pin_alt"></span>
                                <h4>Address</h4>
                                <p>60-49 Road 11378 New York</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_clock_alt"></span>
                                <h4>Open time</h4>
                                <p>10:00 am to 23:00 pm</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_mail_alt"></span>
                                <h4>Email</h4>
                                <p>hello@colorlib.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section End --> */}

            {/* <!-- Map Begin --> */}
            <div className="map-iframe">
                    <iframe
                      //  frameborder="1|0"
                      width="1140"
                      title="map"
                      height="541.25"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                      style={{
                        border: 0,
                        width: '100% ',
                        height: 400,
                      }}
                    ></iframe>
                    <div class="map-inside">
                    <i class="icon_pin"></i>
                    <div class="inside-widget">
                        <h4>New York</h4>
                        <ul>
                            <li>Phone: +12-345-6789</li>
                            <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Map End --> */}

            {/* <!-- Contact Form Begin --> */}
            <div class="contact-form spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="contact__form__title">
                                <h2>Leave Message</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your name"/>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your Email"/>
                            </div>
                            <div class="col-lg-12 text-center">
                                <textarea placeholder="Your message"></textarea>
                                <button type="submit" class="site-btn">SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
            {/* <!-- Contact Form End --> */}
            <Footer />
        </div>
    )
}
