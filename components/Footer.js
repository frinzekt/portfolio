import React from 'react';
import { Contact } from './Contact';

const Footer = () => {
	return (
		<section id='footer' class='wrapper'>
			{/* <!-- Scripts --> */}
			<script src='assets/js/jquery.min.js'></script>
			<script src='assets/js/jquery.dropotron.min.js'></script>
			<script src='assets/js/browser.min.js'></script>
			<script src='assets/js/breakpoints.min.js'></script>
			<script src='assets/js/util.js'></script>
			<script src='assets/js/main.js'></script>

			{/* <!-- Footer --> */}
			<section id='footer' class='wrapper'>
				<div class='title'>The Rest Of It</div>
				<div class='container'>
					<header class='style1'>
						<h2>Ipsum sapien elementum portitor?</h2>
						<p>
							Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.
							<br />
							Nam pharetra laoreet imperdiet volutpat etiam feugiat.
						</p>
					</header>
					<div class='row'>
						<div class='col-6 col-12-medium'>
							{/* <!-- Contact Form --> */}
							<Contact></Contact>
						</div>
						<div class='col-6 col-12-medium'>
							{/* <!-- Contact --> */}
							<section class='feature-list small'>
								<div class='row'>
									<div class='col-6 col-12-small'>
										<section>
											<h3 class='icon solid fa-home'>Mailing Address</h3>
											<p>
												Untitled Corp
												<br />
												1234 Somewhere Rd
												<br />
												Nashville, TN 00000
											</p>
										</section>
									</div>
									<div class='col-6 col-12-small'>
										<section>
											<h3 class='icon solid fa-comment'>Social</h3>
											<p>
												<a href='#'>@untitled-corp</a>
												<br />
												<a href='#'>linkedin.com/untitled</a>
												<br />
												<a href='#'>facebook.com/untitled</a>
											</p>
										</section>
									</div>
									<div class='col-6 col-12-small'>
										<section>
											<h3 class='icon solid fa-envelope'>Email</h3>
											<p>
												<a href='#'>info@untitled.tld</a>
											</p>
										</section>
									</div>
									<div class='col-6 col-12-small'>
										<section>
											<h3 class='icon solid fa-phone'>Phone</h3>
											<p>(000) 555-0000</p>
										</section>
									</div>
								</div>
							</section>
						</div>
					</div>
					<div id='copyright'>
						<ul>
							<li>&copy; Untitled.</li>
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
