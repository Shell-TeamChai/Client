import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import { Grid, Typography } from '@mui/material';

export class Maps extends React.Component {
  render() {
    return (
      <Grid container justify='center' style={{justifyContent: 'center', marginTop: '20vh', marginBottom: '5vh'}}>
        <Grid item lg={12} md={12}>
        <Typography variant='h5' style={{textAlign: 'center'}}>Search station</Typography>
        <Map google={this.props.google} zoom={14} style={{height: '80vh'}}>
 
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
        </Grid>
      </Grid>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA2F1P2hJ7jYKA0Zx-E4LP3zAkW917BnUg")
})(Maps)