import React from 'react';
import {ColorRing} from 'react-loader-spinner'
import {Box,} from "@mui/material";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Preloader = () => {
    return (
        <Box width={"100%"}>
            <div style={{width:"100%",height:"80vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <ColorRing
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#a4510d', '#9d8d23', '#ecd05d', '#abbd81', '#849b87']}
                />
            </div>
        </Box>

    );
};

export default Preloader;