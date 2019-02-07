import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import {  withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class Map extends Component {

  render(){
    let { lat, lng } = this.props.center
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat, lng }}
        >
      </GoogleMap>
    )
  }
}


export default compose(
  withProps({
    googleMapURL:`https://maps.googleapis.com/maps/api/js?&key=${API_KEY}&v=3.exp&libraries=geometry`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width:'80vw', height: `90vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap)(Map)
