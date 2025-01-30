import React from "react";

const Header = () => (
  <header className="header absolute w-full bg-slate-800/90 left-0 top-0">
    <div className="comtainer mx-auto">
      <nav className="flex justify-between text-white items-center py-5">
        <div className="logo">
          <img className="w-25" src="/logo.png" alt="Логотип" />
        </div>
        <ul className="flex gap-8 font-semibold">
          <li>
            <a href="#services">УСЛУГИ</a>
          </li>
          <li>
            <a href="#how-we-work">КАК МЫ РАБОТАЕМ</a>
          </li>
          <li>
            <a href="#about-us">О НАС</a>
          </li>
          <li>
            <a href="#reviews">ОТЗЫВЫ</a>
          </li>
          <li>
            <a href="#contact">КОНТАКТЫ</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
