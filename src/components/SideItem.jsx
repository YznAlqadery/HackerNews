import { NavLink } from "react-router-dom";

export default function SideItem({ title, icon, toggleSidebar }) {
  return (
    <NavLink
      to={`/${title.toLowerCase()}`}
      className={({ isActive }) =>
        `flex items-center p-4 hover:bg-slate-800 rounded transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-red-400 to-red-500 text-white"
            : "text-slate-200"
        }`
      }
      onClick={toggleSidebar}
    >
      <li key={title} className="flex items-center text-lg">
        <span className="mr-4">{icon}</span>
        <span>{title}</span>
      </li>
    </NavLink>
  );
}
