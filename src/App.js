import React from "react";
import { Chart } from "react-google-charts";
import "./App.css"; // Подключаем файл стилей

export const data = [
  ["Activity", "Time"],
  ["👩‍💻​ Work", 45],
  ["💤​ Sleep", 6],
  ["🍔​ Eat", 8],
  ["📚​ Study", 28],
  ["👩‍🍳​ Cook", 7],
  ["💃​ Relax", 6],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};
export function App() {
  return (
    <div className="container">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"600px"} // Измените ширину диаграммы по вашему усмотрению
        height={"500px"} // Измените высоту диаграммы по вашему усмотрению
      />
    </div>
  );
}
export default App;