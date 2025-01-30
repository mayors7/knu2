import React from "react";

const Contact = () => (
  <section id="contact" clection className="py-12 bg-teal-500">
    <div className="comtainer mx-auto">
      <h2 className="text-4xl font-semibold mb-10 text-white text-center">
        Оставьте сообщение и мы с вами свяжемся!
      </h2>
      <form className="max-w-1/2 mx-auto flex flex-col gap-5">
        <input
          className="rounded-full border-white border px-5 py-3 text-white font-medium"
          type="text"
          placeholder="Имя"
        />
        <input
          className="rounded-full border-white border px-5 py-3 text-white font-medium"
          type="number"
          placeholder="Телефон"
        />
        <input
          className="rounded-full border-white border px-5 py-3 text-white font-medium"
          type="email"
          placeholder="Почта"
        />
        <textarea className="rounded-full border-white border px-5 py-3 text-white font-medium">
          Сообщение
        </textarea>
        <input
          type="submit"
          className="px-5 py-3 text-white rounded-full font-bold border-white border cursor-pointer hover:bg-teal-600"
          value="Отправить"
        />
      </form>
    </div>
  </section>
);

export default Contact;
