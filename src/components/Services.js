import React from "react";

const serviceList = [
  {
    name: "ВОССТАНОВЛЕНИЕ ВОДИТЕЛЬСКИХ ПРАВ",
    about: "Предоставляем широкий спектр услуг в области юриспруденции.",
    price: "2500$",
    image: "1bg.jpg",
  },
  {
    name: "ОБЖАЛОВАНИЕ ШТРАФОВ ГАИ",
    about: "Предоставляем широкий спектр услуг в области юриспруденции.",
    price: "2500$",
    image: "2bg.jpg",
  },
  {
    name: "ВЫЕЗД АВТОЮРИСТА НА МЕСТО ДТП",
    about: "Предоставляем широкий спектр услуг в области юриспруденции.",
    price: "2500$",
    image: "3bg.jpg",
  },
  {
    name: "КОНСУЛЬТАЦИИ АВТОЮРИСТА",
    about: "Предоставляем широкий спектр услуг в области юриспруденции.",
    price: "2500$",
    image: "4bg.jpg",
  },
];

const Services = () => (
  <section id="services" className="py-12 bg-teal-500">
    <div className="comtainer mx-auto">
      <h2 className="text-4xl font-semibold mb-10 text-white">
        Предоставляем услуги
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {serviceList.map((item, index) => (
          <li
            key={index}
            className={`rounded-xl shadow-sm cursor-pointer hover:shadow-none bg-center bg-cover bg-[url(${item.image})]`}
          >
            <div
              className={`p-6 bg-teal-600/30 min-h-[450px] flex flex-col justify-end`}
            >
              <article className="text-white">
                <h3 className="font-medium uppercase text-lg">{item.name}</h3>
                <p className="my-5">{item.about}</p>
                <p className="uppercase text-xl">{item.price}</p>
              </article>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;
