import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toast } from "flowbite-react";
const AddJobPage2 = ({ addJobSubmit }) => {
	const navigate = useNavigate();
	const schema = yup.object().shape({
		type: yup.string().required("type is required"),
		title: yup.string().min(4).max(20).required(),
		description: yup.string().required(),
		salary: yup.string().required(),
		location: yup.string().required(),
		company: yup.string().required(),
		company_description: yup.string().required(),
		contact_email: yup.string().email().required(),
		contact_phone: yup.string().required(),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onFormSubmit = (data) => {
		console.log("the form is submited", data);
		addJobSubmit(data);
		Toast.success("Job create successfully");

		navigate("/jobs");
	};
	// const submitForm = (e) => {
	// 	e.preventDefault();
	// 	const newJob = {
	// 		title: fields.title || "",
	// 		type: fields.type || "",
	// 		location: fields.location || "",
	// 		description: fields.description || "",
	// 		salary: fields.salary || "",
	// 		company: {
	// 			name: fields.company || "",
	// 			description: fields.company_description || "",
	// 			contactEmail: fields.contact_email || "",
	// 			contactPhone: fields.contact_phone || "",
	// 		},
	// 	};
	// 	addJobSubmit(newJob);
	// 	toast.success("Job create successfully");

	// 	navigate("/jobs");
	// };
	return (
		<section className="bg-indigo-50">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
					<form onSubmit={handleSubmit(onFormSubmit)}>
						<h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

						<div className="mb-4">
							<label
								htmlFor="type"
								className="block text-gray-700 font-bold mb-2"
							>
								Job Type
							</label>
							<select
								{...register("type")}
								id="type"
								name="type"
								className="border rounded w-full py-2 px-3"
							>
								<option value="">select one option</option>
								<option value="Full-Time">Full-Time</option>
								<option value="Part-Time">Part-Time</option>
								<option value="Remote">Remote</option>
								<option value="Internship">Internship</option>
							</select>
							{errors.type && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.type.message}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label className="block text-gray-700 font-bold mb-2">
								Job Listing Name
							</label>
							<input
								{...register("title")}
								type="text"
								id="title"
								name="title"
								className="border rounded w-full py-2 px-3 mb-2"
								placeholder="eg. Beautiful Apartment In Miami"
							/>
							{errors.title && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.title?.message}
								</p>
							)}
						</div>
						<div className="mb-4">
							<label
								htmlFor="description"
								className="block text-gray-700 font-bold mb-2"
							>
								Description
							</label>
							<textarea
								{...register("description")}
								id="description"
								name="description"
								className="border rounded w-full py-2 px-3"
								rows="4"
								placeholder="Add any job duties, expectations, requirements, etc"
							></textarea>
							{errors.description && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.description?.message}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label
								htmlFor="type"
								className="block text-gray-700 font-bold mb-2"
							>
								Salary
							</label>
							<select
								{...register("salary")}
								id="salary"
								name="salary"
								className="border rounded w-full py-2 px-3"
							>
								<option value="">select one option</option>
								<option value="Under $50K">Under $50K</option>
								<option value="$50K - 60K">$50K - $60K</option>
								<option value="$60K - 70K">$60K - $70K</option>
								<option value="$70K - 80K">$70K - $80K</option>
								<option value="$80K - 90K">$80K - $90K</option>
								<option value="$90K - 100K">$90K - $100K</option>
								<option value="$100K - 125K">$100K - $125K</option>
								<option value="$125K - 150K">$125K - $150K</option>
								<option value="$150K - 175K">$150K - $175K</option>
								<option value="$175K - 200K">$175K - $200K</option>
								<option value="Over $200K">Over $200K</option>
							</select>
							{errors.salary && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.salary?.message}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label className="block text-gray-700 font-bold mb-2">
								Location
							</label>
							<input
								{...register("location")}
								type="text"
								id="location"
								name="location"
								className="border rounded w-full py-2 px-3 mb-2"
								placeholder="Company Location"
							/>
							{errors.location && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.location?.message}
								</p>
							)}
						</div>

						<h3 className="text-2xl mb-5">Company Info</h3>

						<div className="mb-4">
							<label
								htmlFor="company"
								className="block text-gray-700 font-bold mb-2"
							>
								Company Name
							</label>
							<input
								{...register("company")}
								type="text"
								id="company"
								name="company"
								className="border rounded w-full py-2 px-3"
								placeholder="Company Name"
							/>
							{errors.company && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.company?.message}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label
								htmlFor="company_description"
								className="block text-gray-700 font-bold mb-2"
							>
								Company Description
							</label>
							<textarea
								{...register("company_description")}
								id="company_description"
								name="company_description"
								className="border rounded w-full py-2 px-3"
								rows="4"
								placeholder="What does your company do?"
							></textarea>
							{errors.company_description && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.company_description?.message}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label
								htmlFor="contact_email"
								className="block text-gray-700 font-bold mb-2"
							>
								Contact Email
							</label>
							<input
								{...register("contact_email")}
								type="email"
								id="contact_email"
								name="contact_email"
								className="border rounded w-full py-2 px-3"
								placeholder="Email address for applicants"
							/>
							{errors.contact_email && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.contact_email?.message}
								</p>
							)}
						</div>
						<div className="mb-4">
							<label
								htmlFor="contact_phone"
								className="block text-gray-700 font-bold mb-2"
							>
								Contact Phone
							</label>
							<input
								{...register("contact_phone")}
								type="tel"
								id="contact_phone"
								name="contact_phone"
								className="border rounded w-full py-2 px-3"
								placeholder="Optional phone for applicants"
							/>
							{errors.contact_phone && (
								<p className="text-red-700 bg-red-100 my-2 rounded-sm text-sm p-1">
									{errors.contact_phone?.message}
								</p>
							)}
						</div>

						<div>
							<button
								className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Add Job
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AddJobPage2;
