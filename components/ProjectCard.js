import React from 'react';

const Project = ({ image, category, title, description, link = '' }) => {
	return (
		<div className='col-4 col-12-medium'>
			<section className='highlight'>
				<a href={link} className='image featured'>
					<img src={image} alt='' />
				</a>
				<h3>
					<a href={link}>
						{category} <br></br>
						{title}
					</a>
				</h3>
				<p>{description}</p>
			</section>
		</div>
	);
};

export default Project;
