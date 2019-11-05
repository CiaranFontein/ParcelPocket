import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";

const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;
function addressStringtoURLSnippet(string) {
  return string
    .split(" ")
    .join("+")
    .split(",")
    .join("+");
}
class RecipientMap extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, placeURL: "" };
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.currentUser) {
  //     console.log(prevProps.currentUser._id !== this.props.currentUser._id);
  //     if (!(prevProps.currentUser._id !== this.props.currentUser._id)) {
  //       console.log(this.props.currentUser.profile.address);
  //       this.setState({
  //         placeURL: this.props.currentUser.profile.address
  //       });
  //       this.getPlaces();
  //       return true;
  //     }
  //   }
  // }

  componentDidMount() {
    this.getPlaces();
  }

  getPlaces = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/
    json?query=${this.props.currentUser.profile.address}&key=${API_KEY}`;

    try {
      console.log("getting places");
      const response = await fetch(proxyurl + url, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
      this.setState({ data: await response.json() });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state);
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 40.756795, lng: -73.954298 };
    const destination = { lat: 41.756795, lng: -78.954298 };
    const redAcademyPlaceId = "ChIJrTLr-GyuEmsRBfy61i59si0";

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return this.state.data ? (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={this.state.data.results[0].geometry.location}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    ) : (
      "Fetching Map Data"
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(RecipientMap);
