import styled from 'styled-components';
import { device } from '../../utils/devices';

const BotonDeContinuar = styled.button`
	font-family: 'kallisto';
	font-weight: 700;
	background: transparent;
	border: 2px solid ${(props) => props.theme.backgrounds.secondary};
	border-radius: 5px;
	color: ${(props) => props.theme.colors.secondary};
	&:hover {
		background: ${(props) => props.theme.backgrounds.secondary};
		color: ${(props) => props.theme.colors.tertiary};
	}
	@media ${device.mobileXS} {
		height: 33px;
		width: 118px;
		border-radius: 3px;
		font-size: 12px;
		line-height: 14px;
	}
	@media ${device.tablet} {
		height: 66px;
		width: 217px;
		border-radius: 5px;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const BotonContinuar = () => {
	return <BotonDeContinuar>Continuar</BotonDeContinuar>;
};
