import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
 				<div className="pa3 Tilt-inner"><img style={{maxWidth: '100%', maxHeight: '100%'}} alt='logo' src={brain}/></div>
			</Tilt>
		</div>
	);
}

export default Logo;