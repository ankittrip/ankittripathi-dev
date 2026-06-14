
import SectionTitle from "../common/SectionTitle";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Build Something Meaningful"
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">

          {/* Left Side */}
          <div>

            <p className="text-lg leading-relaxed text-slate-400">
              I'm currently open to Backend Engineering,
              Full Stack Development, AI Engineering,
              internships, freelance work, and full-time opportunities.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Whether you're building scalable backend systems,
              AI-powered applications, distributed architectures,
              or automation platforms, I'd be excited to discuss
              how I can contribute.
            </p>

            <div className="mt-10 space-y-4">

              {/* Email */}
              <a
                href="mailto:ankittripathi559@gmail.com"
                className="
                  block
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  p-5
                  transition-all
                  duration-300
                  hover:border-sky-500/40
                "
              >
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-white">
                  ankittripathi559@gmail.com
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="www.linkedin.com/in/ankittripathi-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  p-5
                  transition-all
                  duration-300
                  hover:border-sky-500/40
                "
              >
                <p className="text-sm text-slate-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-white">
                  linkedin.com/in/ankittripathi-dev
                </p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ankittrip"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  p-5
                  transition-all
                  duration-300
                  hover:border-sky-500/40
                "
              >
                <p className="text-sm text-slate-500">
                  GitHub
                </p>

                <p className="mt-1 text-white">
                  github.com/ankittrip
                </p>
              </a>

            </div>

          </div>

          {/* Right Side */}
          <ContactForm />

        </div>

      </div>
    </section>
  );
}
