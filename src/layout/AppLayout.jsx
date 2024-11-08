import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <main className=" flex overflow-y-auto ">
      {/* Sidebar: Fixed on the left */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main content: Adjusted based on sidebar state */}
      <div
        className={`h-screen bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300 flex-1 ${
          isOpen ? "ml-[350px]" : "ml-[60px]"
        } w-full`}
      >
        <div className="h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
