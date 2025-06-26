import React, { useRef, useState } from "react";
import exploreIcon from "../../../assets/icons/btn-Icon.png";
import "./contactForm.css";

const ContactForm = ({ contactPage = false }) => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    setErrors(errors);

    setTimeout(() => setErrors({}), 5000);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch("https://server.cosmosconference.org/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        setTimeout(() => setStatus(null), 10000);
        setFormData({ fullName: "", subject: "", email: "", message: "" });
      } else {
        setStatus("error");
        setTimeout(() => setStatus(null), 10000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 10000);
    }
  };

  return (
    <section className="pageModal contactUs_section text-center">
      <h2>Contact Our Team</h2>
      {!contactPage && <p>Have questions or need guidance? Our dedicated team is here to help! Whether it’s about courses, enrollment, or general inquiries, we’re just a message away. Reach out, and let’s make your Cosmos Academy experience seamless!</p>}

      <form onSubmit={handleSubmit} className="mt-5 d-flex flex-column gap-4">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="form-control"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              setErrors((prev) => ({ ...prev, fullName: "" }));
            }}
          />
          {errors.fullName && <p className="text-danger m-0 text-start ps-4">{errors.fullName}</p>}
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="form-control"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              setErrors((prev) => ({ ...prev, subject: "" }));
            }}
          />
          {errors.subject && <p className="text-danger m-0 text-start ps-4">{errors.subject}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />
          {errors.email && <p className="text-danger m-0 text-start ps-4">{errors.email}</p>}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="How can we help?"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              setErrors((prev) => ({ ...prev, message: "" }));
            }}
          ></textarea>
          {errors.message && <p className="text-danger m-0 text-start ps-4">{errors.message}</p>}
        </div>

        {status === "success" && <p className="text-center success-container">Request submitted!</p>}
        {status === "error" && <p className="text-center error-container">Failed to submit. Try again.</p>}

        <div className="btn-action_div justify-content-center mb-5">
          <button type="submit" className="customBtn" disabled={status === "loading"}>
            {status === "loading" ? (
              <div className="d-flex justify-content-center align-items-center pe-2" style={{ width: "230px" }}>
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <span>Send Message</span>
                <span className="customBtn-icon">
                  <img src={exploreIcon} alt="icon" width="10" height="10" />
                </span>
              </>
            )}
          </button>
        </div>
      </form>

    </section>
  );
};

export default ContactForm;
