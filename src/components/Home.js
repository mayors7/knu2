import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <section className="w-full h-dvh bg-center bg-cover bg-[url('./bg.jpg')]">
      <div className="w-full h-full bg-teal-600/30 text-white">
        <div className="comtainer h-full mx-auto flex flex-col items-center justify-center">
          <div className="max-w-[600px] text-center">
            <h1 className="text-5xl font-bold">Правовая защита владельцев авто</h1>
            <p className="my-8 mt-12 font-medium text-lg">
            Поможем со страховыми случаями и выплатами, представим ваши интересы в суде, защитим от недобросовестных работников ГИБДД
            </p>
            <div className="flex gap-10 justify-center">
              <a
                href="/"
                className="py-5 px-10 border border-white uppercase hover:bg-teal-600"
              >
                Наши услуги
              </a>
              <a
                href="/"
                className="py-5 px-10 border border-white uppercase hover:bg-teal-600"
              >
                Консультация
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
