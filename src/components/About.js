import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>This is About Us page</h1>
      {/* <Profile name={"Akshay"}/> */}
      <ProfileClass name={"Akshay"}/>
    </div>
  );
};

export default About;
