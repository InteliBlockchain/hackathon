import { useRef } from "react";

import { Layout } from "@/components/Layout";

const Contact = () => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

  const submitHandler = (event: any) => {
    event.preventDefault();

    console.log("Submited");
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center md:bg-black bg-center bg-cover pt-32 pb-24 h-auto w-full mx-auto">
          <div className="md:h-32 lg:h-40">
            <div className="flex flex-col items-center">
              <h1 className="font-normal text-5xl text-center mb-4">
                Tem mais alguma <br /> dúvida?
              </h1>
              <p className="font-medium mt-2 text-center text-grayText text-xl">
                Entre em contato conosco e <br /> responderemos assim que
                possível
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-min-full -mt-8 mb-16">
          <div className="w-11/12 md:4/5">
            <form
              onSubmit={submitHandler}
              className="flex md:grid md:grid-cols-2 gap-4 md:gap-4 flex-col justify-center md:items-center min-w-full items-center self-center"
            >
              <div className="flex flex-col justify-center">
                <input
                  placeholder="nome"
                  className="w-72 h-8 rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] outline-0 pl-2 mb-5 placeholder:text-[#5A5A5A]"
                ></input>
                <input
                  placeholder="email"
                  className="w-72 h-8 rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] outline-0 pl-2 mb-5 placeholder:text-[#5A5A5A]"
                ></input>
                <input
                  placeholder="mensagem"
                  className="w-72 h-28 rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] outline-0 pl-2 mb-5 placeholder:text-[#5A5A5A] placeholder:tx"
                ></input>
              <button
                type="submit"
                className="bg-green-500 text-black font-semibold py-2 px-8 rounded-lg font text-lg w-max"
              >
                Enviar
              </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
