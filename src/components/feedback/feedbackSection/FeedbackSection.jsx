import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Grid, Avatar, Typography, Rating } from '@mui/material';
import Profile from '../../../assets/narayan.jpeg';
import Vlogger from '../../../assets/vlogger.jpg';
import Prabal from '../../../assets/prabal.jpeg';
import Bleh from '../../../assets/bleh.jpeg';
import Sarthak from '../../../assets/Sarthak.jpeg';

export default function App() {
  return (
    <>
      <Grid container lg={12} md={12} style={{marginTop: '15vh', minHeight: '60vh', width: '100vw'}}>
        <Grid item lg={12} md={12}>
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{backgroundColor: '#ffcc00', display: 'flex', flexDirection: 'column'}}>
        <Avatar alt="Priya Aggarwal" src={Bleh} sx={{ width: 56, height: 56 }} />
        <Typography variant='body1'>Priya Aggarwal</Typography>
        <Rating name="read-only" value={4} readOnly style={{marginTop: '1vh'}} />
        <Typography variant='body2' style={{width: '40vw', marginTop: '2vh'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#ffcc00', display: 'flex', flexDirection: 'column'}}>
        <Avatar alt="Prabal Gautam" src={Prabal} sx={{ width: 56, height: 56 }} />
        <Typography variant='body1'>Prabal Gautam</Typography>
        <Rating name="read-only" value={3} readOnly style={{marginTop: '1vh'}} />
        <Typography variant='body2' style={{width: '40vw', marginTop: '2vh'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#ffcc00', display: 'flex', flexDirection: 'column'}}>
        <Avatar alt="Naman Jain" src={Vlogger} sx={{ width: 56, height: 56 }} />
        <Typography variant='body1'>Naman Jain</Typography>
        <Rating name="read-only" value={4.5} readOnly style={{marginTop: '1vh'}} />
        <Typography variant='body2' style={{width: '40vw', marginTop: '2vh'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
        </SwiperSlide>
      </Swiper>
        </Grid>
      </Grid>
    </>
  );
}
