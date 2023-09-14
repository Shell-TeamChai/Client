import React from 'react';
import { Grid, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <>
    <hr style={{width: '100vw', left: 0, bottom: 0, marginTop: '15vh'}} />
      <Grid container lg={12} md={12} justify='center' style={{justifyContent: 'center'}}>
        <Grid item lg={2} md={2}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div><TwitterIcon /></div>
          <div style={{marginLeft: '2vw'}}><InstagramIcon /></div>
          <div style={{marginLeft: '2vw'}}><FacebookIcon /></div>
          <div style={{marginLeft: '2vw'}}><LinkedInIcon /></div>
          <div style={{marginLeft: '2vw'}}><YouTubeIcon /></div>
          </div>
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} justify='center' style={{justifyContent: 'center', textAlign: 'center'}}>
        <Grid item lg={3} md={3}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <Typography variant='caption'>Terms & conditions</Typography>
          <Typography variant='caption' style={{marginLeft: '10vw'}}>Privacy policy</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} style={{textAlign: 'center'}}>
        <Grid item lg={12} md={12} style={{textAlign: 'center'}}>
          <Typography variant='caption'>
            Copyright <CopyrightIcon style={{fontSize: '10px'}} /> {(new Date().getFullYear())} Station Management System
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer