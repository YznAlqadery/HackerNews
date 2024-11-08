import { BiMenu, BiX } from "react-icons/bi";

export default function MenuButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-1 top-4 p-3 text-2xl text-slate-300 hover:text-slate-100 transition-colors duration-200"
    >
      {isOpen ? <BiX /> : <BiMenu />}
    </button>
  );
}
