import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactCTA.css";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock3,
  Building2,
  ShieldCheck
} from "lucide-react";

function ContactCTA({ darkMode }) {
  const [formData, setFormData] = useState({
    company_name: "",
    business_email: "",
    phone_number: "",
    contact_person: "",
    service: "",
    budget: "",
    project_description: ""
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.company_name.trim()) {
      newErrors.company_name = "Company Name is required";
    }

    if (!formData.business_email.trim()) {
      newErrors.business_email = "Business Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.business_email)) {
        newErrors.business_email = "Enter a valid email address";
      }
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone Number is required";
    } else {
      const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
      if (!phoneRegex.test(formData.phone_number)) {
        newErrors.phone_number = "Enter a valid phone number";
      }
    }

    if (!formData.contact_person.trim()) {
      newErrors.contact_person = "Contact Person is required";
    }

    if (!formData.service || formData.service === "Select Service") {
      newErrors.service = "Please select a service";
    }

    if (!formData.budget || formData.budget === "Project Budget") {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.project_description.trim()) {
      newErrors.project_description = "Project Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatusMessage("");
    setStatusType("");

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      company_name: formData.company_name,
      business_email: formData.business_email,
      phone_number: formData.phone_number,
      contact_person: formData.contact_person,
      service: formData.service,
      budget: formData.budget,
      project_description: formData.project_description
    };

    try {
      await emailjs.send(
        "service_ehpjdjp",
        "template_lndtpa4",
        templateParams,
        "W_xxHea93lzGKHj6p"
      );

      setStatusType("success");
      setStatusMessage(
        "Thank you! Your consultation request has been sent successfully."
      );

      setFormData({
        company_name: "",
        business_email: "",
        phone_number: "",
        contact_person: "",
        service: "",
        budget: "",
        project_description: ""
      });
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusType("error");
      // Prefer the server-provided text (EmailJS returns `text`) when available
      const serverText = (error && (error.text || error.message)) || null;
      setStatusMessage(
        serverText
          ? `Something went wrong while sending your request. Server: ${serverText}`
          : "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
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
                <Building2 size={20} />
              </div>

              <div>
                <h4>Company</h4>
                <p>
                  Horizon Digital Core Management Associates
                </p>
              </div>

            </div>

            <a href="mailto:info@horizondigitalcore.com" className="contact-card">
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <h4>Email</h4>
                <p>
                  info@horizondigitalcore.com
                </p>
              </div>
            </a>

            <a href="tel:+919160897498" className="contact-card">
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div>
                <h4>Phone</h4>
                <p>
                  +91 9160897498
                </p>
              </div>
            </a>

            <div className="contact-card">

              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <h4>Location</h4>
                <p>
                  Hyderabad, Telangana
                </p>
              </div>

            </div>

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

            <form onSubmit={handleSubmit} noValidate>

              <div className="form-row">

                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name *"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="business_email"
                  placeholder="Business Email *"
                  value={formData.business_email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-row">

                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number *"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="contact_person"
                  placeholder="Contact Person"
                  value={formData.contact_person}
                  onChange={handleChange}
                />

              </div>

              <div className="form-row">

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Service
                  </option>

                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>

                  <option value="AI & Machine Learning">
                    AI & Machine Learning
                  </option>

                  <option value="Cloud Services">
                    Cloud Services
                  </option>

                  <option value="Cybersecurity">
                    Cybersecurity
                  </option>

                  <option value="SAP Solutions">
                    SAP Solutions
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                </select>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >

                  <option value="">
                    Project Budget
                  </option>

                  <option value="Below ₹50K">
                    Below ₹50K
                  </option>

                  <option value="₹50K - ₹2L">
                    ₹50K - ₹2L
                  </option>

                  <option value="₹2L - ₹10L">
                    ₹2L - ₹10L
                  </option>

                  <option value="Above ₹10L">
                    Above ₹10L
                  </option>

                </select>

              </div>

              <textarea
                name="project_description"
                rows="5"
                placeholder="Briefly describe your project..."
                value={formData.project_description}
                onChange={handleChange}
              />

              {Object.keys(errors).length > 0 && (
                <div className="form-errors">
                  {Object.values(errors).map((errMsg, index) => (
                    <p key={index} className="form-error-text">
                      {errMsg}
                    </p>
                  ))}
                </div>
              )}

              {statusMessage && (
                <p
                  className={
                    statusType === "success"
                      ? "form-success-text"
                      : "form-error-text"
                  }
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Request Consultation"}

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