const ButtonIcon = ({ text, icon: Icon, onClick }) => {
  return (
    <button
      className="w-1/2 p-2 flex justify-between rounded items-center shadow border-2 border-primary hover:bg-primary hover:text-white"
      onClick={onClick}
    >
      <p className="text-sm font-medium m-1">{text}</p>
      <Icon className="w-8 h-8" />
    </button>
  );
};

export default ButtonIcon;
