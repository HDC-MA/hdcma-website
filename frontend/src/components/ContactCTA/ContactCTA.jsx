import "./ContactCTA.css";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  Clock3,
  Building2,
  ShieldCheck
} from "lucide-react";

function ContactCTA({ darkMode }) {
  return (
    <section
      className={`contact-section ${darkMode ? "dark" : ""}`}
    >
      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <span className="contact-tag">
            CONTACT HDCMA
          </span>

          <h2>
            Let's Build Your
            <br />
            Next Digital Solution
          </h2>

          <p>
            Whether you're planning a MERN Stack application,
            AI solution, Cloud migration, SAP implementation
            or Digital Transformation project, our experts
            are here to help.
          </p>

          {/* Trust Points */}

          <div className="contact-highlights">

            <div className="highlight-item">
              <ShieldCheck size={18} />
              Enterprise Solutions
            </div>

            <div className="highlight-item">
              <Clock3 size={18} />
              24/7 Technical Support
            </div>

            <div className="highlight-item">
              <Building2 size={18} />
              20+ Business Clients
            </div>

          </div>

          {/* Contact Cards */}

          <div className="contact-grid">

            <div className="contact-card">

              <div className="contact-icon">
                <Mail size={26} />
              </div>

              <div>
                <h4>Email</h4>
                <p>
                  info@horizondigitalcore.com
                </p>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <Phone size={26} />
              </div>

              <div>
                <h4>Phone</h4>
                <p>
                  +91 9160897498
                </p>
              </div>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <MapPin size={26} />
              </div>

              <div>
                <h4>Location</h4>
                <p>
                  Hyderabad, Telangana
                </p>
              </div>

            </div>

            <a
              href="https://wa.me/919160897498"
              target="_blank"
              rel="noreferrer"
              className="contact-card whatsapp-card"
            >

              <div className="contact-icon">
                <MessageCircle size={26} />
              </div>

              <div>
                <h4>WhatsApp</h4>
                <p>
                  Chat With Our Team
                </p>
              </div>

            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-right">

          <div className="contact-form">

            <span className="form-tag">
              REQUEST CONSULTATION
            </span>

            <h3>
              Tell Us About Your Project
            </h3>

            <form>

              <div className="form-row">

                <input
                  type="text"
                  placeholder="Company Name *"
                  required
                />

                <input
                  type="email"
                  placeholder="Business Email *"
                  required
                />

              </div>

              <div className="form-row">

                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                />

                <input
                  type="text"
                  placeholder="Contact Person"
                />

              </div>

              <div className="form-row">

                <select>

                  <option>
                    Select Service
                  </option>

                  <option>
                    Custom Software Development
                  </option>

                  <option>
                    AI & Machine Learning
                  </option>

                  <option>
                    Cloud Services
                  </option>

                  <option>
                    Cybersecurity
                  </option>

                  <option>
                    SAP Solutions
                  </option>

                  <option>
                    Digital Marketing
                  </option>

                </select>

                <select>

                  <option>
                    Project Budget
                  </option>

                  <option>
                    Below ₹50K
                  </option>

                  <option>
                    ₹50K - ₹2L
                  </option>

                  <option>
                    ₹2L - ₹10L
                  </option>

                  <option>
                    Above ₹10L
                  </option>

                </select>

              </div>

              <textarea
                rows="5"
                placeholder="Briefly describe your project..."
              />

              <button
                type="submit"
                className="form-submit"
              >
                Request Consultation

                <ArrowRight size={18} />

              </button>

            </form>

            <div className="contact-note">

              <div className="trust-item">
                ✓ Free Consultation
              </div>

              <div className="trust-item">
                ✓ Enterprise Security
              </div>

              <div className="trust-item">
                ✓ Response within 24 Hours
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;