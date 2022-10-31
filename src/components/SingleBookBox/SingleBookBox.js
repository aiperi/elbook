import React from 'react';
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import './SingleBookBox.css';
import {apiURL, urlMedia} from "../../config";
import {useTranslation} from "react-i18next";
import axios from 'axios'
import fileDownload from 'js-file-download'


const styleIcon ={
    color: '#3563E9',
    fontSize:'18px',
    marginLeft:'8px'
}


const SingleBookBox = ({book}) => {
    const {t,i18n} = useTranslation();

  const handleDownload = (url) => {
      const arr = url.split("/");
      const filename = arr[arr.length-1];
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }


    return (

        <Grid item container
              justifyContent={"center"} direction={"column"}
              alignItems={"center"}
              sx={{
                  maxWidth: {xs:'85%', sm:'30%', md:'30%', lg:'30%'},
                  minHeight:{xs:'auto', sm:'auto',md:"390px", lg:'390px'},
                  backgroundColor: "#F1F8FF",
                  padding: '10px',
                  color: "#424242",
                  fontFamily: 'Inter',
                  marginBottom: "10px"

              }}
        >
            {book && (
                <>
                    {book && i18n.language === 'ky' &&(
                        <p style={{textAlign:"center",fontSize: "16px", fontWeight: '600', margin:0 }}>{book.title_ky}</p>
                    ) }
                    {i18n.language === 'ru' &&(
                        <p style={{textAlign:"center",fontSize: "16px", fontWeight: '600', margin:0 }}>{book.title_ru}</p>
                    ) }
                    {i18n.language === 'en' &&(
                        <p style={{textAlign:"center",fontSize: "16px", fontWeight: '600', margin:0 }}>{book.title_en}</p>
                    ) }

                    {book && i18n.language === 'ky' &&(
                        <p style={{fontSize: "16px", fontWeight: '400'}}>{book.author_ky}</p>
                    ) }
                    {i18n.language === 'ru' &&(
                        <p style={{fontSize: "16px", fontWeight: '400'}}>{book.author_ru}</p>
                    ) }
                    {i18n.language === 'en' &&(
                        <p style={{fontSize: "16px", fontWeight: '400'}}>{book.author_en}</p>
                    ) }

                </>
            )}
            {book && (
                <div>
                    <img src={urlMedia+book.image} alt={book.title_en + ' pic'} style={{width: "132px", height: '200px'}}/>
                </div>
            )}
            <div className="links-box" onClick={()=>window.open(book && urlMedia+book.file)}>
                <span
                  className="small-links"
                >
                    {t("read_online")}
                </span>
                <AutoStoriesIcon sx={styleIcon}/>
            </div>
            <div className="links-box" >
                <button
                    className="small-links"
                    onClick={()=>handleDownload(urlMedia+book.file)}

                >
                    {/*<button onClick={() => {this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg')*/}
                    {/*}}>Download Image</button>*/}

                    {t("download")}
                </button>
                <CloudDownloadIcon sx={styleIcon}/>
            </div>
        </Grid>
    );
};

export default SingleBookBox;