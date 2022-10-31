import styled from "@emotion/styled";
import {Button, IconButton, Typography} from "@mui/material";

import("typeface-hk-grotesk");

export const SocialNetButton = styled(IconButton)(() => ({
    width: "24p",
    height: '26px',
    backgroundColor: 'white',
    border: "none",
    borderRadius: '50%',
        ":hover":{
            backgroundColor: "rgba(255,255,255,0.7)"
        }

}))
;

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