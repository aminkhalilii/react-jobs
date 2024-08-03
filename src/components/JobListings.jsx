import { useGetJobs } from "../hooks/useGetJobs";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
const JobListings = ({ isHome = false }) => {
	// const {data:jobs,isLoading,isError,error,refetch} = useQuery(["cat"],async()=>{
	// 	 return await fetchApi("jobs");

	//  })
	const { data: jobs, isLoading, isError, error, refetchData } = useGetJobs();

	// useEffect(() => {
	// 	const fetchJobs = async () => {
	// 		try {
	// 			const data = await fetchApi("jobs");
	// 			setJobs(data);
	// 		} catch (error) {
	// 			console.log("Error fetching data", error);
	// 		} finally {
	// 			setloading(false);
	// 		}
	// 	};
	// 	fetchJobs();
	// }, []);
	let jobsList = [];
	if (jobs) {
		jobsList = isHome ? jobs?.slice(0, 3) : jobs;
	}

	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
					Browse Jobs
				</h2>
				{isError && error.message}

				{isLoading ? (
					<Spinner loading={isLoading} />
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{jobsList.map((job) => (
							<JobListing key={job.id} job={job} />
						))}
					</div>
				)}
			</div>
			<button
				onClick={refetchData}
				className="p-2 m-4 bg-green-900 rounded-md mx-auto text-white"
			>
				refetch data
			</button>
		</section>
	);
};

export default JobListings;
