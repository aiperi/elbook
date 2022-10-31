import React, {useEffect} from 'react';
import WebFont from 'webfontloader';
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import MainBlock from "../../components/MainBlock/MainBlock";
import './home.css'

const Home = () => {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Inter', "HK Grotesk"]
            }
        });
    }, []);



    return (
        <>
            {/*<Header/>*/}
           <SearchBlock/>
                    <MainBlock/>
            {/*<Footer/>*/}
        </>
    );
};

export default Home;