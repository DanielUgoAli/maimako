import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="h-screen overflow-hidden bg-white">
      <Navbar />
      <main className="h-full overflow-hidden pt-20">
        <Hero />
      </main>
    </div>
  );
}