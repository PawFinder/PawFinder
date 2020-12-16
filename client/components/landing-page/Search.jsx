import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'; 
import { __Btn } from '../../styles/__Utils';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [type, setType] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [size, setSize] = React.useState('');
  const [zipcode, setZipCode] = React.useState(''); 

  const handleAge = (event) => {
    setAge((event.target.value) || '');
  };
  const handleType = (event) => {
    setType((event.target.value) || '');
  };
  const handleGender = (event) => {
    setGender((event.target.value) || '');
  };
  const handleSize = (event) => {
    setSize((event.target.value) || '');
  };
  
  const handleZipCode = (event) => {
    setZipCode(event.target.value || '');
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  
    const handleOk = () => {
      const currState = {
        age: age,
        type: type,
        gender: gender, 
        size: size, 
        postcode: zipcode
      }
      axios.post('/api/feed', {currState})
        .then(res => {
          console.log(res); 
        console.log(res.data); 
      })
    };
 
  

  //onClick we want to send a fetch request to backend, sending the current state in body 
  //also redirect user to new component with card info rendered (render the PetCard component)



  return (
    <div>
      <__Btn secondary onClick={handleClickOpen}>Adopt a Paw 🐶</__Btn>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleCancel}>
        <DialogTitle>Adopt a Paw 🐶</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
           
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Type</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={type}
                onChange={handleType}
                input={<Input />}
              >
                <MenuItem value={"Cat"}>Cat</MenuItem>
                <MenuItem value={"Dog"}>Dog</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleAge}
                input={<Input />}
              >
                <MenuItem value={"Baby"}>Baby</MenuItem>
                <MenuItem value={"Young"}>Young</MenuItem>
                <MenuItem value={"Adult"}>Adult</MenuItem>
                <MenuItem value={"Senior"}>Senior</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Size</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={size}
                onChange={handleSize}
                input={<Input />}
              >
                <MenuItem value={"Small"}>Small</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Large"}>Large</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Gender</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={gender}
                onChange={handleGender}
                input={<Input />}
              >
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
              </Select>
            </FormControl>
            <TextField id="standard-search" label="Zipcode" type="search" onChange={handleZipCode} value={zipcode}/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}