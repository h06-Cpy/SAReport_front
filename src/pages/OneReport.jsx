import KeywordBar from "../components/KeywordBar";
import SectionTitle from "../components/SectionTitle";
import SentimentDist from "../components/SentimentDist";
import Sidebar from "../components/Sidebar";
import TopicName from "../components/TopicName";

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
    wordcloud: [],
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

const OneReport = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <Sidebar />
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
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
                  <div className="flex flex-row items-center justify-between">
                    <SentimentDist
                      props={{ sentiment_dist: topic.sentiment_dist }}
                    />
                    <div></div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <KeywordBar
                      props={{ data: topic.positive_words, isPositive: true }}
                    />
                    <KeywordBar
                      props={{ data: topic.negative_words, isPositive: false }}
                    />
                  </div>
                </>
              );
            })}

            <SectionTitle props={{ sectionId: 2 }} />
          </main>
        </div>
      </div>
    </>
  );
};

export default OneReport;
