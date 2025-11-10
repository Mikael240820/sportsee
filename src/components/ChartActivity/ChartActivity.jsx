import { BarChart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import "./ChartActivity.scss";

function ChartActivity({ data }) {
  const chartData = data.sessions.map((session, index) => ({
    ...session,
    dayNumber: (index + 1)
  }));

  return (
    <div className="chart-activity">
      <BarChart width="100%" height={320} data={chartData}>
        <XAxis dataKey="dayNumber" axisLine={false} tickLine={false} />
        <YAxis orientation="right" axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" />
        <CartesianGrid stroke="#F5F5F5" />
        <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" barSize={10} radius={[4, 4, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" barSize={10} radius={[4, 4, 0, 0]} />
      </BarChart>
    </div>
  );
}

export default ChartActivity;
