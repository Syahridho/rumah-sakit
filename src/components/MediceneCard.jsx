import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

const MedicaneCard = ({ id, title, stock, onDelete, onEdit }) => {
  return (
    <div
      id={id}
      className="flex items-center justify-between py-2 px-3 border border-slate-300 rounded shadow col-span-8 md:col-span-4 lg:col-span-2 xl:col-span-2"
    >
      <div>
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm font-semibold">Stock : {stock}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-red-500 p-2 text-white font-bold rounded-full border border-red-500 shadow transition duration-200 hover:bg-white hover:text-red-500"
          onClick={onDelete}
        >
          <AiOutlineDelete />
        </button>
        <button
          className="bg-blue-500 p-2 text-white font-bold rounded-full border border-blue-500 shadow transition duration-200 hover:bg-white hover:text-blue-500"
          onClick={onEdit}
        >
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
};

export default MedicaneCard;
