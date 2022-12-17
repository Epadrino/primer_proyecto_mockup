import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ContenedordeInputCodigo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	position: relative;
`;

export const ContenedordeInputUsuario = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	position: relative;

	@media ${device.mobileXS} {
		margin-top: 25px;
		margin-bottom: 17px;
	}
	@media ${device.tablet} {
		margin-top: 32px;
		margin-bottom: 23px;
	}
`;
export const ContenedordeInputCorreo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	position: relative;

	@media ${device.mobileXS} {
		margin-top: 22px;
		margin-bottom: 17px;
	}
	@media ${device.tablet} {
		margin-top: 23px;
		margin-bottom: 5px;
	}
`;

export const ContenedorInfoIcon = styled.div`
	@media ${device.mobileXS} {
		position: absolute;
		left: 87.5%;
		top: 41%;
		z-index: 1;
	}
	@media ${device.tablet} {
		position: absolute;
		left: 90%;
		top: 47%;
		z-index: 1;
	}
`;

export const ContenedorIconCheck = styled.div`
	@media ${device.mobileXS} {
		position: absolute;
		left: 87.5%;
		top: 25%;
		z-index: 1;
	}
	@media ${device.tablet} {
		position: absolute;
		left: 90%;
		top: 27%;
		z-index: 1;
	}
`;

export const InputDeCodigo = styled.input`
	font-family: 'abel';
	font-weight: 400;

	background: rgba(138, 138, 138, 0.5);
	border-radius: 50px;
	border: 2px solid transparent;

	text-align: center;

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.secondary};
		outline: none;
	}
	::placeholder {
		color: ${(props) => props.theme.colors.primary};
	}
	@media ${device.mobileXS} {
		height: 39px;
		width: 277px;
		font-size: 12px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		height: 59px;
		width: 504px;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const InputDeUsuario = styled.input`
	font-family: 'abel';
	font-weight: 400;

	background: rgba(138, 138, 138, 0.5);
	border-radius: 50px;
	border: 2px solid transparent;

	text-align: center;

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.secondary};
		outline: none;
	}
	::placeholder {
		color: ${(props) => props.theme.colors.primary};
	}
	@media ${device.mobileXS} {
		height: 39px;
		width: 277px;
		font-size: 12px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		height: 64px;
		width: 517px;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const InputDeCorreo = styled.input`
	font-family: 'abel';
	font-weight: 400;

	background: rgba(138, 138, 138, 0.5);
	border-radius: 50px;
	border: 2px solid transparent;

	text-align: center;

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.secondary};
		outline: none;
	}
	::placeholder {
		color: ${(props) => props.theme.colors.primary};
	}
	@media ${device.mobileXS} {
		height: 39px;
		width: 277px;
		font-size: 12px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		height: 64px;
		width: 517px;
		font-size: 20px;
		line-height: 24px;
	}
`;
