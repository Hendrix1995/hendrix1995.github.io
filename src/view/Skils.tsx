import React from "react";
import javascript from "../img/stack-icon/javascript-icon.png";
import css from "../img/stack-icon/css-icon.png";
import html from "../img/stack-icon/html-icon.png";
import react from "../img/stack-icon/react-icon.png";
import sass from "../img/stack-icon/sass-icon.png";
import nodejs from "../img/stack-icon/nodejs-icon.png";
import express from "../img/stack-icon/express-icon.png";
import mysql from "../img/stack-icon/mysql-icon.png";

function Skils() {
    return (
        <section className="page-skils">
            <h1 className="page-title">Skils</h1>
            <div className="page-container-skils">
                <div className="skils-box">
                    <div className="skils-box-title">Language</div>
                    <div className="skils-box-content-box">
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={javascript} alt="javascript" />
                            <div className="skils-box-stack-info">JavaScript</div>
                        </div>
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={css} alt="javascript" />
                            <div className="skils-box-stack-info">CSS</div>
                        </div>
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={html} alt="javascript" />
                            <div className="skils-box-stack-info">HTML</div>
                        </div>
                    </div>
                </div>
                <div className="skils-box">
                    <div className="skils-box-title">Frameworks & Libraries</div>
                    <div className="skils-box-content-box">
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={react} alt="javascript" />
                            <div className="skils-box-stack-info">React</div>
                        </div>
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={sass} alt="javascript" />
                            <div className="skils-box-stack-info">SASS / SCSS</div>
                        </div>
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={nodejs} alt="javascript" />
                            <div className="skils-box-stack-info">Node.js</div>
                        </div>
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={express} alt="javascript" />
                            <div className="skils-box-stack-info">Express</div>
                        </div>
                    </div>
                </div>
                <div className="skils-box">
                    <div className="skils-box-title">DB</div>
                    <div className="skils-box-content-box">
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={mysql} alt="javascript" />
                            <div className="skils-box-stack-info">MySQL (관계형 스키마 디자인, SQL 주요 문법)</div>
                        </div>
                    </div>
                </div>
                <div className="skils-box">
                    <div className="skils-box-title">Tools</div>
                    <div className="skils-box-content-box">
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={react} alt="javascript" />
                            <div className="skils-box-stack-info">Git</div>
                        </div>
                        <div className="skils-box-content">
                            <img className="skils-box-stack-icon" src={sass} alt="javascript" />
                            <div className="skils-box-stack-info">AWS</div>
                            <span className="skils-box-stack-info-details">(EC2, RDS, S3를 이용한 배포 경험, PipeLine을 이용한 간단한 배포 자동화 경험)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skils;
