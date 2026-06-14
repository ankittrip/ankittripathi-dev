import Button from "../common/Button.jsx";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>

      <Button
        href="https://github.com/ankittrip"
        variant="secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>

      <Button
        href="https://linkedin.com/in/ankittripathi-dev"
        variant="secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Button>

      <Button href="#contact">
        Contact
      </Button>
    </div>
  );
}
