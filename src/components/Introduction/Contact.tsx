import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import DownloadButton from "../Navbar/DownloadButton";

export default function Contact() {
  function callNumber() {
    window.open(`tel:+63-976-263-2748`);
  }
  return (
    <div className="p-3 w-full md:w-auto flex flex-col gap-1">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=johncarlosabenorio07@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="italic cursor-pointer transition-all hover:underline hover:scale-125"
      >
        <span>
          <EmailIcon />
        </span>{" "}
        johncarlosabenorio07@gmail.com
      </a>
      <a
        onClick={callNumber}
        className="italic cursor-pointer transition-all hover:underline hover:underline hover:scale-125"
      >
        <span>
          <PhoneAndroidIcon />
        </span>{" "}
        +63-976-263-2748
      </a>
      <div className="flex justify-center">
        <SocialMediaIcons />
      </div>

      <DownloadButton />
    </div>
  );
}
