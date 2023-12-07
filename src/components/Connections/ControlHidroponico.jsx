import React from "react";

const ControlHidroponico = () => {
  const inputClass =
    "w-9 h-full p-1 mr-1 text-sm rounded bg-gray-100 text-center";
  const labelClass = "mr-6 text-sm text-left";

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
        res = fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        console.log(res)
    } catch (error) {
        console.log(error);
    }
    
  };

  return (
    <div className="m-2 p-2 border-[1px] rounded-md shadow-md">
      <h2 className="font-semibold mb-2 text-base">Control Hidroponico</h2>
      <form
        action="POST"
        className="flex w-full items-center justify-between md:block"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <div>
            <input type="number" id="ph" className={inputClass} />
            <label htmlFor="ph" className={labelClass}>
              PH
            </label>
          </div>
          <div>
            <input type="number" id="electroconductividad" className={inputClass} />
            <label htmlFor="electrocondutividad" className={labelClass}>
              Electroconductividad
            </label>
          </div>
        </div>
        <button className="bg-primary text-sm p-1 w-1/5 max-w-[30%] rounded left-0">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ControlHidroponico;
