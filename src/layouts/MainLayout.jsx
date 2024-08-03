import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "../components/Toggle";
const MainLayout = () => {
	return (
		<>
			{/* <Toggle /> */}
			<Navbar />
			<Outlet />
			<ToastContainer />
		</>
	);
};

export default MainLayout;
