export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">

        <h1 className="text-7xl font-bold text-white">
          404
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="
            mt-8
            inline-flex
            rounded-full
            bg-sky-500
            px-6
            py-3
            font-medium
            text-slate-950
            transition
            hover:bg-sky-400
          "
        >
          Back Home
        </a>

      </div>
    </section>
  );
}