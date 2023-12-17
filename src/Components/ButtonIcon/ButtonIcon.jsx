const ButtonIcon = ({ text, icon: Icon, onClick }) => {
  return (
    <button
      className="w-1/2 p-2 flex justify-between rounded items-center shadow mx-4 border-2 border-primary md:mt-2 md:w-full md:h-full"
      onClick={onClick}
    >
      <p className="text-base font-medium m-1 md:text-lg">{text}</p>
      <Icon className="w-8 h-8 md:w-16 md:h-16" />
    </button>
  );
};

export default ButtonIcon;
