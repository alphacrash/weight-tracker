import {
    CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title,
    Tooltip
} from "chart.js";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeights } from "../slices/weightSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const dispatch = useDispatch();
  const weightData = useSelector((state) => state.weight.value);

  useEffect(() => {
    dispatch(fetchWeights());
  }, [dispatch]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "SUD - Weight Change",
      },
    },
  };

  const labels = weightData.map((weight) => weight?.date);
  const expected = weightData.map((weight) => weight?.expected);
  const actual = weightData.map((weight) => weight?.actual !== 0 ? weight.actual : null);

  const data = {
    labels,
    datasets: [
      {
        label: "Actual",
        data: actual,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Expected",
        data: expected,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
