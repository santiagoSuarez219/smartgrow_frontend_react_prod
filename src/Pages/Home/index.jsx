import Navbar from '../../Components/Navbar'
import Connections from '../../Components/Connections/Connections'
import LayoutCards from '../../Components/LayoutCards'
import CardCultivo from '../../Components/CardCultivo'

function Home() {
  return (
    <div>
       <Navbar/>
       <div>
         <Connections />
       </div>
       <LayoutCards>
       <CardCultivo />
       </LayoutCards>
    </div>
  )
}

export default Home