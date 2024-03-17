type WorkExperience = {
  company: string;
  date: string;
  description: string;
  title: string;
};

const workExperience: WorkExperience[] = [
  {
    company: '█████████',
    date: 'May 2023 - Present',
    description:
      'I got a chance to work on digitizing several tools that previously served using spreadsheet software, also modernizing the codebase and introduced a new standards on developing the frontend side of things in the engineering team.',
    title: 'Senior Software Development Engineer (Frontend)',
  },
  {
    company: 'Quipper',
    date: 'November 2022 - April 2023',
    description:
      'Joined the global product development team in the loyalty squad that focused on increasing user engagement and user learning motivation.',
    title: 'Software Engineer - Web',
  },
  {
    company: 'eFishery',
    date: 'November 2020 - November 2022',
    description:
      'Worked on the enterprise platform team that focused on creating internal platform tools in the commercial area, value chain integration, and payment scaling. My responsibility is creating an architecture for the frontend web app and developing it as well',
    title: 'Software Engineer - Enterprise',
  },
  {
    company: 'Halofina',
    date: 'March 2019 - November 2020',
    description:
      'Switched career to software engineering. I developed a white-label Robo advisor product, and financial consulting services and got my first experience creating a web app from scratch until launched',
    title: 'Frontend Engineer',
  },
  {
    company: 'Telkom Indonesia',
    date: 'April 2017 - March 2019',
    description:
      'My first job as a cloud infrastructure engineer, help the company conduct research the cloud computing areas, designing and developing cloud architecture as proof of concept along with creating web apps for managing the infrastructure',
    title: 'Research Assistant',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-start justify-center gap-y-4 py-16">
      <h1 className="tracking-tight md:text-3xl">
        Hi, I&apos;m Fadhil 👋 A software engineer based in Indonesia 🇮🇩
      </h1>

      <p>
        I started my career working as a cloud engineer at one of the biggest
        telco companies in Indonesia. After two years of working, I decided to
        shift my career as a frontend engineer since I was interested in UI/UX
        design, while I think web app development is getting more interesting
        from time to time.
      </p>

      <p>
        I found that the frontend area is always evolving and constantly
        changing, also we are living in the Information Age that many platforms
        or services have their web apps where visual and interaction design have
        a significant role to its users.
      </p>

      <p>
        I combine ideas, creativity, and problem solving to achieve a great user
        experience. I enjoy spending my time to learn something new by reading
        books or articles, and sometimes I play video games too.
      </p>

      <h4 className="mt-4 font-semibold tracking-tight md:text-2xl">
        Work Experience
      </h4>

      <section className="flex w-full flex-col gap-4">
        {workExperience.map((work, index) => {
          return (
            <div className="flex flex-col gap-2" key={index}>
              <h5 className="text-xl font-semibold">{work.company}</h5>
              <p className="font-medium">
                {work.title}, {work.date}
              </p>
              <p>{work.description}</p>
            </div>
          );
        })}
      </section>

      {/* <div className="flex w-full flex-col">
        <h4 className="dark:from-primary-300 dark:to-primary-400 mt-4 bg-gradient-to-tr tracking-tight transition-colors dark:bg-clip-text dark:text-transparent">
          Get in touch
        </h4>

        <div className="mt-4 flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h5>Email</h5>
            <p>mail@mfadhil.me</p>
          </div>
          <a
            className="action-button flex flex-row items-center rounded-md border"
            href="mailto:mail@mfadhil.me"
          >
            <FiEdit />
            <span className="ml-2">Say Hello</span>
          </a>
        </div>
        <hr className="border-1 border-mf-gray-white dark:border-mf-light-black my-6 w-full" />
        <div className="flex flex-col justify-between sm:flex-row md:items-center">
          <div className="flex flex-col">
            <h5>Social</h5>
            <p>Where you can find me on the internet</p>
          </div>
          <div className="flex flex-row mt-2 -ml-4 sm:ml-0 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/mfadhil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center rounded-md action-button"
              >
                <FiLinkedin size={20} />
                <span className="ml-2">LinkedIn</span>
              </a>
              <a
                href="https://github.com/technowizard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center rounded-md action-button"
              >
                <FiGithub size={20} />
                <span className="ml-2">Github</span>
              </a>
              <a
                href="https://twitter.com/technowizard17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center rounded-md action-button"
              >
                <FiTwitter size={20} />
                <span className="ml-2">Twitter</span>
              </a>
            </div>
        </div>
      </div> */}
    </div>
  );
}
