import { LanguageProvider } from "./context/LanguageContext";
import LanguageToggle from "./components/LanguageToggle";
import Petals from "./components/Petals";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import DressCode from "./components/DressCode";
import Couple from "./components/Couple";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen"
        style={{ backgroundColor: "var(--color-ivory)" }}
      >
        <Petals />
        <LanguageToggle />
        <Hero />
        <Countdown />
        <Details />
        <DressCode />
        <Couple />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
