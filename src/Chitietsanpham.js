import React from "react";
// Chitietsanpham.js
import { scenicSpots } from './models/product';

// ví dụ nhận id từ props
export default function Chitietsanpham({ id }) {
  const spot = scenicSpots.find(s => s.id === id);

  if (!spot) return <div>Không tìm thấy địa điểm</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{spot.name}</h1>
      <img
        src={spot.image_url}
        alt={spot.name}
        style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
      />
      <h3>Vị trí: {spot.location}</h3>
      <p>{spot.description}</p>
    </div>
  );
}
