import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <div className="bg-[#040606] min-h-screen w-full flex flex-col">
      <div className="max-w-[1600px] w-full mx-auto">
        <nav className="bg-white">
          <Navbar />
        </nav>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}