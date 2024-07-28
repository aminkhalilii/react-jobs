import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import { fetchApi } from "./service";

const App = () => {
	// add new job
	const addJob = async (newJob) => {
		await fetchApi("jobs", {
			method: "Post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newJob),
		});
		return;
	};
	// delete job
	const deleteJob = async (id) => {
		await fetchApi(`jobs/${id}`, {
			method: "DELETE",
		});
		return;
	};
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/jobs" element={<JobsPage />} />
				<Route
					path="/jobs/:id"
					loader={jobLoader}
					element={<JobPage deleteJob={deleteJob} />}
				/>
				<Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
};

export default App;
