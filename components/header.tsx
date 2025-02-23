export default function Header() {
  return (
    <header>
      <div className="pt-10 flex flex-col items-start">
        <div className="max-w-md">
          <h1 className="font-sans text-2xl md:text-3xl pb-2 text-primary">
            Hi, I&apos;m
          </h1>
          <h2 className="font-mono text-6xl text-primary">Hannah.</h2>
        </div>
        <h2 className="font-sans sm:text-2xl md:text-3xl pt-4 pb-4 text-secondary">
          I enjoy making things with code. 👩🏻‍💻
        </h2>
      </div>
    </header>
  );
}
