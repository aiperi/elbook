import * as React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Fade, FormControl,
    IconButton, Link,
    Menu,
    MenuItem, Select,
    Toolbar,
    Typography, useMediaQuery,
    useTheme
} from '@mui/material';
import './header.css'
import {LogoText, NavButton} from "./styledComponents";
import logo from '../../images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../i18next";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {fetchFormatRequest} from "../../store/actions/formatActions/formatActions";
import {audio, ebooks, materialsRead, podcasts, root, video} from "../../paths";

const pagesLinks = [materialsRead,ebooks, audio,video,podcasts];

const Header = () => {
    const {t,i18n} = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));

    const format = useSelector(state => state.format.formats);



    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [language, setLanguage] = React.useState('ky');

    const onChange = (lng) => {
        changeLanguage(lng)
    }

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (path) => {
        setAnchorElNav(null);
        navigate(path)
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(()=>{
        dispatch(fetchFormatRequest());
    },[])



    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                ".MuiMenu-paper":{
                                    bgcolor: '#726b54',
                                    color:"white",
                                },
                                '& .MuiMenuItem-root:hover':{
                                    backgroundColor:'#bd9d3a'
                                }
                            }}
                        >
                            {format.map((page,i) => (
                                <MenuItem
                                    key={i+2}
                                    onClick={handleCloseNavMenu}
                                    sx={{fontFamily:'Inter'}}
                                >
                                    {i18n.language === "ky" &&(
                                        <NavButton
                                            textAlign="center"
                                            sx={{textTransform: 'toLowercase'}}
                                           onClick={()=>navigate(pagesLinks[i])}
                                        >
                                            {page.title_ky}

                                        </NavButton>
                                    )}
                                    {i18n.language === "ru" &&(
                                        <Typography
                                            textAlign="center"
                                            sx={{textTransform: 'toLowercase'}}>
                                            {page.title_ru}
                                        </Typography>
                                    )}
                                    {i18n.language === "en" &&(
                                        <Typography
                                            textAlign="center"
                                            sx={{textTransform: 'toLowercase'}}>
                                            {page.title_en}
                                        </Typography>
                                    )}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box className="logoWrapper" sx={{
                        height: "43px",
                        display: "flex",
                        alignItems: "center",
                        flexGrow: {xs: '1'},
                        justifyContent: {xs: "center", md: "start"},
                        cursor:"pointer",
                        caretColor: "transparent"
                    }}
                    onClick={()=>navigate(root)}
                    >
                        <img src={logo} alt="logo" className={"logo"}/>

                        <LogoText
                            variant="h6"
                            noWrap
                            // component="a"
                            // href="/"
                        >
                            Elbook
                        </LogoText>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, margin:"0 15px"}}>
                        {format.map((page,i) => (
                            <button className={"navMenu"}
                            // <NavButton
                                key={i+5}
                                onClick={()=>{handleCloseNavMenu(pagesLinks[i])}}
                            >
                                {i18n.language === "ky" &&(
                                    <span>
                                        {page.title_ky}
                                    </span>
                                )}
                                {i18n.language === "ru" &&(
                                    <span>
                                        {page.title_ru}
                                    </span>
                                )}
                                {i18n.language === "en" &&(
                                    <span>
                                        {page.title_en}
                                    </span>
                                )}
                            {/*// </NavButton>*/}
                            </button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <FormControl>
                            {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                            <Select
                                variant={"standard"}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={'ky'}
                                value={language}
                                disableUnderline={true}
                                onChange={handleLanguageChange}
                                sx={{ boxShadow: 'none', backgroundColor: "transparent",
                                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                                    color:"white",
                                    caretColor: "transparent",
                                    paddingLeft:"22px",
                                    '.Mui-select':{border: 0,backgroundColor: "transparent"},
                                    '.Mui-focused':{border: 0,backgroundColor: "transparent"},
                                    '.MuiOutlinedInput-root':{border:'none', backgroundColor: "transparent"},
                                    '.MuiSelect-icon': {
                                        color: 'white',
                                        left: "0"
                                    },
                                    ".MuiSelect-outlined":{
                                        color: 'white',
                                        backgroundColor: "transparent"
                                    }
                            }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: '#726b54',
                                            '& .MuiMenuItem-root': {
                                                color:"white"
                                            },
                                            '& .MuiMenuItem-root:hover':{
                                                backgroundColor:'#bd9d3a'
                                            }
                                        },
                                    },
                                }}
                            >
                                <MenuItem
                                    value={'ky'}
                                    onClick={()=>onChange('ky')}
                                >
                                    Кыр
                                </MenuItem>
                                <MenuItem
                                    value={'en'}
                                    onClick={()=>onChange('en')}
                                >
                                    Eng
                                </MenuItem>
                                <MenuItem
                                    value={'ru'}
                                    onClick={()=>onChange('ru')}
                                >
                                    Рус
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{marginLeft:'10px', display:{xs:'none', md:'flex'}}}>
                        <SocialNetworks/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;