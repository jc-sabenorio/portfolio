export default function Profile() {
  return (
    <div className="flex flex-col justify-center md:flex-row items-center gap-3">
      <div className="p-3 w-full md:w-auto text-center">
        <a className="italic cursor-pointer">johncarlosabenorio07@gmail.com</a>
      </div>
      <img
        className="flex-1 rounded-full max-w-72 aspect-square object-cover"
        src="/images/formal.JPG"
      />

      <div className="flex-1">
        <p className="max-w-100">
          As an aspiring developer, I am passionate about building scalable and
          user-friendly web applications. With hands-on experience in full stack
          development, API design, and database management, I enjoy transforming
          complex ideas into clean, functional solutions.
        </p>
      </div>
    </div>
  );
}
