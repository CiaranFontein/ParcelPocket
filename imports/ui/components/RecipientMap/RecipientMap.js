import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React, { Component, Fragment } from "react";

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

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  //const directionsService = new google.maps.DirectionsService();
  render() {
    const { user, google, recipients } = this.props;
    return (
      <Fragment>
        <Map google={google} zoom={15} initialCenter={user.profile.location}>
          {recipients.map((recipient, index) => {
            return (
              <Marker
                key={index}
                position={recipient.profile.location}
                onClick={this.onMarkerClick}
                name={"Kenyatta International Convention Centre"}
              >
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
                >
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                  </div>
                </InfoWindow>
              </Marker>
            );
          })}
        </Map>
      </Fragment>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: API_KEY
}))(RecipientMap);
