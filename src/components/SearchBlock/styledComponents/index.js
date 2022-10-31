import styled from "@emotion/styled";
import {Button, IconButton, InputLabel, Select, TextField} from "@mui/material";

export const SearchBlockSelect = styled(Select)(() => ({
    boxShadow: 'none',
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.7)",
    '.MuiOutlinedInput-notchedOutline': {border: 0},
    '.Mui-focused': {border: 0},
    '.MuiOutlinedInput-root': {border: 'none', backgroundColor: "rgba(255,255,255,1)"},
    '.MuiSelect-select': {color: 'black'},

}));

export const StyledTextField = styled(TextField)(() => ({
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.7)",
    '.MuiOutlinedInput-notchedOutline': {border: 0},
    '.Mui-focused': {border: 0},
}));

export const StyledButton = styled('button')(() => ({
    borderRadius: "12px",
    backgroundColor: "#F7CC46",
    borderColor:"#F7CC46",
    width: '145px',
    height: "56px",
    color: "#424242",
    ":hover":{
        backgroundColor: "#DFB129",
        borderColor:"#DFB129",
    },
    fontFamily: 'Inter',
fontSize: "18px",
    marginTop:'2px'
}));






