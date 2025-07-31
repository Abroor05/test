import React from "react";
import "./Footer.css"
import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="fotLeft">
            <img src="/imgs/logo2.png" alt="" />

            <div className="fotDesc">
              <p>График работы колл-центра</p>
              <p>Понедельник - Суббота: 9:00–18:00</p>
            </div>

            <div className="fotDesc">
              <p>Колл-центр:</p>
              <p>+ 998 (71) 205-93-93</p>
            </div>

            <div className="tarmoqlar">
                <div className="tarmoq">
                    <div className="icon">
                        <BiLogoTelegram  />
                    </div>
                     <div className="icon">
                        <FaInstagram />
                    </div>
                     <div className="icon">
                       <FaFacebookF />
                    </div>
                     <div className="icon">
                        <FiYoutube />
                    </div>
                </div>
            </div>
          </div>

          <div className="fotRight">
            <span>
                <h3>Категории</h3>
                <ul>
                    <li>Ноутбуки</li>
                    <li>Игровые кресла</li>
                    <li>Телефоны</li>
                    <li>Моноблоки</li>
                    <li>Модули памяти</li>
                </ul>
            </span>
             <span>
                <h3>Общее</h3>
                <ul>
                    <li>Новости</li>
                    <li>О нас</li>
                    <li>Наши магазины</li>
                    <li>Политика конфиденциальности</li>
                    <li>Правила программы лояльности</li>
                    <li>Контакты</li>
                </ul>
            </span>
             <span>
                <h3>Покупателям</h3>
                <ul>
                    <li>Покупка в рассрочку</li>
                    <li>Доставка и оплата</li>
                    <li>Правила покупок с cashback</li>
                    <li>Возврат / Обмен</li>
                    <li>Правила пользования купонами</li>
                </ul>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
