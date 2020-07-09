import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Body = styled.div`
	display: flex;
`;

export const MainBody = styled.main`
	display: flex;
	flex-direction: column;
	padding: 40px 0 0 20px;
`;

export const Title = styled.h1`
	font-family: 'Raleway';
	font-weight: 200;
	font-size: 28px;
	color: #666;
`;

export const TitleSession = styled.h2`
	font-family: 'Raleway';
	font-weight: 400;
	font-size: 20px;
	margin-top: 30px;
	color: #ff5300;
`;

export const MenuArea = styled.div`
	display: flex;
`;

export const MenuSelect = styled.div`
	border-bottom: 50px solid #ffffff;
	border-left: 0px solid transparent;
	border-right: 40px solid transparent;
	width: 200px;

	position: relative;
	display: flex;

	& + div {
		border-bottom: 50px solid #f8f8f8;

		strong {
			color: #878787;
		}
	}

	strong {
		position: absolute;
		margin: 20px 0 0 8px;
		color: #ff5300;
		font-size: 14px;
	}
`;

export const InformationsArea = styled.div`
	display: flex;
	align-items: center;

	width: 810px;
	height: 245px;
	padding: 30px;

	background: #ffffff;
`;

export const TextInformationsArea = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background: #ffffff;
	color: #666;
	font-family: 'Raleway';
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;

	strong {
		font-size: 16px;
	}
`;

export const ButtonArea = styled.div`
	display: flex;
	align-items: center;

	height: 80px;
	border-left: 1px solid #dbdbdb;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 170px;
	height: 45px;

	background: #16baef;
	color: #fff;
	border: none;
	border-radius: 5px;
	font-weight: bold;
	margin-left: 8px;
`;
