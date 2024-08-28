import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import './HomePage'; // Import the CSS file

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const RealTimeStatus = () => {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 30, 40, 50],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  });

  // Simulate data update with increasing values
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newData = prevData.datasets[0].data.map(value => value + 5);
        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newData,
            },
          ],
        };
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const options = {
    animation: {
      duration: 2000, // Animation duration in milliseconds
      easing: 'easeInOutQuad', // Animation easing function
      onProgress: (animation) => {
        // Function to zoom out the chart during animation
        const chart = animation.chart;
        const { ctx, width, height } = chart;
        ctx.clearRect(0, 0, width, height);
        chart.draw();
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
        },
      },
    },
  };

  return (
    <div className="real-time-status">
      <h2>Sales Data</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default RealTimeStatus;
