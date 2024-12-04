import React from 'react';
import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, {DivIcon, LatLngExpression} from 'leaflet';
import {Room} from '@mui/icons-material';
import ReactDOMServer from 'react-dom/server';

const createCustomIcon = (): DivIcon => {
    return L.divIcon({
        html: ReactDOMServer.renderToStaticMarkup(
            <Room style={{ color: 'red', fontSize: '32px' }} />
        ),
        className: '',
        iconSize: [40, 40],
        iconAnchor: [16, 32],
    });
};

const Map: React.FC = () => {
    const customIcon = createCustomIcon();

    const caveLocation:LatLngExpression = [49.1564152, 0.2225418];

    return (
        <MapContainer
            center={caveLocation}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={caveLocation} icon={customIcon} />
        </MapContainer>
    );
};

export default Map;
