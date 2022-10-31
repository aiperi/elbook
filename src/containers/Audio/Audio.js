import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {fetchAudioRequest} from "../../store/actions/audioActions/audioActions";
import Preloader from "../../components/Preloader/Preloader";
import SingleAudioBox from "../../components/SingleAudioBox/SingleAudioBox";
import {apiURL} from "../../config";

const style={
    maxWidth: "1200px",
padding: "0 24px",
margin: "20px auto 10px",

}

const Audio = () => {
    const {t, i18n} = useTranslation();
    window.scroll(0,0)
    const audio=useSelector(state => state.audio.audio.results);
    const loadingAudio=useSelector(state => state.audio.fetchLoading);
    const dispatch = useDispatch();




    useEffect(() => {
        dispatch( fetchAudioRequest());
    }, [])

    return (
        <>
            {loadingAudio ? (
                <Preloader/>
            ):(


                <div style={style}>
                    <Grid container justifyContent={"space-between"} sx={{marginBottom: '12px'}}>
                        <Grid item>
                          <h3>{t("audiobooks")}</h3>
                        </Grid>
                    </Grid>
                    <Grid container alignContent={"center"}
                          sx={{
                              flexDirection: {xs: 'column', sm: 'row'},
                              justifyContent: {xs: 'center', sm: 'space-between'},
                          }}
                    >
                        <SingleAudioBox audio={audio && audio[0]}/>
                    </Grid>
                </div>
            )}
        </>

    );
};

export default Audio;