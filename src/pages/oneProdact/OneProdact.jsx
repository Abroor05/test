import React, { useEffect, useState } from "react";
import "./OneProdact.css";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { RiScalesFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { getOneProdactIdData } from "../../services/App";
import { TbRepeat } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";

function OneProdact() {
  const { id } = useParams();
  const [oneProdactData, setOneProdactData] = useState(null);
  const [changeImg, setChangeImg] = useState(null);
  const [readMore, setReadMore] = useState(true);

  useEffect(() => {
    getOneProdactIdData(id).then((data) => {
      setOneProdactData(data);
      setChangeImg(data?.images[0]?.image);
      setReadMore(true);
    });
  }, [id]);

  return (
    <>
      <section>
        <div className="container">
          <div className="oneProdactTitile">
            <span>
              <Link to={"/"}>Home</Link>
              <p>/</p>
              <p>One Prodact</p>
            </span>
          </div>

          <div className="oneProdactAll">
            <div className="oneProdactImgs">
              <div className="bigImg">
                <img src={changeImg} alt="" />
              </div>

              <div className="littleImgs">
                {oneProdactData?.images?.map((item) => {
                  return (
                    <span
                      key={item?.id}
                      onClick={() => {
                        setChangeImg(item?.image);
                      }}
                    >
                      <img src={item?.image} alt="" />
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="oneProdactInfo">
              <h2 className="name">{oneProdactData?.name}</h2>

              <div className="oneProdactPrices">
                <h3 className="oneprodactPrice">{oneProdactData?.price}</h3>

                <div className="oneprodactShops">
                  <div className="karzinka ">
                    <FaShoppingCart />
                  </div>

                  <div className="oneProdactLike ">
                    <FaRegHeart />
                  </div>

                  <div className="oneProdactsol ">
                    <RiScalesFill />
                  </div>
                </div>
              </div>

              <p className="desc2">
                {readMore
                  ? oneProdactData?.details?.slice(0, 300)
                  : oneProdactData?.details}
                <span onClick={() => setReadMore(!readMore)}>
                  {readMore ? " Read More" : " Show Less"}
                </span>
              </p>

              {/* <div className="style">
              <h3>Corpuse</h3>

                <p>
                  LEO corpuse : <span>120Hz</span>
                </p>
                <p>
                  Corpuse tytan alimune: <span>Color Black</span>
                </p>
                <p>
                  Hard style: <span>Saver</span>
                </p>
                <p>Hard style; Sarver</p>
              </div> */}
            </div>

            <div className="oneProdactBoxs">
              <div className="OnePrdodactBox">
                <h3> <span><BsArrowRepeat className="repeate" /></span> 30 days for exchange and return </h3>
                <p>you can return or exchange the prodact within one month</p>
                <h5>Detalis about the program</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OneProdact;
