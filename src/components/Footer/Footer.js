import React from 'react';
import './footer.css'
import {Box, Grid} from "@mui/material";
import logo from "../../images/logo.png";
import {LogoText} from "../Header/styledComponents";
import './footer.css'
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import {root} from "../../paths";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer'>
            <div className="footer-container">
                <Box className="logoWrapper" sx={{
                    height: "43px",
                    display: "flex",
                    alignItems: "center",
                    cursor:"pointer",
                    caretColor: "transparent"
                    // flexGrow: {xs: '1'},
                    // justifyContent: {xs: "center", md: "start"},
                }}
                     onClick={()=>navigate(root)}
                >
                    <img src={logo} alt="logo" className={"logo"}/>

                    <LogoText
                        variant="h6"
                        noWrap
                        // component="a"
                        // href="/"
                    >
                        Elbook
                    </LogoText>
                </Box>
                <div className="contacts">
                    <p>Пушкина 78, 720040 Бишкек, Кыргызстан</p>
                    <p>+996 312 661194</p>
                    <p>+996 312 660952</p>

                </div>
                <div>
                    <SocialNetworks/>
                </div>
            </div>

        </div>
    );
};

export default Footer;