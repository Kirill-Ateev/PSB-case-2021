import {Breadcrumbs, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {courseCardData} from "../../constants/constantValues";
import CourseCard from "../Courses/CourseCard";
import React from "react";

const useStyles = makeStyles((theme) => ({
    mentorPageContainer: {
        display: 'flex',
        gap: 30,
        paddingTop: 70,
        paddingLeft: 'min(140px, 8%)',
        paddingRight: 'min(140px, 8%)',
        flexDirection: 'column'
    },
    coursesContainer: {
        display: 'flex',
        gap: 20,
    },
    title: {
        fontWeight: 'bold !important',
        marginBottom: '30px !important',
    },
    breadcrumbs: {
        marginBottom: 30
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const Mentor = () => {
    const classes = useStyles();

    return (
        <div className={classes.coursesPageContainer}>
            <div className={classes.breadcrumbs}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small"/>}
                    aria-label="breadcrumb"
                >
                    <Link className={classes.iconContainer}
                          underline="hover" to="/">
                        <HomeIcon/>
                    </Link>
                    <Link underline="hover" to="">
                        Наставник
                    </Link>

                </Breadcrumbs>
            </div>
            <Typography className={classes.title} variant="h4">
                Вводные курсы
            </Typography>
            <div className={classes.coursesContainer}>
                {courseCardData.map((card) => (
                    <CourseCard text={card.text} link={card.link} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
