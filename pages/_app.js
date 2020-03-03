import React, { Fragment } from 'react';
import Head from '../components/head';
import Footer from '../components/Footer';

const _app = ({ Component }) => {
	return (
		<Fragment>
			<Head title='Frinze Lapuz - Homepage'></Head>
			<div className='homepage is-preload'>
				<div id='page-wrapper'>
					<Component></Component>
					<Footer></Footer>
				</div>
			</div>
		</Fragment>
	);
};

export default _app;
