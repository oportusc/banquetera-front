

const TabCustom = ({ title, isActive, onClick }) => {
  return (
    <div 
      className={`px-4 py-2 rounded-t-md cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-amber-500 text-black font-semibold' 
          : 'bg-slate-600 text-gray-300 hover:bg-slate-500'
      }`}
      onClick={onClick}
    >
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};

export default TabCustom; 