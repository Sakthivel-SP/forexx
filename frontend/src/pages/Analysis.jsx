import { useEffect, useState } from "react";
import api from "../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Analysis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = () => {
      api.get("/api/live-chart").then((res) => {
        // fake correlation data
        const formatted = res.data.map((item) => ({
          pair: item.name,
          positive: Math.floor(Math.random() * 100),
          negative: Math.floor(Math.random() * 100),
        }));
        setData(formatted);
      });
    };

    loadData();
    const interval = setInterval(loadData, 4000); // live every 4 sec
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="page">
      <h2>FOREX ANALYSIS</h2>

      <ResponsiveContainer width="100%" height={600}>
        <LineChart data={data}>
          <XAxis dataKey="pair" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="positive" name="Positive Correlation" />
          <Line type="monotone" dataKey="negative" name="Negative Correlation" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Analysis;
