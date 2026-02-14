import React from "react";
import { useState, useEffect } from "react";
import bubsbirthday from "../assets/bubsbirthday.jpg";
import gradparty from "../assets/gradparty.jpeg";
import holidayparty from "../assets/holidayparty.jpg";
import krispykreme from "../assets/krispykreme.jpeg";
import mirror from "../assets/mirror.jpeg";
import painting from "../assets/painting.jpg";
import peace from "../assets/peace.jpg";
import pumpkinpatch from "../assets/pumpkinpatch.jpg";
import rainbow from "../assets/rainbow.jpg";
import stare from "../assets/stare.jpg";
import train from "../assets/train.jpg";
import wedding from "../assets/wedding.jpg";
import tree from "../assets/tree.jpg";

interface Heart {
    id: number;
    left: number;
    animationDuration: number;
    size: number;
}

const PhotoCarousel: React.FC = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [hearts, setHearts] = useState<Heart[]>([]);
    
    // array of photos for carousel
    const photos: string[] = [
        bubsbirthday, gradparty, holidayparty, krispykreme, mirror, painting, peace, pumpkinpatch, rainbow, stare, train, wedding, tree
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart: Heart = {
                id: Date.now() + Math.random(),
                left: Math.random() * 100,
                animationDuration: 3 + Math.random() * 2,
                size: 20 + Math.random() * 20
            }
            
            setHearts(prev => [...prev, newHeart])
            
            // Remove heart after animation completes
            setTimeout(() => {
                setHearts(prev => prev.filter(h => h.id !== newHeart.id))
            }, 5000)
        }, 300)

        return () => clearInterval(interval)
    }, [])

const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
    }

const prevPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
    }

    return (
        <div>
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="absolute text-red-500 pointer-events-none"
                    style={{
                        left: `${heart.left}%`,
                        top: '-50px',
                        fontSize: `${heart.size}px`,
                        animation: `fall ${heart.animationDuration}s linear forwards`,
                    }}
                >
                    ❤️
                </div>
            ))}

            <h2 className="text-2xl font-bold text-center text-purple-400 mb-2 z-10 mt-8">
                I love you way more than words could ever explain....
            </h2>
            <h1 className="text-xl font-bold text-center text-purple-400 mb-4 animate-bounce z-10">
                So I'll use pictures instead!
            </h1>

            <div className="relative w-full max-w-lg z-10">
                <div className="bg-white p-3 rounded-lg shadow-xl">
                    <img
                        src={photos[currentPhotoIndex]}
                        alt={`Memory ${currentPhotoIndex + 1}`}
                        className="w-full h-64 object-contain rounded bg-gray-50"
                    />
                </div>

                <button
                    onClick={prevPhoto}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-red-500 font-bold p-3 rounded-full shadow-lg transition-all hover:scale-110 z-20"
                >
                    ←
                </button>
                <button
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-red-500 font-bold p-3 rounded-full shadow-lg transition-all hover:scale-110 z-20"
                >
                    →
                </button>

                <div className="text-center mt-4 text-gray-700 font-medium">
                    {currentPhotoIndex + 1} / {photos.length}
                </div>
            </div>

            <style>{`
                @keyframes fall {
                    to {
                        transform: translateY(600px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default PhotoCarousel;