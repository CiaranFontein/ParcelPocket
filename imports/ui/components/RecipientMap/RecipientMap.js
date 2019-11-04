import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";

const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;

console.log(process.env);

const RecipientMap = props => {
  return (
    <Map
      google={props.google}
      zoom={8}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      <Marker position={{ lat: 48.0, lng: -122.0 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: API_KEY
})(RecipientMap);
