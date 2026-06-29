import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle2,
  Clock,
  Building
} from "lucide-react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube
} from "react-icons/fa";
import "./Contact.css";

const Contact = ({ darkMode }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "AI & Machine Learning Solutions",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className={`contact-page ${darkMode ? "dark" : "light"}`}>
      {/* Background Glows */}
      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>

      <div className="contact-container">
        
        {/* HEADER SECTION */}
        <section className="contact-hero">
          <span className="contact-badge">Contact Us</span>
          <h1>Let's Build the Future <span className="highlight-text">Together</span></h1>
          <p className="contact-subtitle">
            Partner with HDCMA to build a resilient, secure, and modern digital core for your enterprise. Get in touch with our experts today.
          </p>
        </section>

        {/* CONTENT SPLIT */}
        <div className="contact-split">
          
          {/* LEFT COLUMN: INFO & SOCIALS */}
          <div className="contact-info-column">
            
            {/* Info Card */}
            <div className="info-card glass-card">
              <h2>Talk to Our Experts</h2>
              <p className="info-intro">
                Have a question about our enterprise solutions or want to discuss a customized deployment? Choose a channel below or send us a message.
              </p>

              <div className="info-items">
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Mail size={22} />
                  </div>
                  <div className="info-text">
                    <h4>Email Us</h4>
                    <a href="mailto:info@horizondigitalcore.com" className="info-link">info@horizondigitalcore.com</a>
                    <a href="mailto:support@hdcma.com" className="info-link">support@hdcma.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Phone size={22} />
                  </div>
                  <div className="info-text">
                    <h4>Call Us</h4>
                    <p className="info-paragraph">+91 40 1234 5678</p>
                    <p className="info-sub-paragraph">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <MapPin size={22} />
                  </div>
                  <div className="info-text">
                    <h4>Visit Offices</h4>
                    <p className="info-paragraph">Horizon Digital Core Management Associates</p>
                    <p className="info-sub-paragraph">HITEC City, Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Clock size={22} />
                  </div>
                  <div className="info-text">
                    <h4>Response Time</h4>
                    <p className="info-paragraph">Within 24 Hours</p>
                    <p className="info-sub-paragraph">Our systems consultants respond to all inquiries within one business day.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links Card */}
            <div className="social-links-card glass-card">
              <h3>Follow Our Core Channels</h3>
              <div className="social-grid">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn">
                  <FaInstagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter-btn">
                  <FaTwitter size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn">
                  <FaFacebook size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn youtube-btn">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="contact-form-column">
            <div className="form-card glass-card">
              {formSubmitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={56} />
                  </div>
                  <h2>Message Sent Successfully!</h2>
                  <p>
                    Thank you for reaching out to HDCMA. Our core enterprise technology consultants have received your message and will contact you shortly.
                  </p>
                  
                  <div className="success-details">
                    <div className="success-detail-row">
                      <Building size={16} />
                      <span>{formValues.organization || "Independent consultant"}</span>
                    </div>
                    <div className="success-detail-row">
                      <Mail size={16} />
                      <span>{formValues.email}</span>
                    </div>
                  </div>

                  <button 
                    className="reset-form-btn" 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormValues({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        organization: "",
                        subject: "AI & Machine Learning Solutions",
                        message: ""
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Send a Secure Message</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@company.com" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formValues.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 019-2834" 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="organization">Organization</label>
                      <input 
                        type="text" 
                        id="organization" 
                        name="organization" 
                        value={formValues.organization}
                        onChange={handleInputChange}
                        placeholder="Enterprise Corp" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Area of Interest</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formValues.subject}
                        onChange={handleInputChange}
                      >
                        <option value="AI & Machine Learning Solutions">AI & Machine Learning Solutions</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Cybersecurity Services">Cybersecurity Services</option>
                        <option value="SAP Solutions">SAP Solutions</option>
                        <option value="Cloud Services & DevOps">Cloud Services & DevOps</option>
                        <option value="IT Consulting & Managed Services">IT Consulting & Managed Services</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formValues.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your digital core requirements, challenges, or specifications..." 
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="btn-spinner"></span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
