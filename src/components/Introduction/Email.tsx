import EmailIcon from "@mui/icons-material/Email";

export default function Email() {
  return (
    <div className="p-3 w-full md:w-auto text-center">
      <a className="italic cursor-pointer">
        <span>
          <EmailIcon />
        </span>{" "}
        johncarlosabenorio07@gmail.com
      </a>
    </div>
  );
}
