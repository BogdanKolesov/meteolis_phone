import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import mapStyle from './mapStyle.json'

export default function MeteoMap() {
    return (
        <MapContainer>
            <StyledMapView
                customMapStyle={mapStyle}
                initialRegion={{
                    latitude: 60,
                    longitude: 30,
                    latitudeDelta: 2,
                    longitudeDelta: 2,
                }}
            />
        </MapContainer>
    );
}


const MapContainer = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`

const StyledMapView = styled(MapView)`
    width: 100%;
    height: 100%;
`