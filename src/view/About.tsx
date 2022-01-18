import React from "react";
import profileImg from "../img/profile.jpeg";

function About() {
    return (
        <section className="page-about">
            <h1 className="page-title">About</h1>
            <div className="page-container-about">
                <div className="about-catchphrase">
                    <p>
                        복잡한 세상을 쉽고 재미있게 만들어
                        <br /> 누구나 즐길수 있는 곳으로 만들고 싶습니다.
                        <br />그 목표를 위한 도구로 ‘프로그래밍’을 선택했습니다.
                    </p>
                    <p>
                        복잡한 세상을 잠시 잊고 편안함을 느낄수 있는
                        <br />
                        서비스를 개발 할 수 있도록 UX에 대해 고민합니다.
                    </p>
                    <p>
                        팀원들과 의사소통을 좋아하고
                        <br />그 속에서 소중한 아이디어를 찾아 낼 수 있습니다.
                    </p>
                    <p>
                        해외 취업 경험등 도전을 즐기고 포기하지 않는 끈기로 새로운
                        <br />
                        기술을 배우고 적용하는 것을 좋아합니다.
                    </p>
                </div>
                <img className="profile-img" src={profileImg} alt="profile" />
            </div>
        </section>
    );
}

export default About;
