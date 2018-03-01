import React, { Component } from 'react'
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

class Map extends Component {
  state ={
    redDot: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    blueDot: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  }

  onToggleOpen = () => this.setState({infoWindow: !this.state.infoWindow})

  render(){
    const { redDot, blueDot, selected } = this.state
    const mapContainer = <div style={{ height: '100%' }} />
    const mapElement = <div style={{ height: `100%` }} />
    const InitalMap = withGoogleMap(props =>
      <GoogleMap
        defaultZoom={window.visualViewport.width < 800 ? 14 : 15}
        defaultCenter={this.props.center}
        options={{
          streetViewControl: false,
          mapTypeControl: false
        }}>
        {this.props.markers.map(mark =>
          <Marker
            key={mark.venue.id}
            position={mark.venue.location}
            title={mark.venue.name}
            onClick={() => this.props.onSelectMarker(mark.venue.id)}
            icon={{
              url: this.props.selectedMarker === mark.venue.id ? blueDot : redDot
            }}
            zIndex={this.props.selectedMarker === mark.venue.id ? 99 : null}
          >
          </Marker>
        )}
      </GoogleMap>
    )

    if (InitalMap) {
      return (
        <InitalMap
          containerElement={mapContainer}
          mapElement={mapElement}
        />
      )
    }

    return (
      <div className="map-error">Google Maps has failed to load</div>
    )
  }
}

export default Map


function googleMapError() {
  return alert('Google Map has failed to load!')
}
