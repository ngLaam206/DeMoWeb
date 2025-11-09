import React from "react";
import { scenicSpots } from './models/product';

export default function Trang1() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách địa điểm du lịch Việt Nam</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {scenicSpots.map(spot => (
          <div
            key={spot.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "12px",
              width: "250px",
            }}
          >
            <img
              src={spot.image_url}
              alt={spot.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }}
            />
            <h3>{spot.name}</h3>
            <p>{spot.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
