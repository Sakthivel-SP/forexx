import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function LiveBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={530}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default LiveBarChart;
