'use client'

import Image from "next/image";
import { imageLoader } from "./loader";

interface TileImage {
  id: number;
  alt: string;
  url: string;
}

interface TileUrl {
  id: number;
  prefix: string;
  label: string;
  url: string;
}

interface TileProps {
  title: string;
  images: TileImage[];
  description: string;
  links: TileUrl[];
}

export const Tile = ({ title, images, description, links }: TileProps) => (
  <div className="text-left text-sm p-6 sm:p-10 md:text-base md:p-12 lg:p-14 rounded bg-white dark:bg-gray-800 border-4 border-gray-500 border-opacity-10 dark:border-opacity-10 shadow-lg shadow-gray-900 transition-all ease-in duration-300 hover:shadow-blue-500">
    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 dark:text-blue-600">
      {title}
    </h3>
    {images.map((image) => (
      <div className="w-full aspect-square flex items-center">
        <Image
          width={300}
          height={300}
          key={image.id}
          className="my-4 w-full h-auto rounded"
          loader={imageLoader}
          src={image.url}
          alt={image.alt}
        />
      </div>
    ))}
    <p>{description}</p>
    <ul className="list-none pl-0">
      {links.map((link) => (
        <li key={link.id}>
          {link.prefix}
          <a
            className="text-blue-700"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
