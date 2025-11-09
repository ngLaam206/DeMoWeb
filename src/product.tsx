// src/Product.tsx
import React, { useState } from "react";
import { scenicSpots, ScenicSpot } from "./models/product"; // đường dẫn đúng

export default function Product() {
    const [cart, setCart] = useState<ScenicSpot[]>([]);
    const [activeSpotId, setActiveSpotId] = useState<number | null>(null);

    const handleAddToCart = (spot: ScenicSpot) => {
        if (!cart.some((item) => item.id === spot.id)) {
            setCart([...cart, spot]);
        }
    };

    const handleRemoveFromCart = (id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
                🏝️ Danh sách địa điểm du lịch Việt Nam
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {scenicSpots.map((spot) => {
                    const booked = cart.some((item) => item.id === spot.id);
                    const isActive = activeSpotId === spot.id;

                    return (
                        <div
                            key={spot.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                            onClick={() => setActiveSpotId(isActive ? null : spot.id)}
                        >
                            <img
                                src={spot.image_url}
                                alt={spot.name}
                                className="w-full h-56 object-cover rounded-t-2xl"
                            />

                            {/* Giá luôn hiển thị */}
                            <p className="text-lg font-semibold text-green-600 text-center mt-2">
                                💰 Giá vé: {spot.price.toLocaleString()} VND
                            </p>

                            {/* Nội dung mở rộng khi click */}
                            {isActive && (
                                <div className="p-4">
                                    <h2 className="text-xl font-bold text-gray-800 mb-1">{spot.name}</h2>
                                    <p className="text-sm text-gray-500 mb-1">{spot.location}</p>
                                    <p className="text-sm text-gray-600 mb-3">{spot.description}</p>

                                    {booked ? (
                                        <button
                                            disabled
                                            className="w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed"
                                        >
                                            ✅ Đã đặt trong giỏ hàng
                                        </button>
                                    ) : (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // ngăn click ảnh khi bấm đặt vé
                                                handleAddToCart(spot);
                                            }}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                                        >
                                            🎫 Đặt vé ngay
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Giỏ hàng */}
            <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">🛍️ Giỏ hàng của bạn</h2>
                {cart.length === 0 ? (
                    <p className="text-gray-500">Chưa có vé nào được đặt.</p>
                ) : (
                    <ul className="space-y-3">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b pb-2">
                                <div>
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <p className="text-sm text-gray-500">{item.price.toLocaleString()} VND</p>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 text-sm"
                                >
                                    🗑️ Xóa vé
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <p className="text-right text-lg font-bold text-green-700 mt-4">
                        Tổng cộng: {total.toLocaleString()} VND
                    </p>
                )}
            </div>
        </div>
    );
}
