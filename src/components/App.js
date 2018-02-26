import React, { Component } from 'react';
import '../css/style.css'
import Map from './Map'
import Places from './Places'
import { getVenues } from '../util/fourSquareApi'

class App extends Component {
  state = {
    query: '',
    center: {
      lat: 37.332215,
      lng: -121.889638
    },
    markers: [],
    selectedMarker: '',
  }

  componentDidMount(){
    const { lat, lng } = this.state.center
    getVenues(lat, lng)
      .then(data => {
        console.log(data)
        this.setState({markers: data.response.groups[0].items})
      })
  }

  onSelectMarker = (id) => this.setState({selectedMarker: id})

  render() {
    const { center, markers, selectedMarker, query } = this.state
    const filteredMarkers = markers.filter(mark => mark.venue.name.toLowerCase().indexOf(query.toLowerCase()) > -1)

    return (
      <div className="app">
        <div className="header-container" role="banner">
          <h1>Things to do:</h1>
          <h2>San Jose, California</h2>
        </div>
        <div className="body-container">
          <div className='map'>
            <Map
              center={center}
              markers={filteredMarkers}
              onSelectMarker={(id) => this.onSelectMarker(id)}
              selectedMarker={selectedMarker}
            />
          </div>
          <div className="sidebar">
            <div className="search" role="search">
              <input
                type="text"
                placeholder="Filter Results"
                onChange={(event) => this.setState({query: event.target.value})}
              />
            </div>
            <Places
              venues={filteredMarkers}
              selectedMarker={selectedMarker}
              onSelectMarker={(id) => this.onSelectMarker(id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
