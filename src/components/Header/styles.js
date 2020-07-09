import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 53px;
	padding: 0 40px 0 40px;

	background: #0e0a52;
	color: #fff;

	img {
		width: 54px;
		height: 22px;
		cursor: pointer;
	}

	.containerElementsLeft {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 400px;
	}

	.containerElementsRight {
		display: flex;
		justify-content: space-between;
		align-items: center;

		svg {
			margin: 0 25px 0 25px;
			cursor: pointer;
		}
	}
`;

export const ButtonHeader = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 217px;
	height: 33px;

	background: #ff5300;
	border: none;
	border-radius: 4px;
	color: #f8f8f8;
	font-weight: bold;
	font-size: 15.4px;
	font-family: Arial, Helvetica, sans-serif;
	transition: background-color 0.3s;

	&:hover {
		background: ${shade(0.3, '#ff5300')};
		color: ${shade(0.3, '#f8f8f8')};
	}

	svg {
		margin-left: 8px;
	}
`;

export const ButtonAjuda = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 90px;
	height: 35px;
	border-radius: 18px;
	border: none;
	background: #0e0a52;
	color: #f8f8f8;
	font-family: 'Open Sans';
	font-weight: 600;
	transition: background-color color 0.3s;
	cursor: pointer;

	&:hover {
		background: #f8f8f8;
		color: #0e0a52;
	}
`;

export const ShowMenuArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 210px;
	height: 50px;
	padding: 14px;
	background: #090738;
	color: #f8f8f8;
	font-family: 'Open Sans';
	font-weight: 300;
	font-size: 14px;
	cursor: pointer;

	span {
		color: #ff5300;
	}
`;
