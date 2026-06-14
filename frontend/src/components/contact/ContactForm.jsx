import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }
);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  setStatus("success");

  setForm({
    name: "",
    email: "",
    message: "",
  });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-8
        backdrop-blur-sm
      "
    >
      <div className="space-y-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="
              w-full
              rounded-2xl
              border
              border-slate-800
              bg-slate-950
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-sky-500
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="
              w-full
              rounded-2xl
              border
              border-slate-800
              bg-slate-950
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-sky-500
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>

          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            className="
              w-full
              rounded-2xl
              border
              border-slate-800
              bg-slate-950
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-sky-500
            "
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-full
            bg-sky-500
            px-6
            py-3
            font-semibold
            text-slate-950
            transition
            hover:bg-sky-400
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-emerald-400">
            Message received successfully. I'll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Something went wrong. Please contact me directly via email.
          </p>
        )}

        <p className="text-center text-xs text-slate-500">
          Average response time: Within 24 hours
        </p>

      </div>
    </form>
  );
}
