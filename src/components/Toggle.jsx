import { useToggle } from "../hooks/useToggle";

const Toggle = () => {
	const { state: show, toggle: akbar } = useToggle(false);
	return (
		<div>
			<button onClick={akbar}>{show ? "hide" : "show"}</button>
			{show && (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
					consectetur commodi omnis, recusandae, vel odit, quo velit molestiae
					dolor obcaecati enim hic nostrum quidem cumque soluta porro non illum
					quod.
				</p>
			)}
		</div>
	);
};
export default Toggle;
