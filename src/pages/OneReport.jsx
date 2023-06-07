import CorrLine from "../components/CorrLine";
import KeywordBar from "../components/KeywordBar";
import SectionTitle from "../components/SectionTitle";
import SentimentDist from "../components/SentimentDist";
import Sidebar from "../components/Sidebar";
import TopicName from "../components/TopicName";
import TopicProportion from "../components/TopicProportion";
import WordCloud from "../components/WordCloud";

//서버에서 가져올 데이터들
const topics = [
  {
    topicname: "토픽이름",
    score: 90,
    sentiment_dist: [
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "sol",
        value: 100,
      },
      {
        text: "youngjun",
        value: 100,
      },
      {
        text: "jiyun",
        value: 100,
      },
      {
        text: "hyunwook",
        value: 100,
      },
      {
        text: "joongstone",
        value: 100,
      },
    ],
    positive_words: [
      { name: "quick", value: 90 },
      { name: "nice", value: 80 },
      { name: "good", value: 70 },
    ],
    negative_words: [
      { name: "bad", value: 90 },
      { name: "slow", value: 80 },
      { name: "design", value: 70 },
    ],
  },
];

const topic_proprtions = [
  { date: "5-23", topic0: 0.2, topic1: 0.6, topic2: 0.2 }, //토픽 3개 가정
  { date: "5-24", topic0: 0.1, topic1: 0.4, topic2: 0.5 },
  { date: "5-25", topic0: 0.2, topic1: 0.1, topic2: 0.7 },
  { date: "5-26", topic0: 0.7, topic1: 0.2, topic2: 0.1 },
  { date: "5-27", topic0: 0.8, topic1: 0.1, topic2: 0.1 },
  { date: "5-28", topic0: 0.3, topic1: 0.4, topic2: 0.3 },
];

const sentiment_corr = [
  { date: "5-23", sentiment: 20000, index: 14000 },
  { date: "5-24", sentiment: 16000, index: 13000 },
  { date: "5-25", sentiment: 17000, index: 19000 },
  { date: "5-26", sentiment: 12000, index: 20000 },
  { date: "5-27", sentiment: 13000, index: 18000 },
  { date: "5-28", sentiment: 13000, index: 20000 },
];

const OneReport = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between">
        <Sidebar />
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 mx-auto">
          <SectionTitle props={{ sectionId: 0 }} />
          <SectionTitle props={{ sectionId: 1 }} />
          {topics.map((topic) => {
            return (
              <>
                <TopicName
                  props={{
                    isPositive: true,
                    topicname: topic.topicname,
                    score: topic.score,
                  }}
                />
                <div className="flex flex-row items-center justify-between my-3">
                  <SentimentDist props={{ sentiment_dist: topic.sentiment_dist }} />
                  <div>
                    <WordCloud props={{ data: topic.wordcloud }} />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between my-3">
                  <KeywordBar props={{ data: topic.positive_words, isPositive: true }} />
                  <KeywordBar props={{ data: topic.negative_words, isPositive: false }} />
                </div>
              </>
            );
          })}

          <SectionTitle props={{ sectionId: 2 }} />
          <div className="mx-auto flex justify-center my-3">
            <TopicProportion props={{ data: topic_proprtions }} />
          </div>
          <div className="mx-auto flex justify-center my-3">
            <CorrLine props={{ data: sentiment_corr }} />
          </div>
        </main>
      </div>
    </>
  );
};

export default OneReport;
