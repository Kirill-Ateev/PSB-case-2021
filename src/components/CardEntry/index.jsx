// import {Paper, Typography, Container} from '@mui/material'
import React from 'react'
// import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import {makeStyles} from '@mui/styles';
import {Typography} from "@mui/material";
// import {capitalizeFirstLetter} from '../../functions/capitalizeFirstLetter';

const useStyles = makeStyles((theme) => ({
    entry: {
        display: 'flex',
        justifyContent: 'flex-start',
        columnGap: '30px'
        // paddingRight: '20px'
    },
    icon: {
        width: "75px",
        height: "75px",
        borderRadius: '50%',
        backgroundColor: 'lightgray',
        paddingTop: 5
    },
    text: {
        opacity: '50%',
    },
    a: {
        color: "#303181"
    },
}));


const CardEntry = ({iconPicture, link, text, className = ''}) => {
    const classes = useStyles();

    return (
        <div className={classes.entry}>
            <div className={classes.icon}>
                <div
                    // href={link}
                >
                    <img src={iconPicture} alt="icon"/>
                </div>
            </div>
            <div className={classes.text}>
                <p>{text}</p>
                <div
                    // href={link}
                >
                    Перейти →
                </div>
            </div>
        </div>
    );
}

export default CardEntry;