import { useQuery } from "react-query";
import { fetchApi } from "../service";
import { toast } from "react-toastify";

export const useGetJobs = () => {
	const { data, isLoading, refetch, isError } = useQuery(["jobs"], async () => {
		return await fetchApi("jobs");
	});
	const refetchData = () => {
		toast.success("data is refetched");
		refetch();
	};
	return { data, isLoading, refetchData, isError };
};
