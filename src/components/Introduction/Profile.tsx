import DownloadButton from "../Navbar/DownloadButton";
import Contact from "./Contact";
export default function Profile() {
  return (
    <div
      id="profile"
      className="flex flex-col justify-center items-center gap-3"
    >
      <img
        className="flex-1 rounded-full max-w-72 aspect-square object-cover"
        src="/images/formal.JPG"
      />
      <Contact />

      <DownloadButton />

      {/* <Description /> */}
    </div>
  );
}
