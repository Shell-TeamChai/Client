import React from 'react'
import Navbar from '../components/nav/Navbar'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <hr style={{ backgroundColor: 'white', margin: 0, color: 'black' }} />
            <div style={{ backgroundColor: '#ffcc00', fontFamily: 'sitka-text' }}>
                <div className='w3-row' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{fontFamily:'fantasy'}}>About Team</h1>
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
            </div>
        </>
    )
}
export default ContactUs;