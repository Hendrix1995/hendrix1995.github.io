import { useState } from "react";
import { AttentionSeeker } from "react-awesome-reveal";

function Contact() {
    const [isHover, setIsHover] = useState(false);
    const isHoverHandler = () => {
        setIsHover(!isHover);
    };

    return (
        <section className="page-contact">
            <h1 className="page-title">Contact</h1>
            <div className="contact-link-container">
                <a className="email-text" href="mailto:hgud55@gmail.com">
                    hgud55@gmail.com
                </a>
                <AttentionSeeker effect={"pulse"}>
                    <div className="contact-catchphrase">Let's Make A Easy And Fun World With Me!</div>
                </AttentionSeeker>
                <div className="contact-link-box">
                    <div className="contact-content-box">
                        <a className="contact-text" href="#!" onClick={() => window.open("https://github.com/Hendrix1995", "_blank")}>
                            <i className="fab fa-github" />
                            Github
                        </a>
                    </div>
                    <div className="contact-content-box">
                        <a className="contact-text" href="#!" onClick={() => window.open("https://hyeonsi.tistory.com", "_blank")}>
                            <i className="fas fa-bold" />
                            Blog
                        </a>
                    </div>
                    <span className="contact-content-box">
                        <a className="contact-text" href="#!" onClick={() => window.open("https://url.kr/57nytx", "_blank")}>
                            <i className="fas fa-file" />
                            Resume
                        </a>
                    </span>
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
