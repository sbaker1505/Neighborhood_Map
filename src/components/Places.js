import React, { Component } from 'react';

export default class Places extends Component {
  render(){
    return (
      <div className="places">
        <ol>
          {this.props.venues.length > 0
            ? this.props.venues.map(place =>
              <li
                key={place.venue.id}
                alt={place.venue.name}
                tabIndex={0}
                className={this.props.selectedMarker === place.venue.id ? 'selected' : null}
                onClick={() => this.props.onSelectMarker(place.venue.id)}
                >
                  {place.venue.name}
                  {(this.props.selectedMarker === place.venue.id)
                    && (place.venue.location.address
                      || place.venue.contact.formattedPhone
                      || place.venue.rating)
                    ? <div className="location-info">
                        <p>{place.venue.location.address}</p>
                        <p>{place.venue.contact.formattedPhone
                          ? `T: ${place.venue.contact.formattedPhone}`
                          : null}</p>
                        <p>{place.venue.rating
                          ? `Rating: ${place.venue.rating}`
                          : null}</p>
                      </div>
                    : null}
                </li>
              )
            : <li alt="No Results Found">No Results Found</li>
          }
        </ol>
      </div>
    )
  }
}
