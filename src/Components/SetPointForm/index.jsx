import React, { useContext } from "react";
import { SmartgrowContext } from "../../SmartgrowContext";

const SetPointForm = ({ setpoint_label }) => {
  const { setPointPh, setSetPointPh, setPointEc, setSetPointEc } =
    useContext(SmartgrowContext);
  const [newValue, setNewValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    // setOpenModal(false);
    console.log("Cancelar");
  };

  return (
    <form
      className="w-11/12 flex flex-col justify-center items-center"
      onSubmit={onSubmit}
    >
      <label>Escribe el valor del setpoint para {setpoint_label}</label>
      <label htmlFor="" type="number" placeholder="0.00"></label>
      <textarea // input multilinea
        placeholder="Cortar cebolla para el almuerzo"
        value={newValue}
        onChange={onChange}
      />
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default SetPointForm;
