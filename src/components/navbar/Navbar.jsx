import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  IoCallOutline,
  IoLocationOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RiScalesFill } from "react-icons/ri";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCategoryData } from "../../services/App";
import CategoryModal from "../categoryModal/CategoryModal";

function Navbar({ setCategoryModal }) {
  const navigate = useNavigate();
  const [cartegoryData, setCategoryData] = useState("");

  useEffect(() => {
    getCategoryData().then(setCategoryData);
  }, []);

  return (
    <>
      <nav className="navTop">
        <div className="container">
          <div className="navTopLeft">
            <span>
              <IoLocationOutline />
              <h4>Ташкент</h4>
            </span>

            <span>
              <ul>
                <li>Наши магазины</li>
                <li>B2B продажи</li>
                <li>Покупка в рассрочку</li>
                <li>Способы оплаты</li>
                <li>Гарантия на товары</li>
              </ul>
            </span>
          </div>

          <div className="navTopRight">
            <span>
              <IoCallOutline />
              <h4>+998 95 123 55 88</h4>
            </span>

            <span>
              <select className="language-select" id="language" name="language">
                <option value="ru">Русский</option>
                <option value="en">English</option>
                <option value="uz">O‘zbekcha</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
                <option value="tr">Türkçe</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
                <option value="ar">العربية</option>
              </select>
            </span>
          </div>
        </div>
      </nav>

      <nav className="navCentr">
        <div className="container">
          <div className="navCentrLeft">
            <span>
              <Link to={"/"}>
                <img src="/imgs/logo.png" alt="" />
              </Link>
            </span>

            <span>
              <div
                className="searchings"
                onClick={() => {
                  navigate("/search");
                }}
              >
                <select name="category" id="category">
                  <option value="electronics">Elektronika</option>
                  <option value="clothing">Kiyim-kechak</option>
                  <option value="books">Kitoblar</option>
                  <option value="furniture">Mebel</option>
                  <option value="toys">O‘yinchoqlar</option>
                </select>

                <input type="text" placeholder="Телефоны и бытовая" />

                <div className="searchBtn">
                  <button>
                    {" "}
                    <h4>
                      <CiSearch />
                    </h4>
                    <p>Поиск</p>
                  </button>
                </div>
              </div>
            </span>
          </div>

          <div className="navCentrRight">
            <Link to={"/signIn"}>
              <h4>
                {" "}
                <IoPersonOutline />
              </h4>
              <p>Войти</p>
            </Link>

            <Link>
              <h4>
                {" "}
                <RiScalesFill />
              </h4>
              <p>Сравнение</p>
            </Link>

            <Link to={"/like"}>
              <h4>
                {" "}
                <FaRegHeart />
              </h4>
              <span>
                
              </span>
              <p>Избранное</p>
            </Link>

            <Link>
              <h4>
                {" "}
                <LuShoppingCart />
              </h4>
              <p>Корзина</p>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="navBottom">
        <div className="container">
          <div className="allMenus">
            <button
              onClick={() => {
                setCategoryModal((prev) => !prev);
              }}
              className="catigoryBtn"
            >
              {" "}
              <FaBars /> Категории
            </button>

            <ul className="links">
              {cartegoryData?.results?.map((item) => {
                return  <NavLink key={item?.id} >{item?.name}</NavLink>;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
