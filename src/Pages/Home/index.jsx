import Navbar from '../../Components/Navbar'
import Connections from '../../Components/Connections/Connections'
import LayoutCards from '../../Components/LayoutCards'
import CardCultivo from '../../Components/CardCultivo'
import { useMqtt } from "./useMqtt";

function Home() {
  const { temperatura, humedad, co2, ppf, ppfd, vpd } = useMqtt();

  return (
    <div>
       <Navbar/>
       <div>
         <Connections/>
       </div>
       <LayoutCards>
       <CardCultivo
          temperatura={temperatura}
          humedad={humedad}
          co2={co2}
          ppf={ppf}
          ppfd={ppfd}
          vpd={vpd}
        />
       </LayoutCards>
    </div>
  )
}

export default Home