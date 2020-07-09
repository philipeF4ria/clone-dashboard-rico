import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import {
	Container,
	PatrimonyCard,
	Text,
	Button,
	MyAccountCard,
} from './styles';

const UserAccountMenu = () => (
	<Container>
		<PatrimonyCard>
			<span>
				<Text>
					Seu patrimônio <MdArrowDropDown color="#ff5300" size={16} />
				</Text>
			</span>
			<Button>Resgatar</Button>
		</PatrimonyCard>
		<MyAccountCard>
			<Text>
				Minha conta Rico <MdArrowDropDown color="#ff5300" size={16} />
			</Text>
			<strong>Banco</strong>
			<strong>Agência</strong>
			<strong>Conta</strong>
			<Button>Como tranferir para Rico</Button>
		</MyAccountCard>
	</Container>
);

export default UserAccountMenu;
