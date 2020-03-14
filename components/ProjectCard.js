import React from 'react';
import LazyLoad from 'react-lazyload';

const Project = ({ image, category, title, description, link = '' }) => {
	return (
		<div className='col-4 col-12-medium'>
			<section className='highlight'>
				<a href={link} className='image featured'>
					<LazyLoad height={200} offset={450}>
						<img src={image} alt='' />
					</LazyLoad>
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
