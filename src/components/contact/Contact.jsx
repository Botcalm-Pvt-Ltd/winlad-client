import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/contactEmail`,
        {
          ...formData,
        }
      );
      if (response.data.status == 200) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(response.data.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-chose-plan py-4" id="contactUs">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="px-5 xl:px-10 2xl:px-10 special:px-40 flex flex-col justify-center bg-white w-3/4 mx-auto py-10 shadow-sm rounded-lg mb-5"
      >
        <p className="text-center text-base md:text-lg 2xl:text-xl special:text-3xl font-extrabold xl:tracking-[18px] sm:tracking-[8px] tracking-[12px] uppercase py-4">
          Contact Us
        </p>

        <div className="pt-0 mb-8">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="focus:outline-none relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="pt-0 mb-8">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="pt-0 mb-8">
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="pt-0 justify-center flex">
          <button
            className="bg-black hover:shadow-lg focus:outline-none px-6 py-3  mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none hover:bg-black/75"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
