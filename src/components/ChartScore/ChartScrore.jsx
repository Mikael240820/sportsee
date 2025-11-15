import { Pie, PieChart } from "recharts";
import "./ChartScore.scss";

function ChartScore({ data }) {
  const score = data;
  const pieData = [
    { value: score, fill: '#FF0000' },
    { value: (1 - score), fill: '#FBFBFB' }
  ];

  return (
    <div className="chart-score">
      <PieChart width={240} height={220}>
        <circle cx="120" cy="110" r="93.5" fill="#FFFFFF" />
        <Pie data={pieData} innerRadius="85%" outerRadius="100%" cornerRadius="50%" paddingAngle={5} startAngle={90} />
        <text x="50%" y="43%" textAnchor="middle" dominantBaseline="middle" fontSize="30" fontWeight="bold" fill="#282D30">
          {Math.round(score * 100)}%
        </text>
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="15" fill="#74798C">
          de votre
        </text>
        <text x="50%" y="65%" textAnchor="middle" dominantBaseline="middle" fontSize="15" fill="#74798C">
          objectif
        </text>
      </PieChart>
    </div>
  );
}

export default ChartScore;
