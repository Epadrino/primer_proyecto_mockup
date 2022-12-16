import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Enlaces = styled.a`
	font-family: 'Kallisto';
	font-size: 15px;
	font-weight: 500;
	text-align: center;
	text-decoration: none;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
