import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contact() {
  return (
    <div className="p-3 w-full md:w-auto flex flex-col gap-1">
      <a className="italic cursor-pointer">
        <span>
          <EmailIcon />
        </span>{" "}
        johncarlosabenorio07@gmail.com
      </a>
      <a className="italic cursor-pointer">
        <span>
          <PhoneAndroidIcon />
        </span>{" "}
        +63-976-306-1925
      </a>

      <div className="flex justify-center md:justify-start gap-1">
        <GitHubIcon sx={{ fontSize: 30 }} />
        <LinkedInIcon sx={{ fontSize: 30 }} />
        <FacebookIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
}
