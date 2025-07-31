import React, { useEffect, useState } from "react";
import "./Home.css";
import Cards from "../../components/cards/Cards";
import Hero from "../../components/hero/Hero";
import { MdArrowRightAlt } from "react-icons/md";
import { getBrandsData, getCategoryData, getProdact } from "../../services/App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { FaAngleRight } from "react-icons/fa";
import LikeCard from "../../components/likeCard/LikeCard";

function Home({ categoryModal }) {
  const [prodactData, setProdactData] = useState(null);
  const [catigoryData, setCatigoryData] = useState([]);
  const [brendsData, setBrendsData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [categoryModalInfo, setCategoryModalInfo] = useState(null);
  const [openBox, setOpenBox] = useState(false)

  // getProdactData
  useEffect(() => {
    getProdact().then((data) => {
      setProdactData(data.results);
      setLoader(false);
    });
  }, []);

  // getCatigoryData
  useEffect(() => {
    getCategoryData().then((res) => {
      setCatigoryData(res?.results || []);
      setCategoryModalInfo(res?.results || []);
    });
  }, []);

  // getBrendsData
  useEffect(() => {
    getBrandsData().then((res) => {
      setBrendsData(res?.results || []);
    });
  }, []);

  return (
    <>

    <LikeCard />

      {categoryModal ? (
        <div className="catModal">
          <div className="modals">
            <div className="modals1">
              <div className="modalLeft">
                <div className="modal1">
                  {categoryModalInfo?.map((item) => {
                    return (
                      <div className="modalSpan" key={item?.id || itemm?.name}>
                        <span onClick={() => {
                          setOpenBox(true)
                        }}>
                          <img src={item?.icon} alt="" key={item?.icon} />
                          <p>{item?.name}</p>
                        </span>

                        <span>
                          <FaAngleRight />
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="modal2">
                  <div className={`hoverImgName ${openBox ? "click" : ""}`}> 
                    <span >
                      <a href="">Iphone 16</a>
                    </span>
                     <span>
                      <a href="">Iphone 16</a>
                    </span>
                     <span>
                      <a href="">Iphone 16</a>
                    </span>
                     <span>
                      <a href="">Iphone 16</a>
                    </span>
                     <span>
                      <a href="">Iphone 16</a>
                    </span>
                     <span>
                      <a href="">Iphone 16</a>
                    </span>
                     <span>
                      <a href="">Iphone 16</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="modalRight">
                <img src="/imgs/kompiyuter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <section>
        <div className="container">
          <div className="hero">
            <Hero />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cardCatigory">
            <div className="cardTitle">
              <h3>Горящие предложения</h3>
              <h4>
                Посмотреть все <MdArrowRightAlt />{" "}
              </h4>
            </div>
            {prodactData ? (
              <div className="cards">
                {prodactData?.map((item) => {
                  return <Cards item={item} key={item.id} />;
                })}
              </div>
            ) : (
              <div className="cards">
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>

                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
                <Box>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Box sx={{ pr: 2 }}></Box>
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="popularCardTitle">
            <h3>Популярные категории</h3>
          </div>
          <div className="popularCards">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              loop={catigoryData.length > 4} // faqat 4 tadan ko'p bo'lsa loop bo'ladi
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="customSwiper"
            >
              {catigoryData
                ? catigoryData?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="popularCard">
                        <h3>{item?.name}</h3>
                        <span>
                          <img src={item?.image} alt={item?.name} />
                        </span>
                      </div>
                    </SwiperSlide>
                  ))
                : ""}
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div className="container"></div>
      </section>

      <section>
        <div className="container">
          <div className="cardTitle">
            <h3>Горящие </h3>
            <h4>
              Посмотреть все <MdArrowRightAlt />{" "}
            </h4>
          </div>

          {prodactData ? (
            <div className="cards">
              {prodactData?.map((item) => {
                return <Cards item={item} key={item.id} />;
              })}
            </div>
          ) : (
            <div className="cards">
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>

              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="rectangular" width={280} height={200} />
                <Box sx={{ pr: 2 }}></Box>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
            </div>
          )}
        </div>
      </section>

      <section className="popularSection">
        <div className="container">
          <div className="cardTitle">
            <h3>Горящие предложения</h3>
            <h4>
              Посмотреть все <MdArrowRightAlt />{" "}
            </h4>
          </div>

          <div className="rekomendum">
            <div className="rekLeft">
              <img src="/imgs/rek.png" alt="" />
            </div>

            <div className="rekRight">
              {prodactData ? (
                <div className="cards">
                  {prodactData?.slice(0, 6).map((item) => {
                    return <Cards item={item} key={item?.id} />;
                  })}
                </div>
              ) : (
                <div className="cards">
                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>

                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                  <Box>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Box sx={{ pr: 2 }}></Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="brendsSection">
        <div className="container">
          <div className="brends">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              loop={catigoryData.length > 4} // 4 tadan ko'p bo'lsa loop bo'ladi
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="customSwiper"
            >
              {brendsData?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className="brend">
                    <span>
                      <img src={item?.image} alt={item?.image} />
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
