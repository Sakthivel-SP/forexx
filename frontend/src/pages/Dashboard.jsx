import { useEffect, useState } from "react";
import api from "../services/api";
import LiveBarChart from "../components/LiveBarChart";

function Dashboard() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadData = () => {
      api.get("/api/live-chart").then(res => setChartData(res.data));
    };

    loadData();
    const interval = setInterval(loadData, 3000); // LIVE every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h2>DASHBOARD</h2>

      <div className="cards">
        <div className="card blue">Pairs<br/><b>300</b></div>
        <div className="card orange">Markets<br/><b>12</b></div>
        <div className="card green">Liquidity<br/><b>High</b></div>
        <div className="card red">Alerts<br/><b>42</b></div>
      </div>

      <LiveBarChart data={chartData} />
    </div>
  );
}

export default Dashboard;
