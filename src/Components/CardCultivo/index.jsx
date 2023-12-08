import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { MdCo2 } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import VariableSensor from "../VariableSensor"
import { WiHumidity } from "react-icons/wi";
import { PiPlant } from "react-icons/pi";

const CardCultivo = () => {
    return (
        <div className='flex flex-col p-2 shadow'>
            <div className='flex justify-between'>
                <p className='font-bold text-base'>Cultivo</p>
                <PiPlant className='text-green-900' />
            </div>
            <VariableSensor parametro={'Temperatura'} valor = {30} icon={ WiThermometer } iconColor={'text-green-900'} unidades={'°C'} />
            <VariableSensor parametro={'Humedad'} valor = {100} icon={ WiRaindrop } iconColor={'text-blue-900'} unidades={'%'} />
            <VariableSensor parametro={'Dioxido de Carbono'} valor = {100} icon={ MdCo2 } iconColor={'text-green-900'} unidades={'ppm'} />
            <VariableSensor parametro={'PPFD'} valor = {2} icon={ WiDaySunny } iconColor={'text-yellow-500'} unidades={'umol/m2'} />
            <VariableSensor parametro={'PPF'} valor = {2} icon={ WiDaySunny } iconColor={'text-yellow-500'} unidades={'umol'} />
            <VariableSensor parametro={'PPFD'} valor = {2} icon={ WiHumidity } iconColor={'text-blue-500'} unidades={'%'} />
        </div>
    )
}

export default CardCultivo