export default function Page() {
  return (
    <div className="bg-white text-black antialiased">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Resume
        </h1>
        <p className="text-base leading-relaxed text-gray-700">
          Haven&apos;t got around to building this page yet.{" "}
          <span className="inline-block">🫠</span>
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          In the meantime, feel free to reach out at{" "}
          <a
            href="mailto:hello@gauravthakur.com"
            className="font-medium text-red-600 underline decoration-red-200 underline-offset-2 hover:decoration-red-600"
          >
            hello@gauravthakur.com
          </a>
        </p>
      </div>
    </div>
  );
}
