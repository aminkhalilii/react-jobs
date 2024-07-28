import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import { fetchApi } from "../service";
const JobListings = ({ isHome = false }) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setloading] = useState(true);
	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const data = await fetchApi("jobs");
				setJobs(data);
			} catch (error) {
				console.log("Error fetching data", error);
			} finally {
				setloading(false);
			}
		};
		fetchJobs();
	}, []);
	const jobsList = isHome ? jobs.slice(0, 3) : jobs;
	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
					Browse Jobs
				</h2>

				{loading ? (
					<Spinner loading={loading} />
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{jobsList.map((job) => (
							<JobListing key={job.id} job={job} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default JobListings;
