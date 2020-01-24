import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Intro } from '../components/Intro';
import { Highlights } from '../components/Highlights';

const Home = () => (
	<Fragment>
		{/* <!-- Header -->  */}
		<Header></Header>

		{/* <!-- Intro -->   */}
		<Intro></Intro>

		{/* <!-- Main -->  */}
		<Main></Main>

		{/* <!-- Highlights -->  */}
		<Highlights></Highlights>
	</Fragment>
);

export default Home;
