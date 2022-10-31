import React, {useState} from 'react';
import {Grid} from "@mui/material";
import HeadsetIcon from '@mui/icons-material/Headset';
import {useTranslation} from "react-i18next";
import {urlMedia} from "../../config";
import AudioPlayer from 'react-h5-audio-player';
import ModalView from "../ModalView/ModalView";
import './audio.css'
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const styleIcon = {
    color: '#3563E9',
    fontSize: '18px',
    marginLeft: '8px'
}

const SingleAudioBox = ({audio}) => {
    const {t, i18n} = useTranslation();
    const [show, setShow] = useState(false);


    const onClickPlay = () => {
        setShow(true);
    }

    return (
        <Grid item container
              justifyContent={"center"} direction={"column"}  alignItems={"center"}
              sx={{
                  maxWidth: {xs: '85%', sm: '30%', md: '30%', lg: '30%'},
                  minHeight: {xs: 'auto', sm: 'auto', md: "390px", lg: '390px'},
                  backgroundColor: "#F1F8FF",
                  padding: '10px',
                  color: "#424242",
                  fontFamily: 'Inter',
                  marginBottom: "10px"
              }}
        >

            {audio && (
                <>
                    {audio && i18n.language === 'ky' && (
                        <p style={{textAlign:"center",fontSize: "16px", fontWeight: '600', margin: 0}}>{audio.title_ky}</p>
                    )}
                    {audio && i18n.language === 'ru' && (
                        <p style={{textAlign:"center",fontSize: "16px", fontWeight: '600', margin: 0}}>{audio.title_ru}</p>
                    )}
                    {audio && i18n.language === 'en' && (
                        <p style={{textAlign:"center",fontSize: "16px", fontWeight: '600', margin: 0}}>{audio.title_en}</p>
                    )}
                    {/*author*/}
                    {audio && i18n.language === 'ky' && (
                        <p style={{fontSize: "16px", fontWeight: '400', margin: 0}}>{audio.author_ky}</p>
                    )}
                    {audio && i18n.language === 'ru' && (
                        <p style={{fontSize: "16px", fontWeight: '400', margin: 0}}>{audio.author_ru}</p>
                    )}

                    {audio && i18n.language === 'en' && (
                        <p style={{fontSize: "16px", fontWeight: '400', margin: 0}}>{audio.author_en}</p>
                    )}
                </>
            )}

            {audio && (
                <div style={{position:"relative"}}>
                    <img src={urlMedia + audio.image} alt={audio.title_en + ' pic'}
                         style={{width: "132px", height: '200px',}}/>
                    <div style={{
                        position: "absolute",
                        zIndex:"5",
                        top:"70px",
                        right:"45px"
                    }}>
                        <IconButton sx={{backgroundColor:"grey", padding:'0px'}} onClick={()=>onClickPlay()}>
                            <PlayCircleIcon
                            sx={{  color:"white",
                            fontSize:"50px"}}
                            />
                        </IconButton>
                    </div>

                </div>
            )}

            <div className="links-box">
                <button
                    className="small-links"
                    onClick={() => setShow(true)}
                >
                    {t("listen")}
                </button>
                <HeadsetIcon sx={styleIcon}/>
                {/*<ReactAudioPlayer*/}
                {/*    src={audio && urlMedia+audio.file}*/}
                {/*    autoPlay={false}*/}
                {/*    controls*/}
                {/*/>*/}

                <ModalView open={show} onClose={() => setShow(false)}>
                    {audio && (
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src={urlMedia + audio.image} alt={audio.title_en + ' pic'}
                                 style={{width: "172px", height: '240px', margin: "0 auto"}}/>
                        </div>
                    )}
                    <AudioPlayer
                        autoPlay={true}
                        src={audio && urlMedia + audio.file}
                        onPlay={e => console.log("onPlay")}

                        // other props here
                    />
                </ModalView>


            </div>
        </Grid>
    );
};

export default SingleAudioBox;