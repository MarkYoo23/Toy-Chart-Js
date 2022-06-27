import { ChartOptions, LogarithmicScaleOptions, TimeScaleOptions, TimeUnit } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TimeLineElement } from '../../models/TimeLineElement';

interface IProps {
  elementsA: TimeLineElement[];
  elementsB: TimeLineElement[];
}

const SpanTimeLineChart: React.FC<IProps> = (props: IProps) => {
  const labels = props.elementsA.map((row) => row.spanTime);
  const valuesA = props.elementsA.map((row) => row.value);
  const valuesB = props.elementsB.map((row) => row.value);

  const options: ChartOptions<'line'> = {
    plugins: {
      title: {
        text: 'Chart.js Time Scale',
        display: false,
      },
    },
    scales: {
      y1: {
        min: -200,
        max: 100,
        position: 'left',
      } as LogarithmicScaleOptions,
      y2: {
        min: -750,
        max: 25,
        position: 'right',
      } as LogarithmicScaleOptions,
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
        time: {
          tooltipFormat: 'DD H',
          unit: 'second' as TimeUnit,
        },
      } as TimeScaleOptions,
    },
  };

  const data = {
    labels,
    datasets: [
      {
        yAxisID: 'y1',
        label: 'Dataset A',
        data: valuesA,
      },
      {
        yAxisID: 'y2',
        label: 'Dataset B',
        data: valuesB,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default SpanTimeLineChart;
