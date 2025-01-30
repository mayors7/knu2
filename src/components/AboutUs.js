import React from "react";

const AboutUs = () => (
  <section id="about-us" className="py-12 bg-teal-500">
    <div className="comtainer mx-auto">
      <h2 className="text-4xl font-semibold mb-10 text-white">О компании</h2>
      <div className="grid grid-cols-[2fr_1fr] gap-10">
        <article>
          <div className="mb-12 text-white text-base/7">
          Наши юристы практикуют в области защиты прав и законных интересов автовладельцев с 2005 года. За время работы накоплена обширная правоприменительная практика. В штате коллегии три автомобильных юриста, которые ранее проходили службу на должностях инспекторов исполнения административного законодательства, а также занимали руководящие должности в органах ГИБДД.
          </div>
          <a
            className="inline-block uppercase text-lg hover:bg-teal-600 text-white px-5 py-2 border border-white"
            href="/"
          >
            Консультация
          </a>
        </article>
        <section className="flex flex-col items-center gap-3 text-center text-white">
          <img
            className="rounded-full w-25 h-25 object-cover object-center"
            src="5bg.jpg"
            alt="person"
          />
          <h3 className="text-xl font-semibold">Меньшиков Андрей</h3>
          <p className="italic">Руководитель, 16 лет опыта</p>
          <p className="font-medium">
            <q>«Закон защищает каждого, кто может нанять хорошего адвоката»</q>
          </p>
        </section>
        <div className="col-span-2">
          <ul className="flex justify-between mt-6">
            <li>
              <img
                className="w-[150px] h-[90px] object-center object-cover"
                src="9.png"
                alt="logo"
              />
            </li>
            <li>
              <img
                className="w-[150px] h-[90px] object-center object-cover"
                src="10.png"
                alt="logo"
              />
            </li>
            <li>
              <img
                className="w-[150px] h-[90px] object-center object-cover"
                src="11.png"
                alt="logo"
              />
            </li>
            <li>
              <img
                className="w-[150px] h-[90px] object-center object-cover"
                src="12.png"
                alt="logo"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
