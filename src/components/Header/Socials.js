import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai";


const HeaderSocials = props => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/rustam-rustamov-b833991ba/" target='_blank'> <AiFillLinkedin/></a>
            <a href="https://github.com/Rustammio" target='_blank'><AiFillGithub/> </a>
            <a href="https://instagram.com/rustammio?igshid=YmMyMTA2M2Y=" target='_blank'><AiOutlineInstagram /></a>
        </div>
    );
};



export default HeaderSocials;
