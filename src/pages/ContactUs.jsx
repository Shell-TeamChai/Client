import React from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Profile from '../assets/narayan.jpeg';
import Vlogger from '../assets/vlogger.jpg';
import Prabal from '../assets/prabal.jpeg';
import Bleh from '../assets/bleh.jpeg';
import Sarthak from '../assets/Sarthak.jpeg';

import Navbar from '../components/nav/Navbar'

const ContactUs = () => {
    <script rel='stylesheet' src="https://www.w3schools.com/w3css/4/w3.css">
    </script>
    return (
        <>
            <Navbar />
            <hr style={{border:'5px solid black', backgroundColor: 'white', margin: '0%', color: 'black' }} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{padding:'5%', backgroundColor:'#FFE371'}}>
                <Grid item lg={4}>
                    
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius:'25px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Profile}
                                    alt="green iguana"
                                    style={{padding:'4%', width:'92%', borderRadius:'25px'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Aditya N Singh
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        SE
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    
                </Grid>
                <Grid item lg={4}>
                    
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius:'25px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Vlogger}
                                    alt="green iguana"
                                    style={{padding:'4%', width:'92%', borderRadius:'25px'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Naman Jain
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        SE
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    
                </Grid>
                <Grid item lg={4}>
                    
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius:'25px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Prabal}
                                    alt="green iguana"
                                    style={{padding:'4%', width:'92%', borderRadius:'25px'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Prabal Gautam
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        SE
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    
                </Grid>
                <Grid item lg={4}>
                    
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius:'25px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Bleh}
                                    alt="green iguana"
                                    style={{padding:'4%', width:'92%', borderRadius:'25px'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Priya Aggarwal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        SE
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    
                </Grid>
                <Grid item lg={4}>
                    
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius:'25px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Sarthak}
                                    alt="green iguana"
                                    style={{padding:'4%', width:'92%', borderRadius:'25px'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Sarthak Sangal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        SE
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    
                </Grid>
                
            </Grid>

            {/* <div style={{ backgroundColor: '#ffcc00', fontFamily: 'sitka-text' }}>

                <div className='w3-row' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ fontFamily: 'fantasy' }}>About Team</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='w3-col l8 w3-padding'>
                        <div className="w3-col l4 s4 w3-padding" >
                            <div class="w3-card w3-center w3-hover w3-row w3-round-xlarge w3-border" style={{ backgroundColor: 'white' }}>
                                <img className='w3-col w3-circle' src={"./th.jpg"} alt="" style={{ padding: '8%' }} />
                                <h4>Aditya N Singh</h4>
                                <p> <b> Designer</b> <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="w3-col l4 s4 w3-padding" >
                            <div class="w3-card w3-center w3-hover w3-row w3-round-xlarge w3-border" style={{ backgroundColor: 'white' }}>
                                <img className='w3-col w3-circle' src={"./th.jpg"} alt="" style={{ padding: '8%' }} />
                                <h4>Aditya N Singh</h4>
                                <p> <b> Designer</b> <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="w3-col l4 s4 w3-padding" >
                            <div class="w3-card w3-center w3-hover w3-row w3-round-xlarge w3-border" style={{ backgroundColor: 'white' }}>
                                <img className='w3-col w3-circle' src={"./th.jpg"} alt="" style={{ padding: '8%' }} />
                                <h4>Aditya N Singh</h4>
                                <p> <b> Designer</b> <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="w3-col l4 s4 w3-padding" >
                            <div class="w3-card w3-center w3-hover w3-row w3-round-xlarge w3-border" style={{ backgroundColor: 'white' }}>
                                <img className='w3-col w3-circle' src={"./th.jpg"} alt="" style={{ padding: '8%' }} />
                                <h4>Aditya N Singh</h4>
                                <p> <b> Designer</b> <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="w3-col l4 s4 w3-padding" >
                            <div class="w3-card w3-center w3-hover w3-row w3-round-xlarge w3-border" style={{ backgroundColor: 'white' }}>
                                <img className='w3-col w3-circle' src={"./th.jpg"} alt="" style={{ padding: '8%' }} />
                                <h4>Aditya N Singh</h4>
                                <p> <b> Designer</b> <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
        </>
    )
}
export default ContactUs;