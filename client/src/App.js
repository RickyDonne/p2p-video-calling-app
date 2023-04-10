import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">P2P Video Calling App</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h5" align="center">Group 15
          <ul>
            <li>Shubra Rudrapal - 27600119068</li>
            <li>Debarshi Biswas - 27600119051</li>
          </ul>
          <ul>
            <li>Sejal Chourasia - 27600119067</li>
            <li>Subhanjana Majumdar - 27600119056</li>
          </ul>
        </Typography>
      </AppBar>
    </div>
  );
};

export default App;
