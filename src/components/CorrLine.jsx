import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CorrLine = ({ props }) => {
  return (
    <div className="mx-auto bg-white rounded-md shadow-md">
      <h1 className="mx-3 text-lg text-center my-1">
        Correlation between Sentiment Score and Index
      </h1>
      <LineChart width={800} height={400} data={props.data}>
        <XAxis dataKey={"date"} />
        <YAxis type="number" domain={["dataMin", "dataMax"]} />
        <Legend />
        <Tooltip />

        <Line
          type={"linear"}
          dataKey={"sentiment"}
          stroke={"#6AC7F5"}
          strokeWidth={2}
        />

        <Line
          type={"linear"}
          dataKey={"index"}
          stroke={"#C9839D"}
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};
export default CorrLine;
