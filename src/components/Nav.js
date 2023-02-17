import React from 'react';
import sunMode from "../assets/img/icons/sun.svg";
import darkMode from "../assets/img/icons/moon.svg";
import {NavLink} from "react-router-dom";

function Nav() {
    const activeLink = "nav-list__link nav-list__link--active"
    const link = "nav-list__link"

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <button className="dark-mode-btn">
                        <img src={sunMode} alt="Light mode" className="dark-mode-btn__icon"/>
                        <img src={darkMode} alt="Dark mode" className="dark-mode-btn__icon"/>
                    </button>

                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink
                                to="/" className={({isActive})=>(
                                    isActive ? activeLink : link

                            )}

                            >
                                Home
                            </NavLink>

                        </li>
                        <li className="nav-list__item">

                            <NavLink
                                to="/projects"
                                className={({isActive}) =>
                                    isActive ? activeLink : link
                                }
                            >
                                Projects
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({isActive}) =>
                                    isActive ? activeLink : link
                                }
                            >
                                Contacts
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;