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

const PieChart = ({ data }) => {

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

export default Wakatime;
