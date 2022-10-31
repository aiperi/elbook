import React, {useEffect} from 'react';
import './searchBlock.css'
import {
    Button,
    createStyles,
    createTheme,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    TextField,
    ThemeProvider
} from "@mui/material";
import {SearchBlockSelect, SearchBlockTextField, StyledButton, StyledTextField} from "./styledComponents";
import SearchIcon from '@mui/icons-material/Search';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenreRequest} from "../../store/actions/genreActions/genreActions";


const theme = createTheme({
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
    },
});

const styles = (theme) => createStyles({
    input: {
        '&::placeholder': {
            fontStyle: 'italic',
        },
    },
});


const SearchBlock = () => {
    const dispatch = useDispatch();
    const [formatSelect, setFormatSelect] = React.useState('');
    const [jenre, setJenre] = React.useState('');
    console.log('jenre', jenre)
    const formats = useSelector(state => state.format.formats);
    const genres = useSelector(state => state.genre.genres);
    const { t , i18n} = useTranslation();

  useEffect(()=>{
      dispatch(fetchGenreRequest());
  },[])

    const handleChange = (event) => {
        setFormatSelect(event.target.value);
    };
    const handleJenreChange = (event) => {
        setJenre(event.target.value);
    };


    return (
        <ThemeProvider theme={theme}>
            <div className='block'>
            <div className="container">
                <h3 className="main-title">
                    {t("title")}
                </h3>
                <Grid container width="80%" alignItems={'center'} justifyContent={'center'}>
                    <Grid item>
                        <FormControl sx={{m: 1, minWidth: "145px", height:"52px"}} >
                            <InputLabel
                                id="demo-select-small"
                            >
                                {t("format")}

                            </InputLabel>
                            <SearchBlockSelect
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={formatSelect}
                                label={t("format")}
                                onChange={handleChange}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: 'rgba(255,255,255,0.8)',
                                            '& .MuiMenuItem-root': {
                                               fontSize:'13px',
                                                borderRadius:'10px'
                                            },
                                            '& .MuiMenuItem-root:hover':{
                                                backgroundColor:'#bd9d3a'
                                            }
                                        },
                                    },
                                }}

                            >

                                {formats.map((format,i)=>(
                                    <MenuItem value={format.title_en} key={format.title_en}>
                                        {i18n.language === "ky" &&(
                                            <>
                                                {format.title_ky}
                                            </>
                                        )}
                                        {i18n.language === "ru" &&(
                                            <>
                                                {format.title_ru}
                                            </>
                                        )}
                                        {i18n.language === "en" &&(
                                            <>
                                                {format.title_en}
                                            </>
                                        )}
                                    </MenuItem>
                                ))}
                            </SearchBlockSelect>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl sx={{m: 1, minWidth: "145px", height:"52px"}} >
                            <InputLabel
                                id="jenre"
                            >
                                {t("genre")}
                            </InputLabel>
                            <SearchBlockSelect
                                labelId="jenre"
                                id="jenre"
                                value={jenre}
                                label={t("genre")}
                                onChange={handleJenreChange}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: 'rgba(255,255,255,0.8)',
                                            '& .MuiMenuItem-root': {
                                                fontSize:'13px',
                                                borderRadius:'10px'
                                            },
                                            '& .MuiMenuItem-root:hover':{
                                                backgroundColor:'#bd9d3a'
                                            }
                                        },
                                    },
                                }}
                            >

                                {genres.map((genre,i)=>(
                                    <MenuItem value={genre.title_en} key={genre.title_en}>
                                        {i18n.language === "ky" &&(
                                            <>
                                                {genre.title_ky}
                                            </>
                                        )}
                                        {i18n.language === "ru" &&(
                                            <>
                                                {genre.title_ru}
                                            </>
                                        )}
                                        {i18n.language === "en" &&(
                                            <>
                                                {genre.title_en}
                                            </>
                                        )}
                                    </MenuItem>
                                ))}
                            </SearchBlockSelect>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl sx={{m: 1, height:"52px", width:{xs:'250px', sm:"300px", md:'386px'}}}>
                            <StyledTextField
                                id="standard-bare"
                                variant="outlined"
                                placeholder={t("key_search")}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton>
                                            <SearchIcon/>
                                        </IconButton>
                                    ),
                                }}
                                sx={{
                                    backgroundColor:'rgba(255,255,255,0.6)',
                                    borderRadius:"12px",
                                    input: {
                                        "&::placeholder": {
                                            opacity: 1,
                                            color:'#424242'
                                        },
                                    },

                                }}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <StyledButton>
                            {t("search")}
                        </StyledButton>
                    </Grid>
                </Grid>
            </div>
            </div>
        </ThemeProvider>
    );
};

export default SearchBlock;