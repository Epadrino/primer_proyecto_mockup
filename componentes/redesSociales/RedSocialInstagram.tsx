import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { EnlaceRedes } from './StyledRedesSociales';

interface Props {
	href: string;
}

export const RedSocialInstagram: FC<PropsWithChildren<Props>> = ({ href }) => {
	return (
		<Link href={href} passHref legacyBehavior>
			<EnlaceRedes>
				<Image
					src='/images/iconos/icon_instagram.png'
					alt='Default Image'
					width={22.86}
					height={22.86}
				/>
			</EnlaceRedes>
		</Link>
	);
};