const Contact = () => {
    return (
        <>
         {/* Contact Information and Form */}
         <div className="contactWrapper row justify-content-center">
                        <div className="col-lg-6">
                            <div className="contact-info">
                                <div><strong>Email _ </strong> ukalilope@gmail.com</div>
                                <div><strong>Address _ </strong>경기도 시흥시 월곶동 1010-1</div>
                                <div><strong>Phone _ </strong>010-3251-8317</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    {/* Email address input */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    {/* Phone number input */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    {/* Message input */}
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required"></textarea>
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    {/* Submit Button */}
                                    <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Contact;