import { BarChart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import "./ChartActivity.scss";

function ChartActivity({ data }) {
  const chartData = data.sessions.map((session) => ({
    ...session,
    dayNumber: parseInt(session.day.split('-')[2])
  }));

  const customTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <ul className="chart-activity__tooltip">
          <li>{`${payload[0].value}kg`}</li>
          <li>{`${payload[1].value}Kcal`}</li>
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="chart-activity">
      <BarChart width="100%" height={320} data={chartData}>
        <XAxis dataKey="dayNumber" axisLine={false} tickLine={false} />
        <YAxis orientation="right" axisLine={false} tickLine={false} />
        <Tooltip content={customTooltip} />
        <Legend verticalAlign="top" align="right" iconType="circle" />
        <CartesianGrid stroke="#DFD6D6" strokeDasharray="2 2" vertical={false} />
        <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" barSize={10} radius={[4, 4, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" barSize={10} radius={[4, 4, 0, 0]} />
      </BarChart>
    </div>
  );
}

export default ChartActivity;
