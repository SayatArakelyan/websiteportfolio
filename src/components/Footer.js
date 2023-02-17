import React from 'react';
import vk from "../assets/img/icons/vk.svg";
import instagram from "../assets/img/icons/instagram.svg";
import twitter from "../assets/img/icons/twitter.svg";
import gitHub from "../assets/img/icons/gitHub.svg";
import linkedin from "../assets/img/icons/linkedIn.svg";


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram}
                                                                       alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="#!"><img src={gitHub}alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/sayat-araqelyan-37a984256/" target="_blank"><img src={linkedin}
                                                                       alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;