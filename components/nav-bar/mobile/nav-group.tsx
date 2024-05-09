import { Link } from "@/types/nav-bar-links";
import NavBarLink from "../nav-bar-link";


export default function NavGroup({ name, links, onClick }: { name: string; links: Link[]; onClick: () => void }) {
	return (
		<div className="collapse rounded-none">
			<input type="checkbox" />
			<div className="collapse-title text-xl font-medium">{name}</div>
			<div className="collapse-content">
				{links.map((link) => (
					<NavBarLink key={link.href} href={link.href} onClick={onClick}>
						{link.children}
					</NavBarLink>
				))}
			</div>
		</div>
	);
}