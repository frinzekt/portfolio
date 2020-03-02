import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectList = [
	{
		image: 'images/projects/home2health.png',
		category: 'Web Application',
		title: 'Home2Health',
		description: 'A Coders For Causes (CFC) project on a blog supporting resource sharing for the Home2Health research group',
		link: 'https://home2health.codersforcauses.org/'
	},
	{
		image: 'images/projects/CTR-projection.png',
		category: 'Project Management',
		title: 'Cost Time Resource Visualization',
		description: 'Development of a data visualization tool for Project Management: Cost-Time-Resource Projection',
		link: 'https://github.com/frinzekt/CTR-Projection'
	},
	{
		image: 'images/projects/resume-skills-import.png',
		category: 'Robotics Process Automation',
		title: 'Resume Skills Data Entry',
		description:
			'This project is focused on trying to create a faster way into listing the skills of multiple candidate and entering it to a system. The solution that was chosen is Robotics Process Automation (RPA)',
		link: 'https://github.com/frinzekt/resume-skills-import'
	},
	{
		image: 'images/projects/Cafe-Au-Lait.png',
		category: 'WinForms',
		title: 'Cafe Au Lait',
		description:
			'A Year 11 Project that outlines creation of interface based on the number of items in a database (number of coffee button is determined by the number of coffee in the database)',
		link: 'https://github.com/frinzekt/Cafe-au-lait-Ordering-System'
	},
	{
		image: 'images/projects/graph-lab.png',
		category: 'Web App and Data Visualization',
		title: 'GraphLab',
		description: 'A personal project that helps visualize 3D mathematical projections',
		link: 'https://github.com/frinzekt/graph-lab-react'
	}
];
export const Highlights = () => (
	<section id='highlights' className='wrapper style3'>
		<a className='anchor' id='Projects'></a>
		<div className='title'>Projects</div>
		<div className='container'>
			<div className='row aln-center'>
				{projectList.map(({ image, category, title, description }) => (
					<ProjectCard image={image} category={category} title={title} description={description} key={title}></ProjectCard>
				))}
			</div>
			<div className='row aln-center'>
				<div className='col-12 col-12-medium'>
					<section className='highlight'>
						<ul className='actions'>
							<li>
								<a href='https://github.com/frinzekt' className='button style1'>
									Learn More
								</a>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	</section>
);
