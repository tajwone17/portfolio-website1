import React from 'react';
import './Intro.css';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';



// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";

const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Tajwone</span>
                    <span>A motivated and enthusiastic Front-End Developer who is passionate about creating engaging and user-friendly web experiences.</span>
                </div>
                <button className='button i-button'>Hire Me</button>
                <div className="i-icons">
                    <a href='https://github.com/tajwone17' target='blank'>
                        <img src={Github} alt="" />
                    </a>
                    <a href='https://www.instagram.com/tajwone_chowdhury17?igsh=MWlrZWdoY3NxcnR1Mg%3D%3D&utm_source=qr' target='blank'>
                        <img src={Instagram} alt="" />
                    </a>
                    <a href='https://bd.linkedin.com/in/jakaria-chowdhury-tajwone-9a1b08293' target='blank'>
                        <img src={Linkedin} alt="" />
                    </a>


                </div>
            </div>
            <div className="i-right">

                <div className='hero'>
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={boy} alt="" />
                </div>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'></FloatingDiv>
            </div>

        </div>
    );
};

export default Intro;