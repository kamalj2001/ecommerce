import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import { TiLocationOutline } from "react-icons/ti";
import { BiPhone, BiSolidUser } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { HiOutlineLogin } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";

const Footer = () =>{
    return(
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.blocks}>
                <div className={css.logo}>
                    <img src={Logo} alt=""/>
                    <span>amazon</span>
                </div>
            </div>
            <div className={css.blocks}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <TiLocationOutline className={css.icon} />
                        <span>111 north avenue Orlando, FL 32801</span>
                    </span>
                    <span className={css.pngLine}>
                        <BiPhone  className={css.icon}/>
                        <a href="tel:352-306-4415">352-306-4415</a>
                    </span>
                    <span className={css.pngLine}>
                        <IoMdMail className={css.icon} />
                        <a href="mailto:support@amazon.com">support@amazon.com</a>
                    </span>
                </div>
            </div>

            <div className={css.blocks}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <HiOutlineLogin className={css.icon} />
                        Log In
                    </span>
                </div>
            </div>

            <div className={css.blocks}>
                <div className={css.detail}>
                    <span>Compony</span>
                    <span className={css.pngLine}>
                        <BiSolidUser className={css.icon} />
                        <a href="/about">
                            <p>About us</p>
                        </a>
                    </span>
                </div>
            </div>
            <div className={css.blocks}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <AiOutlineLink className={css.icon} />
                            <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>Copyright ©2023 by Amazon, Inc.</span>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;