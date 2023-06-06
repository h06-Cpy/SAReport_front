import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#C3E855", "#C9839D", "#6AC7F5"];

const SentimentDist = ({ props }) => {
  return (
    <PieChart width={300} height={300}>
      <Pie data={props.sentiment_dist} dataKey={"value"} outerRadius={70} label>
        {props.sentiment_dist.map((entry, index) => {
          return (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          );
        })}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};
export default SentimentDist;
