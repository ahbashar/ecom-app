import React from 'react';

import { Link } from 'react-router-dom';

import {ReactComponent as logo} from '../../res/crown.svg.svg';

import './header.scss';

const Header = () =>(
	<div className='header'>
		<Link className='logo-container' to='/'>
			<logo className='logo' 
			/>
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
		</div>
	</div>
);

export default Header;
