import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		outline: 0;
	}

	body {
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		background: #eeeeee;
	};

	button {
		cursor: pointer;
	}
`;
