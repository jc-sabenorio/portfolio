import Role from "./Role";
import Profile from "./Profile";
export default function Greeting() {
  return (
    <div className="">
      <div># Bluem</div>
      <div>Hi👋! My name is</div>
      <div className="big-text text-center md:text-left">
        John Carlo Sabenorio
      </div>
      <Profile />
      <Role />
    </div>
  );
}
