import Greeting from "./Greeting";
import "../../styles/IntroSection.css";
import ContactSection from "../Contact/ContactSection";
export default function IntroSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Greeting />
      {/* Contacts */}

      <ContactSection />
    </section>
  );
}
