const Functionality = () => {
  return (
    <div className="bg-blue-400 h-[80vh] w-[400px] text-center mt-5">
      <select
        defaultValue="Choose font"
        className="block mx-auto w-40 font-semibold"
        name="name"
        id=""
      >
        <option className="disable">Choose font</option>
        <option>Italic</option>
        <option>Normal</option>
        <option>Roboto</option>
      </select>
      <div className="mt-3 flex gap-10 justify-center">
        <div>
          <label className="block" htmlFor="">
            Size:
          </label>
          <input className="w-16" defaultValue={16} type="number" />
        </div>
        <div>
          <label className="block" htmlFor="">
            Color:
          </label>
          <input className="w-16" type="color" />
        </div>
      </div>
      {/* <button className="bg-[#0747a6] text-white px-5 py-2 rounded-md mt-20">
        Add Text
      </button> */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="bg-[#0747a6] text-white px-5 py-2 rounded-md mt-20"
        onClick={() => document.getElementById('text-modal').showModal()}
      >
        Add Text
      </button>
      <dialog id="text-modal" className="w-[400px] min-h-60">
        <div className=" w-11/12 max-w-5xl p-5">
          <textarea
            className="border-2 "
            defaultValue="Add your text here"
            name="text"
            id=""
            cols="40"
            rows="8"
          ></textarea>
          <div className="modal-action">
            <form method="dialog">
              <button className="bg-[#0747a6] text-white px-5 py-2 rounded-md mr-3">
                Add
              </button>
              <button className="bg-[#0747a6] text-white px-5 py-2 rounded-md">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Functionality;
