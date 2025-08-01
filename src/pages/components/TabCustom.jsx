

const TabCustom = ({ title, isActive, onClick }) => {
  return (
    <div 
      className={`w-full p-2 cursor-pointer transition-all duration-300 font-cormorant text-xl ${
        isActive 
          ? 'text-amber-400 font-semibold' 
          : 'text-white'
      }`}
      onClick={onClick}
    >
      <p className="font-semibold italic">{title}</p>
    </div>
  );
};

export default TabCustom; 