import NextLink from "next/link";

export default function Link(props: { href: string; children: React.ReactNode }) {
	return <NextLink href={props.href}>{props.children}</NextLink>;
}
