import React from 'react'
import station from '../../assets/evstation.PNG';
import { Grid, Typography } from '@mui/material';

const LandingInfo = () => {
  return (
    <>
        <Grid container lg={12} md={12}>
            <img src={station} style={{height: '70vh', width: '100vw'}} />
            <div style={{top: '20vh', position: 'absolute', right: '10vw', textAlign: 'center'}}>
                <Typography variant='h5'>
                    Shell EV Management<br/> System
                </Typography>
                <Typography variant='body2' style={{width: '30vw'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </div>
        </Grid>
    </>
  )
}

export default LandingInfo;