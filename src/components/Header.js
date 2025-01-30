import React from "react";

const Header = () => (
  <header className="header absolute w-full bg-slate-800/60 left-0 top-0">
    <div className="comtainer mx-auto">
      <nav className="flex justify-between text-white items-center py-5">
        <div className="logo">
          <img className="w-25" src="/logo.png" alt="Логотип" />
        </div>
        <ul className="flex gap-8 font-semibold">
          <li>
            <a href="#services" className="hover:text-teal-600 transition-colors duration-300">УСЛУГИ</a>
          </li>
          <li>
            <a href="#how-we-work" className="hover:text-teal-600 transition-colors duration-300">КАК МЫ РАБОТАЕМ</a>
          </li>
          <li>
            <a href="#about-us" className="hover:text-teal-600 transition-colors duration-300">О НАС</a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-teal-600 transition-colors duration-300">ОТЗЫВЫ</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-600 transition-colors duration-300">КОНТАКТЫ</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
