import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./button.module.css";

export function Button({ children }: PropsWithChildren) {
  return (
    <button
      className={"bg-green-700 rounded px-5 h-10 relative " + styles.Button}
    >
      {children}
    </button>
  );
}

export function SocialLink({ icon }: { icon: string }) {
  return (
    <div className="flex items-center justify-center bg-gray-900 rounded-full h-11 w-11">
      <i className={`text-3xl ti ti-${icon}`} />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div>
        <header className="flex justify-between items-center h-20 px-24">
          <div className="text-lg">
            <span className="font-medium">YAHYA</span>{" "}
            <span className="font-bold">EDDHISSA</span>{" "}
            <span className="font-bold text-xl text-green-500">.</span>
          </div>
          <nav className="flex items-center gap-8">
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Blog</Link>
            <Button>Contact me</Button>
          </nav>
        </header>
        <div className="px-24 pt-20">
          <h2 className="px-3 py-1.5 bg-green-950 rounded inline-block mb-3">
            Full Stack Web Solutions Engineer
          </h2>
          <h1 className="text-4xl font-semibold mb-6">
            <div className="mb-1.5">Design and Code Exceptional</div>
            <div>Online Experiences.</div>
          </h1>
          <h3 className="text-sm text-gray-400 w-1/2 mb-10">
            I&apos;m a Software Engineer currently working as the CTO and
            co-founder of <span className="underline text-white">Orderedo</span>
            . I&apos;m very enthusiastic when it comes to Developer Experience
            and Design Patterns, while also emphasizing on Accessibility and
            good User Experience. I also share what I know on my personal blog
            and contribute to open-source projects.
          </h3>
          <div className="flex gap-6 items-center">
            <Button>View Projects</Button>
            <Button>Blog</Button>
            <div className="h-0 w-20 border-t border-gray-500" />
            <nav className="flex gap-3">
              <SocialLink icon="brand-github" />
              <SocialLink icon="brand-linkedin" />
              <SocialLink icon="brand-dribbble" />
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
