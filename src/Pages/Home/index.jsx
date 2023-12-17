import Navbar from "../../Components/Navbar";
import CardCultivo from "../../Components/CardCultivo";
import Layout from "../../Components/Layaout";
import HourDate from "../../Components/HourDate";
import SystemStatus from "../../Components/SystemStatus";
import ActuatorButtons from "../../Components/ActuatorButtons";
import HidroponicoControl from "../../Components/HidroponicoControl";
import CardHidroponico from "../../Components/CardHidroponico";


function Home() {
  return (
    <Layout>
      <Navbar />
      <HourDate />
      <div className="w-full h-full md:px-4 md:pb-4">
      <SystemStatus />
      <div className="hidden rounded md:block w-full bg-gray-200 h-0.5 mt-2 "></div>
      <div className="w-full md:flex md:h-1/3">
        <ActuatorButtons />
        <HidroponicoControl />
      </div>
      <div className="w-full md:flex md:h-[60%]">
        <CardCultivo />
        <CardHidroponico />
      </div>
      </div>
    </Layout>
  );
}

export default Home;
