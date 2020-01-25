import React from 'react';
export const Intro = () => (
	<section id='intro' className='wrapper style1'>
		<div className='title'>About Me</div>
		<div className='container'>
			<p className='style1'>
				<strong>My Main Passion Is Creating Application Software and Visualizations</strong>
			</p>
			{/* <p className='style2'></p> */}
			<p className='style3'>
				Currently in software engineering, I am spending a lot of time practicing <strong>Full-Stack Development with MERN</strong>{' '}
				(MongoDB, Express, React, Node) along with different libraries and frameworks associated with it. A list of a couple of tools I
				learned how to use is <a href=''>here</a>.
			</p>
			<br></br>
			<p className='style3'>
				With Data Science, I am spending a lot of time with <strong>Python and JavaScript Libraries</strong> to use API or manipulate data
				in order for visualization. Here are some of my awesome <a href=''>visualization</a>.
			</p>
			<ul className='actions'>
				<li>
					<a href='#main' className='button style3 large' >
						More
					</a>
				</li>
			</ul>
		</div>
	</section>
);
