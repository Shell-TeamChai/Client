import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';

const preSelectedPlaces = [
  {
    name: 'Place A',
    lat: 33.441740,
    lng: -112.099480
  },
  // {
  //   name: 'Place B',
  //   lat: 37.7833,
  //   lng: -122.4167,
  // }
];

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      directionsService: null,
      directionsRenderer: null,
      placesService: null,
      places: [],
      selectedPlaces: preSelectedPlaces,
      origin: '',
      destination: '',
      currentLocationMarker: null
    };
  }

  componentDidMount() {
    const { google } = window;

    // Create a new map
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
      zoom: 14, // Default zoom level
    });

    this.setState({ map }, () => {
      this.renderSelectedPlacesMarkers(); // Render pre-selected locations as markers
    });

    // Create directions service and renderer
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(map);

    // Set up the map click event listener
    map.addListener('click', this.handleMapClick);

    // Create places service
    const placesService = new google.maps.places.PlacesService(map);

    this.setState({
      map,
      directionsService,
      directionsRenderer,
      placesService,
    });

    if ('geolocation' in navigator) {
      this.getCurrentLocation();
      // this.renderSelectedPlacesMarkers();
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }

  handleMapClick = (event) => {
    const { google } = window;
    const { directionsService, map } = this.state;
  
    if (google) {
      const destinationLatLng = event.latLng;
      this.setState(
        {
          destination: destinationLatLng,
        },
        () => {
          this.calculateAndDisplayDirections();
        }
      );
      new google.maps.Marker({
        map,
        position: destinationLatLng,
      });
    }
  };

  calculateAndDisplayDirections = () => {
    const { directionsService, directionsRenderer, origin, destination } = this.state;
  
    if (!origin || !destination) {
      console.error('Origin or destination is missing.');
      return;
    }
  
    const request = {
      origin,
      destination,
      travelMode: 'DRIVING', // You can change this based on your needs
    };
  
    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        console.error('Directions request failed:', status);
    }
  });
};

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({
          origin: `${latitude},${longitude}`,
        });
        this.showCurrentLocationMarker(latitude, longitude);
        const latlng = new window.google.maps.LatLng(latitude, longitude);
        this.reverseGeocode(latlng, 'origin');
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  };

  showCurrentLocationMarker(latitude, longitude) {
    const { map } = this.state;

    if (this.currentLocationMarker) {
      // If marker exists, update its position
      this.currentLocationMarker.setPosition({ lat: latitude, lng: longitude });
    } else {
      // Create a new marker for current location
      this.currentLocationMarker = new window.google.maps.Marker({
        map,
        position: { lat: latitude, lng: longitude },
        title: 'Current Location',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Marker icon
        },
      });
    }
    map.setCenter({ lat: latitude, lng: longitude });
  }

  reverseGeocode(latlng, locationType) {
    const { google } = window;
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        // Find the city component in the results
        let cityName = '';
        for (const component of results[0].address_components) {
          if (component.types.includes('locality')) {
            cityName = component.long_name;
            break;
          }
        }

        if (cityName) {
          this.setState({
            [locationType]: cityName,
          });
        } else {
          console.error(`City name not found for ${locationType}.`);
        }
      } else {
        console.error(`Reverse geocode error for ${locationType}: ${status}`);
      }
    });
  }

  addSelectedPlace = (place) => {
    this.setState((prevState) => ({
      selectedPlaces: [...prevState.selectedPlaces, place],
    }));
  };

  renderSelectedPlacesMarkers = () => {
    const { map, selectedPlaces } = this.state;

    selectedPlaces.forEach((place) => {
      const marker = new window.google.maps.Marker({
        map,
        position: { lat: place.lat, lng: place.lng },
        title: place.name,
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // Custom marker icon for selected places
        },
      });
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDirectionsSubmit = () => {
    this.getDirections();
    this.searchPlaces();
  };

  getDirections() {
    const { directionsService, directionsRenderer, origin, destination, map } = this.state;
  
    const request = {
      origin,
      destination,
      travelMode: 'DRIVING',
    };
  
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
        directionsRenderer.setMap(map);
      } else {
        console.error(`Error fetching directions: ${status}`);
      }
    });
  }  

  searchPlaces() {
    const { placesService, map, destination } = this.state;

    const request = {
      location: destination,
      radius: 500, // Search radius in meters
      query: 'restaurant', // Example query, replace with your own
    };

    placesService.textSearch(request, (results, status) => {
      if (status === 'OK') {
        this.setState({
          places: results,
        });

        results.forEach((place) => {
          const marker = new window.google.maps.Marker({
            map,
            position: place.geometry.location,
            title: place.name,
          });
        });
      } else {
        console.error(`Error searching places: ${status}`);
      }
    });
  }

  render() {
    const { origin, destination } = this.state;

    return (
     <Grid container lg={12} md={12} style={{marginTop: '15vh'}}>
      <Grid item lg={12} md={12}>
      {/* <div>
      <Typography variant='h6' style={{textAlign: 'center'}}>Search station</Typography>
        <div>
          <input
            type="text"
            name="origin"
            placeholder="Enter origin"
            value={origin}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="Enter destination"
            value={destination}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleDirectionsSubmit}>Get Directions</button>
        </div>
        <div id="map" style={{ height: '75vh', width: '100%' }} />
        <div>
          <h2>Places</h2>
          <ul>
            {this.state.places.map((place) => (
              <li key={place.place_id}>{place.name}</li>
            ))}
          </ul>
        </div>
      </div> */}
      <div>
      <Typography variant='h6' style={{textAlign: 'center'}}>Search station</Typography>
      <div>
        <input
          type="text"
          name="origin"
          placeholder="Enter origin"
          value={origin}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="destination"
          placeholder="Enter destination"
          value={destination}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleDirectionsSubmit}>Get Directions</button>
        <button onClick={this.getCurrentLocation}>Use Current Location</button>
      </div>
      <div id="map" style={{ height: '85vh', width: '100%' }} />
      <div>
        <h2>Places</h2>
        <ul>
          {this.state.places.map((place) => (
            <li key={place.place_id}>{place.name}</li>
          ))}
        </ul>
      </div>
    </div>
      </Grid>
     </Grid>
    );
  }
}

export default MapComponent;
