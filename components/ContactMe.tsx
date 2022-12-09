import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jessekartabani@gmail.com?subject=${formData.subject}&body=Hi. my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="subHeading">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">Let's Talk</h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl whitespace-nowrap">+61 452 515 822</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">jessekartabani@gmail.com</p>
          </div>

          <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex space-x-2">
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
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
