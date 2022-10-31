import React, {useEffect} from 'react';
import './MainBlock.css';
import {Box, Grid} from "@mui/material";
import SingleBookBox from "../SingleBookBox/SingleBookBox";
import Player from "../Player/Player";
import SingleAudioBox from "../SingleAudioBox/SingleAudioBox";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooksRequest} from "../../store/actions/bookActions/bookActions";
import {fetchMaterialsRequest} from "../../store/actions/materialActions/materialActions";
import {fetchVideoRequest} from "../../store/actions/videoActions/videoActions";
import {useTranslation} from "react-i18next";
import {fetchFormatRequest} from "../../store/actions/formatActions/formatActions";
import {fetchPodcastRequest} from "../../store/actions/podcastActions/podcastActions";
import {fetchAudioRequest} from "../../store/actions/audioActions/audioActions";
import Preloader from "../Preloader/Preloader";
import {ebooks, audio, materialsRead, video, podcasts} from "../../paths";
import {Link} from "react-router-dom";

const MainBlock = () => {
    const {t, i18n} = useTranslation();
    const formats = useSelector(state => state.format.formats);
    const materials = useSelector(state => state.materials.materials.results)
    const loading = useSelector(state => state.materials.fetchLoading)
    const books = useSelector(state => state.books.books.results);
    const videos = useSelector(state => state.video.videos.results);
    const podcast=useSelector(state => state.podcast.podcasts);
    const audios=useSelector(state => state.audio.audio.results);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooksRequest());
        dispatch(fetchMaterialsRequest());
        dispatch(fetchVideoRequest());
        dispatch(fetchFormatRequest());
       dispatch( fetchPodcastRequest());
       dispatch( fetchAudioRequest());

    }, [])

    return (
        <>
            {loading ? (
                <Preloader/>
            ):(
                <>
                    <div className="main-container">
                        <Grid container justifyContent={"space-between"} sx={{marginBottom: '12px'}}>
                            <Grid item>
                                <Link
                                    to={materialsRead}
                                    className="main-block-links"
                                    sx={{textDecoration: "none", color: '#3563E9',}}
                                >
                                    {formats[0] && i18n.language === "ky" &&(
                                        <>
                                            {formats[0].title_ky}
                                        </>
                                    )}
                                    {formats[0] && i18n.language === "ru" &&(
                                        <>
                                            {formats[0].title_ru}
                                        </>
                                    )}
                                    {formats[0] && i18n.language === "en" &&(
                                        <>
                                            {formats[0].title_en}
                                        </>
                                    )}

                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to={materialsRead} className="main-block-links-small"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >
                                    {t("see_all")}
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container alignContent={"center"}
                              sx={{
                                  flexDirection: {xs: 'column', sm: 'row'},
                                  justifyContent: {xs: 'center', sm: 'space-between'},
                              }}
                        >
                            <SingleBookBox
                                book={materials && materials[0]}
                            />
                            <SingleBookBox
                                book={materials && materials[0]}
                            />
                            <SingleBookBox
                                book={materials && materials[0]}
                            />

                        </Grid>
                    </div>


                    <div className="main-container">
                        <Grid container justifyContent={"space-between"} sx={{marginBottom: '12px'}}>
                            <Grid item>
                                <Link
                                    to={ebooks}
                                    className="main-block-links"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >
                                    {formats[1] && i18n.language === "ky" &&(
                                        <>
                                            {formats[1].title_ky}
                                        </>
                                    )}

                                    {formats[1] && i18n.language === "ru" &&(
                                        <>
                                            {formats[1].title_ru}
                                        </>
                                    )}
                                    {formats[1] && i18n.language === "en" &&(
                                        <>
                                            {formats[1].title_en}
                                        </>
                                    )}

                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to={ebooks} className="main-block-links-small"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >
                                    {t("see_all")}
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container alignContent={"center"}
                              sx={{
                                  flexDirection: {xs: 'column', sm: 'row'},
                                  justifyContent: {xs: 'center', sm: 'space-between'},
                              }}
                        >
                            <SingleBookBox
                                book={books && books[0]}
                            />
                            <SingleBookBox
                                book={books && books[1]}
                            />
                            <SingleBookBox
                                book={books && books[2]}
                            />
                        </Grid>
                    </div>

                    <div className="main-container">
                        <Grid container justifyContent={"space-between"} sx={{marginBottom: '12px'}}>
                            <Grid item>
                                <Link
                                    to={audio}
                                    className="main-block-links"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >

                                    {formats[2] && i18n.language === "ky" &&(
                                        <>
                                            {formats[2].title_ky}
                                        </>
                                    )}
                                    {formats[2] && i18n.language === "ru" &&(
                                        <>
                                            {formats[2].title_ru}
                                        </>
                                    )}
                                    {formats[2] && i18n.language === "en" &&(
                                        <>
                                            {formats[2].title_en}
                                        </>
                                    )}

                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to={audio} className="main-block-links-small"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >
                                    {t("see_all")}
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container alignContent={"center"}
                              sx={{
                                  flexDirection: {xs: 'column', sm: 'row'},
                                  justifyContent: {xs: 'center', sm: 'space-between'},
                              }}
                        >

                            <SingleAudioBox audio={audios && audios[0]}/>
                            <SingleAudioBox audio={audios && audios[0]}/>
                            <SingleAudioBox audio={audios && audios[0]}/>

                        </Grid>
                    </div>
                    <div className="main-container">
                        <Grid container justifyContent={"space-between"} sx={{marginBottom: '12px'}}>
                            <Grid item>
                                <Link
                                    to={video}
                                    className="main-block-links"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >
                                    {formats[3] && i18n.language === "ky" &&(
                                        <>
                                            {formats[3].title_ky}
                                        </>
                                    )}
                                    {formats[3] && i18n.language === "ru" &&(
                                        <>
                                            {formats[3].title_ru}
                                        </>
                                    )}
                                    {formats[3] && i18n.language === "en" &&(
                                        <>
                                            {formats[3].title_en}
                                        </>
                                    )}

                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to={video} className="main-block-links-small"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >
                                    {t("see_all")}
                                </Link>
                            </Grid>
                        </Grid>
                        {videos && (
                            <Grid container alignContent={"center"}
                                  sx={{
                                      flexDirection: {xs: 'column', md: 'row'},
                                      justifyContent: {xs: 'center', md: 'space-between'}

                                  }}
                            >
                                <Box sx={{width: {xs: '90%', md: "45%"}}}>
                                    <Player video={videos[0]}/>
                                </Box>

                                <Box sx={{width: {xs: '90%', md: "45%"}}}>
                                    <Player video={videos[1]}/>
                                </Box>

                            </Grid>
                        )}
                    </div>
                    <div className="main-container">
                        <Grid container justifyContent={"space-between"} sx={{marginBottom: '12px'}}>
                            <Grid item>
                                <Link
                                    to={podcasts}
                                    className="main-block-links"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >

                                    {formats[4] && i18n.language === "ky" &&(
                                        <>
                                            {formats[4].title_ky}
                                        </>
                                    )}
                                    {formats[4] && i18n.language === "ru" &&(
                                        <>
                                            {formats[4].title_ru}
                                        </>
                                    )}
                                    {formats[4] && i18n.language === "en" &&(
                                        <>
                                            {formats[4].title_en}
                                        </>
                                    )}

                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    to={podcasts} className="main-block-links-small"
                                    sx={{textDecoration: "none", color: '#3563E9'}}
                                >
                                    {t("see_all")}
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container alignContent={"center"}
                              sx={{
                                  flexDirection: {xs: 'column', sm: 'row'},
                                  justifyContent: {xs: 'center', sm: 'space-between'},
                              }}
                        >
                            <SingleAudioBox audio={audios && audios[0]}/>
                            <SingleAudioBox audio={audios && audios[0]}/>
                            <SingleAudioBox audio={audios && audios[0]}/>

                        </Grid>
                    </div>
                </>
            )}


        </>

    );
};

export default MainBlock;