import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet'
import { mapPubToken, mapToken, workingMapToken } from '../config';
// import MarkerClusterGroup from 'react-leaflet-markercluster';

export default class Mapper extends Component {
	state = {
		lat: 36.1627,
		lng: -86.7816,
        zoom: 13,
        pins: [
            {
              "address": "default search term",
              "latitude": 36.1278266,
              "longitude": -86.7816,
              "playlistId": 1,
              "id": 1
            },
            {
              "address": "default search term",
              "latitude": 36.1278277,
              "longitude": -86.7855,
              "playlistId": 2,
              "id": 2
            },
            {
              "address": "default search term",
              "latitude": 36.127834899999976,
              "longitude": -86.7713,
              "playlistId": 3,
              "id": 3
            },
            {
              "address": "default search term",
              "latitude": 36.1278352,
              "longitude": -86.7834,
              "playlistId": 4,
              "id": 4
            }
          ]
    };

    componentDidMount() {

        // const map = this.leafletMap.leafletElement;
        // const geocoder = L.Control.Geocoder.mapbox(mapToken);
        //     let marker;
        // map.on('click', e => {
        //         geocoder.reverse(
        //             e.latlng,
        //             map.options.crs.scale(map.getZoom()),
        //             results => {
        //                 var r = results[0];
        //                 console.log('reverse geocode results', r);
        //                 if (r) {
        //                     if (marker) {
        //                         marker
        //                             .setLatLng(r.center)
        //                             .setPopupContent(r.html || r.name);
        //                         // .openPopup();
        //                     } else {
        //                         marker = L.marker(r.center)
        //                             .bindTooltip(r.name, { className: 'toolTip' })
        //                             .addTo(map)
        //                             //.on('click', e => this.storeGeocode(e, r));
        //                             .on('dragend', function(e) {
        //                                 console.log(marker.getLatLng().lat);
        //                                 console.log(marker.getLatLng().lng);
        //                             });
        //                         // .openPopup();
        //                     }
        //                 }
        //             }
        //         );
        //     });
    }
	render() {

        let markers = []
        this.state.pins.forEach(obj => {
            let coord = [obj.latitude, obj.longitude];
            markers.push(coord)
        })

        const Atoken = `https://api.mapbox.com/styles/v1/taylorhcarroll/ck6cq9fd659n21inw1ctdgf3z/wmts?access_token=${mapPubToken}`;
        const position = [this.state.lat, this.state.lng];
		return (
			<Map
				style={{ height: "100vh" }}
				center={position}
				zoom={this.state.zoom}
				maxZoom={18}
                className='map'
                ref={m => {this.leafletMap = m;}}
			>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					// url={`https://api.mapbox.com/styles/v1/taylorhcarroll/ck6cq9fd659n21inw1ctdgf3z/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGF5bG9yaGNhcnJvbGwiLCJhIjoiY2s2Y250eThiMTRxODNsbjNkanFnNWc0YyJ9.DMDxcG7yJzN_7H-Lvk2bAA`}
                    url={`https://api.mapbox.com/styles/v1/taylorhcarroll/ck6cq9fd659n21inw1ctdgf3z/tiles/256/{z}/{x}/{y}@2x?access_token=${workingMapToken}`}
                />
				 	 {this.state.pins.map(pin => (
						<Marker
							key={pin.id}
							position={[pin.latitude, pin.longitude]}
							anchor='bottom'
							// onMouseEnter={this.onMarkerClick.bind(this, pin)}
							// onMouseLeave={this.onMarkerLeave}
						>
							<Tooltip>{pin.address}</Tooltip>
						</Marker>
					))}}
			</Map>
		);
	}
}



// {/* <MarkerClusterGroup> */}
// 					// { {this.props.props.map(location => (
// 					// 	<Marker
// 					// 		key={location.id}
// 					// 		position={[location.lat, location.lng]}
// 					// 		anchor='bottom'
// 					// 		onMouseEnter={this.onMarkerClick.bind(this, location)}
// 					// 		onMouseLeave={this.onMarkerLeave}
// 					// 	>
// 					// 		<Tooltip>{location.name}</Tooltip>
// 					// 	</Marker>
// 					// ))}}
// 				{/* </MarkerClusterGroup> */}