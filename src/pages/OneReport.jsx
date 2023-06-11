import CorrLine from "../components/CorrLine";
import KeywordBar from "../components/KeywordBar";
import SectionTitle from "../components/SectionTitle";
import SentimentDist from "../components/SentimentDist";
import Sidebar from "../components/Sidebar";
import TopicName from "../components/TopicName";
import TopicProportion from "../components/TopicProportion";
import WordCloud from "../components/WordCloud";
import SidebarElement from "../components/SideBarElement";

// useEffect(() => {
//   const datas = fetch("url").then((res) => {
//     return res.json();
//   });
//   const topics = datas.topics; //나중에 바꾸기
//   const topic_proprtions = datas[1];
//   const sentiment_corr = datas[2];
// }, []);

//서버에서 가져올 데이터들
const topics = [
  {
    topicname: "토픽이름1",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름2",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름3",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름4",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름5",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름6",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름7",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름8",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름9",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
  {
    topicname: "토픽이름10",
    score: 90,
    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],
    wordcloud: [
      {
        text: "ansol",
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
        <Sidebar props={{ datas: topics }} />
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 mx-auto">
          {/* <SectionTitle props={{ sectionId: 0 }} /> */}
          <>
            <SidebarElement props={{ topicname: "analysisPerTopic" }} />
          </>
          <SectionTitle props={{ sectionId: 1 }} />

          {/* <p className="mx-auto text-center font-bold text-4xl">
            토픽별 감성분석
          </p> */}
          {topics.map((topic, index) => {
            return (
              <div className="bg-almostgreen my-10" key={index}>
                <SidebarElement props={{ topicname: topic.topicname }} />
                <TopicName
                  props={{
                    isPositive: true,
                    topicname: topic.topicname,
                    score: topic.score,
                  }}
                />
                {/* <p className="mx-auto text-center font-bold text-2xl my-3">
                  {topic.topicname}: {topic.score}
                </p> */}
                <div>
                  <div className="flex flex-row items-center justify-around my-3">
                    <SentimentDist props={{ sentiment_dist: topic.sentiment_dist }} />
                    <div>
                      <WordCloud props={{ data: topic.wordcloud }} />
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-around my-3">
                    <KeywordBar props={{ data: topic.positive_words, isPositive: true }} />
                    <KeywordBar props={{ data: topic.negative_words, isPositive: false }} />
                  </div>
                </div>
              </div>
            );
          })}
          <>
            <SidebarElement props={{ topicname: "totalTopicAnalysis" }} />
          </>
          <SectionTitle props={{ sectionId: 2 }} />
          <div className="mx-auto flex justify-center my-3"></div>
          <div className="bg-almostgreen mx-auto flex justify-center my-3">
            <TopicProportion props={{ data: topic_proprtions }} />
          </div>
          <div className="bg-almostgreen mx-auto flex justify-center my-3">
            <CorrLine props={{ data: sentiment_corr }} />
          </div>
        </main>
      </div>
    </>
  );
};

export default OneReport;
