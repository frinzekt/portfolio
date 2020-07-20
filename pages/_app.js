import React, { Fragment, useEffect } from 'react';
import Head from '../components/head';
import Footer from '../components/Footer';
import ReactGa from 'react-ga';

const _app = ({ Component }) => {
	useEffect(() => {
		ReactGa.initialize('UA-162451015-1');

		//REPORT PAGE VIEW
		ReactGa.pageview('/');
	}, []);
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
