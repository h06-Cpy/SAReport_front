import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TopicProportion = ({ props }) => {
  const numbers = [...Array(3).keys()]; // 토픽 개수 지정 필요
  const COLORS = ["#C3E855", "#C9839D", "#6AC7F5"];

  return (
    <div className="mx-auto bg-white rounded-md shadow-md">
      <h1 className="mx-3 text-lg text-center my-1">
        Topic Proportion over time
      </h1>
      <LineChart width={800} height={400} data={props.data}>
        <CartesianGrid strokeDashoffset={"3 3"} fill="white" />
        <XAxis dataKey={"date"} />
        <YAxis type="number" domain={[0, 1]} />
        <Legend />
        <Tooltip />
        {numbers.map((i) => {
          return (
            <Line
              type={"linear"}
              dataKey={`topic${i}`}
              key={`topic ${i}`}
              stroke={COLORS[i % COLORS.length]}
              strokeWidth={2}
            />
          );
        })}
      </LineChart>
    </div>
  );
};
export default TopicProportion;
