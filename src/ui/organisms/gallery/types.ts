interface Picture {
  id: number;
  alt: string;
  url: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  demoLink: string;
  codeLink: string;
  images: Picture[];
}
