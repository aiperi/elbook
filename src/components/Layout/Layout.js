import React from 'react';
import {CssBaseline} from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({children}) => {
    // const location = useLocation();
    return (
        <>
            <CssBaseline/>
                <Header/>
            <div style={{display: 'flex', minHeight: '90vh', flexDirection: 'column'}}>
                <div style={{flex: '1 1 auto'}}>

                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;