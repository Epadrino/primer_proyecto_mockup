import styled from 'styled-components';

export const Enlaces = styled.a`
	font-family: 'Kallisto';
	font-size: 20px;
	font-weight: 700;
	text-align: left;
	text-decoration: none;

	color: ${(props) => props.theme.colors.primary};
`;
