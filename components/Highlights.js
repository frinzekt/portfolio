import React from 'react';
import Project from '../components/Project';

const projectList = [
	{
		image: 'images/pic02.jpg',
		category: 'Web Application',
		title: 'Home2Health',
		description: 'A blog supporting resource sharing for research group'
	},
	{
		image: 'images/pic02.jpg',
		category: 'Project Management',
		title: 'Cost Time Resource Visualization',
		description: 'A blog supporting resource sharing for research group'
	},
	{
		image: 'images/pic02.jpg',
		category: 'Robotics Process Automation',
		title: 'Resume Skills Data Entry',
		description: 'A blog supporting resource sharing for research group'
	},
	{
		image: 'images/pic02.jpg',
		category: 'WinForms',
		title: 'Cafe Au Lait',
		description: 'A blog supporting resource sharing for research group'
	},
	{
		image: 'images/pic02.jpg',
		category: 'Web App and Data Visualization',
		title: 'GraphLab',
		description: 'A blog supporting resource sharing for research group'
	}
];
export const Highlights = () => (
	<section id='highlights' className='wrapper style3'>
		<a className='anchor' id='Projects'></a>
		<div className='title'>Projects</div>
		<div className='container'>
			<div className='row aln-center'>
				{projectList.map(({ image, category, title, description }) => (
					<Project image={image} category={category} title={title} description={description}></Project>
				))}
				<div className='row aln-center'>
					<div className='col-12 col-12-medium'>
						<section className='highlight'>
							<ul className='actions'>
								<li>
									<a href='#' className='button style1'>
										Learn More
									</a>
								</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	</section>
);
