import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {

  return (
    <>
      <SEO
        title="Page Not Found | Carrollton Periodontics"
        description="The page you are looking for could not be found."
        noindex={true}
      />

      <section
        className="
          relative
          min-h-[70vh]
          overflow-hidden
          flex
          items-center
          justify-center
          px-8
          py-20
          text-center
          text-white
        "
        style={{
          background:
            "linear-gradient(135deg, #0b2f3a 0%, #155463 45%, #06232d 100%)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {/* Diagonal glowing line */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
          "
          style={{
            background:
              "linear-gradient(135deg, transparent 42%, rgba(127,227,238,0.35) 49%, transparent 56%)",
          }}
        />

        {/* Soft glow */}
        <div
          className="
            absolute
            -top-40
            -right-40
            h-96
            w-96
            rounded-full
            pointer-events-none
          "
          style={{
            background:
              "radial-gradient(circle, rgba(127,227,238,0.18), transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-xl">

          <img
            src="/images/logo.jpeg"
            alt="Carrollton Periodontics & Implant Dentistry"
            className="
              h-20
              w-auto
              mx-auto
              mb-8
              rounded-lg
              shadow-xl
            "
          />

          <div
            className="
              text-[5.5rem]
              leading-none
              mb-4
            "
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              color: "#7fe3ee",
            }}
          >
            404
          </div>

          <h1
            className="
              text-3xl
              md:text-4xl
              mb-5
            "
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
            }}
          >
            We couldn&apos;t find that page
          </h1>

          <p
            className="
              max-w-md
              mx-auto
              mb-10
              leading-relaxed
            "
            style={{
              color: "#e6f6f8",
              fontWeight: 300,
            }}
          >
            The page may have moved or no longer exists.
            Let&apos;s get you back to a healthy smile.
          </p>

          <Link
            to="/"
            className="
              inline-block
              px-8
              py-3
              text-sm
              uppercase
              tracking-[0.25em]
              border
              border-white/80
              transition-colors
              hover:bg-white
              hover:text-[#123b45]
            "
            style={{
              fontWeight: 500,
            }}
          >
            Return Home
          </Link>

        </div>
      </section>
    </>
  );
}