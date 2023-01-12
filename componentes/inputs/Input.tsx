import { Contenedor, ContenedorInput } from './StyledInputs';

interface Props {
	placeholder: string;
}
export const Input = ({ placeholder }) => {
	return (
		<Contenedor>
			<ContenedorInput type='text' placeholder={placeholder} />
		</Contenedor>
	);
};
