import React from 'react';
import gitHubIcon from "../assets/img/icons/gitHub-black.svg";

function BtnGitHub({link}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubIcon} alt=""/>
            GitHub repo
        </a>
    );
}

export default BtnGitHub;


