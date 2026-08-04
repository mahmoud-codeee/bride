import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageToggle from "./components/LanguageToggle";
import EnvelopeIntro from "./components/EnvelopeIntro";
import Petals from "./components/Petals";
import PetalBurst from "./components/PetalBurst";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import AddToCalendar from "./components/AddToCalendar";
import DressCode from "./components/DressCode";
import Couple from "./components/Couple";
import GuestWishes from "./components/GuestWishes";
import Footer from "./components/Footer";

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <LanguageProvider>
      <div
        className="min-h-screen"
        style={{ backgroundColor: "var(--color-ivory)" }}
      >
        <Petals />
        <PetalBurst active={envelopeOpened} />
        <LanguageToggle />
        <EnvelopeIntro onOpen={() => setEnvelopeOpened(true)} />
        <Hero revealed={envelopeOpened} />
        <Countdown />
        <Details />
        <AddToCalendar />
        <DressCode />
        <Couple />
        <GuestWishes />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
