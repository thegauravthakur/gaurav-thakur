import { Link } from "@/app/_components/ui/link";

export function Intro() {
  return (
    <section className="flex flex-col gap-y-4 text-base text-gray-800 dark:text-gray-300">
      <p className="leading-relaxed">
        I&apos;m a software engineer with a passion for web applications. I
        currently work at <Link href="https://www.zepto.com">Zepto</Link>,
        mostly focusing on web performance and improving the overall user
        experience. Before this, I worked at{" "}
        <Link href="https://www.jiomart.com">JioMart</Link>.
      </p>
      <p className="leading-relaxed">
        I’m always trying to learn and get better at what I do. A lot of my time
        goes into understanding how things work, fixing issues, and paying
        attention to small details that make a difference over time.
      </p>
      <p className="leading-relaxed">
        This space is a mix of everything I care about. I write about frontend
        engineering and performance, but also share thoughts from work, life,
        and things I’m learning along the way.
      </p>
    </section>
  );
}
