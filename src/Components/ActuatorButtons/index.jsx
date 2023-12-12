import ButtonIcon from "../ButtonIcon/ButtonIcon"
import { WiDirectionUpRight } from "react-icons/wi";
import { WiDirectionDownRight } from "react-icons/wi";

const ActuatorButtons = () => {
    return (
        <div className="w-full flex mt-8 justify-between">
            <ButtonIcon  
                text={"Entrada de agua"}
                icon={WiDirectionUpRight}
            />
            <ButtonIcon 
                text={"Salida de agua"}
                icon={WiDirectionDownRight}
            />
        </div>
    )
}

export default ActuatorButtons