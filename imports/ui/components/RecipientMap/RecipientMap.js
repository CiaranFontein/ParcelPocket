import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component, Fragment } from "react";

const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;

const RecipientMap = ({ location, google, recipients }) => {
  console.log(location);
  //const directionsService = new google.maps.DirectionsService();
  // const origin = { lat: 40.756795, lng: -73.954298 };
  // const destination = { lat: 41.756795, lng: -78.954298 };
  // const redAcademyPlaceId = "ChIJrTLr-GyuEmsRBfy61i59si0";
  return (
    <Fragment>
      <div>loading?</div>
      <Map google={google} zoom={15} initialCenter={location}>
        {recipients.map(recipient => {
          <Marker position={recipient.location} />;
        })}
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
      <div>loading?</div>
    </Fragment>
  );
};

export default GoogleApiWrapper(props => ({
  apiKey: API_KEY
}))(RecipientMap);
