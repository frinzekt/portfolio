import React from 'react';
import ProjectCard from '../components/ProjectCard';
import PROJECTS from "../data/Projects.json"

export const Highlights = () => (
	<section id='highlights' className='wrapper style3'>
		<a className='anchor' id='Projects'></a>
		<div className='title'>Projects</div>
		<div className='container'>
			<div className='row aln-center'>
				{PROJECTS.map(project => (
					<ProjectCard {...project} key={project.title}></ProjectCard>
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
