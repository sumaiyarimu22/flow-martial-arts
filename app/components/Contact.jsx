"use client";
import emailjs from "emailjs-com";
import { useRef } from "react";
const ContactPage = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    //email js integration
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      )
      .then(
        () => {
          console.log("message sent");
        },
        () => {
          console.log("message not sent");
        }
      );
    //reset
    e.target.querySelector(".fullName").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="py-20  text-text">
      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-3xl font-bold text-center"
      >
        Contact
      </h1>
      <form
        onSubmit={sendEmail}
        className="mt-10 wrapper flex flex-col gap-8"
        ref={formRef}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="form-control flex justify-center items-center">
          <input
            type="text"
            className="fullName  inputStyle"
            name="fullName"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-control flex justify-center items-center">
          <input
            type="email"
            className="inputStyle email"
            name="email"
            placeholder="Write your email"
            required
          />
        </div>
        <div className="form-control flex justify-center items-center">
          <textarea
            className="inputStyle resize-none message"
            name="message"
            placeholder="Write your message"
            required
          />
        </div>
        <div className="form-control flex justify-center items-center">
          <input
            type="submit"
            className="inputStyle  bg-accent text-white tracking-widest"
            value="send message"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
