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
      <SystemStatus />
      <ActuatorButtons />
      <HidroponicoControl />
      <CardCultivo />
      <CardHidroponico />

    </Layout>
  );
}

export default Home;
