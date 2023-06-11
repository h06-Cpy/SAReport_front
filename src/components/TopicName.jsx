const TopicName = ({ props }) => {
  if (props.isPositive === true) {
    return (
      <div className="bg-lightlightgreen mx-auto rounded-2xl w-1/4 h-10 flex flex-row items-center my-3">
        <p className="text-2xl text-white font-bold basis-4/5 text-center border-r-white border-r-2">
          {props.topicname}
        </p>
        <p className="text-2xl text-white font-bold basis-1/5 text-center">{props.score}</p>
      </div>
    );
  }
  return (
    <div className="bg-sweetpotato mx-auto rounded-2xl w-1/4 h-10 flex flex-row items-center my-3">
      <p className="text-2xl text-white font-bold basis-4/5 text-center border-r-white">{props.topicname}</p>
      <p className="text-2xl text-white font-bold basis-1/5 text-center">{props.score}</p>
    </div>
  );
};
export default TopicName;
