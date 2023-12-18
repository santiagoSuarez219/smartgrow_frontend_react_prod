import React, { useContext } from "react";
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
import SetPointForm from "../../Components/SetPointForm";
import { SmartgrowContext } from "../../SmartgrowContext";
import { Modal } from "../../Modal";

function Home() {
  const { openModal } = useContext(SmartgrowContext);
  return (
    <>
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
      {openModal && (
        <Modal>
          <SetPointForm />
        </Modal>
      )}
    </>
  );
}

export default Home;
