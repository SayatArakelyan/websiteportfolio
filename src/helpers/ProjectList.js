import project01 from "../assets/img/projects/01.jpg";
import project01Big from "../assets/img/projects/01-big.jpg";

import project02 from "../assets/img/projects/02.jpg";
import project02Big from "../assets/img/projects/02-big.jpg";

import project03 from "../assets/img/projects/03.jpg";
import project03Big from "../assets/img/projects/03-big.jpg";

import project04 from "../assets/img/projects/04.jpg";
import project04Big from "../assets/img/projects/04-big.jpg";

import project05 from "../assets/img/projects/05.jpg";
import project05Big from "../assets/img/projects/05-big.jpg";

import project06 from "../assets/img/projects/06.jpg";
import project06Big from "../assets/img/projects/06-big.jpg";
import _ from 'lodash';

const projects = [
    {
        title: 'Gaming streaming portal',
        skills: 'React, Node.js, MongoDB',
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://github.com',
        id : _.uniqueId()
    },
    {
        title: 'Video service',
        img: project02,
        imgBig: project02Big,
        skills: 'React, PHP, MySql',
        gitHubLink: 'https://github.com',
        id : _.uniqueId()
    },
    {
        title: 'Video portal',
        img: project03,
        imgBig: project03Big,
        skills: 'Vue JS, Node.js, MongoDB',
        gitHubLink: 'https://github.com',
        id : _.uniqueId()
    },
    {
        title: 'Dating app',
        img: project04,
        imgBig: project04Big,
        skills: 'React Native',
        id : _.uniqueId()
    },
    {
        title: 'Landing',
        img: project05,
        imgBig: project05Big,
        skills: 'HTML, SCSS, JS',
        id : _.uniqueId()
    },
    {
        title: 'Gaming community',
        img: project06,
        imgBig: project06Big,
        skills: 'React, PHP, MySql',
        id : _.uniqueId()
    },
];

export {projects}