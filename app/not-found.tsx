import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-7xl sm:text-9xl font-black tracking-tight mb-4 select-none">
        404
      </h1>
      <p className="text-base sm:text-xl text-white/70 mb-8 max-w-md font-medium">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 shadow-[0_2px_12px_rgba(255,255,255,0.2)] transition-all duration-300"
      >
        Back to Home
      </Link>
    </main>
  );
}
