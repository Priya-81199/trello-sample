import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import './AddButton.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddButton = ({title, description, listType, setTitle, setDescription, setListType, open, handleClose, error, setError, handleSave}) => {
    
    return(
        <div>
        
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Add New Card"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Enter title, desciption and list type below
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="title"
                    fullWidth
                    value={title}
                    onChange={(event) => {
                        let value = event.target.value;
                        value = value.replace(/[^A-Za-z]s/ig,'')
                        setTitle(value);
                    }}
                />
                <TextField
                    autoFocus
                    multiline
                    minRows='3'
                    margin="dense"
                    id="name"
                    label="Desciption"
                    type="description"
                    fullWidth
                    value={description}
                    onChange={(event) => {
                        let value = event.target.value;
                        if(value.length < 25){
                            setError('Description should be minimum of 25 characters');
                        }
                        else{
                            setError('');
                        }
                        setDescription(value);
                    }}
                />
                <div style={{height:'30px',color:'red'}}>{error}</div>
                <InputLabel id="demo-simple-select-label">Todo / Doing / Done ?</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                defaultValue='Todo'
                id="demo-simple-select"
                value={listType}
                onChange={(event) => {
                    setListType(event.target.value);
                }}
                >
                    <MenuItem value={'todo'}>Todo</MenuItem>
                    <MenuItem value={'doing'}>Doing</MenuItem>
                    <MenuItem value={'done'}>Done</MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary" disabled = {error.length > 0 || title.length < 1 || description.length < 1}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
      </div>
    );
};

export default AddButton;