import React, {useState} from 'react';
import { AppBar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ModalCard from '../ModalCard';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    backgroundColor: 'orange',
    transition: 'height 0.5s ease-out',
  },
}));

const Hero = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles();
  return (
    <div className={classes.header} position="static">
      This is header!
      <Button onClick={() => setOpen(true)}>CLICK</Button>
      <ModalCard open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Hero;
