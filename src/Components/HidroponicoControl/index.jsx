const HidroponicoControl = () => {
  const inputClass =
    "w-16 h-full p-1 mr-4 text-sm rounded bg-gray-100 text-center md:right-0 md:max-h-8";
  const labelClass = "mr-1 text-sm text-left md:text-lg";

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-8 p-2 w-full flex flex-col border-[1px] rounded-md shadow-md md:w-full md:justify-between" >
      <h2 className="font-semibold mb-2 text-base md:text-xl">Control Hidroponico</h2>
      
      <form onSubmit={onSubmit} className="flex w-full items-center justify-between md:flex-col md:h-[80%] md:items-start">
        <div className="flex md:flex-col md:justify-around md:h-full">
            <div className="flex w-full md:justify-between">
              <label htmlFor="ph" className={labelClass}>
              <span className="hidden md:inline-block">Set Point </span>PH:
              </label>
              <input type="number" id="ph" className={inputClass} />
            </div>
            <div className="flex w-full md:justify-between">
              <label htmlFor="electrocondutividad" className={labelClass}>
              Electroconductividad:
              </label>
              <input type="number" id="electroconductividad" className={inputClass} />
            </div>
            <div className="hidden md:block"></div>
        </div>
        <button  type="submit" className="bg-secondary text-sm p-1 w-1/5 max-w-[30%] rounded left-0 md:mt-2 md:w-1/2 md:max-w-[50%] md:text-lg">
          Enviar
        </button>

      </form>
    </div>
  );
};

export default HidroponicoControl;
