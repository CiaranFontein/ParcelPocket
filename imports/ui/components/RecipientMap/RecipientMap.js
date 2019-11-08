import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { Component, Fragment } from "react";
import Recipient from "../Recipient";
import Loading from "../Loading";
const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;

class RecipientMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
  }

  onMarkerClick = (props, marker) => {
    return this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
      selectedUser: marker.user
    });
  };

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  addOrder = () => {
    Meteor.call("orders.addOrder", currentUserId, recipient._id, transitValue);
  };

  //const directionsService = new google.maps.DirectionsService();
  render() {
    const { user, google, recipients, transitValue } = this.props;
    if (!this.props.loaded) return <Loading />;
    return (
      <Fragment>
        <Map google={google} zoom={15} initialCenter={user.profile.location}>
          {recipients.map((recipient, index) => {
            return (
              <Marker
                key={index}
                position={recipient.profile.location}
                onClick={this.onMarkerClick}
                name={recipient.profile.firstName}
                user={recipient}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
            onClick={this.addOrder}
          >
            <Recipient recipient={this.state.selectedUser} />
          </InfoWindow>
        </Map>
      </Fragment>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: API_KEY
}))(RecipientMap);
