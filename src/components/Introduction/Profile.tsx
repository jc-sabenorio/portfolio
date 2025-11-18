import Description from "./Description";
import Contact from "./Contact";
export default function Profile() {
  return (
    <div
      id="profile"
      className="flex flex-col justify-center md:flex-row items-center gap-3"
    >
      <Contact />

      <img
        className="rounded-full max-w-72 aspect-square object-cover"
        src="/images/formal.JPG"
      />

      <Description />
    </div>
  );
}
