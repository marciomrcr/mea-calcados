"use client";

import Image from "next/image";
import React, { useState } from "react";

const images: string[] = [
  "/femininos/img1.webp",
  "/femininos/img2.webp",
  "/femininos/img3.webp",
  "/femininos/img4.webp",
];

export const Galeria: React.FC = () => {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col items-center bg-pink-950 p-16 space-y-2">
      <div className="w-full max-w-3xl">
        <Image
          src={mainImage}
          width={600}
          height={400}
          className="w-full h-[400px] object-cover rounded-2xl"
          alt="Main Image"
        />
      </div>
      <div className="grid grid-cols-4 max-w-2xl gap-4">
        {images.map((img, idx) => (
          <Image
            key={img}
            src={img}
            width={150}
            height={100}
            className="thumb rounded-xl md:h-20 h-12 object-cover cursor-pointer hover:opacity-80 transition-opacity"
            alt={`Thumb ${idx + 1}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};
