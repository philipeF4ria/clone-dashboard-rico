import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
`;

export const PatrimonyCard = styled.div`
	display: flex;
	flex-direction: column;

	background: #fff;
	height: 180px;
	width: 200px;
	padding: 20px;
	margin: 8px 0 0 8px;

	span {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Text = styled.strong`
	font-size: 12px;
	font-family: 'Open Sans';
	font-weight: 400;
	color: #716b84;
	padding-bottom: 8px;
	margin-bottom: 20px;
	border-bottom: 0.8px solid #716b84;
`;

export const Button = styled.button`
	background: #ff5300;
	color: #fff;
	font-weight: bold;
	font-size: 12px;
	border: none;
	border-radius: 15px;

	width: 170px;
	height: 30px;
`;

export const MyAccountCard = styled.div`
	display: flex;
	flex-direction: column;

	background: #fff;
	height: 350px;
	width: 200px;
	padding: 20px;
	margin: 8px 0 0 8px;

	strong {
		font-family: 'Open Sans';
		font-weight: 400;
		font-size: 12px;
		color: #716b84;
	}

	button {
		margin-top: 50px;
	}
`;
