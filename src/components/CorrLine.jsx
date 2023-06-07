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
    <div className="mx-auto">
      <LineChart width={800} height={400} data={props.data}>
        <CartesianGrid strokeDashoffset={"3 3"} fill="white" stroke="#AAAAAA" />
        <XAxis dataKey={"date"} />
        <YAxis type="number" domain={["dataMin", "dataMax"]} />
        <Legend />
        <Tooltip />

        <Line type={"monotone"} dataKey={"sentiment"} stroke={"#6AC7F5"} />

        <Line type={"monotone"} dataKey={"index"} stroke={"#C9839D"} />
      </LineChart>
    </div>
  );
};
export default CorrLine;
