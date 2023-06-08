import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const TweetDist = ({ props }) => {
  return (
    <div className="bg-white rounded-md shadow-md px-2">
      <h1 className="mx-3 text-lg text-center my-1">Tweet Distribution</h1>
      <BarChart width={300} height={300} data={props.data} layout="vertical">
        <YAxis type="category" dataKey={"topicname"} />
        <XAxis type="number" />
        <Tooltip cursor={{ fill: "none" }} />
        <Bar dataKey={"value"} fill={"#C3E855"} />
      </BarChart>
    </div>
  );
};
export default TweetDist;
