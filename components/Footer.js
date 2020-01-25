import React from 'react';
import { Contact } from './Contact';

const Footer = () => {
	return (
		<section id='footer' className='wrapper'>
			{/* <!-- Footer --> */}
			<section id='footer' className='wrapper'>
				<div className='title'>Other Details</div>
				<div className='container'>
					<header className='style1' id='Contact'>
						<h2>Need to Contact Me?</h2>
						<p>
							Just fill in the details below or contact me through any communication media below
							<br />I will try to get back to you as soon as I can
						</p>
					</header>
					<div className='row'>
						{/* <div className='col-6 col-12-medium'>
							<Contact></Contact>
						</div> */}
						<div className='col-12 col-12-medium'>
							{/* <!-- Contact --> */}
							<section className='feature-list small'>
								<div className='row aln-center'>
									<div className='col-4 col-12-small'>
										<section>
											<h3 className='icon solid fa-comment'>Social</h3>
											<p>
												<a href='https://www.linkedin.com/in/frinze-erin-lapuz/'>LinkedIn</a>
												<br />
												<a href='https://github.com/frinzekt'>Github</a>
											</p>
										</section>
									</div>
									<div className='col-4 col-12-small'>
										<section>
											<h3 className='icon solid fa-envelope'>Email</h3>
											<p>
												<a href='mailto:frinze.lapuz@gmail.com'>frinze.lapuz@gmail.com</a>
												<br></br>
												<a href='mailto:22711649@student.uwa.edu.au'>22711649@student.uwa.edu.au</a>
											</p>
										</section>
									</div>
								</div>
							</section>
						</div>
					</div>
					<div id='copyright'>
						<ul>
							<li>&copy; 2020 - {new Date().getFullYear()} Frinze Lapuz </li>
							<li>
								Design: <a href='http://html5up.net'>HTML5 UP</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Footer;
