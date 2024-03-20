import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Work", 45],
  ["Sleep", 6],
  ["Eat", 8],
  ["Study", 30],
  ["Cook", 7],
  ["Relax", 4],
];
export const options = {
  title: "Chart Activity",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
export default App;