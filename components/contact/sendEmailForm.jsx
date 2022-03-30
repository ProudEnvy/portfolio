import React from "react";
import { useState } from "react";

const SendEmailForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Senden");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Senden");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Senden");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <div className="w-[80vw] max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-8 py-8 bg-gray-300 rounded-lg shadow-xl dark:bg-gray-500"
      >
        <h1 className="text-2xl font-bold dark:text-gray-50">
          Kontaktformular
        </h1>

        <label
          htmlFor="fullname"
          className="mt-8 font-light text-gray-500 dark:text-gray-50"
        >
          Voller Name<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
          className="py-2 pl-4 overflow-hidden font-light text-gray-700 bg-white border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
        />
        {errors?.fullname && (
          <p className="text-red-500">Dieses Feld darf nicht leer sein</p>
        )}

        <label
          htmlFor="email"
          className="mt-4 font-light text-gray-500 dark:text-gray-50"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="py-2 pl-4 font-light text-gray-700 bg-white border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
        />
        {errors?.email && (
          <p className="text-red-500">Email darf nicht leer sein</p>
        )}

        <label
          htmlFor="subject"
          className="mt-4 font-light text-gray-500 dark:text-gray-50"
        >
          Betreff<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="py-2 pl-4 font-light text-gray-700 bg-white border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
        />
        {errors?.subject && (
          <p className="text-red-500">Betreff darf nicht leer sein</p>
        )}
        <label
          htmlFor="message"
          className="mt-4 font-light text-gray-500 dark:text-gray-50"
        >
          Nachricht<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="py-2 pl-4 font-light text-gray-700 bg-white border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
        ></textarea>
        {errors?.message && (
          <p className="text-red-500">Dieses Feld darf nicht leer sein</p>
        )}
        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="flex flex-row items-center px-10 py-2 mt-8 text-lg font-light rounded-md bg-ctbColor text-gray-50"
          >
            {buttonText}
          </button>
        </div>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="my-2 text-sm font-semibold text-green-500">
              Vielen Dank! Ihre Nachricht wurde ausgeliefert
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red-500">
              Oops! Da ist was schiefgelaufen. Bitte versuchen sie es erneut
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SendEmailForm;
