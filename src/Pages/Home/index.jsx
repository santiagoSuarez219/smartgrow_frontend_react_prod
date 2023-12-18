import Navbar from "../../Components/Navbar";
import CardCultivo from "../../Components/CardCultivo";
import Layout from "../../Components/Layaout";
import HourDate from "../../Components/HourDate";
import SystemStatus from "../../Components/SystemStatus";
import ActuatorButtons from "../../Components/ActuatorButtons";
import HidroponicoControl from "../../Components/HidroponicoControl";
import CardHidroponico from "../../Components/CardHidroponico";
import LayourHeader from "../../Components/LayaoutHeader";
import LayoutContent from "../../Components/LayoutContent";


function Home() {
  return (
    <Layout>
      <LayourHeader>
        <Navbar />
        <HourDate />
        <SystemStatus />
        <ActuatorButtons />
        <HidroponicoControl />
      </LayourHeader>
      <LayoutContent>
        <CardCultivo />
        <CardHidroponico />
      </LayoutContent>
    </Layout>
  );
}

export default Home;
