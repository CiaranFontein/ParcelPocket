import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component, Fragment } from "react";

const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;
function addressStringtoURLSnippet(string) {
  return string
    .split(" ")
    .join("+")
    .split(",")
    .join("+");
}
const RecipientMap = ({ user, props, users }) => {
  loadMap = data => {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={data.results[0].geometry.location}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    );
  };
  //const directionsService = new google.maps.DirectionsService();
  // const origin = { lat: 40.756795, lng: -73.954298 };
  // const destination = { lat: 41.756795, lng: -78.954298 };
  // const redAcademyPlaceId = "ChIJrTLr-GyuEmsRBfy61i59si0";
  return (
    <Fragment>{loading ? "Loading Placeholder" : this.loadMap(data)}</Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: API_KEY
})(RecipientMap);
