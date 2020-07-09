import React from 'react';
import { MdPlayArrow } from 'react-icons/md';
import { BsBell, BsChevronDown } from 'react-icons/bs';

import logoRico from '../../assets/rico-logo.svg';

import { Container, ButtonHeader, ButtonAjuda, ShowMenuArea } from './styles';

const Header = () => (
	<Container>
		<div className="containerElementsLeft">
			<img src={logoRico} alt="Rico" />
			<ButtonHeader>
				Acessar Home Broker <MdPlayArrow size={15} />
			</ButtonHeader>
		</div>

		<div className="containerElementsRight">
			<ButtonAjuda>Ajuda</ButtonAjuda>
			<BsBell size={25} color="#ff5300" />
			<ShowMenuArea>
				Olá, <span>PHILIPE</span> <BsChevronDown size={18} color="#f8f8f8" />
			</ShowMenuArea>
		</div>
	</Container>
);

export default Header;
