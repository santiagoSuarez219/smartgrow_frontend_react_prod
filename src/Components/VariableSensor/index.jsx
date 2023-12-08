const VariableSensor = ({ parametro, valor, icon: Icon, iconColor, unidades }) => {
  return (
    <div className='flex justify-between p-1 mt-2'>
      <div className='flex items-center'>
        <Icon className={`w-8 h-8 ${iconColor}`} />
        <p className='ml-2'>{parametro}</p>
      </div>
      <div className='flex'>
        <p>{valor} {unidades}</p>
      </div>
    </div>
  );
};

export default VariableSensor;

