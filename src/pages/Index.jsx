import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dummy data for buildings in Oslo
const buildings = [
  { id: 1, name: 'Building 1', lat: 59.9139, lng: 10.7522, info: 'Sensor data 1' },
  { id: 2, name: 'Building 2', lat: 59.9149, lng: 10.7522, info: 'Sensor data 2' },
  { id: 3, name: 'Building 3', lat: 59.9159, lng: 10.7522, info: 'Sensor data 3' },
  { id: 4, name: 'Building 4', lat: 59.9169, lng: 10.7522, info: 'Sensor data 4' },
  { id: 5, name: 'Building 5', lat: 59.9179, lng: 10.7522, info: 'Sensor data 5' },
  { id: 6, name: 'Building 6', lat: 59.9189, lng: 10.7522, info: 'Sensor data 6' },
  { id: 7, name: 'Building 7', lat: 59.9199, lng: 10.7522, info: 'Sensor data 7' },
  { id: 8, name: 'Building 8', lat: 59.9209, lng: 10.7522, info: 'Sensor data 8' },
  { id: 9, name: 'Building 9', lat: 59.9219, lng: 10.7522, info: 'Sensor data 9' },
  { id: 10, name: 'Building 10', lat: 59.9229, lng: 10.7522, info: 'Sensor data 10' },
];

// Custom pin icon
const pinIcon = new L.Icon({
  iconUrl: require('../assets/pin-icon.png'),
  iconRetinaUrl: require('../assets/pin-icon.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

const Index = () => {
  return (
    <Box height="100vh" width="100vw">
      <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map(building => (
          <Marker key={building.id} position={[building.lat, building.lng]} icon={pinIcon}>
            <Popup>{building.name}<br/>{building.info}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Index;