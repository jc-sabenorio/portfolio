import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function ContactSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-3 text-center md:text-left mt-10">
        <h1 className="big-text">Connect with me:</h1>
        <div className="flex gap-3 justify-center items-center">
          {/* LinkedIn button */}
          <GitHubIcon sx={{ fontSize: 70 }} className="cursor-pointer" />
          <LinkedInIcon sx={{ fontSize: 75 }} className="cursor-pointer" />
          <FacebookIcon
            sx={{ fontSize: 75 }}
            className="cursor-pointer text-5xl"
          />
          {/* Github button */}
          {/* Discord */}
        </div>
      </div>
    </section>
  );
}
