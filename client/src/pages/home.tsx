import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Resume from "@/components/resume";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-navy-950 text-slate-50 font-sans">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
