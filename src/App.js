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
import AddJobPage2 from "./pages/AddJobPage2";
import { fetchApi } from "./service";
import EditJobPage from "./pages/EditJobPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./store";
const App = () => {
	// add new job
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
			mutations: {},
		},
	});
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
	const editJob = async (job) => {
		await fetchApi(`jobs/${job.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(job),
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
				<Route
					path="/add-job"
					element={<AddJobPage2 addJobSubmit={addJob} />}
				/>
				<Route
					path="/jobs/edit/:id"
					loader={jobLoader}
					element={<EditJobPage editJobSubmit={editJob} />}
				/>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);
	return (
		<QueryClientProvider client={client}>
			<Provider store={store }>
				<RouterProvider router={router} />
			</Provider>
		</QueryClientProvider>
	);
};

export default App;
