import CorrLine from "./CorrLine";
import KeywordBar from "./KeywordBar";
import SentimentDist from "./SentimentDist";
import SidebarElement from "./SideBarElement";
import TopicProportion from "./TopicProportion";
import WordCloud from "./WordCloud";

const MainContent = ({ props }) => {
  const { total_topic, topics } = props;

  return (
    <main
      role="main"
      className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 mx-auto bg-bgcolor"
    >
      <SidebarElement props={{ section_name: "total_topic_analysis" }} />
      <p className="mx-3 my-3 py-2 flex items-center  font-bold text-3xl border-b-2">
        1. 전체 토픽 분석
      </p>
      {/* <SectionTitle props={{ sectionId: 0 }} /> */}

      <div className=" mx-auto flex justify-center my-3">
        <SentimentDist props={{ sentiment_dist: total_topic.sentiment_dist }} />
      </div>

      <div className=" mx-auto flex justify-center my-3">
        <TopicProportion props={{ data: total_topic.topic_proportions }} />
      </div>
      <div className="mx-auto w-2/3 bg-white rounded-md shadow-md flex justify-center flex-col">
        <h1 className="text-center font-bold text-lg my-3">
          전체 토픽 분석 결과
        </h1>
        <p className="text-justify break-all px-10">
          본 보고서는 트위터에서 google, apple, amazon, microsoft, nvidia 등
          유명 IT 기업에 관한 트윗을 수집하여 감성 분석을 진행하였다. 5.23~6.8
          동안의 총 tweet_number개의 트윗 중 긍정 트윗은{" "}
          <b>{total_topic.sentiment_dist[0].value}%</b>, 부정 트윗은{" "}
          <b>{total_topic.sentiment_dist[1].value}%</b>, 중립 트윗은{" "}
          <b>{total_topic.sentiment_dist[2].value}%</b>로 나타났다.{" "}
          <b>일자별 토픽 분포</b>를 살펴보면 5.23에는 ~~ 긍정 트윗 비율이 가장
          높은 토픽은 ~~ 부정 트윗 비율이 가장 높은 토픽은 ~~ snp500,
          nasdaq100과 가장 상관관계가 높은 토픽은 ~~, 낮은 토픽은 ~~
        </p>
      </div>

      <SidebarElement props={{ section_name: "analysisPerTopic" }} />
      {/* <SectionTitle props={{ sectionId: 1 }} /> */}
      <p className="mx-3 my-3 py-2 flex items-center  font-bold text-3xl border-b-2">
        2. 토픽별 감성 분석
      </p>
      {topics.map((topic, index) => {
        return (
          <div className=" my-3" key={index}>
            <SidebarElement props={{ section_name: topic.topic_name }} />
            {/* <TopicName
                props={{
                  isPositive: true,
                  topic_name: topic.topic_name,
                  score: topic.score,
                }}
              /> */}
            <p className="mx-3 my-3 py-2 flex items-center font-bold text-2xl">
              2.{index + 1} {topic.topic_name}
            </p>
            <div>
              <div className="flex flex-row items-center justify-around my-3">
                <SentimentDist
                  props={{ sentiment_dist: topic.sentiment_dist }}
                />
                <div>
                  <WordCloud props={{ data: topic.topic_words }} />
                </div>
              </div>

              <div className="flex flex-row items-center justify-around my-3">
                <KeywordBar
                  props={{ data: topic.positive_words, isPositive: true }}
                />
                <KeywordBar
                  props={{ data: topic.negative_words, isPositive: false }}
                />
              </div>
              <div className=" mx-auto flex justify-center my-3">
                <CorrLine props={{ data: topic.sentiment_corr }} />
              </div>
              <div className="mx-auto flex justify-center my-3">
                <table className="table-auto">
                  <thead>
                    <th className="border">Index\window</th>
                    {topic.correlations.refer_days.map((day, index) => {
                      return (
                        <th key={index} className="border">
                          {day}
                        </th>
                      );
                    })}
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">S&P500</td>
                      {topic.correlations.snp500.map((corr, index) => {
                        return (
                          <td key={index} className="border">
                            {corr}
                          </td>
                        );
                      })}
                    </tr>
                    <tr>
                      <td className="border">NASDAQ100</td>
                      {topic.correlations.nasdaq100.map((corr, index) => {
                        return (
                          <td key={index} className="border">
                            {corr}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default MainContent;
