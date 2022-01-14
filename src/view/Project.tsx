import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";

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
                        <div className="project-thumbnail" />
                        <div className="project-content">
                            <div className="project-text">
                                내용내용내용내 용내용내용내용 내용내용내 용내용 내용내용내용 내용내용 내용내용내 용내용내용내용내용내 용내용 내용내용 내용내용내용내용 내내용내용내용내 용내용내용내용
                                내용내용내 용내용 내용내용내용 내용내용 내용내용내 용내용내용내용내용내 용내용 내용내용 내용내용내용 내용내용내 용내용내용내용내용 내용내용내 용내용내용내용 내용내용내
                                용내용 내용내용내용 내용내용 내용내용내 용내용내용내용내용내 용내용 내용내용 내용내용내용내용내용내 용내용내용내용내용내용내용내 용내용내용내용 내용내용내 용내용
                                내용내용내용 내용내용 내용내용내 용내용내용내용내용내 용내용 내용내용 내용내용내용내용내용내 용내용내용내용용내 용내용내용내용
                            </div>
                            <div className="project-stack-container">
                                <div className="project-stack-box">
                                    <div className="project-stack-icon" />
                                    <div className="project-text">React</div>
                                </div>
                                <div className="project-stack-box">
                                    <div className="project-stack-icon" />
                                    <div className="project-text">React</div>
                                </div>
                                <div className="project-stack-box">
                                    <div className="project-stack-icon" />
                                    <div className="project-text">React</div>
                                </div>
                                <div className="project-stack-box">
                                    <div className="project-stack-icon" />
                                    <div className="project-text">React</div>
                                </div>
                            </div>
                            <div className="project-text">링끄 링끄 링끄</div>
                        </div>
                    </div>
                </div>
                <div className="project-box">
                    <h2 className="project-title">Meal To Meal</h2>
                    <div className="project-content-box">
                        <div className="project-thumbnail" />
                        <div className="project-content">
                            <div className="project-text">
                                내용내용내용내 용내용내용내용 내용내용내 용내용 내용내용내용 내용내용 내용내용내 용내용내용내용내용내 용내용 내용내용 내용내용내용내용 내내용내용내용내 용내용내용내용
                                내용내용내 용내용 내용내용내용 내용내용 내용내용내 용내용내용내용내용내 용내용 내용내용 내용내용내용 내용내용내 용내용내용내용내용 내용내용내 용내용내용내용 내용내용내
                                용내용 내용내용내용 내용내용 내용내용내 용내용내용내용내용내 용내용 내용내용 내용내용내용내용내용내 용내용내용내용내용내용내용내 용내용내용내용 내용내용내 용내용
                                내용내용내용 내용내용 내용내용내 용내용내용내용내용내 용내용 내용내용 내용내용내용내용내용내 용내용내용내용용내 용내용내용내용
                            </div>
                            <div className="project-stack-container">
                                <div className="project-stack-box">
                                    <div className="project-stack-icon" />
                                    <div className="project-text">React</div>
                                </div>
                                <div className="project-stack-box">
                                    <div className="project-stack-icon" />
                                    <div className="project-text">React</div>
                                </div>
                                <div className="project-stack-box">
                                    <div className="project-stack-icon" />
                                    <div className="project-text">React</div>
                                </div>
                                <div className="project-stack-box">
                                    <div className="project-stack-icon" />
                                    <div className="project-text">React</div>
                                </div>
                            </div>
                            <div className="project-text">링끄 링끄 링끄</div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default Project;
