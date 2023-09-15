import React, { useRef, useState, useEffect } from 'react';
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
 
  const [feedbacks, setFeedbacks] = useState([]);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5128/api/Feedbacks/')
    .then((response) => {
      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      setFeedbacks(data);
      // setData(data); // Update the data state with fetched data
      // setLoading(false); // Set loading to false
    })
    .catch((error) => {
      console.log(error);
      // setError(error); // Set error state if there's an error
      // setLoading(false); // Set loading to false
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5128/api/StationInfo/all')
    .then((response) => {
      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      setStations(data);
      // setData(data); // Update the data state with fetched data
      // setLoading(false); // Set loading to false
    })
    .catch((error) => {
      console.log(error);
      // setError(error); // Set error state if there's an error
      // setLoading(false); // Set loading to false
    });
  }, []);


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

        {
          feedbacks.map((item, index) => (
            <SwiperSlide style={{backgroundColor: '#ffcc00', display: 'flex', flexDirection: 'column'}}>
            {/* <Avatar alt={`${item.user.fname} ${item.user.lname}`} src={Bleh} sx={{ width: 56, height: 56 }} /> */}
              <Typography variant='body1'>
               {item.user.fname} {item.user.lname}
              </Typography>
              <Rating name="read-only" value={item.rating} readOnly style={{marginTop: '1vh'}} />
              <Typography variant='body2' style={{width: '40vw', marginTop: '2vh'}}>
                {item.description}
              </Typography>
            </SwiperSlide>        
          ))
        }

        <SwiperSlide style={{backgroundColor: '#ffcc00', display: 'flex', flexDirection: 'column'}}>
        <Avatar alt="Priya Aggarwal" src={Prabal} sx={{ width: 56, height: 56 }} />
        <Typography variant='body1'>Prabal Gautam</Typography>
        <Rating name="read-only" value={3} readOnly style={{marginTop: '1vh'}} />
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
