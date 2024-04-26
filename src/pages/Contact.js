import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const [loading, setLoading] = useState(false);
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   emailjs
  //     .sendForm("service_j03wbml", "template_53al1fw", form.current, {
  //       publicKey: "4wINF4ZUnDak_wjJT",
  //     })
  //     .then(
  //       () => {
  //         // toast.success("Message sent successfully.", {
  //         //   style: {
  //         //     marginTop: "3rem",
  //         //     background: "#16c0f0",
  //         //     color: "#fff",
  //         //   },
  //         // });
  //         console.log("Success");
  //         form.current.reset();
  //         setLoading(false);
  //       },
  //       (error) => {
  //         console.log(error);
  //         // toast.error("Message sending failed. Try again!!", {
  //         //   style: {
  //         //     marginTop: "3rem",
  //         //     background: "#16c0f0",
  //         //     color: "#fff",
  //         //   },
  //         // });
  //       }
  //     );
  // };
  return (
    <section className="pt-20 pb-36 lg:px-[150px] md:px-[100px] px-4 mt-32">
      <section className="max-w-[980px] mx-auto flex flex-col items-center">
        <div
          className="lg:w-[60%] sm:w-[80%] w-[90%] text-center mb-10 space-y-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="title-number">03. What's Next?</span>
          <h3 className="medium-heading font-[600] title">Get In Touch</h3>
          <p className="pb-4">
            {" "}
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button
            className="
          border-[#64ffda] border-[1px]  rounded highlighted-text resume-link px-10 pt-4 pb-2 
          "
          >
            <a href="mailto:basnetujjwal98@gmail.com">Contact Me</a>
          </button>
        </div>
        {/* <div className="w-full flex  justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-[50%] w-[70%] space-y-9"
          >
            <div className="mb-6 input-group">
              <input
                required
                type="text"
                name="user_name"
                className="input"
                placeholder="Name"
              />
            </div>
            <div className="mb-6 input-group">
              <input
                type="email"
                name="user_email"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 input-group">
              <input
                required
                type="text"
                name="user_number"
                className="input"
                placeholder="Number"
              />
            </div>
            <div className="mb-6 input-group">
              <textarea
                required
                name="message"
                className="input"
                placeholder="Message"
              />
            </div>
            {loading ? (
              <div className="montserrat button-2 button-hover text-center">
                Sending...
              </div>
            ) : (
              <input
                type="submit"
                className="montserrat button-2 button-hover"
                value="Send"
              />
            )}
          </form>
        </div> */}
      </section>
    </section>
  );
};

export default Contact;
