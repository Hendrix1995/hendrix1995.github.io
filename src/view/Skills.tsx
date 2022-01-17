import React from "react";
import { Fade } from "react-awesome-reveal";

import javascript from "../img/stack-icon/javascript-icon.png";
import css from "../img/stack-icon/css-icon.png";
import html from "../img/stack-icon/html-icon.png";
import react from "../img/stack-icon/react-icon.png";
import sass from "../img/stack-icon/sass-icon.png";
import styled_components from "../img/stack-icon/styled-components-icon.png";
import nodejs from "../img/stack-icon/nodejs-icon.png";
import express from "../img/stack-icon/express-icon.png";
import mysql from "../img/stack-icon/mysql-icon.png";
import git from "../img/stack-icon/git-icon.png";
import figma from "../img/stack-icon/figma-icon.png";
import notion from "../img/stack-icon/notion-icon.png";
import aws from "../img/stack-icon/aws-icon.png";
import typescript from "../img/stack-icon/typescript-icon.png";

function Skills() {
    return (
        <section className="page-skills">
            <h1 className="page-title">Skills</h1>
            <div className="page-container-skills">
                <div className="skills-box">
                    <div className="skills-box-title">Language</div>
                    <div className="skills-box-content-box">
                        <Fade>
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
                        </Fade>
                    </div>
                </div>
                <div className="skills-box">
                    <div className="skills-box-title">Frameworks & Libraries</div>
                    <div className="skills-box-content-box">
                        <Fade>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={react} alt="React" />
                                <div className="skills-box-stack-info">React</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={sass} alt="SASS / SCSS" />
                                <div className="skills-box-stack-info">SASS / SCSS</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={styled_components} alt="styled-components" />
                                <div className="skills-box-stack-info">styled-components</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={nodejs} alt="Node.js" />
                                <div className="skills-box-stack-info">Node.js</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={express} alt="Express" />
                                <div className="skills-box-stack-info">Express</div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="skills-box">
                    <div className="skills-box-title">DB</div>
                    <div className="skills-box-content-box">
                        <Fade>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={mysql} alt="MySQL" />
                                <div className="skills-box-stack-info-container">
                                    <div className="skills-box-stack-info">MySQL</div>
                                    <div className="skills-box-stack-info-details">(관계형 스키마 디자인, SQL 주요 문법)</div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="skills-box">
                    <div className="skills-box-title">Tools</div>
                    <div className="skills-box-content-box">
                        <Fade>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={git} alt="Git" />
                                <div className="skills-box-stack-info">Git</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={figma} alt="Figma" />
                                <div className="skills-box-stack-info">Figma</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={notion} alt="Notion" />
                                <div className="skills-box-stack-info">Notion</div>
                            </div>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={aws} alt="AWS" />
                                <div className="skills-box-stack-info-container">
                                    <div className="skills-box-stack-info">AWS</div>
                                    <div className="skills-box-stack-info-details">(EC2, RDS, S3를 이용한 배포 경험, PipeLine을 이용한 간단한 배포 자동화 경험)</div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="skills-box-learning">
                    <div className="skills-box-title">Learning</div>
                    <div className="skills-box-content-box">
                        <Fade>
                            <div className="skills-box-content">
                                <img className="skills-box-stack-icon" src={typescript} alt="Typescript" />
                                <div className="skills-box-stack-info">TypeScript</div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
