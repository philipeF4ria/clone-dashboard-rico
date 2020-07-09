import React from 'react';
import { FaHome, FaTv } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';

import { Container, MenuHeader, MenuBody, Text } from './styles';

const MainMenu = () => (
	<Container>
		<MenuHeader>
			<span>
				<FaHome size={15} />
				Área Exclusiva
			</span>
			<span>
				<FaTv size={15} />
				Aprenda a investir
			</span>
			<span>
				<FiMonitor size={15} />
				Investv
			</span>
		</MenuHeader>
		<MenuBody>
			<Text>INVESTIMENTO</Text>
			<span>
				Ações <MdArrowDropDown color="#ff5300" size={16} />
			</span>
			<span>COE</span>
			<span>Tesouro Direto</span>
			<span>
				Renda Fixa <MdArrowDropDown color="#ff5300" size={16} />
			</span>
			<span>Fundos de Investimento</span>
			<span>DNA</span>
			<span>
				BM&F <MdArrowDropDown color="#ff5300" size={16} />
			</span>
			<span>Ofertas Públicas</span>
			<span>Opções</span>
			<Text>PARA VOCÊ</Text>
			<span>Serviços Premium</span>
		</MenuBody>
	</Container>
);

export default MainMenu;
