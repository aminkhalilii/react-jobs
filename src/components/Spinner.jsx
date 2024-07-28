import ClipLoader from "react-spinners/ClipLoader";
const override = {
	display: "block",
	margin: "100px auto",
};
const Spinner = ({ loading }) => {
	return (
		<ClipLoader
			color="#4338ca"
			size={150}
			cssOverride={override}
			loading={loading}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
};

export default Spinner;
