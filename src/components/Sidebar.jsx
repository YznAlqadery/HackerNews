import { BiNews, BiQuestionMark, BiShow } from "react-icons/bi";
import { BsFillLuggageFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa"; // Import social icons
import SideItem from "./SideItem";
import MenuButton from "./MenuButton";

const navItems = [
  { title: "News", icon: <BiNews />, to: "/news" },
  { title: "Ask", icon: <BiQuestionMark />, to: "/ask" },
  { title: "Show", icon: <BiShow />, to: "/show" },
  { title: "Jobs", icon: <BsFillLuggageFill />, to: "/jobs" },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-slate-200 transition-all duration-300 ${
        isOpen ? "w-[350px]" : "w-[60px]"
      } flex flex-col justify-between`} // Use flex-col and justify-between to push content to the bottom
    >
      <nav className="flex items-center justify-between p-2">
        {isOpen && (
          <h1 className="text-slate-300 text-2xl font-bold mb-3 text-center p-3">
            HackerNews
          </h1>
        )}
        <MenuButton onClick={toggleSidebar} isOpen={isOpen} />
      </nav>

      {isOpen && (
        <>
          <hr className="border-t border-slate-700" />
          <ul className="p-2">
            {navItems.map((item) => (
              <SideItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                to={item.to}
                toggleSidebar={toggleSidebar}
              />
            ))}
          </ul>
        </>
      )}

      {/* Social links section */}
      <div
        className={`p-4 flex justify-center gap-4 mt-auto ${
          isOpen ? "flex-row" : "flex-col"
        } transition-all duration-300`}
      >
        {" "}
        {/* mt-auto pushes it to the bottom */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-blue-600"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-blue-400"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-blue-700"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-gray-600"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </aside>
  );
}
