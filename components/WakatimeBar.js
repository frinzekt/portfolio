import { useState, useEffect } from 'react';
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	Legend,
	Chart,
	BarSeries,
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

const BarChart = () => {
	const initializer = new Array(30).fill({});
	const initDataSet = initializer.map(dataSet => {
		return {
			text: Math.random()
				.toString(36)
				.substring(7),
			y: Math.random() * 5
		};
	});
	const [data, setData] = useState(initDataSet);
	useEffect(() => {
		async function fetchData() {
			let response = await fetch(
				'https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@frinzekt/d956df10-f7ca-4970-ab80-efbcf83e19be.json'
			);
			response = await response.json();
			response = response.data; // structure of API

			response = response.map(datum => {
				return {
					y: datum.grand_total.total_seconds / 60 / 60,
					x: datum.range.date,
					text: datum.range.text.length > 9 ? datum.range.text.substring(0, datum.range.text.length - 5) : datum.range.text
				};
			});
			return response;
		}
		fetchData().then(data => setData(data));
	}, []);

	return (
		<div style={{ height: '95%', width: '95%' }}>
			<ChartComponent
				id='chart'
				primaryXAxis={{ title: 'Dates', valueType: 'Category', isIndexed: true, interval: 7 }}
				primaryYAxis={{ title: 'Time Spent (Hours)' }}
				tooltip={{ enable: true, header: '<b>${point.x}</b>', format: 'Composition : <b>${point.y} hours</b>' }}
				width='90%'
			>
				<Inject services={[ColumnSeries, Category, Tooltip]}></Inject>
				<SeriesCollectionDirective>
					<SeriesDirective dataSource={data} xName='text' yName='y' name='Chart1' type='Column'></SeriesDirective>
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};
// WAKATIME CODING HOURS: https://wakatime.com/share/@frinzekt/d956df10-f7ca-4970-ab80-efbcf83e19be.json

export default BarChart;
