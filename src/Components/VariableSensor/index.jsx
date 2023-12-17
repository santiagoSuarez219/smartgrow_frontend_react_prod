const 
VariableSensor = ({ parametro, icon: Icon, iconColor, unidades, valor }) => {
  return (
    <div className="flex justify-between p-1 mt-2 hover:bg-slate-100 hover:rounded">
      <div className="flex items-center">
        <Icon className={`w-8 h-8 md:w-12 md:h-12 ${iconColor}`} />
        <p className="ml-2 md:text-base lg:text-lg">{parametro}</p>
      </div>
      <div className="flex ">
        <p className="md:text-base lg:text-lg">
          {valor} {unidades}
        </p>
      </div>
    </div>
  );
};

export default VariableSensor;

