import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  // Opens default email client and prefills using form data
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jessekartabani@gmail.com?subject=${formData.subject}&body=Hi. my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <motion.div
      // Fades component in
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="subHeading">Contact</h3>

      <div className="flex flex-col sm:space-y-10  space-y-2">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center pt-10 sm:pt-0">
          Let&apos;s Talk
        </h4>

        <div className="sm:space-y-10 space-y-2">
          <div className="flex items-center space-x-1 sm:space-x-3 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-1xl sm:text-2xl whitespace-nowrap">
              +61 452 515 822
            </p>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-1xl sm:text-2xl">jessekartabani@gmail.com</p>
          </div>

          <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2 flex flex-col md:flex-row md:space-y-0 md:space-x-2">
              <input
                {...register("name")}
                className="contactInput"
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contactInput"
                type="email"
                placeholder="Email"
              />
            </div>

            <input
              {...register("subject")}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message"
            />
            <button
              className="bg-[#F7AB0A] sm:py-5 py-2 px-10 rounded-md text-black font-bold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
