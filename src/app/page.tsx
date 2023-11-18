import Link from "next/link";
import { Button } from "./button";
import { SocialLink } from "./social-link";
import { Metadata } from "next";
import { Section } from "./section";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Yahya Eddhissa - Full Stack Web Solutions Engineer",
  description:
    "I'm a Software Engineer currently working as the CTO and co-founder of Orderedo. I'm very enthusiastic when it comes to Developer Experience and Design Patterns, while also emphasizing on Accessibility and good User Experience. I also share what I know on my personal blog and contribute to open-source projects.",
};

function Skill({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="mb-1.5">
        <i className={`ti ti-world text-4xl`} />
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm font-normal text-gray-400 line-clamp-4">
        {description}
      </p>
    </div>
  );
}

function Project({
  title,
  description,
  imageUrl = "",
  tags,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
}) {
  return (
    <div className="bg-sky-600 bg-opacity-10 rounded relative overflow-hidden">
      <div className="flex items-start gap-4 px-7 py-4 mb-3">
        <div className="flex items-center gap-4">
          <h4 className="text-xl font-medium">{title}</h4>
          <div className="h-0 w-10 border-t border-gray-500 flex-none" />
        </div>
        <p className="font-normal line-clamp-3">{description}</p>
      </div>
      <div className="flex">
        <div className="ml-auto w-[90%]">
          <div className="flex gap-2 text-xs font-normal mb-3">
            {tags.map((item) => (
              <div
                className="flex h-7 items-center px-4 bg-white bg-opacity-5 rounded-full"
                key={Math.random()}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            className="h-60 w-full bg-sky-600 bg-cover rounded-tl-md"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function BlogPost() {
  return (
    <div className="rounded bg-gray-900 px-8 py-6">
      <div className="flex justify-stretch mb-3 gap-5 text-sm items-center">
        <div className="h-7 flex items-center bg-sky-700 rounded-full px-4">
          Typescript
        </div>
        <div className="text-gray-400">29 April 2023</div>
        <div className="h-0 border-t border-t-gray-700 flex-auto"></div>
        <div className="text-gray-300">8 min read</div>
      </div>
      <h4 className="text-xl font-semibold line-clamp-2 mb-2">
        Predictable Error Handling with Typescript - Part 1: The Result Class
      </h4>
      <p className="line-clamp-2 text-sm text-gray-300 font-normal mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat
        voluptatem possimus, tenetur nobis numquam praesentium rem excepturi
        ipsa fuga sapiente aperiam officia alias dolor culpa ipsam non debitis
        ipsum?
      </p>
      <p className="text-green-500 underline underline-offset-4">Read more</p>
    </div>
  );
}

export default function Home() {
  return (
    <Fragment>
      <div className="h-screen border-b border-b-gray-800">
        <header className="flex md:justify-between justify-center items-center h-20 md:px-24 px-6 w-screen">
          <div className="flex items-center gap-2 flex-none">
            <div
              className="bg-cover md:h-8 md:w-8 w-6 h-6 bg-green-800 rounded-full flex-none border-gray-700 border"
              style={{ backgroundImage: "url('avatar.png')" }}
            />
            <div className="md:text-md">
              <span className="font-medium">YAHYA</span>{" "}
              <span className="font-bold">EDDHISSA</span>{" "}
              <span className="font-bold text-xl text-green-500">.</span>
            </div>
          </div>
          <nav className="md:flex items-center gap-8 hidden">
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Blog</Link>
            <Button>Contact me</Button>
          </nav>
        </header>
        <div className="lg:w-2/3 md:w-3/4 md:px-24 px-6 md:pt-20 pt-14 text-center md:text-start">
          <h2 className="px-3 py-1.5 bg-green-950 rounded inline-block mb-3">
            Full Stack Web Solutions Engineer
          </h2>
          <h1 className="md:text-5xl text-3xl font-semibold mb-6">
            Design and Code Exceptional Online Experiences.
          </h1>
          <p className="text-sm text-gray-400 mb-10 md:block hidden">
            I&apos;m a Software Engineer currently working as the CTO and
            co-founder of <span className="underline text-white">Orderedo</span>
            . I&apos;m very enthusiastic when it comes to Developer Experience
            and Design Patterns, while also emphasizing on Accessibility and
            good User Experience. I also share what I know on my personal blog
            and contribute to open-source projects.
          </p>
          <div className="flex md:gap-6 gap-4 items-center justify-center md:justify-normal">
            <div className="flex-none">
              <Button>View Projects</Button>
            </div>
            <div className="h-0 w-20 border-t border-gray-500" />
            <nav className="flex md:gap-3 gap-2">
              <SocialLink icon="brand-github" />
              <SocialLink icon="brand-linkedin" />
              <SocialLink icon="brand-stackoverflow" />
              <SocialLink icon="brand-dribbble" />
              <SocialLink icon="brand-reddit" />
            </nav>
          </div>
        </div>
      </div>
      <main>
        <Section>
          <div className="mb-3">
            <h3 className="text-4xl font-semibold text-green-600 mb-1">
              What I do best
            </h3>
            <div className="h-0 w-32 border-t-2 border-green-600" />
          </div>
          <p className="text-gray-300 mb-12">
            I have more than 2 years of experience building web platforms and
            services for clients all over the world. This work involves many
            technical skillsets and knowledge summarized below.
          </p>
          <div className="grid grid-cols-3 gap-10">
            <Skill
              title="Full Stack Web Development"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi corrupti, quod odit odio, iste modi totam excepturi nemo recusandae culpa saepe officiis harum voluptatem maiores eveniet est eos quibusdam?"
            />
            <Skill
              title="Full Stack Web Development"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi corrupti, quod odit odio, iste modi totam excepturi nemo recusandae culpa saepe officiis harum voluptatem maiores eveniet est eos quibusdam?"
            />
            <Skill
              title="Full Stack Web Development"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi corrupti, quod odit odio, iste modi totam excepturi nemo recusandae culpa saepe officiis harum voluptatem maiores eveniet est eos quibusdam?"
            />
          </div>
        </Section>
        <Section>
          <div className="mb-3">
            <h3 className="text-4xl font-semibold text-green-600 mb-1">
              Featured Projects
            </h3>
            <div className="h-0 w-32 border-t-2 border-green-600" />
          </div>
          <p className="text-gray-300 mb-12">
            Below is a featued list of the most remarkable projects I built over
            the years. Some of them are open-source, some of them are not.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <Project
              title="Archade"
              description="Archade is a social network for architects and construction engineers, plus all building enthusiasts"
              tags={["Social Networking", "Discussions", "Authentication"]}
            />
            <Project
              title="Archade"
              description="Archade is a social network for architects and construction engineers, plus all building enthusiasts"
              tags={["Social Networking", "Discussions", "Authentication"]}
            />
            <Project
              title="Archade"
              description="Archade is a social network for architects and construction engineers, plus all building enthusiasts"
              tags={["Social Networking", "Discussions", "Authentication"]}
            />
            <Project
              title="Archade"
              description="Archade is a social network for architects and construction engineers, plus all building enthusiasts"
              tags={["Social Networking", "Discussions", "Authentication"]}
            />
          </div>
        </Section>
        <Section>
          <div>
            <p className="text-sm mb-1">Let&apos;s Collaborate</p>
            <h4 className="text-4xl font-medium mb-6">
              Have Any Project In Mind?
            </h4>
            <Button>Contact Me</Button>
          </div>
        </Section>
        <Section>
          <div className="mb-3">
            <h3 className="text-4xl font-semibold text-green-600 mb-1">
              Latest Blog Posts
            </h3>
            <div className="h-0 w-32 border-t-2 border-green-600" />
          </div>
          <p className="text-gray-300 mb-12">
            Below is a featued list of the most remarkable projects I built over
            the years. Some of them are open-source, some of them are not.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
        </Section>
      </main>
      <footer className="h-16 px-24 flex items-center justify-center">
        <div>
          &#169; 2023-2024. Made With Love By
          <Link href="/" className="text-green-600 underline ml-1">
            Yahya Eddhissa
          </Link>
          . All Rights Reserved
        </div>
      </footer>
    </Fragment>
  );
}
