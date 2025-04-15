"use client";

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  useEffect(() => {
    // Fix Leaflet icon issues
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.webp',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.webp',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.webp',
    });
  }, []);

  return (
    <MapContainer
      center={[-20.816802, -49.401501]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.webp"
      />
      <Marker position={[-20.816802, -49.401501]}>
        <Popup>
          <strong>Nardini Advogados</strong>
          <br />
          Rua Carmelino Gonçalves Condessa, 166
          <br />
          Sala 01 - Jardim Alto Rio Preto
        </Popup>
      </Marker>
    </MapContainer>
  );
}