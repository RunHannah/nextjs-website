import Navigation from "../components/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <p className="font-body pt-4 leading-[1.8]">
          I&apos;m a software engineer based in Los Angeles ☀️ with expertise in
          Typescript, React, Next.js, Node, PostgreSQL, MongoDB, REST APIs and
          other fun stuff. Passionate about building robust web apps and always
          learning new technologies. Former public sector professional bringing
          a unique, problem-solving mindset to tech!
        </p>
        <p className="font-body pt-4 leading-[1.8]">
          This site is a work in progress. I plan to update it with projects, so
          stay tuned!
        </p>
      </main>
    </>
  );
}
