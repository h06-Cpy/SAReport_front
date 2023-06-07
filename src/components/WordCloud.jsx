import ReactWordcloud from "react-wordcloud";

const SimpleWordcloud = ({ props }) => {
  return (
    <div className="bg-white rounded-md shadow-md py-1">
      <h1 className="mx-3 text-lg text-center">WordCloud</h1>
      <ReactWordcloud words={props.data} />
    </div>
  );
};

export default SimpleWordcloud;
