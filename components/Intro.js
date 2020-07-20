import React from 'react';
export const Intro = () => (
	<section id='about-me' className='wrapper style1'>
		<div className='title'>About Me</div>
		<div className='container'>
			<a className='anchor' id='aboutMe'></a>
			<p className='style3'>
				I am a problem solver and my main toolset are software and data. I try not to talk too much about myself, as I let my
				accomplishments talk about me because I believe that actions speak louder than words. So why not take a look at the list of my{' '}
				<a href='#Projects'>projects</a>.
			</p>
			<br />
			<p className='style3'>
				Currently in software engineering, I am spending a lot of time creating Full-Stack Software to connect devices across the world
				which includes digital embedded electrical systems. My most prominent project is the{' '}
				<a href='#IoT-Sensor-Interface'>IoT Sensor Interface</a>.
				{/* A list of a couple of tools I learned how to use is <a href=''>here</a>. */}
			</p>
			<br></br>
			<p className='style3'>
				With Data Science, I am spending a lot of time with data analytics, connectors and visualizations. I have a lot of projects around
				that, but maybe you'd like to see some of my <a href='#statistics'>personal statistics</a>.
				{/* Here are some of my awesome <a href=''>visualization</a>. */}
			</p>
			{/* <ul className='actions'>
				<li>
					<a href='#main' className='button style3 large'>
						More
					</a>
				</li>
			</ul> */}
		</div>
	</section>
);
