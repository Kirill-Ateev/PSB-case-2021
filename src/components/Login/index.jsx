import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Dialog,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';

import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user';
import { connect } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'2021 © '}
      <Link color="inherit" href="#">
        Промсвязьбанк
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  grid: {
    flexDirection: 'column !important',
    alignItems: 'center ',
    marginTop: 15,
  },
  container: {
    minWidth: 400,
  },
}));

const LoginModal = ({ open, handleClose, userActions, login, user }) => {
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Dialog
        fullScreen={isFullScreen}
        transitionDuration={250}
        disableScrollLock={true}
        open={open}
        onClose={handleClose}
      >
        <SignIn handleLogin={userActions.login} />
      </Dialog>
    </>
  );
};

function mapStateToProps() {
  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

function SignIn({ handleLogin }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (email, password) => {
    handleLogin(email, password);
  };

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => handleClick(email, password)}
        >
          Sign In
        </Button>
        <Grid className={classes.grid} container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={2} mb={2}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
