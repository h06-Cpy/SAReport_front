import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TopicProportion = ({ props }) => {
  const numbers = [...Array(10).keys()]; // 토픽 개수 지정 필요
  const COLORS = ["#C3E855", "#C9839D", "#6AC7F5"];

  const customToolTip = ({ active, payload, label }) => {
    let sorted_payload;
    if (active && payload && payload.length) {
      sorted_payload = payload.sort((a, b) => b.value - a.value);

      return (
        <div className="custom-tooltip bg-white rounded-lg shadow-md py-2 px-2">
          {sorted_payload.map((topic, index) => {
            return (
              <p
                key={index}
                style={{ color: topic.stroke }}
              >{`${topic.dataKey}: ${topic.value}`}</p>
            );
          })}
        </div>
      );
    }
  };
  return (
    <div className="mx-auto bg-white rounded-md shadow-md">
      <h1 className="mx-3 text-lg text-center my-1 pt-2">날짜별 토픽 분포</h1>
      <ResponsiveContainer height={400}>
        <LineChart width={800} height={400} data={props.data}>
          <XAxis dataKey={"date"} />
          <YAxis type="number" domain={["dataMin", "dataMax"]} />
          <Legend />
          <Tooltip content={customToolTip} />
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
      </ResponsiveContainer>
    </div>
  );
};
export default TopicProportion;
