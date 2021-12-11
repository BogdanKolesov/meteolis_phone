import * as React from 'react';
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import mapStyle from './mapStyle.json'
// import { stations } from '../../../data/MeteoMapData/stations'

export default function MeteoMap() {
    // const stationsJS = JSON.parse(stations)
    // console.log(stationsJS)

    const stationsJS = [
        {
            index: 1001,
            title: "Jan Mayen",
            lat: 70.9,
            lon: -8.7,
            height: '9',
            country: "Norway"
        }
    ]
    return (
        <MapContainer>
            <StyledMapView
                customMapStyle={mapStyle}
                initialRegion={{
                    latitude: 0,
                    longitude: 0,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.02,
                }}
            >
                {
                    stationsJS.map((data, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: data.lat,
                                longitude: data.lon
                            }}
                            title={data.title}
                            description={data.height}
                        />
                    ))
                }
            </StyledMapView>
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