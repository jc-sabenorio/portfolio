import Description from "./Description";
import Email from "./Email";
export default function Profile() {
  return (
    <div className="flex flex-col justify-center md:flex-row items-center gap-3">
      <Email />
      <img
        className="flex-1 rounded-full max-w-72 aspect-square object-cover"
        src="/images/formal.JPG"
      />

      <Description />
    </div>
  );
}
