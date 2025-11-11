import { AreaChart, Area, XAxis } from "recharts";
import "./ChartSessions.scss";

function ChartSessions({ data }) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  
  return (
    <div className="chart-sessions">
      <AreaChart width={240} height={230} data={data.sessions} margin={{ top: 50, right: 5, left: 5, bottom: 10 }}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} tickFormatter={value => days[(value - 1)]} />
        <Area type="basis" dataKey="sessionLength" stroke="#FF9494" fill="transparent" />
      </AreaChart>
    </div>
  );
}

export default ChartSessions;
