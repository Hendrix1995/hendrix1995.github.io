import { useState } from "react";

function Contact() {
    const [isHover, setIsHover] = useState(false);
    const isHoverHandler = () => {
        setIsHover(!isHover);
    };

    return (
        <section className="page-contact">
            <h1 className="page-title">Contact</h1>
            <div className="contact-link-container">
                <a className="email-text" href="mailto:hgud55@naver.com">
                    hgud55@naver.com
                </a>
                <div className="contact-catchphrase">Make world to easy and funny with me!</div>
                <div className="contact-link-box">
                    <div className="contact-content-box" onClick={() => window.open("https://github.com/Hendrix1995", "_blank")}>
                        <a className="contact-text">
                            <i className="fab fa-github" />
                            Github
                        </a>
                    </div>
                    <div className="contact-content-box" onClick={() => window.open("https://hyeonsi.tistory.com", "_blank")}>
                        <a className="contact-text">
                            <i className="fas fa-bold" />
                            Blog
                        </a>
                    </div>
                    <div className="contact-content-box" onClick={() => window.open("https://url.kr/57nytx", "_blank")}>
                        <a className="contact-text">
                            <i className="fas fa-file" />
                            Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className="go-top-button-container" onMouseEnter={isHoverHandler} onMouseLeave={isHoverHandler}>
                {isHover ? (
                    <span className="go-top-button-icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        To TOP
                    </span>
                ) : (
                    <span className="go-top-button-icon">Hendrix</span>
                )}
            </div>
        </section>
    );
}

export default Contact;
