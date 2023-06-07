import ReactWordcloud from "react-wordcloud";

const SimpleWordcloud = ({ props }) => {
  return <ReactWordcloud words={props.data} />;
};

export default SimpleWordcloud;
