import React from "react";
import { Fade } from "react-awesome-reveal";

import javascript from "../img/stack-icon/javascript-icon.png";
import css from "../img/stack-icon/css-icon.png";
import html from "../img/stack-icon/html-icon.png";
import react from "../img/stack-icon/react-icon.png";
import sass from "../img/stack-icon/sass-icon.png";
import nodejs from "../img/stack-icon/nodejs-icon.png";
import express from "../img/stack-icon/express-icon.png";
import mysql from "../img/stack-icon/mysql-icon.png";
import git from "../img/stack-icon/git-icon.png";
import aws from "../img/stack-icon/aws-icon.png";

function Skills() {
    return (
        <section className="page-skills">
            <h1 className="page-title">Skills</h1>
            <div className="page-container-skills">
                <div className="skills-box">
                    <div className="skills-box-title">Language</div>
                    <Fade>
                        <div className="skills-box-content-box">
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={javascript} alt="JavaScript" />
                                <div className="skills-box-stack-info">JavaScript</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={css} alt="CSS" />
                                <div className="skills-box-stack-info">CSS</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={html} alt="HTML" />
                                <div className="skills-box-stack-info">HTML</div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="skills-box">
                    <div className="skills-box-title">Frameworks & Libraries</div>
                    <Fade delay={70}>
                        <div className="skills-box-content-box">
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={react} alt="React" />
                                <div className="skills-box-stack-info">React</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={sass} alt="SASS / SCSS" />
                                <div className="skills-box-stack-info">SASS / SCSS</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={nodejs} alt="Node.js" />
                                <div className="skills-box-stack-info">Node.js</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={express} alt="Express" />
                                <div className="skills-box-stack-info">Express</div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="skills-box">
                    <div className="skills-box-title">DB</div>
                    <Fade delay={120}>
                        <div className="skills-box-content-box">
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={mysql} alt="MySQL" />
                                <div className="skills-box-stack-info">MySQL</div>
                                <span className="skills-box-stack-info-details">(관계형 스키마 디자인, SQL 주요 문법)</span>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="skills-box">
                    <div className="skills-box-title">Tools</div>
                    <Fade delay={170}>
                        <div className="skills-box-content-box">
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={git} alt="Git" />
                                <div className="skills-box-stack-info">Git</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={aws} alt="AWS" />
                                <div className="skills-box-stack-info">AWS</div>
                                <span className="skills-box-stack-info-details">(EC2, RDS, S3를 이용한 배포 경험, PipeLine을 이용한 간단한 배포 자동화 경험)</span>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Skills;
