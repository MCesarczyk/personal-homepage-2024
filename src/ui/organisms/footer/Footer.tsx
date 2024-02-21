import { ReactNode } from 'react';

import { Caption } from '../../atoms';

interface FooterProps {
  address: string;
  note: string;
  children: ReactNode[];
}

export const Footer = ({ address, children }: FooterProps) => (
  <div className="w-full md:w-1/2">
    <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
      <Caption>CONTACT:</Caption>
      <a
        className="my-3 mx-0 sm:my-4 md:my-5 lg:my-6 block font-black text-gray-900 dark:text-white transition-all duration-300 hover:text-blue-700"
        id="contact"
        href={`mailto:${address}`}
      >
        {address}
      </a>
    </div>
    <div className="flex">{children}</div>
  </div>
);
