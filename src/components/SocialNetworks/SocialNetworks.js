import * as React from 'react';
import Stack from '@mui/material/Stack';
import {FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube} from 'react-icons/fa';
import {SocialNetButton} from "./styledComponents";

const style={
    color:"#EA3824",
    fontSize:'13px'
}

const SocialNetworks = () => {

    return (
        <Stack direction="row" spacing={1}>
            <SocialNetButton aria-label="delete">
                <FaYoutube fontSize={'14px'} color={'#EA3824'}/>
            </SocialNetButton>
            <SocialNetButton >
                <FaTelegramPlane fontSize={'14px'} color={'#EA3824'} />
            </SocialNetButton>
            <SocialNetButton >
                <FaInstagram fontSize={'14px'} color={'#EA3824'}/>
            </SocialNetButton>
            <SocialNetButton>
                <FaFacebookF fontSize={'14px'} color={'#EA3824'}/>
            </SocialNetButton>
        </Stack>
    );
};

export default SocialNetworks;
