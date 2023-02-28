import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const [total, setTotal] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/budget/balance")
        .then((res) => res.json())
        .then((data) => {
          setTotal(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const chartData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [total.income, total.expenses],
        backgroundColor: ["rgb(94,234,212, 0.8)", "rgba(255, 99, 132, 0.7)"],
        borderColor: ["rgba(94,234,212, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={chartData} />
    </div>
  );
}
1;
