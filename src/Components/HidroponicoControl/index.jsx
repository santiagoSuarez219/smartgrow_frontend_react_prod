const HidroponicoControl = () => {
  const inputClass =
    "w-9 h-full p-1 mr-4 text-sm rounded bg-gray-100 text-center";
  const labelClass = "mr-1 text-sm text-left";

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-8 p-2 w-full flex flex-col border-[1px] rounded-md shadow-md">
      <h2 className="font-semibold mb-2 text-base">Control Hidroponico</h2>
      <form onSubmit={onSubmit} className="flex w-full items-center justify-between">
        <div className="flex">
            <label htmlFor="ph" className={labelClass}>
            PH
            </label>
            <input type="number" id="ph" className={inputClass} />
            <label htmlFor="electrocondutividad" className={labelClass}>
            Electroconductividad
            </label>
            <input type="number" id="electroconductividad" className={inputClass} />
        </div>
        <button  type="submit" className="bg-secondary text-sm p-1 w-1/5 max-w-[30%] rounded left-0">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default HidroponicoControl;
