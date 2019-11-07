import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component, Fragment } from "react";

const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;

const RecipientMap = ({ user, google, recipients }) => {
  console.log(user);
  console.log(recipients);
  //const directionsService = new google.maps.DirectionsService();
  return (
    <Fragment>
      <Map google={google} zoom={15} initialCenter={user.profile.location}>
        {recipients.map((recipient, index) => {
          return <Marker key={index} position={recipient.profile.location} />;
        })}
      </Map>
    </Fragment>
  );
};

export default GoogleApiWrapper(props => ({
  apiKey: API_KEY
}))(RecipientMap);
