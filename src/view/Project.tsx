import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import react from "../img/stack-icon/react-icon.png";
import sass from "../img/stack-icon/sass-icon.png";
import google_maps from "../img/stack-icon/google-maps-icon.png";
import styled_components from "../img/stack-icon/styled-components-icon.png";
import youtube_v3 from "../img/stack-icon/youtube-v3-icon.png";
import maplody_gif from "../img/maplody-gif.gif";
import meal_to_meal_gif from "../img/meal-to-meal-gif.gif";

function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dotsClass: "custom-dots",
    };

    return (
        <section className="page-project">
            <h1 className="page-title">Project</h1>
            <Slider {...settings}>
                <div className="project-box">
                    <h2 className="project-title">Meal To Meal</h2>
                    <div className="project-content-box">
                        <img className="project-thumbnail" src={meal_to_meal_gif} alt="Meal To Meal" />
                        <div className="project-content">
                            <h3 className="project-summary">
                                <p>누구나 한끼를 먹을 자격이 있다는 생각에서 부터 시작된</p>
                                <p>Google Maps와 I'm Port 결제 시스템을 이용한 음식 기부 서비스</p>
                            </h3>
                            <div className="project-text">
                                <h4 className="project-text-title">주요 작업 내역</h4>
                                <ul>
                                    <li>디바이스에 따른 반응형 및 전반적인 디자인, CSS</li>
                                    <li>가게 상호 및 카테고리, 주소등을 이용한 검색기능 구현</li>
                                    <li>React S3를 이용한 이미지 업로드 및 미리보기 구현</li>
                                    <li>모바일 네비게이션바 구현</li>
                                </ul>
                            </div>
                            <div className="project-stack-container">
                                <div className="project-stack-box">
                                    <img className="project-stack-icon" src={react} alt="React" />
                                    <div className="project-text">React (Hooks)</div>
                                </div>
                                <div className="project-stack-box">
                                    <img className="project-stack-icon" src={sass} alt="SASS / SCSS" />
                                    <div className="project-text">SASS / SCSS</div>
                                </div>
                                <div className="project-stack-box">
                                    <img className="project-stack-icon" src={react} alt="React S3" />
                                    <div className="project-text">React S3</div>
                                </div>
                                <div className="project-stack-box">
                                    <img className="project-stack-icon" src={google_maps} alt="Google Maps" />
                                    <div className="project-text">Google Maps</div>
                                </div>
                            </div>
                            <div className="project-link-container">
                                <div className="project-link-box">
                                    <a className="project-text" onClick={() => window.open("https://mealtomeal.shop", "_blank")}>
                                        <i className="fas fa-globe-asia" />
                                        Web Site
                                    </a>
                                </div>
                                <div className="project-link-box">
                                    <a className="project-text" onClick={() => window.open("https://github.com/codestates/Meal-To-Meal", "_blank")}>
                                        <i className="fab fa-github" />
                                        Github
                                    </a>
                                </div>
                                <div className="project-link-box">
                                    <a className="project-text" onClick={() => window.open("https://www.notion.so/9d33d82100c94dc5bc999d1304113822", "_blank")}>
                                        <i className="fas fa-file-prescription" />
                                        소개(Notion)
                                    </a>
                                </div>
                                <div className="project-link-box">
                                    <a className="project-text" onClick={() => window.open("https://hyeonsi.tistory.com/109?category=905692", "_blank")}>
                                        <i className="fas fa-bold" />
                                        블로그 회고
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-box">
                    <h2 className="project-title">Maplody</h2>
                    <div className="project-content-box">
                        <img className="project-thumbnail" src={maplody_gif} alt="Maplody" />
                        <div className="project-content">
                            <h3 className="project-summary">
                                <p>당신의 추억이 깃든 장소를 음악과 함께 저장하는</p>
                                <p>Google Maps와 YouTube API를 이용한 서비스</p>
                            </h3>
                            <div className="project-text">
                                <h4 className="project-text-title">주요 작업 내역</h4>
                                <ul>
                                    <li>디바이스에 따른 반응형 및 전반적인 디자인, CSS</li>
                                    <li>Geocoding을 이용한 주소 좌표 변환 및 생성</li>
                                    <li>Marker 클릭 시 Infowindow 구현 및 글등록 시스템 구현</li>
                                    <li>YouTube V3로 음악 동영상 검색 및 재생 구현</li>
                                </ul>
                            </div>
                            <div className="project-stack-container">
                                <div className="project-stack-box">
                                    <img className="project-stack-icon" src={react} alt="React" />
                                    <div className="project-text">React (Hooks)</div>
                                </div>
                                <div className="project-stack-box">
                                    <img className="project-stack-icon" src={styled_components} alt="Styled Components" />
                                    <div className="project-text">Styled Components</div>
                                </div>
                                <div className="project-stack-box">
                                    <img className="project-stack-icon" src={google_maps} alt="Google Maps" />
                                    <div className="project-text">Google Maps</div>
                                </div>
                                <div className="project-stack-box">
                                    <img className="project-stack-icon" src={youtube_v3} alt="YouTube V3" />
                                    <div className="project-text">YouTube V3</div>
                                </div>
                            </div>
                            <div className="project-link-container">
                                <div className="project-link-box">
                                    <a className="project-text" onClick={() => window.open("https://maplody.site", "_blank")}>
                                        <i className="fas fa-globe-asia" />
                                        Web Site
                                    </a>
                                </div>
                                <div className="project-link-box">
                                    <a className="project-text" onClick={() => window.open("https://github.com/codestates/Maplody", "_blank")}>
                                        <i className="fab fa-github" />
                                        Github
                                    </a>
                                </div>
                                <div className="project-link-box">
                                    <a className="project-text" onClick={() => window.open("https://hyeonsi.tistory.com/108?category=905692", "_blank")}>
                                        <i className="fas fa-bold" />
                                        블로그 회고
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default Project;
