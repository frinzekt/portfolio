import React from 'react';
import { Features } from './Features';
export const Main = () => (
	<section className='wrapper style2'>
		<a className='anchor' id='main'></a>
		<div className='title'>Some Statistics About Me</div>
		<div className='container'>
			{/* <a href='#' className='image featured'>
				<img src='images/pic01.jpg' alt='' />
			</a> */}

			<Features></Features>
		</div>
	</section>
);
