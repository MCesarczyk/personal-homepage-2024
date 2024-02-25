import Image from "next/image";
import { Header, Section, Footer, Thumbnail, footerThumbnails, Gallery, DownloadButton } from "@/ui";

import {
  ADDRESS,
  AUTHOR_DESCRIPTION,
  AUTHOR_NAME,
  FOOTER_NOTE,
  skills,
  learning,
  goals,
  portrait,
  ArrowUpIcon,
} from "@/assets";
import { sampleRepositories } from "@/app/repositories";
import { NextThemeSwitcher } from "./NextThemeSwitcher";

export default async function Index() {
  return (
    <div
      id="home"
      className="h-full py-12 px-2 md:px-4 max-w-5xl my-0 mx-auto bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      <NextThemeSwitcher />
      <Header
        name={AUTHOR_NAME}
        description={AUTHOR_DESCRIPTION}
        Portrait={<Image src={portrait} alt="portrait" width={384} height={512} />}
      />
      <Section title={"My skills"} elements={skills} />
      <Section title={"Things I'm learning right now"} elements={learning} />
      <Section title={"My next goals"} elements={goals} />
      <Gallery
        title={"Portfolio"}
        subtitle={"My recent projects"}
        status={"success"}
        repos={sampleRepositories.map((repo) => ({
          id: repo.id,
          name: repo.title,
          description: repo.description,
          codeLink: repo.html_url,
          demoLink: repo.homepage,
          images: repo.images,
        }))}
      />
      <Footer note={FOOTER_NOTE} address={ADDRESS}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="m-6 w-full md:w-auto shrink-0">
            <DownloadButton fileLocation="/CV-EN.pdf" fileName="Michał Cesarczyk CV.pdf" buttonText="Download CV" />
          </div>
          <div className="flex w-full">
            {footerThumbnails.map((thumbnail) => (
              <Thumbnail key={thumbnail.id} {...thumbnail} />
            ))}
            <div className="ml-auto">
              <Thumbnail id={999} icon={ArrowUpIcon} url="#home" local />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
