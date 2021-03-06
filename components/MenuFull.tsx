import React from "react";
import { animated } from "react-spring";
import {MdClose} from "react-icons/md";
import Button from "./Button";


export const MenuFull = ({ style, toggleMenu }) => (
    <animated.div className="menu menu--full" style={style}>
        <button
            className="menu-button menu-button--full"
            onClick={toggleMenu}
        >
          <MdClose/>
        </button>
        <nav>
            <ul className="menu-list menu-list--full">
                <li   onClick={toggleMenu} className="menu-list-item menu-list-item--full">
                    <a href="#stack">Stack</a>
                </li>
                <li  onClick={toggleMenu} className="menu-list-item menu-list-item--full">
                    <a href="#projects">Projects</a>
                </li>
                <li  onClick={toggleMenu} className="menu-list-item menu-list-item--full">
                    <a href="#blogs">Blogs</a>
                </li>

            </ul>

        </nav>
        <button className='navBtn'>
            <a href='./file/Orji_Joseph_Resume.pdf' download>

            <img src='./svg/document.svg' alt='rocket'/>

            My Resume
            </a>
        </button>
    </animated.div>
);