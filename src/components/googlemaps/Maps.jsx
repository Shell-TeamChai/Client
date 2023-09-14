import React, { Component } from 'react';
import { Map, GoogleApiWrapper, DirectionsRenderer, Marker } from 'google-maps-react';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: null,
      places: [],
      origin: 'San Francisco, CA', // Replace with your origin address or coordinates
      destination: 'Los Angeles, CA', // Replace with your destination address or coordinates
    };
  }

  componentDidMount() {
    // Get directions and nearby places when the component mounts
    this.getDirections();
    this.searchPlaces();
  }

  getDirections() {
    const { google } = this.props;
    const directionsService = new google.maps.DirectionsService();

    const { origin, destination } = this.state;

    const request = {
      origin,
      destination,
      travelMode: 'DRIVING', // You can change the travel mode (e.g., DRIVING, WALKING, TRANSIT, etc.)
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`Error fetching directions: ${status}`);
      }
    });
  }

  searchPlaces() {
    const { google } = this.props;
    const placesService = new google.maps.places.PlacesService(document.createElement('div'));

    const request = {
      location: { lat: 37.7749, lng: -122.4194 }, // Replace with your search location coordinates
      radius: 5000, // Search radius in meters
      query: 'restaurant', // Example query, replace with your own
    };

    placesService.textSearch(request, (results, status) => {
      if (status === 'OK') {
        this.setState({
          places: results,
        });
      } else {
        console.error(`Error searching places: ${status}`);
      }
    });
  }

  render() {
    const { google } = this.props;
    const { directions, places } = this.state;

    return (
      <div>
        <Map
          google={google}
          zoom={14} // Adjust the initial zoom level as needed
          initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Set the initial center of the map
        >
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  strokeColor: 'blue', // Adjust the line color as needed
                },
              }}
            />
          )}

          {places.map((place, index) => (
            <Marker
              key={index}
              position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}
              name={place.name}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyA2F1P2hJ7jYKA0Zx-E4LP3zAkW917BnUg"), 
})(Maps);
