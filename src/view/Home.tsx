import React from "react";
import { Fade } from "react-awesome-reveal";

function Home() {
    return (
        <section className="home-page">
            <Fade cascade delay={100}>
                <div className="main-catchphrase">
                    <span className="strong-word">쉽고 재미있는 세상</span>을 만들기 위해
                    <br />
                    <span className="strong-word">포기하지 않는 열정</span>으로
                    <br />
                    <span className="strong-word">도전하고 성장</span>하는 프론트엔드 개발자
                    <br />
                    <span className="strong-word">임현성</span>입니다.
                </div>
            </Fade>
            <div className="main-scroll-icon-container">
                <div className="main-scroll-icon">
                    <div className="main-scroll-icon-down" />
                </div>
                <span className="main-scroll-icon-text">Scroll</span>
            </div>
        </section>
    );
}

export default Home;
