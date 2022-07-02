import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation} from "swiper";

const Swip = () => {
  return (
    <>
      <Swiper
      modules={[Navigation,Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay ={true}
        pagination={{
          clickable: true,
        }}
       
      >
        <SwiperSlide> 
          <div className="item">
                <img src="/assets/img/blog-img1.jpg" alt="" />
                <h4>Jonh Doe</h4>
                <h5>Photogropher</h5>
                <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod temporcd incididunt consectetur laboredolore dolor adipisicing. </p>
                <div className="socials">
                  <ul>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
              </SwiperSlide>
        <SwiperSlide>   
            <div className="item">
                <img src="/assets/img/blog-img2.jpg" alt="" />
                <h4>Jonh Doe</h4>
                <h5>Web Designer</h5>
                <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod temporcd incididunt consectetur laboredolore dolor adipisicing. </p>
                <div className="socials">
                  <ul>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div></SwiperSlide>
        <SwiperSlide>         
            <div className="item">
                <img src="/assets/img/blog-img3.jpg" alt="" />
                <h4>Jonh Doe</h4>
                <h5>Graphic Designer</h5>
                <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod temporcd incididunt consectetur laboredolore dolor adipisicing. </p>
                <div className="socials">
                  <ul>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div></SwiperSlide>
        <SwiperSlide>        
             <div className="item">
                <img src="/assets/img/blog-img4.jpg" alt="" />
                <h4>Jonh Doe</h4>
                <h5>Photogropher</h5>
                <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod temporcd incididunt consectetur laboredolore dolor adipisicing. </p>
                <div className="socials">
                  <ul>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div></SwiperSlide>
        <SwiperSlide>
        <div className="item">
                <img src="/assets/img/blog-img5.jpg" alt="" />
                <h4>Jonh Doe</h4>
                <h5>Graphic Designer</h5>
                <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod temporcd incididunt consectetur laboredolore dolor adipisicing. </p>
                <div className="socials">
                  <ul>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
                <img src="/assets/img/blog-img6.jpg" alt="" />
                <h4>Jonh Doe</h4>
                <h5>Web Designer</h5>
                <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod temporcd incididunt consectetur laboredolore dolor adipisicing. </p>
                <div className="socials">
                  <ul>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
                <img src="/assets/img/blog-img6.jpg" alt="" />
                <h4>Jonh Doe</h4>
                <h5>Web Designer</h5>
                <p>Lorem ipsum dolor consectetur dolor consectetur adipisicing incididunt eiusmod temporcd incididunt consectetur laboredolore dolor adipisicing. </p>
                <div className="socials">
                  <ul>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swip;