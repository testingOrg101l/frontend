import Navbar from "./Navbar";
import LeftSideBar from "./SiderBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "@/context/redux";

export default function Layout() {
  console.log("Layout rendered"); // Debugging log
  const isSideBareCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );
  return (
    <div className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
      <LeftSideBar />
      <div
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSideBareCollapsed ? "  md:pl-24 " : "md:pl-72"
        }`}
      >
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
