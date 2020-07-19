import React from 'react';
import { Features } from './Features';
import WakatimePie from './WakatimePie';
import WakatimeBar from './WakatimeBar';
export const Main = () => (
	<section className='wrapper style2'>
		<a className='anchor' id='main'></a>
		<div className='title'>Some Statistics About Me</div>
		<div className='container' style={{ textAlign: 'center' }}>
			{/* <a href='#' className='image featured'>
				<img src='images/pic01.jpg' alt='' />
			</a> */}

			{/* <Features></Features> */}
			<a className='anchor' id='statistics'></a>
			<div className='container'>
				<h3>Coding Activity For The Last 30 Days</h3>
				<WakatimeBar></WakatimeBar>
			</div>
			<div className='container'>
				<h3>Languages Used For The Last 30 Days</h3>
				<WakatimePie></WakatimePie>
			</div>
		</div>
	</section>
);
