import { type StaticImageData } from "next/image";

interface Picture {
  id: number;
  alt: string;
  url: StaticImageData;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  demoLink: string;
  codeLink: string;
  images: Picture[];
}
