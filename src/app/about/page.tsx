export default function Page() {
  return (
    <main className="bg-white text-black antialiased">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I&apos;m Gaurav
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            I work as a frontend engineer at{" "}
            <a
              href="https://zepto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-red-600 underline decoration-red-200 underline-offset-2 hover:decoration-red-600"
            >
              Zepto
            </a>
            . I like building things for the web and occasionally writing about
            stuff I learn along the way.
          </p>
        </section>

        {/* Background */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            A bit about me
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              I&apos;m from Kullu, a small town in Himachal Pradesh. Got
              interested in computers pretty early &ndash; started messing
              around with websites in 9th grade when I made a blog on Blogger. I
              didn&apos;t really know what I was doing, but it was fun.
            </p>
            <p>
              Tried learning Android development in school but my laptop
              couldn&apos;t handle Android Studio. Attempted Python too, got
              stuck on OOP concepts for way too long. The usual beginner
              struggles.
            </p>
            <p>
              Did my BTech in Computer Science from LPU (2018-2022). Spent a lot
              of time on competitive programming during college &ndash; nothing
              impressive, but it helped me get better at problem-solving. During
              COVID, I finally got into web development and that&apos;s what
              stuck.
            </p>
          </div>
        </section>

        {/* Work */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Work</h2>
          <div className="space-y-6">
            <WorkCard
              company="Zepto"
              role="Software Engineer"
              period="Nov 2023 &ndash; Present"
              location="Bengaluru"
            >
              Working on the web team. Mostly frontend stuff &ndash; building
              features, fixing bugs, trying to make things load faster.
            </WorkCard>

            <WorkCard
              company="Reliance Retail"
              role="SDE 1"
              period="Aug 2022 &ndash; Nov 2023"
              location="Mumbai"
            >
              Worked on internal tools and the JioMart website. Learned a lot
              about building things at scale here.
            </WorkCard>

            <WorkCard
              company="MAQ Software"
              role="Software Engineer"
              period="Mar 2021 &ndash; Aug 2022"
              location="Hyderabad"
            >
              My first job. Started as an intern. This is where I properly
              learned React and how to work in a team.
            </WorkCard>
          </div>
        </section>

        {/* Now */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">These days</h2>
          <p className="text-base leading-relaxed text-gray-700">
            Mostly working with React, Next.js, and TypeScript. I&apos;ve been
            getting into web performance lately &ndash; it&apos;s one of those
            rabbit holes you can keep going deeper into. Outside of work,
            I&apos;m usually just browsing the internet or trying to cook
            something edible.
          </p>
        </section>

        {/* Connect */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Say hi
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Feel free to reach out on{" "}
            <a
              href="https://twitter.com/AskGauravThakur"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-red-600 underline decoration-red-200 underline-offset-2 hover:decoration-red-600"
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://linkedin.com/in/AskGauravThakur"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-red-600 underline decoration-red-200 underline-offset-2 hover:decoration-red-600"
            >
              LinkedIn
            </a>
            , or check out my{" "}
            <a
              href="https://github.com/AskGauravThakur"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-red-600 underline decoration-red-200 underline-offset-2 hover:decoration-red-600"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

function WorkCard({
  company,
  role,
  period,
  location,
  children,
}: {
  company: string;
  role: string;
  period: string;
  location: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-gray-900">{company}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">{period}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-700">{children}</p>
    </div>
  );
}
