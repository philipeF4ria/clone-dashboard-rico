import React from 'react';

import Header from '../../components/Header';
import MainMenu from '../../components/MainMenu';
import UserAccountMenu from '../../components/UserAccountMenu';

import {
	Container,
	Body,
	MainBody,
	Title,
	TitleSession,
	MenuArea,
	MenuSelect,
	InformationsArea,
	TextInformationsArea,
	ButtonArea,
	Button,
} from './styles';

const Dashboard = () => (
	<Container>
		<Header />
		<Body>
			<MainMenu />
			<MainBody>
				<Title>Minha Área Exclusiva</Title>
				<TitleSession>Destaques</TitleSession>
				<MenuArea>
					<MenuSelect>
						<strong>RENDA VARIÁVEL</strong>
					</MenuSelect>
					<MenuSelect>
						<strong>FUNDO IMOBILIÁRIO</strong>
					</MenuSelect>
					<MenuSelect>
						<strong>TESOURO DIRETO</strong>
					</MenuSelect>
				</MenuArea>
				<InformationsArea>
					<TextInformationsArea>
						<strong>
							Opere mais e deixe o custo da plataforma por nossa conta!
						</strong>
						<br /> Na Rico, quem opera o valor da plataforma em corretagem é
						isento da mensalidade dela. E agora quem possui RLP ativo, além da
						corretagem zero também terão isenção da mensalidade da plataforma
						contratada, desde que operem pelo menos 200 mini contratos.
					</TextInformationsArea>
					<ButtonArea>
						<Button>SAIBA MAIS</Button>
					</ButtonArea>
				</InformationsArea>
			</MainBody>
			<UserAccountMenu />
		</Body>
	</Container>
);

export default Dashboard;
