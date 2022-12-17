import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { EnlaceRedes } from './StyledRedesSociales';

interface Props {
	href: string;
}

export const RedSocialGmail: FC<PropsWithChildren<Props>> = ({ href }) => {
	return (
		<Link href={href} passHref legacyBehavior>
			<EnlaceRedes>
				<Image
					src='/images/iconos/icon_gmail.png'
					alt='Default Image'
					width={22.86}
					height={17.14}
				/>
			</EnlaceRedes>
		</Link>
	);
};