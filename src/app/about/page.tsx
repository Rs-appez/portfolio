import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center p-20 pb-0 ">
      <h1 className="text-7xl font-bold p-5">About</h1>
      <div className="flex items-center p-5">
        <Image
          src="/profile.webp"
          alt="Picture of the author"
          width={500}
          height={600}
          className="rounded-full border-4 border-foreground"
        />
        <div className="flex flex-col  item-left p-5">
          <p className="text-lg font-semibold p-2 pb-5">
            My name is Alexandre Pirmez, and I'm passionate about web
            development, CI/CD and web security.
          </p>

          <p className="text-lg font-semibold p-2">
            In my spare time, I like to develop and deploy various projects. I
            publish them on my github.
          </p>

          <p className="text-lg font-semibold p-2">
            I mainly develop in Python (Django/Django REST Framework). In my
            spare time, I like to develop and deploy various projects. I publish
            them on my github.
          </p>

          <p className="text-lg font-semibold p-2">
            I also have front-end development skills, mainly on Angular
            projects.
          </p>

          <p className="text-lg font-semibold p-2">
            I have experience with PostgreSQL and Redis databases.
          </p>

          <p className="text-lg font-semibold p-2">
            I regularly use Git, Docker, and command line tools.
          </p>

          <p className="text-lg font-semibold p-2">
            I'm familiar with AGILE development and SCRUM in particular.
          </p>

          <p className="text-lg font-semibold p-2">
            I enjoy exploring new types of projects and continually expanding my
            knowledge.
          </p>

          <p className="text-lg font-semibold p-2">
            I am quick to adapt and learn in a new environment. I'm a good
            self-starter.
          </p>
        </div>
      </div>
    </main>
  );
}
