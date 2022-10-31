import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    backgroundColor: "whitesmoke",
    border: '2px solid grey',
    boxShadow: 24,
    p: 4,
    zIndex: 22,
};

const ModalView = ({children, open, onClose}) => {

    return (
        <div sx={{width: '100%'}}>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} >
                        <Button onClick={onClose} sx={{color: 'black'}}> <CloseIcon sx={{color:'grey'}}/></Button>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default ModalView;
