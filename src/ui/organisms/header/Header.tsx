import { ReactNode } from 'react';

// import photo from './portrait.webp';
import { EnvelopeIcon } from './EnvelopeIcon';
import { Caption, Link } from '../../atoms';

interface HeaderProps {
  name: string;
  description: string;
  Portrait: ReactNode;
}

export const Header = ({
  name,
  description,
  Portrait,
}: HeaderProps) => (
  <header className="grid grid-cols-1 gap-0 md:grid-cols-[auto_1fr] items-center md:gap-16 mt-[-30px]">
    <div>
      {/* <img className="min-w-32 w-1/2 md:w-96" src={photo} alt="portrait" /> */}
      {Portrait}
    </div>
    <div>
      <Caption>THIS IS:</Caption>
      <h1 className="block text-2xl md:text-3xl lg:text-4xl font-black text-left mt-3 mb-9">
        {name}
      </h1>
      <p className="mb-8">{description}</p>
      <Link href="#contact">
        <div className="w-6 h-5 mr-3 sm:mr-4 md:mr-5 sm:scale-110 md:scale-125">
          <EnvelopeIcon />
        </div>
        Contact
      </Link>
    </div>
  </header>
);
