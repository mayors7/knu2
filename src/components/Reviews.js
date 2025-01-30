import React from "react";

const Reviews = () => (
  <section id="reviews" className="py-12 bg-teal-500">
    <div className="comtainer mx-auto">
      <h2 className="text-4xl text-center font-semibold mb-16 text-white">
        Отзывы о нашей работе
      </h2>
      <ul className="grid grid-cols-3 gap-5">
        <li>
          <article className="text-white">
            <p>
            Благодарю за составление жалобы на постановление административного правонарушения для суда. Искала именно автоюриста. С момента первого разговора стало понятно, что юрист в теме. Все четко объяснил, рассказал, на все вопросы ответил. Жалоба составлена и отправлена в суд!
            </p>
            <div className="mt-5 flex items-center gap-5">
              <img
                src="6bg.jpg"
                className="rounded-full w-15 h-15 object-center object-cover"
                alt="person"
              />
              <div>
                <p className="font-semibold mb-1">Иван</p>
                <p className="text-sm">Главный менджер</p>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="text-white">
            <p>
            Пишу отзыв с искренней благодарностью. Быстро изучили обстоятельства и состоявшееся решение которое необходимо обжаловать, подготовили документы.Было очень комфортно и результативно общаться.И всё это при приемлемой и адекватной цене за работу.
            </p>
            <div className="mt-5 flex items-center gap-5">
              <img
                src="7bg.jpg"
                className="rounded-full w-15 h-15 object-center object-cover"
                alt="person"
              />
              <div>
                <p className="font-semibold mb-1">Олег</p>
                <p className="text-sm">Маркетолог</p>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="text-white">
            <p>
            Искала профессионального юриста, очень боялась запутаться в системе. Впечатления самые положительные: со мной работал тактичный, деликатный, профессиональный юрист. Очки мне сняли, реальные возможные пути указали. Рекомендую смело. Так что идите не пожалеете                 
            </p>
            <div className="mt-5 flex items-center gap-5">
              <img
                src="8bg.jpg"
                className="rounded-full w-15 h-15 object-center object-cover"
                alt="person"
              />
              <div>
                <p className="font-semibold mb-1">Лариса</p>
                <p className="text-sm">Стилист</p>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
);

export default Reviews;
