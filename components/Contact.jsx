import React from "react";
import SendEmailForm from "./contact/sendEmailForm";

const Contact = () => {
  return (
    <div id="contact" className="mt-32">
      <div>Contact</div>
      <div className="pb-24">
        <SendEmailForm/>
      </div>
    </div>
  );
};

export default Contact;
