import Navbar from "../../Components/Navbar";
import Connections from "../../Components/Connections/Connections";
import LayoutCards from "../../Components/LayoutCards";
import CardCultivo from "../../Components/CardCultivo";
import Layout from "../../Components/Layaout";
import HourDate from "../../Components/HourDate";
import SystemStatus from "../../Components/SystemStatus";
import ActuatorButtons from "../../Components/ActuatorButtons";

function Home() {
  return (
    <Layout>
      <Navbar />
      <HourDate />
      <SystemStatus />
      <ActuatorButtons />
      <LayoutCards>
        <CardCultivo />
        <CardCultivo />
      </LayoutCards>
      {/* <div>
         <Connections />
       </div> */}
      {/* <LayoutCards>
       
       </LayoutCards> */}
    </Layout>
  );
}

export default Home;
