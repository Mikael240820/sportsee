import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import "./ChartPerformance.scss";

function ChartPerformance({ data }) {
  const kindMapping = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio'
  };

  const transformedData = data.data.map(item => ({
    subject: kindMapping[item.kind],
    value: item.value
  }));

  return (
    <div className="chart-performance">
      <RadarChart width={240} height={230} data={transformedData} margin={{ top: 20, left: 20, right: 20, bottom: 20 }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="value" stroke="transparent" fill="#FF0000" fillOpacity={0.8} />
      </RadarChart>
    </div>
  );
}

export default ChartPerformance;
