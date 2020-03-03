import React from 'react';
import { Nav } from './Nav';
import Typed from 'react-typed';

export const Header = () => (
	<section id='header' className='wrapper'>
		<div id='logo'>
			<h1>
				<a href='#'>Frinze Erin Lapuz</a>
			</h1>
			<p className='subtitle'>
				Software Engineering and Data Science Student
				{/* <Typed strings={['Software Engineering and Data Science Student']} typeSpeed={100} cursorChar={' '}/> */}
			</p>
			<p>
				<Typed strings={['The Digital World Is My Canvas', "Learning MERN Full-Stack Development", "Learning Tableau, Python and R", "Learning UIPath RPA"]} typeSpeed={25} backSpeed={20}  backDelay= {2000} cursorChar={'\u2588'}   loop/>
			</p>
		</div>

		<Nav></Nav>
	</section>
);
