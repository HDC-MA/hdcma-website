import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import SEO from "../../components/Common/SEO";
import "./Apply.css";

function Apply({ darkMode, setDarkMode }) {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "General Application";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    experience: "",
    source: "",
    coverLetter: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const coverLetterWordCount = formData.coverLetter
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "coverLetter") {
      const words = value.trim().split(/\s+/).filter(Boolean);
      if (words.length > 300) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setResumeError("Please upload a PDF file only.");
      setResumeFile(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File size must be under 5MB.");
      setResumeFile(null);
      return;
    }
    setResumeError("");
    setResumeFile(file);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.experience) newErrors.experience = "Please select your experience level.";
    if (!resumeFile) newErrors.resume = "Resume (PDF) is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'hdcma_resumes');
    data.append('cloud_name', 'vwfaldev');
    data.append('access_mode', 'public');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/vwfaldev/raw/upload',
      { method: 'POST', body: data }
    );
    const result = await res.json();
    console.log('Cloudinary result:', result);
    return result.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const resumeLink = await uploadToCloudinary(resumeFile);

      const templateParams = {
        position: role,                             
        name: formData.fullName,                   
        email: formData.email,                       
        phone: formData.phone,                    
        location: formData.location,
        linkedin: formData.linkedin || 'Not provided',
        experience: formData.experience,
        source: formData.source || 'Not provided',
        cover_letter: formData.coverLetter || 'Not provided',
        resume_link: resumeLink, 
      };

      await emailjs.send(
        'service_l5r6uou',
        'template_e0w5gi9',
        templateParams,
        '0RqOypxqmxrajRDHy'
      );

      setLoading(false);
      setSubmitted(true);

    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className={`apply-page ${darkMode ? "dark" : "light"}`}>
        <SEO 
          title={`Application Received - ${role}`} 
          description="Your application has been successfully submitted to HDC MA." 
          path="/careers/apply" 
          robots="noindex, nofollow" 
        />
        <div className="apply-success">
          <h1>Application Received! 🎉</h1>
          <p>
            Thank you for applying for <strong>{role}</strong>. Our team will
            review your application and reach out within 5–7 business days.
          </p>
          <Link to="/careers" className="back-link">
            Back to Open Positions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`apply-page ${darkMode ? "dark" : "light"}`}>
      <SEO 
        title={`Apply for ${role}`} 
        description={`Submit your application for the ${role} position at Horizon Digital Core Management Associates.`} 
        path="/careers/apply" 
      />
      <div className="apply-container">
        <Link to="/careers" className="back-link">
          ← Back to Open Positions
        </Link>

        <h1>Apply for {role}</h1>
        <p className="apply-subtitle">
          Fill out the form below — fields marked * are required.
        </p>

        <form className="apply-form" onSubmit={handleSubmit} noValidate>

          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Doe"
            />
            {errors.fullName && <span className="field-error">{errors.fullName}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location / City *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Hyderabad, India"
            />
            {errors.location && <span className="field-error">{errors.location}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Position Applied For *</label>
            <input type="text" id="role" name="role" value={role} readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn URL (optional)</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourname"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="experience">Years of Experience *</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select range</option>
                <option value="0-1">0–1 years</option>
                <option value="1-2">1–2 years</option>
                <option value="2-5">2–5 years</option>
                <option value="5+">5+ years</option>
              </select>
              {errors.experience && <span className="field-error">{errors.experience}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="source">How did you hear about us?</label>
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral</option>
                <option value="job-board">Job Board</option>
                <option value="company-website">Company Website</option>
                <option value="social-media">Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="resume">Resume (PDF) *</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            {resumeFile && <span className="file-name">📄 {resumeFile.name}</span>}
            {resumeError && <span className="field-error">{resumeError}</span>}
            {errors.resume && !resumeError && (
              <span className="field-error">{errors.resume}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter (optional, max 300 words)</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="6"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're a great fit for this role..."
            />
            <span className="word-counter">
              {coverLetterWordCount} / 300 words
            </span>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Uploading & Submitting...' : 'Submit Application'}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Apply;