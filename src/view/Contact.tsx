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
                <a className="contact-text">hgud55@naver.com</a>
                <div className="contact-catchphrase">Make world to easy and funny with me!</div>
                <div className="contact-link-box">
                    <a className="contact-text">Github</a>
                    <a className="contact-text">Blog</a>
                    <a className="contact-text">Resume</a>
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
