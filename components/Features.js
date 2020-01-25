import React, { Fragment } from 'react';
import { DashboardLayoutComponent, PanelsDirective, PanelDirective } from '@syncfusion/ej2-react-layouts';
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	Legend,
	LineSeries,
	PieSeries,
	ChartTheme,
	AccumulationTooltip,
	SeriesCollectionDirective,
	AccumulationTheme,
	AccumulationDataLabel,
	ChartComponent,
	ILoadedEventArgs,
	IAccLoadedEventArgs,
	ColumnSeries,
	Category,
	SeriesDirective,
	Tooltip,
	DataLabel,
	DateTime,
	SplineAreaSeries,
	Inject
} from '@syncfusion/ej2-react-charts';

const visitorChart = () => {
	const visitors = [
		{ month: 'Jan', visitors: 35 },
		{ month: 'Feb', visitors: 28 },
		{ month: 'Mar', visitors: 34 },
		{ month: 'Apr', visitors: 32 },
		{ month: 'May', visitors: 40 },
		{ month: 'Jun', visitors: 32 },
		{ month: 'Jul', visitors: 35 },
		{ month: 'Aug', visitors: 55 },
		{ month: 'Sep', visitors: 38 },
		{ month: 'Oct', visitors: 30 },
		{ month: 'Nov', visitors: 25 },
		{ month: 'Dec', visitors: 32 }
	];
	const visitorsUnique = [
		{ month: 'Jan', visitors: 3 },
		{ month: 'Feb', visitors: 2 },
		{ month: 'Mar', visitors: 3 },
		{ month: 'Apr', visitors: 3 },
		{ month: 'May', visitors: 4 },
		{ month: 'Jun', visitors: 3 },
		{ month: 'Jul', visitors: 3 },
		{ month: 'Aug', visitors: 5 },
		{ month: 'Sep', visitors: 3 },
		{ month: 'Oct', visitors: 3 },
		{ month: 'Nov', visitors: 2 },
		{ month: 'Dec', visitors: 3 }
	];
	const tooltip = { enable: true, shared: true };
	const primaryyAxis = { labelFormat: '{value}' };
	const primarxyAxis = { valueType: 'Category' };
	const legendSettings = { visible: true };
	const marker = { dataLabel: { visible: false } };

	return (
		<div style={{ height: '95%', width: '95%', margin: 'auto' }}>
			<ChartComponent
				id='visitorsChart'
				primaryXAxis={primarxyAxis}
				legendSettings={legendSettings}
				primaryYAxis={primaryyAxis}
				tooltip={tooltip}
				chartArea={{ border: { width: 0.5 } }}
			>
				<Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]} />
				<SeriesCollectionDirective>
					<SeriesDirective dataSource={visitors} xName='month' yName='visitors' name='Visitors' marker={marker} />
					<SeriesDirective dataSource={visitorsUnique} xName='month' yName='visitors' name='Unique Visitors' marker={marker} />
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

const pieChart = () => {
	return (
		<div style={{ height: '95%', width: '95%' }}>
			<AccumulationChartComponent
				id='pieChart'
				legendSettings={{ visible: true, position: 'Bottom' }}
				enableSmartLabels={true}
				height='100%'
				width='100%'
				enableAnimation={true}
				selectionMode={'Point'}
				center={{ x: '50%', y: '50%' }}
				tooltip={{ enable: true, header: '<b>${point.x}</b>', format: 'Composition : <b>${point.y}%</b>' }}
			>
				<Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
				<AccumulationSeriesCollectionDirective>
					<AccumulationSeriesDirective
						dataSource={[
							{ x: 'Web Application', y: 37, text: '60%' },
							{ x: 'Data Visualization', y: 17, text: '10%' },
							{ x: 'Both', y: 19, text: '20%' }
						]}
						xName='x'
						yName='y'
						explode={true}
						explodeIndex={2}
						explodeOffset={'10%'}
						dataLabel={{
							visible: true,
							position: 'Inside',
							name: 'text',
							font: {
								fontWeight: '600'
							}
						}}
						radius='100%'
					></AccumulationSeriesDirective>
				</AccumulationSeriesCollectionDirective>
			</AccumulationChartComponent>
		</div>
	);
};
const card1 = () => (
	<div className='card'>
		<Fragment>
			<span className='e-icons session'></span>
			<div className='card-content text'>Session</div>
			<div className='card-content number'>124,444</div>
		</Fragment>
	</div>
);

const cellSpacing = [5, 5];
export const Features = () => (
	<section id='features'>
		<style jsx>{`
			#defaultLayout {
				padding: 10px;
			}

			#defaultLayout .e-panel .e-panel-container {
				vertical-align: middle;
				font-weight: 600;
				font-size: 20px;
				text-align: center;
			}

			.content {
				line-height: 90px;
			}
		`}</style>

		<header className='style1'>
			<h2>Dolor consequat feugiat amet veroeros</h2>
			<p>Feugiat dolor nullam orci pretium phasellus justo</p>
		</header>
		{/* <div className='feature-list'>
			<div className='row'>
				<div className='col-6 col-12-medium'>
					<section>
						<h3 className='icon fa-comment'>Mattis velit diam vulputate</h3>
						<p>
							Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.
						</p>
					</section>
				</div>
				<div className='col-6 col-12-medium'>
					<section>
						<h3 className='icon solid fa-sync'>Lorem ipsum dolor sit veroeros</h3>
						<p>
							Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.
						</p>
					</section>
				</div>
				<div className='col-6 col-12-medium'>
					<section>
						<h3 className='icon fa-image'>Pretium phasellus justo lorem</h3>
						<p>
							Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.
						</p>
					</section>
				</div>
				<div className='col-6 col-12-medium'>
					<section>
						<h3 className='icon solid fa-cog'>Tempus sed pretium orci</h3>
						<p>
							Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.
						</p>
					</section>
				</div>
				<div className='col-6 col-12-medium'>
					<section>
						<h3 className='icon solid fa-wrench'>Aliquam consequat et feugiat</h3>
						<p>
							Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.
						</p>
					</section>
				</div>
				<div className='col-6 col-12-medium'>
					<section>
						<h3 className='icon solid fa-check'>Dolore laoreet aliquam mattis</h3>
						<p>
							Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.
						</p>
					</section>
				</div>
			</div>
		</div> */}
		<div className='control-section'>
			<DashboardLayoutComponent id='target_dash' cellSpacing={cellSpacing} columns={6}>
				<PanelsDirective>
					{/* MAP */}

					{/* Project Categories Pie Chart */}
					{/* VISITORS */}
					<PanelDirective sizeX={2} sizeY={1} row={0} col={0} content={card1}></PanelDirective>
					<PanelDirective sizeX={2} sizeY={1} row={0} col={2} content={card1}></PanelDirective>
					<PanelDirective sizeX={2} sizeY={1} row={0} col={4} content={card1}></PanelDirective>
					<PanelDirective
						sizeX={2}
						sizeY={2}
						row={1}
						col={0}
						content={visitorChart}
						header={() => <div>Visitors By Type</div>}
					></PanelDirective>
					<PanelDirective
						sizeX={2}
						sizeY={2}
						row={1}
						col={2}
						content={pieChart}
						header={() => <div>Project Categories</div>}
					></PanelDirective>
				</PanelsDirective>
			</DashboardLayoutComponent>
		</div>
		<ul className='actions special'>
			<li>
				<a href='#' className='button style1 large'>
					Get Started
				</a>
			</li>
			<li>
				<a href='#' className='button style2 large'>
					More Info
				</a>
			</li>
		</ul>
	</section>
);
