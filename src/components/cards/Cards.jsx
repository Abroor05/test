import React, { useEffect, useState } from "react";
import "./Cards.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { RiScalesFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  getOneProdactIdData,
  getProdact,
  postLikeData,
} from "../../services/App";

function Cards({ item }) {  
  return (
    <>
      <Link to={`/oneprodact/${item?.id}`} className="card">
        <div className="cardImg">
          <div className="img">
            <img src={item?.main_image} alt="" />
            <div className="sale">
              <span>-3%</span>
            </div>
          </div>
        </div>

        <div className="cardInfo">
          <div className="prices">
            <h4>
              <del>{item?.price}</del>
            </h4>
            <h4>|</h4>
            <h3>{item?.monthly_price}</h3>
          </div>

          <h3 className="title">{item?.name}</h3>

          <p className="desc">Предложение заканчивается через:</p>

          <div className="countDay">
            <span>
              <h4>27</h4>
              <p>ДНЕЙ</p>
            </span>

            <span>
              <p>|</p>
            </span>

            <span>
              <h4>21</h4>
              <p>ЧАСОВ</p>
            </span>

            <span>
              <p>|</p>
            </span>

            <span>
              <h4>32</h4>
              <p>МИНУТ</p>
            </span>

            <span>
              <p>|</p>
            </span>
            <span>
              <h4>05</h4>
              <p>СЕКУНД</p>
            </span>
          </div>

          <div className="shops">
            <span>
              <LuShoppingCart />
            </span>

            <h4>|</h4>

            <span>
              {item?.like ? (
                <FaHeart
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(item?.like_id);
                    postLikeData(item?.id); // yoki delete qilsang, boshqa funksiya
                    // getProdact(id);
                  }}
                />
              ) : (
                <FaRegHeart
                  onClick={(e) => {
                    e.preventDefault();
                    postLikeData(item?.id);
                    // getProdact();
                  }}
                />
              )}
            </span>

            <h4>|</h4>

            <span>
              <RiScalesFill />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cards;
