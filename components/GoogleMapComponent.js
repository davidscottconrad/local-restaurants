import { useEffect, useState, useRef } from 'react';
import { LoadScript } from '@googlemaps/react-wrapper';
import { useJsApiLoader, GoogleMap, useLoadScript } from '@react-google-maps/api';

export default function GoogleMapComponent() {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS
    const mapId = 'dcb09a05f9482b41'

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: key,
        mapId: mapId
    })

    if (!isLoaded) {
        return <h1>MAP LOADING</h1>
    }
    // <GoogleMap center={center} zoom={15} mapContainerStyle={{ width: '100%', height: '100%' }}>

    // </GoogleMap>

    return <Map></Map>
}

function Map() {
    const center = { lat: 48.8584, lng: 2.2945 }

    return <GoogleMap mapId={mapId} center={center} zoom={15} mapContainerStyle={{ width: '100%', height: '100%' }}></GoogleMap>
}