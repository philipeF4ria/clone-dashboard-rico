import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	flex-direction: column;

	width: 280px;
	padding: 40px;
`;

export const MenuHeader = styled.nav`
	display: flex;
	flex-direction: column;

	span {
		display: flex;

		font-family: 'Open Sans';
		font-size: 14px;
		color: #00002b;

		padding: 5px 8px;
		width: 200px;
		height: 35px;

		cursor: pointer;

		svg {
			margin-right: 10px;
		}

		&:hover {
			background: #fafafa;
		}
	}
`;

export const MenuBody = styled.nav`
	display: flex;
	flex-direction: column;

	span {
		display: flex;
		justify-content: space-between;

		font-family: 'Open Sans';
		font-size: 14px;
		color: #00002b;

		padding: 5px 8px;
		width: 200px;
		height: 35px;

		cursor: pointer;

		svg {
			margin-right: 10px;
		}

		&:hover {
			background: #fafafa;
		}
	}
`;

export const Text = styled.strong`
	font-size: 10px;
	font-family: 'Open Sans';
	color: #716b84;
	padding: 5px 8px;
	margin-bottom: 10px;
	border-bottom: 0.8px solid #716b84;
`;
