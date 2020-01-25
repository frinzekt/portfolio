import React from 'react';
import { Nav } from './Nav';
export const Header = () => (
	<section id='header' className='wrapper'>

		<div id='logo'>
			<h1>
				<a href='index.html'>Frinze Erin Lapuz</a>
			</h1>
			<p class='subtitle'>Software Engineering and Data Science Student</p>
			<p>The Digital World is My Canvas</p>
		</div>

		<Nav></Nav>
	</section>
);
