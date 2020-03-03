import React, { Fragment } from 'react';
import Head from '../components/head';
import Footer from '../components/Footer';
import ImageOptimize from 'next-optimized-images';

const _app = ({ Component }) => {
	return (
		<Fragment>
			<Head title='Frinze Lapuz - Homepage'></Head>
			<body className='homepage is-preload'>
				<div id='page-wrapper'>
					<Component></Component>
					<Footer></Footer>
				</div>
			</body>
		</Fragment>
	);
};

export default _app;
