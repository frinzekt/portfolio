import { useState, useEffect } from 'react';
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

const PieChart = () => {
	const [data, setData] = useState([
		{ name: 'web', percent: '50' },
		{ name: 'wdb', percent: '50' }
	]);
	useEffect(() => {
		async function fetchData() {
			let response = await fetch(
				'https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@frinzekt/839aee37-1006-4024-901f-25eaa4cc1962.json'
			);
			response = await response.json();
			response = response.data; // structure of API
			return response;
		}
		fetchData().then(data => setData(data));
	}, []);

	return (
		<div style={{ height: '95%', width: '95%' }}>
			<AccumulationChartComponent
				id='pieChart'
				legendSettings={{ visible: true, position: 'Right' }}
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
						dataSource={data}
						xName='name'
						yName='percent'
						explode={true}
						explodeIndex={2}
						explodeOffset={'10%'}
						dataLabel={{
							visible: true,
							position: 'Inside',
							name: 'percent',
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
// WAKATIME CODING HOURS: https://wakatime.com/share/@frinzekt/d956df10-f7ca-4970-ab80-efbcf83e19be.json
class Wakatime extends React.Component {
	state = {
		data: [
			{ name: 'Web Application', percent: 37 },
			{ name: 'Data Visualization', percent: 17 },
			{ name: 'Both', percent: 19 }
		]
	};

	async componentDidMount() {
		let data = await fetch('https://wakatime.com/share/@frinzekt/839aee37-1006-4024-901f-25eaa4cc1962.json');
		data = await data.json();
		data = data.data; // structure of API
		this.setState({ data });
	}

	render() {
		return <React.Fragment>{this.state.data && <PieChart data={this.state.data}></PieChart>}</React.Fragment>;
	}
}

export default PieChart;
