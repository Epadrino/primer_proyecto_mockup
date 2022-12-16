import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { Enlaces } from './StyledEnlaces';

interface Props {
	text: string;
	href: string;
}

export const EnlaceMenu: FC<PropsWithChildren<Props>> = ({ text, href }) => {
	return (
		<Link href={href}>
			<Enlaces>{text}</Enlaces>
		</Link>
	);
};
