import React from "react";

const HowWeWork = () => (
  <section id="how-we-work" className="py-12 bg-teal-500">
    <div className="comtainer mx-auto">
      <h2 className="text-4xl font-semibold mb-10 text-white text-center">
        Как мы работаем
      </h2>
      <div className="max-w-1/2 mx-auto flex flex-col gap-14">
        <article className="text-white">
          <h3 className="font-semibold text-3xl mb-2">Свяжитесь с нами</h3>
          <p className="font-medium">
          Заполните форму или позвоните нам по телефону
          </p>
        </article>
        <article className="text-white">
          <h3 className="font-semibold text-3xl mb-2">Получите консультацию</h3>
          <p className="font-medium">
          Мы доступно объясним юридически сложные вопросы. Вы всегда будете понимать, что и в какую очередь нужно делать, мы с вами на связи на протяжении всего процесса оформления документов.
          </p>
        </article>
        <article className="text-white">
          <h3 className="font-semibold text-3xl mb-2">
          Решите проблему</h3>
          <p className="font-medium">
          Мы заключаем договор, в котором прописываем сроки и гарантии решения Вашего вопроса. Затем мы помогаем оформить необходимые документы. При необходимости представим Ваши интересы в суде.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default HowWeWork;
