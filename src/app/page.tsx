import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <Accordion />
      <Contact />
    </main>
  );
}

