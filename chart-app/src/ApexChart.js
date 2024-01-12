import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { auth, db } from "./firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const ApexChart = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const query = db.collection("data");
  const [snapshot, loading, error] = useCollection(query);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries([
      {
        name: "Desktops",
        data: snapshot?.docs.map((doc) => doc.data().value),
      },
    ]);
  }, [snapshot]);

  console.log(series);

  const [chartConfig] = useState({
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <div id="chart">
      {!snapshot ? (
        <h2>Loading</h2>
      ) : (
        <Chart
          options={chartConfig.options}
          series={series}
          type="line"
          height={350}
        />
      )}

      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default ApexChart;
