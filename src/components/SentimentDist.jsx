import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#C3E855", "#C9839D", "#6AC7F5"];

const SentimentDist = ({ props }) => {
  return (
    <div className="bg-white rounded-md shadow-md">
      <h1 className="mx-3 text-lg text-center my-1">Topic Distribution</h1>
      <PieChart width={300} height={300}>
        <Pie
          data={props.sentiment_dist}
          dataKey={"value"}
          outerRadius={70}
          label
        >
          {props.sentiment_dist.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            );
          })}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
export default SentimentDist;
