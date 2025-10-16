import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 bg-gray-100 min-h-screen p-6">
         <p>Conteúdo principal</p>
        <Outlet />
      </div>
    </div>
  );
}
