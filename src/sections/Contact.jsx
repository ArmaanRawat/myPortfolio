import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_w3vqun7",
        "template_4ci8zxh",
        {
          from_name: formData.name,
          to_name: "Armaan Rawat",
          from_email: formData.email,
          to_email: "armaan.rawat00555@gmail.com",
          message: formData.message,
        },
        "86zBoghROieuS0qRV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section
      id="contact"
      className="section-shell bg-[linear-gradient(180deg,#eef8f3_0%,#f7f5ef_100%)]">
      <div className="section-inner">
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="text-heading">Let's build something refined.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
              Got an idea, product challenge, or collaboration in mind? Send a
              note and I will get back with a clear next step.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="glass-panel rounded-2xl p-5">
                <p className="text-sm font-semibold text-neutral-500">
                  Response
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-neutral-950">
                  Fast & clear
                </p>
              </div>
              <div className="glass-panel rounded-2xl p-5">
                <p className="text-sm font-semibold text-neutral-500">
                  Focus
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-neutral-950">
                  Web products
                </p>
              </div>
            </div>
          </div>
          <form
            className="glass-panel w-full rounded-[1.75rem] p-5 md:p-7"
            onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="field-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="Your name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="you@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="field-input field-input-focus"
                placeholder="Tell me what you want to build..."
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="h-12 w-full cursor-pointer rounded-full bg-emerald-700 px-5 text-center text-base font-semibold text-white shadow-[0_16px_30px_rgba(4,120,87,0.22)] transition hover:-translate-y-0.5 hover:bg-emerald-800">
              {!isLoading ? "Send Message" : "Sending..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
