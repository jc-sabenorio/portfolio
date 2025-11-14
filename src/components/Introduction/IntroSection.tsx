import Greeting from "./Greeting";
import "../../styles/IntroSection.css";
export default function IntroSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Greeting />
      {/* Contacts */}
    </section>
  );
}
