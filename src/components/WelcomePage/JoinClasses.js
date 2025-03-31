import { useState, useEffect, useRef } from "react";
import { Modal } from 'bootstrap';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import exploreIcon from "../../assets/icons/btn-Icon.png";

export default function JoinClasses({ successModalRef }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const clearErrorsAfterDelay = () => {
    setTimeout(() => setErrors({}), 5000);
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setStatus("success");
//     setTimeout(() => setStatus(null), 10000);
//     setEmail("");
//     setPhone("");

    
//     setTimeout(() => {
//         document.getElementById("joinModalCloseBtn").click();
//         if (successModalRef.current) {
//             const modal = new Modal(successModalRef.current);
//             modal.show();
//         }
//     }, 3000)
//   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      clearErrorsAfterDelay();
      return;
    }

    setErrors({});
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });

      const result = await response.json();
      setStatus("success");
      setTimeout(() => setStatus(null), 10000);
      setEmail("");
      setPhone("");

      
      setTimeout(() => {
        document.getElementById("joinModalCloseBtn").click();
        if (successModalRef.current) {
          const modal = new Modal(successModalRef.current);
          modal.show();
        }
      }, 3000)
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 10000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pageModal liveClasses_section text-center">
        {status === "success" && <p className="text-center success-container">Request submitted!</p>}
        {status === "error" && <p className="text-center error-container">Failed to submit. Try again.</p>}
      <h2>Start Your Journey!</h2>
      <p>Stay connected and never miss an update!</p>

      <form onSubmit={handleSubmit} className="mt-5 d-flex flex-column gap-4">
        <div>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
            className="form-control"
          />
          {errors.email && <p className="text-danger m-0 text-start ps-4">{errors.email}</p>}
        </div>

        <div>
          <PhoneInput
            className="form_input"
            country="ng"
            value={phone}
            onChange={(value) => {
              setPhone(value);
              setErrors((prev) => ({ ...prev, phone: "" }));
            }}
            placeholder="Phone Number"
          />
          {errors.phone && <p className="text-danger m-0 text-start ps-4">{errors.phone}</p>}
        </div>

        <div className="btn-action_div justify-content-center my-4 mb-5">
          <button type="submit" className="customBtn" disabled={loading}>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center pe-2" style={{ width: "230px" }}>
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <span>Join Community</span>
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
}