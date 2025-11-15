import { AreaChart, Area, XAxis } from "recharts";
import { useState } from "react";
import "./ChartSessions.scss";

function ChartSessions({ data }) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const [mouseX, setMouseX] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => setMouseX(null);

  return (
    <div className="chart-sessions" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <AreaChart width={240} height={220} data={data.sessions} margin={{ top: 40, right: 5, left: 5, bottom: 10 }}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} tickFormatter={value => days[(value - 1)]} />
        <Area type="basis" dataKey="sessionLength" stroke="#FFFFFF" fill="transparent" />
      </AreaChart>
      {mouseX !== null && <div className="chart-sessions--bg-hover" style={{ right: `calc(100% - ${mouseX}px)` }} />}
    </div>
  );
}

export default ChartSessions;
