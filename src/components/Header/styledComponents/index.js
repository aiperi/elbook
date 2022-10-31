import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";

import("typeface-hk-grotesk");

export const NavButton = styled(Button)(({matches}) => (

    {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: matches ? "13px" : "15px",
    lineHeight: "11px",
    alignItems: "center",
    letterSpacing: "0.2px",
    color: "white",
    display: "block",
        paddingRight:"10px",
    textTransform: "capitalize",
":hover":{
    backgroundColor:'#bd9d3a'
}


}));

export const LogoText = styled(Typography)(() => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "34px",
    alignItems: "center",
    letterSpacing: "0.2px",
    color: "white",
    display: "block",
}));