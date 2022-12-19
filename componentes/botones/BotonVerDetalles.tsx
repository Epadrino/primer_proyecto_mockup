import styled from 'styled-components';
import { device } from '../../utils/devices';

const BotonDeVerDetalles = styled.button`
	font-family: 'kallisto';
	font-weight: 700;
	background: transparent;
	color: ${(props) => props.theme.colors.secondary};
	&:hover {
		background: ${(props) => props.theme.backgrounds.secondary};
		color: ${(props) => props.theme.colors.tertiary};
	}
	@media ${device.mobileXS} {
		width: 143px;
		height: 40px;
		border-radius: 3px;
		font-size: 12px;
		line-height: 14px;
		border: 1px solid ${(props) => props.theme.backgrounds.secondary};
		border-radius: 3px;
	}
	@media ${device.tablet} {
		width: 169px;
		height: 47px;
		border-radius: 5px;
		font-size: 20px;
		line-height: 24px;
		border: 2px solid ${(props) => props.theme.backgrounds.secondary};
		border-radius: 5px;
	}
`;

export const BotonVerDetalles = () => {
	return <BotonDeVerDetalles>Ver detalles</BotonDeVerDetalles>;
};
