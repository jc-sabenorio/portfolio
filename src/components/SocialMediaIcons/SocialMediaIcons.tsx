import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start gap-1">
      <a rel="noopener" href="https://github.com/jc-sabenorio" target="_blank">
        <GitHubIcon
          sx={{
            fontSize: 30,
            "&:hover": {
              transform: "scale(1.3)",
              transition: "all 0.3s ease",
            },
          }}
        />
      </a>
      <a
        rel="noopener"
        href="https://www.linkedin.com/in/john-carlo-sabenorio-732259244/"
        target="_blank"
      >
        <LinkedInIcon
          sx={{
            fontSize: 30,
            "&:hover": {
              transform: "scale(1.3)",
              transition: "all 0.3s ease",
            },
          }}
        />
      </a>
      <a
        rel="noopener"
        href="https://www.facebook.com/jc.sabenorio.2025"
        target="_blank"
      >
        <FacebookIcon
          sx={{
            fontSize: 30,
            "&:hover": {
              transform: "scale(1.3)",
              transition: "all 0.3s ease",
            },
          }}
        />
      </a>
    </div>
  );
}
