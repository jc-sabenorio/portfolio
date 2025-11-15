import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div className="p-3 border-t-2 mt-3 flex items-center justify-between">
      <h1 className="">© 2025 JC Sabenorio. All Rights Reserved.</h1>

      <div className="flex justify-center md:justify-start gap-1">
        <GitHubIcon sx={{ fontSize: 30 }} />
        <LinkedInIcon sx={{ fontSize: 30 }} />
        <FacebookIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
}
