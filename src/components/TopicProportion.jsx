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
  const numbers = [...Array(10).keys()]; // 토픽 개수 지정 필요
  const COLORS = [
    // "#FED78A",
    "#C3E855",
    "#C9839D",
    "#6AC7F5",
    // "#E2AA32",
    // "#FB962D",
    // "#dc143c",
    // "#000000",
    // "#d024db",
    // "#FFE66D",
    // "#d81f27",
    // "#134a90",
    // "#f15d51",
    // "#0092c3",
    // "#f7a396",
    // "#89cadd",
    // "#fee2db",
    // "#dde9ed",
  ];

  return (
    <div className="mx-auto bg-white rounded-md shadow-md">
      <h1 className="mx-3 text-lg text-center my-1">
        Topic Proportion over time
      </h1>
      <LineChart width={800} height={400} data={props.data}>
        <XAxis dataKey={"date"} />
        <YAxis type="number" domain={["dataMin", "dataMax"]} />
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
