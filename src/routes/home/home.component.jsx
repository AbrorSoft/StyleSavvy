import  Directory from "../../components/directory/directory.component";
import HeroSection from "../../components/hero-component/hero.component";
import { Outlet } from "react-router-dom";
function Home() {

  return (
    <div>
    <HeroSection/>
    <Directory />
    <Outlet/>
    </div>
  );
}

export default Home;
