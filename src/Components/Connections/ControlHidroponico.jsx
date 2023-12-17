import React from "react";
import reactimg from '../../assets/react.svg'

const ControlHidroponico = (props) => {
  const inputClass =
    "w-9 h-full p-1 mr-1 text-sm rounded bg-gray-100 text-center lg:mr-6";
  const labelClass = "mr-6 text-sm text-left lg:mr-1";

  let handleSubmit = (e) => {
    let res; 
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ph: e.target.ph.value,
        electroconductividad: e.target.electroconductividad.value,
      }),
      
    };
    try {
        //TODO cambiar la url de peticiones
        res = fetch(`http://localhost:3000`, requestOptions)
        .then(response => response.json())
        console.log(res)
    } catch (error) {
        console.log(error);
    }
    
  };

  return (
    <div className="m-2 p-2 border-[1px] rounded-md shadow-md lg:w-[50%] lg:absolute lg:right-0">
      <h2 className="font-semibold mb-2 text-base">Control Hidroponico</h2>
      <form
        action="POST"
        className="flex w-full items-center justify-between md:block"
        onSubmit={handleSubmit}
      >
        <div className="flex ">
          <div className="flex lg:flex-row-reverse">
            <input type="number" id="ph" className={inputClass} />
            <label htmlFor="ph" className={labelClass}>
            <span className="hidden lg:inline-block">SetPoint PH</span><span className="inline-block lg:hidden" >PH</span>
            </label>
          </div>
          <div className="flex lg:flex-row-reverse">
            <input type="number" id="electroconductividad" className={inputClass} />
            <label htmlFor="electrocondutividad" className={labelClass}>
              <span className="hidden lg:inline-block">SetPoint EC</span><span className="inline-block lg:hidden" >Electroconductividad</span>
            </label>
          </div>
        </div>
        <button className="flex bg-primary text-sm p-1 w-1/5 max-w-[30%] rounded left-0 justify-center  md:my-2 lg:w-full md:justify-between">
          Enviar
          <img src={reactimg} className="w-6 hidden md:inline-block" alt=""/>
        </button>
      </form>
    </div>
  );
};

export default ControlHidroponico;
