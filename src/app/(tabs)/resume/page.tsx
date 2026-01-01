import { Link } from "@/app/_components/ui/link";

export default function Page() {
  return (
    <div className="text-gray-950 dark:text-gray-300">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
          Resume
        </h1>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
          Haven&apos;t got around to building this page yet.{" "}
          <span className="inline-block">🫠</span>
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-400">
          In the meantime, feel free to reach out at{" "}
          <Link href="mailto:hello@gauravthakur.com">hi@gauravthakur.com</Link>
        </p>
      </div>
    </div>
  );
}
