const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#0747a6] max-w-full px-2 py-3">
      <h1 className="first-letter:text-4xl text-2xl font-semibold text-slate-200">
        Design Ease
      </h1>

      <button className="bg-blue-600 text-slate-200 px-5 py-2 rounded-lg hover:bg-blue-400">
        Import
      </button>
    </div>
  );
};

export default Navbar;
