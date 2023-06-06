import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const KeywordBar = ({ props }) => {
  return (
    <BarChart width={300} height={300} data={props.data}>
      <XAxis dataKey={"name"} />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey={"value"}
        fill={props.isPositive === true ? "#C3E855" : "#C9839D"}
      />
    </BarChart>
  );
};
export default KeywordBar;
