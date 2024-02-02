import TitleText from "./title-text";

export default function DesktopTitleComponent() {
	return (
		<div className="absolute  top-[25%] lg:top-[20%] left-0 w-[calc(100vw-450px)] lg:w-[calc(100vw-550px)]">
			<TitleText />
		</div>
	);
}
