import { useState } from "react";
import "./contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <main className="contact-page">

            <section className="contact-intro">

                <p className="contact-small-title">
                    GET IN TOUCH
                </p>

                <h1>
                    Contact Us
                </h1>

                <p>
                    Have a question or suggestion? Feel free to contact us
                    using the form below.
                </p>

            </section>

            <section className="contact-container">

                <div className="contact-form-card">

                    <h2>
                        Send a Message
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message"
                                rows="6"
                                required
                            ></textarea>

                        </div>

                        <button
                            type="submit"
                            className="send-button"
                        >
                            Send Message
                        </button>

                    </form>

                    {submitted && (
                        <p className="success-message">
                            Thank you! Your message has been submitted.
                        </p>
                    )}

                </div>

                <div className="contact-info-card">

                    <h2>
                        Get in Touch
                    </h2>

                    <div className="contact-information">

                        <div>
                            <strong>Email</strong>
                            <p>weather.now@example.com</p>
                        </div>

                        <div>
                            <strong>Location</strong>
                            <p>Kathmandu, Nepal</p>
                        </div>

                        <div>
                            <strong>Availability</strong>
                            <p>Available for questions and suggestions</p>
                        </div>

                    </div>

                    <div className="contact-note">

                        <p>
                            This contact form is included as part of the
                            WeatherNow project interface.
                        </p>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;