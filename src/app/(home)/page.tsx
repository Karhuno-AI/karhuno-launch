import Hero from "@/components/home/Hero";
import NavBar from "@/components/home/NavBar";
import AnimatedSearchBar from "@/components/home/AnimatedSearchBar";
import WhoItsFor from "@/components/home/WhoItsFor";
import TwoWaysToTrack from "@/components/home/TwoWaysToTrack";
import RealWorldUseCases from "@/components/home/RealWorldUseCases";
import ConsolidatedCTA from "@/components/home/ConsolidatedCTA";
import MultiPlatformIcons from "@/components/home/MultiPlatformIcons";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 dark:from-purple-900 dark:via-purple-950 dark:to-purple-900">
        {/* Navigation Bar */}
        <NavBar />

        {/* Hero Section */}
        <Hero />
      </header>

      {/* Animated Search Bar Section */}
      <AnimatedSearchBar />

      {/* Who It's For Section - Added ID in component */}
      <WhoItsFor />

      {/* Two Ways To Track Section */}
      <section id="track-signals">
        <TwoWaysToTrack />
      </section>

      {/* Multi-Platform Icons Section */}
      <MultiPlatformIcons />

      {/* Real World Use Cases */}
      <section id="use-cases">
        <RealWorldUseCases />
      </section>

      {/* Consolidated CTA Before Footer */}
      <section
        id="early-access"
        className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#a947e7]/10 to-[#792abf]/10"
      >
        <div className="max-w-4xl mx-auto">
          <ConsolidatedCTA />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
