import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			tertiary: string;
			header: string;
		};
		backgrounds: {
			primary: string;
			secondary: string;
			tertiary: string;
		};
	}
}
