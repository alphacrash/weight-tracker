import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import weightData from "../data/data.json";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'SUD - Weight Change',
        },
    },
};

const labels = weightData.map(weight => weight.date);
const expected = weightData.map(weight => weight.expected);

let lastHigh = 0;
const actual = weightData.map(weight => {
    if (weight.actual !== 0) {
        lastHigh = weight.actual;
    }
    if (weight.actual !== 0) {
        return weight.actual;
    } else {
        return lastHigh;
    }
});

const dateLine = weightData.map(weight => new Date(weight.date + new Date().getFullYear()) <= new Date() ? 72 : 84)

export const data = {
    labels,
    datasets: [
        {
            label: 'Actual',
            data: actual,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Expected',
            data: expected,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Date',
            data: dateLine,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
    ],
};

export function LineChart() {
    return <Line options={options} data={data} />;
}
