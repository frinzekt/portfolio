import React from 'react';

const Project = ({ image, category, title, description }) => {
	return (
		<div className='col-4 col-12-medium'>
			<section className='highlight'>
				<a href='#' className='image featured'>
					<img src={image} alt='' />
				</a>
				<h3>
					<a href='#'>
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
