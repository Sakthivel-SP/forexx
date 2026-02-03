import { useEffect, useState } from "react";
import api from "../services/api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function Market() {
  const [data, setData] = useState([]);
  const [trendColor, setTrendColor] = useState("#22c55e"); // default green

  useEffect(() => {
    fetchChart();
    const interval = setInterval(fetchChart, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchChart = async () => {
    try {
      const res = await api.get("/api/live-chart");
      const chartData = res.data;

      setData(chartData);

      // 🔥 TREND LOGIC
      if (chartData.length > 1) {
        const first = chartData[0].value;
        const last = chartData[chartData.length - 1].value;

        if (last >= first) {
          setTrendColor("#22c55e"); // GREEN
        } else {
          setTrendColor("#ef4444"); // RED
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">
      <h2>Live Market Trend</h2>

      <div style={{ width: "100%", height: 600 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke={trendColor}   // 🔥 dynamic color
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* TREND LABEL */}
      <p style={{ marginTop: 10, color: trendColor }}>
        Trend: {trendColor === "#22c55e" ? "Bullish 📈" : "Bearish 📉"}
      </p>
    </div>
  );
}

export default Market;
