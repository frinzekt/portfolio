import React, { Fragment } from 'react';
import Head from '../components/head';
import Footer from '../components/Footer';

const _app = ({ Component }) => {
	return (
		<Fragment>
			<Head></Head>
			<body class='homepage is-preload'>
				<div id='page-wrapper'>
					<Component></Component>
					<Footer></Footer>
				</div>
			</body>
		</Fragment>
	);
};

export default _app;
