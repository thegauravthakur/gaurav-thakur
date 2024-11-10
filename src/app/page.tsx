import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="m-5 flex flex-col items-start gap-10 sm:flex-row">
        <img
          src="/profile.jpg"
          alt="Gaurav Thakur"
          width={130}
          height={130}
          className="rounded-full border shadow-lg"
        />
        <div>
          <p className="max-w-lg leading-7">
            Hey there, My name is Gaurav Thakur. I&apos;m a software engineer
            with a passion for web applications. I create beautiful, performant,
            and accessible web experiences for all.
          </p>
          <div className="mt-6 flex space-x-5 text-sm underline">
            <Link href="/blog">My Blog</Link>
            <a
              href="https://x.com/gauravcodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/thegauravthakur"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gauravcodes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
