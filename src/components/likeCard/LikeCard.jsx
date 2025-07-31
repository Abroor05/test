import React from "react";
import "./LikeCard.css";
import { FaHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { RiScalesFill } from "react-icons/ri";

function LikeCard({item}) {

    console.log(item);
    
  return (



    <>
      <div className="likeCard">
        <div className="likeCardImg">
         <div className="img">
             <img src="/imgs/router.png" alt="" />
         </div>
        </div>

        <div className="likeCardInfo">
          <div className="prices">
            <h4>
              <del>{item?.price}</del>
            </h4>
            <h4>|</h4>

            <h3>{item?.price}</h3>
          </div>

          <h3 className="title">{item?.name}</h3>

          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
            accusamus.
          </p>

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
              <FaHeart />
            </span>
            <h4>|</h4>

            <span>
              <RiScalesFill />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LikeCard;
