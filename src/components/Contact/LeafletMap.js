import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const LeafletMap = () => {
    return (
        <MapContainer center={[50.2599, 28.6743]} zoom={13} scrollWheelZoom={false} style={{ height: '42.5rem'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default LeafletMap;
