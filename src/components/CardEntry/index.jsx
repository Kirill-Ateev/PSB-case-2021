import React from 'react';
import {makeStyles} from '@mui/styles';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    entry: {
        display: 'flex',
        justifyContent: 'flex-start',
        columnGap: '30px',
        alignItems: 'center',
    },
    icon: {
        width: '75px',
        height: '75px',
        borderRadius: '50%',
        border: '2px solid #000000',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    data: {
        display: "flex",
        flexDirection: "column",
        gap: 6
    },
    text: {
        color: 'gray',
        display: 'flex',
        gap: 6,
        flexDirection: 'column',
    },
    items: {
        display: "flex",
        color: "black",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    meetingButton: {
        marginLeft: -14
    },
    a: {
        color: '#303181',
    },
}));

const CardEntry = ({icon, text, link = '#', children}) => {
    const classes = useStyles();

    return (
        <div className={classes.entry}>
            <div className={classes.icon}>{icon}</div>
            <div className={classes.data}>
                <div className={classes.text}>
                    <div className={classes.items}>{
                        children ? text.map(item => <div>{item}</div>)
                    : text}</div>
                </div>
                <div>
                    {children ? <div className={classes.meetingButton}>{children}</div>
                    : <Link to={link}>Перейти →</Link>}
                </div>
            </div>
        </div>
    );
};

export default CardEntry;
