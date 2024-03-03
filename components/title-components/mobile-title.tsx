import Timer from "./timer";
import TitleText from "./title-text";

export default function MobileTitleComponent() {
	return (
		<div className="w-full h-fit flex items-center justify-center">
			<div className="w-fit mt-24">
				<TitleText />
				<Timer />
			</div>
		</div>
	);
}
